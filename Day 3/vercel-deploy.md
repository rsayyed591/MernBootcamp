# vercel-deploy.md

**Goal:** Link GitHub ↔ Vercel, deploy to the internet, understand why `localhost` isn’t shareable, and practice by **forking & deploying** a repo.

---

## 🌐 Why you can’t share `localhost`

* `localhost` means **your own computer** (IP 127.0.0.1).
* Only **you** can access it; your friends or recruiters can’t reach your machine through the public internet.
* To share your work, you must **deploy** it to a public server or hosting platform (Vercel, Netlify, Render, etc.).
* Deployment gives you a **public HTTPS URL** (e.g., `https://your-app.vercel.app`) that anyone can open.

---

## 🚀 What is Vercel?

Vercel is a cloud platform that:

* Connects directly to your **GitHub** repository
* Builds your project automatically on every push
* Gives you **Preview URLs** for pull requests and a **Production URL** on main/master

Perfect for React (Vite/Next.js/Cra) SPAs.

---

## 🧭 Overview of the flow

1. **Push code** to GitHub
2. **Import** the repo into Vercel
3. Pick the **framework preset** (e.g., *Vite*, *React*)
4. Configure **Build Command** / **Output folder** (usually Vite → `npm run build`, output `dist/`)
5. Click **Deploy** → get a public URL
6. (For SPAs) add a `vercel.json` to handle client-side routing

---

## 🧪 Practice Task (Fork & Deploy)

**Repo to fork:** `https://github.com/rsayyed591/demo2.git`

### A) Fork on GitHub

1. Open the repo link above
2. Click **Fork** → choose your account → **Create fork**

### B) Import into Vercel

1. Go to **[https://vercel.com/](https://vercel.com/)**
2. Sign in with GitHub and **Authorize Vercel** (one-time)
3. Click **Add New… → Project → Import Git Repository**
4. Select the **forked repo** (the one under *your* account)

### C) Configure build (typical React/Vite)

* **Framework Preset:** Select **Vite** (or **Create React App** if relevant)
* **Install Command:** `npm i` (default is fine)
* **Build Command:** `npm run build`
* **Output Directory:** `dist` (for Vite). CRA uses `build`.

Click **Deploy**.

### D) Add SPA routing config (for React Router)

If you’re using client-side routing, create **vercel.json** at the **repo root**:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Commit & push. Vercel will redeploy and fix “404 on refresh” issues.

---

## 🧰 Alternative: Vercel CLI (optional)

```bash
# install
npm i -g vercel

# inside your project folder
vercel
# follow prompts (link project, set build, etc.)

# production deploy
vercel --prod
```

---

## 🔗 Linking GitHub (Auto-Deploys)

Once linked:

* Push to a **feature branch** → Vercel creates a **Preview Deployment** URL for that branch/PR.
* Merge to **main** → Vercel updates your **Production** URL.

> This is great for showing progress to teammates or recruiters quickly.

---

## 🔐 Environment Variables (if your app needs them)

1. On Vercel → Project → **Settings → Environment Variables**
2. Add keys (e.g., `VITE_API_URL`) and values
3. Redeploy. In Vite/React, env vars must start with `VITE_` to be exposed to the browser.

---

## 🧠 Common Pitfalls & Fixes

* **Blank page / 404 on refresh with React Router**
  Add the **`vercel.json` rewrites** (shown above).

* **Wrong output directory**
  Vite builds to `dist`, CRA builds to `build`. Ensure Vercel uses the correct folder.

* **Build fails on install**
  Make sure **`package.json`** has scripts:

  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }
  ```

* **Local assets not loading**
  Ensure paths are correct and assets are inside `public/` or imported correctly.

---

## 🧪 Quick Local to Production checklist

* Runs locally with:

  ```bash
  npm i
  npm run dev
  ```
* Builds locally with:

  ```bash
  npm run build
  ```
* Committed `vercel.json` for SPA routing (if needed)
* Pushed to GitHub, repo imported to Vercel

---

## 📝 What to put in your resume/portfolio

* Deployed link (Production): `https://your-app.vercel.app`
* GitHub Repo link
* Short description & features
* (Optional) Screenshots or Loom demo

**Never** put `http://localhost:5173`—that only works on your machine.

---

## 🧭 Recap

* `localhost` is **not shareable** → **Deploy** your app.
* **Vercel** makes deployments easy via **GitHub auto-builds**.
* Use **`vercel.json`** for React Router SPAs:

  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
  ```
* **Practice:** Fork `demo2`, import to Vercel, deploy, and share your live link.
