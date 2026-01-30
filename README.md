# Cabinet Design Pro

Professional cabinet design application MVP with 3D visualization, parametric design capabilities, and intuitive navigation.

![Cabinet Design Pro](https://img.shields.io/badge/Status-MVP-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)

## 📋 Quick Links

- 🚀 **[How to Open/Run This Application](#-new-user-start-here)** ← Start here if you just want to run it!
- 📖 [QUICKSTART.md](QUICKSTART.md) - Complete beginner guide
- 📊 [HOW-TO-OPEN.md](HOW-TO-OPEN.md) - Visual flowchart
- ✨ [Features](#features)
- 🛠️ [Tech Stack](#tech-stack)
- 📱 [Usage Guide](#usage)
- ⌨️ [Keyboard Shortcuts](#keyboard-shortcuts)

---

## 🚀 **NEW USER? START HERE!**

> **Note:** If the links below show "not found", you may be viewing the main branch. These guides are available in the latest updates. You can also follow the 3-step quick start below!

**👉 [See QUICKSTART.md for a complete beginner-friendly guide](QUICKSTART.md)**

**👉 [See HOW-TO-OPEN.md for a visual flowchart guide](HOW-TO-OPEN.md)**

### Quick Start: Get the Dev Server Running in 3 Steps

> 💡 **Note:** You don't "install" the `npm run dev` script - it's already in package.json. You need to install the *dependencies* first, then you can *run* the script!

**Step 1: Install Dependencies** (first time only - this downloads all required packages)
```bash
npm install
```
This installs Vite, React, Three.js, and other dependencies (~270 packages, takes 1-2 minutes).

**Step 2: Run the Development Server** (use this command every time you want to start the app)
```bash
npm run dev
```
This starts the Vite development server. You'll see: `Local: http://localhost:5173/`

**Step 3: Open Your Browser**
Navigate to **http://localhost:5173** - you should see the Cabinet Design Pro application!

<details>
<summary><strong>📖 Click here for detailed step-by-step instructions</strong></summary>

### Detailed Installation Guide

#### Prerequisites
- **Node.js 18+** and **npm** (comes with Node.js)
  - Check if installed: `node --version` and `npm --version`
  - Download from: [nodejs.org](https://nodejs.org/)

#### Step 1: Navigate to the project directory
```bash
cd cabinet-design-pro
```

#### Step 2: Install dependencies (first time only)
```bash
npm install
```
This will download all required packages (~50MB). Takes about 1-2 minutes.

#### Step 3: Start the development server
```bash
npm run dev
```
You'll see output like:
```
VITE v7.3.1  ready in 199 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

#### Step 4: Open in your browser
- **Automatic**: Some systems will auto-open your browser
- **Manual**: Open your browser and go to **http://localhost:5173**

#### Step 5: Start designing!
- You'll see a 3D canvas with a grid floor
- Use the toolbar at the top to add cabinets
- Click on cabinets to select and edit them

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

</details>

---

## ❓ Frequently Asked Questions

### How do I install the `npm run dev` script?

**Short answer:** You don't install scripts - they're already defined in `package.json`. You need to install the **dependencies** first:

```bash
# Install dependencies (first time only)
npm install

# Run the dev script (every time you want to start the app)
npm run dev
```

**What's the difference?**
- `npm install` - Downloads and installs all the packages your project needs (like React, Vite, Three.js)
- `npm run dev` - Runs the development server using the packages you installed

Think of it like this:
1. `npm install` = Installing the ingredients
2. `npm run dev` = Cooking the meal with those ingredients

### Do I need to run `npm install` every time?

**No!** Only run `npm install`:
- The first time you clone the project
- After you pull changes that update `package.json`
- If you delete the `node_modules` folder

After that, just use `npm run dev` to start the server!

### What if I get "command not found" errors?

Make sure you:
1. Have Node.js 18+ installed: `node --version`
2. Are in the project directory: `cd cabinet-design-pro`
3. Have run `npm install` first

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
