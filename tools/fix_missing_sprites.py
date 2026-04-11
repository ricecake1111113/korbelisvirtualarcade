#!/usr/bin/env python3
"""
fix_missing_sprites.py — Generate transparent 1x1 PNG placeholders for missing
Dumb Ways to Die sprite files, and create symlinks for doubled img/img/ paths.

Usage:
    python fix_missing_sprites.py <server_log_file>
    python fix_missing_sprites.py              # reads from stdin

The script:
  1. Parses your Python HTTP server log for 404 responses
  2. Extracts the unique missing file paths
  3. For paths with a doubled "img/img/" segment, creates a symlink pointing
     to the real file one directory up (if it exists)
  4. For everything else, creates a transparent 1×1 pixel PNG placeholder

Run this from the root of your web server (the parent of korbelisvirtualarcade/).
"""

import os
import re
import struct
import sys
import zlib
from pathlib import Path

# ── Minimal transparent 1×1 PNG ──────────────────────────────────────────────
def make_transparent_png():
    """Return bytes for a valid 1×1 RGBA transparent PNG."""
    def chunk(chunk_type, data):
        c = chunk_type + data
        crc = struct.pack(">I", zlib.crc32(c) & 0xFFFFFFFF)
        return struct.pack(">I", len(data)) + c + crc

    signature = b"\x89PNG\r\n\x1a\n"
    ihdr_data = struct.pack(">IIBBBBB", 1, 1, 8, 6, 0, 0, 0)  # 1×1, RGBA
    ihdr = chunk(b"IHDR", ihdr_data)
    raw_row = b"\x00" + b"\x00\x00\x00\x00"  # filter byte + transparent pixel
    idat = chunk(b"IDAT", zlib.compress(raw_row))
    iend = chunk(b"IEND", b"")
    return signature + ihdr + idat + iend

TRANSPARENT_PNG = make_transparent_png()

# ── Log parsing ──────────────────────────────────────────────────────────────
def extract_404_paths(log_text):
    """Pull unique paths that got a 404 from the server log."""
    pattern = r'"GET\s+(/\S+?)\s+HTTP/[\d.]+"\s+404'
    matches = re.findall(pattern, log_text)
    # Deduplicate, keep sorted
    return sorted(set(matches))

# ── Main logic ───────────────────────────────────────────────────────────────
def fix_missing_files(log_text, base_dir="."):
    """Create placeholders / symlinks for every 404'd sprite path."""
    paths = extract_404_paths(log_text)
    if not paths:
        print("No 404 paths found in the log.")
        return

    # Filter to only .png files under the dumb-ways-to-die assets
    sprite_paths = [p for p in paths if p.endswith(".png")]

    created = 0
    linked = 0
    skipped = 0

    for url_path in sprite_paths:
        # Convert URL path to a filesystem path relative to base_dir
        # Strip leading slash so os.path.join works
        rel = url_path.lstrip("/")
        full = os.path.join(base_dir, rel)

        if os.path.exists(full):
            skipped += 1
            continue

        # Check for the img/img/ doubling pattern — if the file exists without
        # the extra "img/" level, create a symlink instead of a placeholder
        if "/img/img/" in rel:
            real_rel = rel.replace("/img/img/", "/img/", 1)
            real_full = os.path.join(base_dir, real_rel)
            if os.path.exists(real_full):
                os.makedirs(os.path.dirname(full), exist_ok=True)
                # Compute relative symlink target
                target = os.path.relpath(real_full, os.path.dirname(full))
                try:
                    os.symlink(target, full)
                    linked += 1
                    print(f"  LINK  {rel}  ->  {target}")
                    continue
                except OSError:
                    pass  # Fall through to placeholder

        # Create a transparent 1×1 PNG placeholder
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "wb") as f:
            f.write(TRANSPARENT_PNG)
        created += 1
        print(f"  NEW   {rel}")

    print(f"\nDone!  {created} placeholders created, {linked} symlinks, {skipped} already existed.")

# ── Entry point ──────────────────────────────────────────────────────────────
if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] != "-":
        log_file = sys.argv[1]
        with open(log_file, "r") as f:
            log_text = f.read()
    else:
        print("Reading server log from stdin (paste log, then Ctrl+D)...")
        log_text = sys.stdin.read()

    # Determine base directory: look for korbelisvirtualarcade/ nearby
    cwd = os.getcwd()
    if os.path.isdir(os.path.join(cwd, "korbelisvirtualarcade")):
        base = cwd
    elif "korbelisvirtualarcade" in cwd:
        # Walk up until we find the parent of korbelisvirtualarcade
        base = cwd
        while base and not os.path.isdir(os.path.join(base, "korbelisvirtualarcade")):
            parent = os.path.dirname(base)
            if parent == base:
                break
            base = parent
    else:
        base = cwd

    print(f"Base directory: {base}")
    print(f"Looking for missing sprites...\n")
    fix_missing_files(log_text, base)
