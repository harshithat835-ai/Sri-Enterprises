# Sri Enterprises Website (VS Code Guide)

### Why was output not showing when you downloaded the zip?
When you download a zip file from AI Studio:
1. **The `node_modules` folder is NOT in the zip** (this is standard to keep file sizes small).
2. If you double-click `index.html` in your file explorer, browsers show a blank page because browsers cannot run `.tsx` files directly without the Node compiler.
3. You need to run **`npm install`** and **`npm run dev`** inside VS Code once.

---

## How to Run in VS Code (Step-by-Step)

### Step 1: Open the extracted folder in VS Code
- Extract the downloaded ZIP file.
- Open **VS Code**.
- Click **File** > **Open Folder...** and select the extracted project folder.

### Step 2: Open the Terminal in VS Code
- In the top menu of VS Code, click **Terminal** > **New Terminal**
  *(or press `Ctrl + \`` on Windows / `Cmd + \`` on Mac)*.

### Step 3: Run these two commands in the terminal
Type this and press Enter:
```bash
npm install
```
*(Wait 10–30 seconds for dependencies to download)*

Then type:
```bash
npm run dev
```

### Step 4: Open in Your Browser
You will see output in the terminal like:
```text
  VITE v...  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```
- Hold **Ctrl** (or **Cmd** on Mac) and click the `http://localhost:3000/` link, or open your web browser and type `http://localhost:3000/`.
- **Output will appear immediately!**

---

## Instant Zero-Install Preview: `standalone-preview.html`
If you don't have Node.js installed or don't want to use the terminal:
- Simply double-click **`standalone-preview.html`** in this folder!
- It will open in Chrome / Edge / Firefox immediately with all styling, products, calculator, and company details without needing any terminal or npm!
