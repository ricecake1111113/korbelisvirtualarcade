# Agar.io Custom Private Server

A custom implementation of Agar.io with advanced bot AI, multiplayer support, and extensive server configuration options.

## Features

- **Multiplayer Gameplay**: Real-time cell eating, splitting, and merging mechanics
- **Advanced Bot AI**: Intelligent bots with strategic decision-making, prey prediction, and threat awareness
- **Teams Mode**: Play in teams with collaborative mechanics
- **Customizable Settings**: Adjust difficulty, spawn mass, food count, viruses, map size, and more
- **Spectate Mode**: Watch other players with interactive leaderboard following
- **Skin System**: Apply custom textures to your cells
- **GitHub Pages Support**: Host the frontend on GitHub Pages while connecting to your own backend server

## Quick Start

### Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser to `http://localhost:3000`

### GitHub Pages Deployment

1. Push your repository to GitHub
2. The GitHub Actions workflow in `.github/workflows/pages.yml` will automatically deploy the frontend to GitHub Pages
3. Access your game at `https://YOUR_USERNAME.github.io/REPO_NAME`

#### Connecting to Your Server from GitHub Pages

By default, the frontend will connect to `localhost:3000`. To connect to your own server:

1. Host your Node.js server somewhere (e.g., AWS, Heroku, your own machine)
2. Ensure CORS is enabled for WebSocket connections
3. Visit the GitHub Pages URL with the server parameter:
   ```
   https://YOUR_USERNAME.github.io/REPO_NAME/?server=ws://YOUR_SERVER_IP:YOUR_PORT
   ```

For HTTPS sites, use WSS (WebSocket Secure):
```
https://YOUR_USERNAME.github.io/REPO_NAME/?server=wss://YOUR_SERVER_IP:YOUR_PORT
```

## Game Mechanics

### Eating
- Larger cells eat smaller cells
- Collision detection uses multiple methods for reliability
- Coverage-based and overlap-based eating for split cells

### Splitting
- Press SPACE to split your cell into two
- Splits travel in the direction of your cursor
- Split cells take time to merge back together
- Split dynamics prevent teleporting across the map

### Ejecting Mass
- Press W to eject a pellet in the direction of your cursor
- Useful for feeding teammates or creating diversions

### Viruses
- Touching a virus as a small cell will pop it, gaining mass
- Large cells can consume viruses
- Viruses act as obstacles in the game world

## Bot AI Improvements

The bot AI has been significantly enhanced with:

- **Threat Awareness**: Bots detect and retreat from dangerous opponents
- **Strategic Splitting**: Bots decide when to split for kills, accounting for nearby threats
- **Prey Prediction**: Bots lead their targets by predicting escape directions
- **Food Optimization**: Bots avoid food near larger enemies and near viruses
- **Merge Awareness**: Bots aim at their cell centroids when about to merge
- **Virus Avoidance**: Bots check if viruses block their escape paths and swerve around them

## Configuration

### Server Settings

Key configuration options in `config.json` or runtime:

- `botCount`: Number of bots (0-200+)
- `maxCells`: Maximum cells per player (default: 16)
- `startMass`: Initial cell mass (default: 10)
- `maxFood`: Maximum food entities on map
- `maxViruses`: Maximum virus entities
- `gameMode`: 'ffa', 'teams', or 'experimental'
- `disableBotRespawn`: When true, bots do not respawn after being eaten
- `botThinkInterval`: How often bots recalculate strategy (lower = smarter)

### Client Settings

Available in the game settings panel:

- **Hide Skins**: Disable textures to save memory
- **Show Minimap**: Display map overview
- **Show Team Chart**: Display pie chart of team control
- **Grid Size**: Adjust background grid density
- **Render Distance**: Performance tuning for distant entities
- **FPS Cap**: Limit frame rate to save CPU

## Architecture

- **Frontend**: Single-page application (HTML/CSS/JS) in `public/index.html`
- **Backend**: Node.js WebSocket server with game simulation
- **Bot AI**: Sophisticated decision-making system in `Bot.js`
- **Game Physics**: Cell collision, merging, and velocity simulation

## Development

### File Structure

```
private-server/
├── public/
│   └── index.html        # Complete frontend (HTML + CSS + JS)
├── game/
│   ├── Game.js           # Main game logic and physics
│   ├── Bot.js            # Bot AI system
│   └── Cell.js           # Cell entity class
└── server.js             # Express + WebSocket server
```

### Modifying Bot Behavior

Edit `game/Bot.js` in the `think()` function to adjust bot strategy:

- `scanRange`: How far bots can see (default: 900+)
- `baseThinkInterval`: Decision frequency (default: 0.12 seconds)
- Various personality traits: `aggression`, `caution`, `boldness`, etc.

### Collision Detection Tweaks

Modify these in `Game.js` `checkCollisions()`:

- `cellEatCoverageRatio`: How much coverage needed to eat a cell (default: 0.75)
- `cellEatCenterInsideRatio`: How deep the prey center must be inside (default: 0.42)
- `deepOverlap` threshold for overlap-based eating (default: 0.45 × otherRadius)

## Performance Tips

1. Reduce `botCount` if experiencing lag
2. Enable "Hide Skins" in client settings
3. Increase "Render Distance" if fps drops
4. Use smaller map sizes for more action
5. Reduce `maxFood` and `maxViruses` for better performance

## Troubleshooting

### WebSocket connection fails
- Ensure your server is running and accessible
- Check firewall settings for the WebSocket port
- If using GitHub Pages, make sure to use the `?server=` parameter

### Game feels laggy
- Check server CPU usage
- Reduce bot count
- Increase render distance setting
- Enable FPS cap to limit client-side rendering

### Skins not loading
- Ensure `/skins/` directory exists on server
- Check browser console for 404 errors
- Verify skin filenames match in the system

## License

MIT - Feel free to modify and distribute
