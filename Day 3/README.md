# MERN Bootcamp — Main Notes & Links

Thanks for joining the MERN Bootcamp! 🎉
To go deeper with React, I highly recommend The Net Ninja’s playlist:
▶️ [https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

---

## 📚 Day 3 Notes (This Repo)

* 🧭 **React Router (router.md)** — `BrowserRouter`, `Routes`, `Route`, `Link`, and a small demo
  → [router.md](./router.md)

* 🛠️ **Postman & HTTP (postman.md)** — HTTP methods, status codes, making requests, and cURL examples
  → [postman.md](./postman.md)

* 🧩 **Install Git (git-install.md)** — Windows/Mac install, first-time setup, GitHub sign-in, first push
  → [git-install.md](./git-install.md)

* 🔀 **Everyday Git Commands (git-commands.md)** — add/commit/push/branch/clone/pull/merge (+ bonus: rebase, stash)
  → [git-commands.md](./git-commands.md)

* 🚀 **Deploy with Vercel (vercel-deploy.md)** — why localhost isn’t shareable, link GitHub, build, SPA rewrites, practice task
  → [vercel-deploy.md](./vercel-deploy.md)

> Day 1 & 2 content (React basics, hooks, mapping JSON, HTML/CSS) lives in the **Day 1/Day 2** folders of your repo. Keep pushing updates as you learn.

---

## 🧪 Quick React Starter (Vite)

```bash
npm create vite@latest my-app
cd my-app
npm i
npm run dev
```

---

## 🧱 Repo Strategy: Frontend + Backend

You’ve got three clean options to organize MERN projects:

1. **Single Repo, Two Folders (Monorepo)**

```
my-project/
  client/   # React (Vite/Cra)
  server/   # Node/Express
```

* Pros: one place to manage issues/PRs; easy to deploy with CI.
* Cons: a bit more setup for tooling.

2. **Branches per Stack**

* `main` (frontend) and `server` (backend) or similar.
* Pros: one repo; simple permissions.
* Cons: working across branches can be less convenient.

3. **Two Separate Repos**

* `app-frontend` and `app-backend`.
* Pros: fully independent, easy to deploy separately.
* Cons: issues/features split across repos.

> Pick whichever fits your workflow/team best. If you’re solo and just starting, **two folders in one repo** is often the easiest.

---

## 🧑‍💻 Push Your Projects to GitHub

* Create a repo and push your code frequently.
* Include a clean **README** with:

  * What the project does
  * Tech stack
  * Setup steps
  * Live demo link (Vercel)
* Add screenshots or a short Loom video if you can.

Happy building! 🚀
