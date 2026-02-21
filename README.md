# Cabinet Design Pro

Professional cabinet design application with 3D visualization

## Getting Started

### Prerequisites

- Node.js 18.0 or higher (LTS version recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dleach1979-eng/cabinet-design-pro.git
   cd cabinet-design-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Note: This project uses Node.js built-in modules only. Running `npm install` initializes the project and creates a package-lock.json file for consistent setup across environments.

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Troubleshooting

**Problem: "npm run dev" doesn't work**
- Make sure you've run `npm install` first
- Check that Node.js 18.0 or higher is installed: `node --version`
- Ensure port 3000 is not already in use

**Problem: "Port 3000 is already in use"**
- Stop any other process using port 3000
- Or use a different port: `PORT=3001 npm run dev`

### Available Scripts

- `npm run dev` - Start the development server
- `npm start` - Start the production server (same as dev for now)
- `npm test` - Run tests (not yet implemented)

## Features

- 📐 Precise Measurements - Design cabinets with exact dimensions
- 🎨 Material Selection - Choose from various materials and finishes  
- 👁️ 3D Visualization - View your designs in 3D before building

## Project Structure

```
cabinet-design-pro/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── app.js          # Application JavaScript
├── server.js       # Development server
├── package.json    # Project configuration
└── README.md       # This file
```



## License

ISC
