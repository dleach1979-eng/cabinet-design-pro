# How to Open Cabinet Design Pro - Visual Guide

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: Check if Node.js is installed                     │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  Open Terminal and type:                                    │
│  $ node --version                                           │
│                                                             │
│  ✅ Version 18+? → Continue to Step 2                       │
│  ❌ No Node.js? → Download from https://nodejs.org         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: Navigate to project folder                        │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  $ cd path/to/cabinet-design-pro                            │
│                                                             │
│  Examples:                                                  │
│  Windows: cd C:\Users\YourName\cabinet-design-pro          │
│  Mac/Linux: cd ~/cabinet-design-pro                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: Install dependencies (FIRST TIME ONLY)            │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  $ npm install                                              │
│                                                             │
│  ⏳ Wait 1-2 minutes...                                     │
│  ✅ "added XXX packages" → Continue to Step 4               │
│                                                             │
│  Note: You only need to do this once!                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: Start the development server                      │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  $ npm run dev                                              │
│                                                             │
│  You should see:                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ VITE v7.3.1  ready in 199 ms                        │   │
│  │                                                      │   │
│  │ ➜  Local:   http://localhost:5173/                  │   │
│  │ ➜  Network: use --host to expose                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 5: Open in your browser                              │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  Open your browser and go to:                               │
│  http://localhost:5173                                      │
│                                                             │
│  🎉 You should see the Cabinet Design Pro application!      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  SUCCESS! What you should see:                             │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [View: Top|Front|Side] [Add Cabinets] [Settings]   │ ← Toolbar
│  ├───────┬─────────────────────────────────────────────┤   │
│  │       │                                             │   │
│  │ Comp. │         3D Canvas                           │   │
│  │ Lib.  │         with Grid                           │ ← Main View
│  │       │         and Axes                            │   │
│  │       │                                             │   │
│  ├───────┴─────────────────────────────────────────────┤   │
│  │ Status Bar                                          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════
  QUICK REFERENCE CARD
═══════════════════════════════════════════════════════════════

  First Time Setup:
  1. npm install
  2. npm run dev
  3. Open http://localhost:5173

  Every Time After:
  1. npm run dev
  2. Open http://localhost:5173

  To Stop:
  Press Ctrl+C in the terminal

═══════════════════════════════════════════════════════════════


TROUBLESHOOTING
───────────────────────────────────────────────────────────────

Problem: "npm: command not found"
→ Install Node.js from https://nodejs.org

Problem: "Port 5173 already in use"
→ The server is already running! Check your browser

Problem: Nothing appears
→ Wait a moment, then refresh your browser
→ Check the terminal for errors
→ Try clearing browser cache

Problem: Application is slow
→ Close other browser tabs
→ Try Chrome browser
→ Check if your graphics card is supported

───────────────────────────────────────────────────────────────

Need more help? See QUICKSTART.md or README.md
```
