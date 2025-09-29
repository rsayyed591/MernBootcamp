# 🧑‍🏫 MERN Bootcamp — Day 1, Day 2 & Day 3

Thanks for joining the MERN Bootcamp! 🎉
To go deeper with React, check out The Net Ninja’s playlist:
▶️ [https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

This repo contains hands-on material from our first three sessions:

* **Day 1:** HTML & CSS fundamentals (semantic HTML, forms, links, images, box model)
* **Day 2:** React basics with Vite (components, props, `useState`, `useEffect`, mapping JSON)
* **Day 3:** Router, Postman & HTTP, Git setup + commands, Vercel deploy

---

## 📁 Repository Map

```
Mern Bootcamp/
├── Day 1/
│   ├── css/
│   │   └── styles.css
│   ├── html/
│   │   ├── index.html
│   │   ├── margin.html
│   │   ├── paymate.html
│   │   └── thankyou.html
│   └── README.md
├── Day 2/
│   ├── README.md
│   └── test/
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── filename.txt
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── public/
│       │   └── vite.svg
│       ├── src/
│       │   ├── App.css
│       │   ├── App.jsx
│       │   ├── assets/
│       │   │   └── react.svg
│       │   ├── components/
│       │   │   ├── Greetings.jsx
│       │   │   ├── Timer.jsx
│       │   │   └── UserCard.jsx
│       │   ├── index.css
│       │   ├── main.jsx
│       │   └── pages/
│       │       └── Axios.jsx
│       └── vite.config.js
└── Day 3/
    ├── README.md              # Day 3 main index
    ├── router.md              # React Router notes
    ├── postman.md             # Postman, HTTP methods & status codes, cURL
    ├── git-install.md         # Install & set up Git + GitHub
    ├── git-commands.md        # add/commit/push/branch/clone/pull/merge (+ rebase, stash)
    └── vercel-deploy.md       # Vercel deploy + SPA rewrites + practice task
```

---

## 🔗 Quick Links

* 📘 **Day 1 Notes (HTML & CSS):** [Day 1/README.md](./Day%201/README.md)
* ⚛️ **Day 2 Notes (React with Vite):** [Day 2/README.md](./Day%202/README.md)
* 🗺️ **Day 3 Main (All Links):** [Day 3/README.md](./Day%203/README.md)

  * 🧭 Router: [Day 3/router.md](./Day%203/router.md)
  * 🧪 Postman & HTTP: [Day 3/postman.md](./Day%203/postman.md)
  * 🌱 Install Git: [Day 3/git-install.md](./Day%203/git-install.md)
  * 🔀 Git Commands: [Day 3/git-commands.md](./Day%203/git-commands.md)
  * 🚀 Vercel Deploy: [Day 3/vercel-deploy.md](./Day%203/vercel-deploy.md)

---

## 🚀 How to Run

### Day 1 (HTML & CSS)

Open files directly or use VS Code **Live Server**:

* `Day 1/html/index.html`
* `Day 1/html/margin.html`
* `Day 1/html/thankyou.html`

> Styles are in `Day 1/css/styles.css`.

### Day 2 (React with Vite)

From the repo root:

```bash
cd "Day 2/test"
npm i
npm run dev
```

Create a new Vite app (reference):

```bash
npm create vite@latest
```

**VS Code tip:** type `rfc` to scaffold a React Function Component (with ES7+ React/Redux snippets extension).

> **Note:** Day 3 demos build on the Day 2 React app (code continues in `Day 2/test`). Day 3 adds **documentation** only.

---

## 🧠 What We Covered

### Day 1 Highlights

* Semantic HTML (`header`, `section`, `footer`, lists, forms)
* Clean CSS with **Urbanist** font, spacing, shadows
* Box Model (margin vs padding) — see `margin.html`
* Links (`target="_blank"`, `download`), images, simple navigation

### Day 2 Highlights

* React components/props/state with **Vite**
* `useState` counter demo
* `useEffect` timer demo
* Mapping JSON to components (cards list)
* Passing props: `Greetings name="..."`

### Day 3 Highlights

* **React Router**: `BrowserRouter`, `Routes`, `Route`, `Link`
* **Postman**: HTTP methods & status codes, how to read responses, cURL generation
* **Axios vs Fetch** and why we often choose Axios
* **Axios with async/await + try/catch** (Random User API demo)
* **Git**: install + setup, essential commands
* **Vercel**: link GitHub, deploy, SPA rewrites, and why localhost is not shareable

---

## 🧱 Frontend + Backend Repo Strategy

Three ways to structure MERN projects:

1. **Single Repo, Two Folders (Monorepo)**

```
my-project/
  client/   # React
  server/   # Node/Express
```

2. **Branches per Stack** — e.g., `main` (frontend) and `server` (backend)
3. **Two Separate Repos** — `app-frontend` and `app-backend`

> If you’re starting out solo, **two folders in one repo** is often the simplest.

---

## 👤 Author

**Rehan Sayyed**
GitHub: [@rsayyed591](https://github.com/rsayyed591)

---

## 📜 License

Free for educational use. If you fork/use this repo for teaching, please credit the author.