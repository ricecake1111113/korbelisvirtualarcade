#!/bin/bash
BASE_URL="https://3245030328269184761.playables.usercontent.goog/v/assets/StreamingAssets/AssetBundles/WebGL"

# List of asset bundles to download
BUNDLES=(
  "audio_ui"
  "audio_weapons"
  "dynamic_ui"
  "fonts"
  "localisation"
  "music"
  "planets"
  "scene_planetsmash"
  "scene_systemsmash"
  "ui"
  "weapons"
)

echo "Downloading AssetBundles from YouTube CDN with auth headers..."
for bundle in "${BUNDLES[@]}"; do
  echo "Downloading $bundle..."
  curl -L --progress-bar -o "$bundle.tmp" \
    -H "sec-ch-ua-platform: \"Windows\"" \
    -H "Referer: https://3245030328269184761.playables.usercontent.goog/v/assets/index.html" \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36" \
    -H "sec-ch-ua: \"Chromium\";v=\"146\", \"Not-A.Brand\";v=\"24\", \"Google Chrome\";v=\"146\"" \
    -H "sec-ch-ua-mobile: ?0" \
    "$BASE_URL/$bundle" 2>&1
  
  # Check if download succeeded (file size > 10KB)
  size=$(stat -c%s "$bundle.tmp" 2>/dev/null || echo 0)
  if [ "$size" -gt 10000 ]; then
    mv "$bundle.tmp" "$bundle"
    echo "  ✓ $bundle ($size bytes)"
  else
    echo "  ✗ Failed: $bundle (got $size bytes)"
    rm -f "$bundle.tmp" 2>/dev/null
  fi
done

echo "Done! Checking results..."
ls -lh | grep -E "audio_ui|audio_weapons|dynamic_ui|fonts|localisation|music|planets|ui|weapons|scene_"
