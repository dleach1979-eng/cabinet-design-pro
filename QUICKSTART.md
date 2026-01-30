# 🚀 Quick Start Guide - How to Open Cabinet Design Pro

## For First-Time Users

This guide will help you open and run the Cabinet Design Pro application on your computer.

---

## Step 1: Make Sure You Have Node.js Installed

**Do you have Node.js?** Check by opening a terminal/command prompt and typing:

```bash
node --version
```

If you see a version number like `v18.x.x` or `v20.x.x`, you're good! ✅

If you get an error or the version is less than 18, **download Node.js from:**
👉 https://nodejs.org/ (download the LTS version)

---

## Step 2: Open Your Terminal

- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
- **Linux**: Press `Ctrl + Alt + T`

---

## Step 3: Navigate to the Project Folder

In your terminal, go to where you downloaded/cloned this project:

```bash
cd path/to/cabinet-design-pro
```

For example:
- Windows: `cd C:\Users\YourName\cabinet-design-pro`
- Mac/Linux: `cd ~/cabinet-design-pro`

---

## Step 4: Install Dependencies (First Time Only)

**This is a one-time step.** Run this command:

```bash
npm install
```

This will:
- Download all necessary files (~50-100 MB)
- Take about 1-2 minutes
- Create a `node_modules` folder

**Wait until you see "added XXX packages" and the command prompt returns.**

---

## Step 5: Start the Application

Run this command:

```bash
npm run dev
```

You should see something like:

```
VITE v7.3.1  ready in 199 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**The application is now running!** 🎉

---

## Step 6: Open in Your Browser

**Option 1:** Some systems automatically open your browser
**Option 2:** Manually open your browser and go to:

```
http://localhost:5173
```

or just

```
localhost:5173
```

---

## 🎨 What You Should See

You should now see the Cabinet Design Pro application with:

- ✅ A **black/dark toolbar** at the top with view buttons
- ✅ A **3D canvas** in the center with a grid floor
- ✅ A **component library sidebar** on the left
- ✅ A **properties panel** on the right

---

## 🎮 Try These First Steps

1. **Add a cabinet**: Click "Add Base Cabinet" in the top toolbar
2. **Rotate the view**: Click and drag with your mouse on the 3D canvas
3. **Zoom**: Scroll your mouse wheel
4. **Change views**: Click the "Top", "Front", "Side", or "Isometric" buttons

---

## ❌ Stopping the Application

When you're done, go back to your terminal and press:

```
Ctrl + C
```

This stops the development server. You can restart it anytime with `npm run dev`.

---

## 🆘 Troubleshooting

### Problem: "npm: command not found"
**Solution:** You need to install Node.js (see Step 1)

### Problem: "Port 5173 is already in use"
**Solution:** Either:
1. Close the other application using that port, or
2. The dev server might already be running! Check http://localhost:5173

### Problem: Nothing appears in the browser
**Solution:**
1. Make sure the terminal shows "VITE ready" message
2. Try a different browser (Chrome, Firefox, Edge)
3. Clear your browser cache (Ctrl+Shift+Delete)
4. Check if your firewall is blocking port 5173

### Problem: "Cannot find module" errors
**Solution:** Run `npm install` again

### Problem: Application is slow or laggy
**Solution:**
1. Close other tabs/programs
2. Make sure you have a decent graphics card
3. Try a different browser (Chrome usually works best)

---

## 📚 Next Steps

Once you have the application running:

1. Read the **Usage** section in README.md to learn all features
2. Check out the **Keyboard Shortcuts** for efficient workflow
3. Explore the **Settings** panel to customize global parameters

---

## 🎥 Video Tutorial

For a visual walkthrough, check out our video guide: [Coming Soon]

---

## 💡 Still Need Help?

Open an issue on GitHub: https://github.com/dleach1979-eng/cabinet-design-pro/issues

Include:
- Your operating system (Windows/Mac/Linux)
- Node.js version (`node --version`)
- The full error message
- What you were trying to do

---

**Happy Cabinet Designing! 🎨🔨**
