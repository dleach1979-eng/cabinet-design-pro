# Cabinet Design Pro

Professional cabinet design application MVP with 3D visualization, parametric design capabilities, and intuitive navigation.

![Cabinet Design Pro](https://img.shields.io/badge/Status-MVP-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)

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

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

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
