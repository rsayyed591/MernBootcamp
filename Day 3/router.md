# React Router DOM

## 1) Install & Run

```bash
# inside your Vite React project
npm i react-router-dom

# dev server
npm i
npm run dev
```

---

## 2) Minimum Setup

Wrap your app with `BrowserRouter`, create routes inside `Routes`, and navigate with `Link`.

```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Teams from "./pages/Teams.jsx"
import Timer from "./components/Timer.jsx"
import Axios from "./pages/Axios.jsx"
import Greetings from "./components/Greetings.jsx"

function App() {
  return (
    <Router>
      <header style={{ padding: 12 }}>
        <h3>REACT</h3>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/teams">Our Teams</Link>
          <Link to="/timer">Timer</Link>
          <Link to="/user">Users</Link>
        </nav>
      </header>

      {/* Stays on all pages */}
      <Greetings name="name_random" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/user" element={<Axios />} />
        {/* 404 fallback */}
        <Route path="*" element={<h4 style={{padding:12}}>Page not found</h4>} />
      </Routes>

      <footer style={{ padding: 12 }}>&copy; 2025, rehan</footer>
    </Router>
  )
}

export default App
```

Example pages:

```jsx
// src/pages/Home.jsx
export default function Home() {
  return <div style={{ padding: 12 }}>Welcome Home</div>
}

// src/pages/Teams.jsx
export default function Teams() {
  return <div style={{ padding: 12 }}>Teams Page</div>
}
```

---

## 3) Nested Routes (Optional but Useful)

Use a layout route that renders shared UI (like a sidebar) and an `Outlet` for children.

```jsx
// src/layouts/DashboardLayout.jsx
import { Outlet, Link } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: "60vh" }}>
      <aside style={{ padding: 12, borderRight: "1px solid #eee" }}>
        <h4>Dashboard</h4>
        <nav style={{ display: "grid", gap: 8 }}>
          <Link to="overview">Overview</Link>
          <Link to="reports">Reports</Link>
        </nav>
      </aside>
      <main style={{ padding: 12 }}>
        <Outlet />
      </main>
    </div>
  )
}
```

Register nested routes:

```jsx
// inside <Routes>
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="overview" element={<div>Overview</div>} />
  <Route path="reports" element={<div>Reports</div>} />
</Route>
```

Visit:

* `/dashboard/overview`
* `/dashboard/reports`

---

## 4) URL Params & Query Strings

### Params

```jsx
// src/pages/TeamDetails.jsx
import { useParams } from "react-router-dom"

export default function TeamDetails() {
  const { id } = useParams()
  return <div style={{ padding: 12 }}>Team ID: {id}</div>
}
```

```jsx
// route
<Route path="/teams/:id" element={<TeamDetails />} />

// link example
<Link to="/teams/42">Team 42</Link>
```

### Query (Search) Params

```jsx
// src/pages/Search.jsx
import { useSearchParams } from "react-router-dom"

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get("q") || ""

  return (
    <div style={{ padding: 12 }}>
      <input
        value={q}
        onChange={(e) => setSearchParams({ q: e.target.value })}
        placeholder="Type to search..."
      />
      <p>Query: {q}</p>
    </div>
  )
}
```

```jsx
<Route path="/search" element={<Search />} />
```

---

## 5) Navigation in Code

Use `useNavigate` to redirect after actions (e.g., login).

```jsx
import { useNavigate } from "react-router-dom"

export default function LoginButton() {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate("/dashboard/overview")}>
      Go to Dashboard
    </button>
  )
}
```

---

## 6) Active Links (Styling Current Route)

```jsx
import { NavLink } from "react-router-dom"

<NavLink
  to="/teams"
  style={({ isActive }) => ({
    color: isActive ? "#4F46E5" : "#111",
    fontWeight: isActive ? 700 : 400
  })}
>
  Our Teams
</NavLink>
```

---

## 7) Common Patterns

* **Persistent layout:** Header/Footer outside `<Routes>`.
* **404 route:** `<Route path="*" element={<NotFound/>} />`
* **Code-splitting:** Load big pages lazily with `React.lazy` + `Suspense`.

---

## 8) Troubleshooting

* **Blank page**: Ensure app is wrapped once with `BrowserRouter`.
* **Links reload page**: Use `<Link>` not `<a>`.
* **Nested route not rendering**: Did you place `<Outlet />` in the layout?

---

## 9) Mini Checklist

* [ ] Installed `react-router-dom`
* [ ] Wrapped app in `<BrowserRouter>`
* [ ] Added `<Routes>` + `<Route>`
* [ ] Replaced `<a>` with `<Link>`
* [ ] (Optional) Used nested routes & `Outlet`
* [ ] Added 404 fallback
