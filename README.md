# Cabinet Design Pro

Professional cabinet design application MVP with 3D visualization, parametric design capabilities, and intuitive navigation.

![Cabinet Design Pro](https://img.shields.io/badge/Status-MVP-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)

---

## 🚀 **NEW USER? START HERE!**

**👉 [See QUICKSTART.md for a complete beginner-friendly guide](./QUICKSTART.md)**

Or follow these 3 quick steps:

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the application**:
   ```bash
   npm run dev
   ```

3. **Open in your browser**: Go to **http://localhost:5173**

---

## Features

- **3D Visualization**: Real-time 3D rendering with Three.js and React Three Fiber
- **Parametric Design**: Global parameters that automatically update all cabinets
- **Multiple Cabinet Types**: Base, Upper, and Tall cabinets with customizable dimensions
- **Intuitive Navigation**: Pan, zoom, and orbit controls with preset views
- **Professional UI**: Clean, modern interface with Tailwind CSS
- **Persistent Storage**: Save and load projects using localStorage
- **Keyboard Shortcuts**: Efficient workflow with hotkeys

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **3D Engine**: Three.js + React Three Fiber + Drei
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- **Node.js 18+** and **npm** (comes with Node.js)
  - Check if installed: `node --version` and `npm --version`
  - Download from: [nodejs.org](https://nodejs.org/)

### Step-by-Step Installation & Running

#### 1️⃣ Navigate to the project directory
```bash
cd cabinet-design-pro
```

#### 2️⃣ Install dependencies (first time only)
```bash
npm install
```
This will download all required packages (~50MB). Takes about 1-2 minutes.

#### 3️⃣ Start the development server
```bash
npm run dev
```
You'll see output like:
```
VITE v7.3.1  ready in 199 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

#### 4️⃣ Open in your browser
- **Automatic**: Some systems will auto-open your browser
- **Manual**: Open your browser and go to **http://localhost:5173**

#### 5️⃣ Start designing!
- You'll see a 3D canvas with a grid floor
- Use the toolbar at the top to add cabinets
- Click on cabinets to select and edit them

### Development

**Running the development server:**
```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

**To stop the server:** Press `Ctrl+C` in the terminal

### Troubleshooting

**Port already in use?**
```bash
# Kill the process using port 5173
# On Linux/Mac:
lsof -ti:5173 | xargs kill -9
# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Dependencies not installing?**
```bash
# Clear npm cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Application not loading?**
- Make sure Node.js 18+ is installed
- Check console for errors (F12 in browser)
- Try clearing browser cache
- Restart the dev server

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build
npm run preview
```

## Usage

### Adding Cabinets

1. Click on "Add Base Cabinet", "Add Upper Cabinet", or "Add Tall Cabinet" in the toolbar
2. Or use the component library sidebar to click or drag cabinet types

### Navigation Controls

- **Pan**: Middle mouse button or right-click and drag
- **Zoom**: Mouse wheel scroll
- **Orbit**: Left-click and drag
- **Preset Views**: Use the view buttons in the toolbar (Top, Front, Side, Isometric, 3D)

### Editing Cabinets

1. Click on a cabinet to select it
2. Use the Properties Panel on the right to edit:
   - Dimensions (Width, Height, Depth)
   - Position (X, Y, Z coordinates)
   - Door style (Shaker or Flat Panel)
3. Changes are applied in real-time

### Global Parameters

1. Click "Settings" in the toolbar
2. Adjust default dimensions for new cabinets:
   - Upper cabinet depth
   - Base cabinet depth
   - Cabinet heights
   - Default door style
3. These settings only affect new cabinets

### Keyboard Shortcuts

- **Delete/Backspace**: Delete selected cabinet
- **Ctrl+S**: Save project
- **Ctrl+L**: Load project
- **Escape**: Clear selection

### Saving and Loading

- Click "Save" to store your project in localStorage
- Click "Load" to restore your saved project
- Projects persist across browser sessions

## Project Structure

```
cabinet-design-pro/
├── src/
│   ├── components/         # React UI components
│   │   ├── Cabinet.tsx     # 3D cabinet component
│   │   ├── Canvas3D.tsx    # 3D canvas wrapper
│   │   ├── Scene.tsx       # Three.js scene
│   │   ├── Toolbar.tsx     # Top toolbar
│   │   ├── Sidebar.tsx     # Component library
│   │   ├── PropertiesPanel.tsx  # Properties editor
│   │   └── SettingsPanel.tsx    # Global settings
│   ├── scene/              # 3D scene components
│   │   ├── Lighting.tsx    # Scene lighting
│   │   ├── Grid.tsx        # Floor grid
│   │   └── Controls.tsx    # Navigation controls
│   ├── store/              # Zustand stores
│   │   ├── useCabinetStore.ts   # Cabinet state
│   │   └── useUIStore.ts        # UI state
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useKeyboard.ts  # Keyboard shortcuts
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Future Enhancements

Planned features for future versions:

- Cut lists & CNC integration
- Advanced cabinet shapes (angled, curved)
- Material optimization
- Cloud collaboration
- Cost calculation
- Import/export capabilities
- More door styles and hardware options
- Room templates
- 2D floor plan view
- Dimension annotations in 3D

## Contributing

This is an MVP project. Contributions, issues, and feature requests are welcome!

## License

MIT

## Acknowledgments

- Inspired by Mozaik cabinet design software
- Built with React Three Fiber and the amazing Three.js ecosystem
