# Setting Up Cloudflare Tunnel for Your Agar.io Server

## Quick Start (5 minutes)

### Step 1: Install cloudflared

**On Windows:**
1. Go to: https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/
2. Download the `.msi` installer for Windows (64-bit recommended)
3. Run the installer and follow the prompts
4. Open a new Command Prompt or PowerShell to use `cloudflared`

**Alternative (if you have Chocolatey):**
```
choco install cloudflared
```

---

### Step 2: Start Your Game Server

Open Command Prompt/PowerShell in your `private-server` folder:

```bash
node server.js
```

You should see:
```
  Agar.io Private Server running at:
  -> http://localhost:3000
```

**Leave this terminal running.**

---

### Step 3: Create the Cloudflare Tunnel

Open a **new** Command Prompt/PowerShell window (don't close the first one) and run:

```bash
cloudflared tunnel --url http://localhost:3000
```

Wait for output like this:
```
Your quick Tunnel has been created! Visit it at:
https://some-random-words.trycloudflare.com
```

**That URL is your public game server.** Copy it and share with friends.

---

## How It Works

```
Your Computer (localhost:3000)
         ↓
    cloudflared
         ↓
  Cloudflare Network (free)
         ↓
Your Friend's Browser (HTTPS link)
```

- Cloudflare acts as a secure middleman
- Your machine never opens a port to the internet directly
- Friends can play from anywhere using the public link
- Includes DDoS protection for free

---

## Playing the Game

1. **From your machine:** Visit `http://localhost:3000` directly (fastest)
2. **From other people:** Give them the `https://...trycloudflare.com` URL
3. Enter your name and choose a skin
4. Play!

---

## Making It Permanent (Optional)

The quick tunnel URL changes every time you restart `cloudflared`. For a permanent subdomain on your own domain:

```bash
cloudflared tunnel login
cloudflared tunnel create agario
cloudflared tunnel route dns agario play.yourdomain.com
cloudflared tunnel run agario
```

Then access it at `https://play.yourdomain.com` forever.

---

## Troubleshooting

**"cloudflared: command not found"**
- Restart your terminal after installing
- Or use the full path to the executable: `C:\Program Files\Cloudflare\cloudflared\cloudflared.exe tunnel --url http://localhost:3000`

**"Connection refused"**
- Make sure `node server.js` is still running in the first terminal
- Server should print "running at http://localhost:3000"

**Friends can't connect**
- They need the exact URL printed by cloudflared (starts with `https://`)
- Check that the URL is accessible by visiting it yourself first

---

## Performance Notes

With your optimizations, the server should run at:
- 29.7 ticks/sec (target 30)
- 19.5 MB heap usage
- 60 bots
- Smooth gameplay through Cloudflare tunnel

---

## When You're Done

Press `Ctrl+C` in both terminal windows to stop the server and tunnel.

Next time you want to play, just:
1. Run `node server.js` in terminal 1
2. Run `cloudflared tunnel --url http://localhost:3000` in terminal 2
3. Share the new URL with friends
