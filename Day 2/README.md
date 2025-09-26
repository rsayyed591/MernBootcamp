# ⚛️ React Bootcamp Notes

A compact guide + the exact examples we built together live.

---

## 🚀 Quick Start (Vite)

```bash
# 1) Create a new React app with Vite
npm create vite@latest my-react-app

# Pick: React (or React + TypeScript)

cd my-react-app

# 2) Install deps
npm i

# 3) Start dev server
npm run dev
```

> If you already have a project, just use steps 2–3 inside your repo.

---

## ✨ VS Code Shortcut: `rfc`

Install the VS Code extension **“ES7+ React/Redux/React-Native snippets”**.
Type `rfc` in a new `.jsx` file → hit **Enter** → you’ll get a ready-to-edit **React Function Component** template instantly.

---

## 🌟 React — What/Why (quick)

* **Library**, not a full framework.
* UI is built from **components** (reusable, composable).
* **Virtual DOM** updates only what changed → fast.
* **Hooks** give state + lifecycle to function components.

| Plain HTML/CSS/JS    | React                      |
| -------------------- | -------------------------- |
| Manual DOM updates   | Virtual DOM                |
| Hard to reuse pieces | Reusable components        |
| No built-in state    | `useState`, `useEffect`, … |

---

## 🧩 Components, Props & State (at a glance)

* **Props** = inputs from parent → **read-only** in child.
* **State** = local, owned by the component → **mutable** via `useState`.

---

# 🧪 Session Demos (exact code)

Below are the **exact** examples you taught and showed.

> Create a `src/components` folder and place each component there.
> The imports in `App.jsx` (at the end) match the names you used.

---

## 1) Props (+ a bit of state inside) — **Greetings**

```jsx
// src/components/Greetings.jsx
import { useState } from "react";

function Greeting({ name }) {       // name is a prop
  const [count, setCount] = useState(0); // count is state
  return (
    <div>
      <p>Hello {name}, you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Greeting;
```

---

## 2) `useState` — **Counter**

```jsx
// src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  // state variable + setter
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign:"center", padding:"20px", border:"2px solid #007bff", borderRadius:"8px", marginBottom:"20px"}}>
      <h2>🟢 useState Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

## 3) `useEffect` — **Timer**

```jsx
// src/components/Timer.jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start an interval that updates every second
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []); // run only once when component mounts

  return (
    <div style={styles.container}>
      <h2>🔵 useEffect Example</h2>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #28a745",
    borderRadius: "8px",
  },
};

export default Timer;
```

---

## 4) JSON + `.map()` — **UserCard(s)**

```jsx
// src/components/UserCard.jsx
import React from "react";
import "./UserCards.css"; // optional separate CSS

function UserCards() {
  // 🟢 Sample JSON data (could also come from an API later)
  const users = [
    { id: 1, name: "Alice", role: "Frontend Developer" },
    { id: 2, name: "Bob", role: "Backend Developer" },
    { id: 3, name: "Charlie", role: "Full-Stack Developer" },
  ];

  return (
    <div className="usercards-container">
      {users.map((user) => (
        <div className="usercard" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
```

**CSS which I was going to use in the demo (you can tweak):**

```css
/* src/components/UserCards.css */

.usercards-container {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin: 12px 0;
}

.usercard {
  border: 1px solid #e5e7eb;      /* gray-200 */
  border-radius: 12px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,.04);
  transition: transform 120ms ease, box-shadow 120ms ease;
}

.usercard:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,.08);
}

.usercard h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.usercard p {
  margin: 0;
  color: #6b7280; /* gray-500 */
  font-size: 14px;
}
```

---

## 5) Glue It Together — **App.jsx** (exact usage)

```jsx
// src/App.jsx
import './App.css'
import Greetings from './components/Greetings'
import Timer from './components/Timer'
import UserCard from './components/UserCard'
// import (component_name) from '(component_path)'

function App() {

  return (
    <>
     <h3>REACT</h3>
     <Greetings name="name_random"/>
     <Timer />
     <UserCard />
    </>
  )
}

export default App
```

---

## 🧱 Minimal `App.css` (optional)

```css
/* src/App.css */
:root { color-scheme: light; }
* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
h3 { margin: 16px 0; }
main, #root { padding: 16px; }
button {
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  margin-right: 6px;
}
button:hover { background: #f9fafb; }
```

---

## 🪝 Quick Templates

### `useState`

```jsx
import { useState } from "react";

function Example() {
  const [value, setValue] = useState(0);
  const inc = () => setValue((prev) => prev + 1);
  return <button onClick={inc}>{value}</button>;
}
```

### `useEffect`

```jsx
import { useEffect } from "react";

useEffect(() => {
  // side effect (fetch, timer, subscribe…)
  return () => {
    // cleanup (abort fetch, clear timer, unsubscribe…)
  };
}, []); // [] = run once on mount
```

---

## 🧭 Suggested Project Structure (for the demos)

```
src/
  App.jsx
  App.css
  main.jsx
  components/
    Greetings.jsx
    Counter.jsx
    Timer.jsx
    UserCard.jsx
    UserCards.css
```

---

## ✅ What We Covered

* What React is and why it’s used.
* **Props** vs **State** (with live Greeting + Bulb/Counter examples).
* `useState` (Counter).
* `useEffect` (Timer with cleanup).
* JSON arrays + `.map()` in React (UserCards).
* Speedrun setup with **Vite**, dev commands, and **rfc** snippet in VS Code.

---
