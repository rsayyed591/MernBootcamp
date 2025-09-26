# 🧑‍🏫 MERN Bootcamp — Day 1 & Day 2

This repo contains hands-on material from our first two sessions:

* **Day 1:** HTML & CSS fundamentals (semantic HTML, forms, links, images, box model)
* **Day 2:** React basics with Vite (components, props, `useState`, `useEffect`, mapping JSON)

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
└── Day 2/
    ├── README.md
    └── test/
        ├── index.html
        ├── package.json
        ├── src/
        │   ├── App.jsx
        │   ├── components/
        │   │   ├── Greetings.jsx
        │   │   ├── Timer.jsx
        │   │   └── UserCard.jsx
        │   └── main.jsx
        └── vite.config.js
```

---

## 🔗 Quick Links

* 📘 **Day 1 Notes (HTML & CSS):** [Day 1/README.md](./Day%201/README.md)
* ⚛️ **Day 2 Notes (React with Vite):** [Day 2/README.md](./Day%202/README.md)

---

## 🚀 How to Run

### Day 1 (HTML & CSS)

1. Open the folder in VS Code.
2. Use **Live Server** (or double-click the file):

   * `Day 1/html/index.html`
   * `Day 1/html/margin.html`
   * `Day 1/html/thankyou.html`

> Styles are in `Day 1/css/styles.css`.

---

### Day 2 (React with Vite)

From the repo root:

```bash
cd "Day 2/test"
npm i
npm run dev
```

* Create a new Vite app (reference):

  ```bash
  npm create vite@latest
  ```
* **VS Code snippet:** type `rfc` to scaffold a React Function Component (if you use an extension like ES7+ React/Redux/React-Native snippets).

---

## 🧠 What We Covered

### Day 1 Highlights

* Semantic HTML (`header`, `section`, `footer`, lists, forms)
* Clean CSS with **Urbanist** font, spacing, shadows, focus styles
* Box Model (margin vs padding) — see `margin.html`
* Links (`target="_blank"`, `download`), images, simple navigation

### Day 2 Highlights

* React components/props/state with **Vite**
* `useState` counter demo
* `useEffect` timer demo
* Mapping JSON to components (cards list)
* Passing props: `Greeting name="..."`

---

## ✨ Example Snippets (from Day 2)

**Props + State (Greeting):**

```jsx
function Greeting({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hello {name}, you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

**useState (Counter):**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign:"center", padding:20, border:"2px solid #007bff", borderRadius:8 }}>
      <h2>🟢 useState Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

**useEffect (Timer):**

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ textAlign:"center", padding:20, border:"2px solid #28a745", borderRadius:8 }}>
      <h2>🔵 useEffect Example</h2>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}
```

**Map over JSON (UserCards):**

```jsx
function UserCards() {
  const users = [
    { id: 1, name: "Alice", role: "Frontend Developer" },
    { id: 2, name: "Bob", role: "Backend Developer" },
    { id: 3, name: "Charlie", role: "Full-Stack Developer" },
  ];
  return (
    <div className="usercards-container">
      {users.map(user => (
        <div className="usercard" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 👤 Author

**Rehan Sayyed**
GitHub: [@rehan591](https://github.com/rehan591)

---

## 📜 License

Free for educational use. If you fork/use this repo for teaching, please credit the author.
