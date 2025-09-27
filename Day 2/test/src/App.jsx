import './App.css'
import Greetings from './components/Greetings'
import Timer from './components/Timer'
// import (component_name) from '(component_path)'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserCard from './components/UserCard'
import Axios from './pages/Axios'

// src\pages\Axios.jsx
// C:\Users\rehan\OneDrive\Desktop\Mern Bootcamp\Day 2\test\src\pages\Axios.jsx

function App() {

  return (
    <Router>
      <h3>REACT</h3>
      <Greetings name="name_random"/>
      <Link to='/teams'>Our Teams</Link>
      <Link to='/'>Home</Link>
      <Link to='/timer'>Timer</Link>
      <Link to="/user"> Users </Link>

      <Routes>
        <Route path='/teams' element={ <UserCard />}/>
        <Route path='/timer' element={ <Timer />}/>
        <Route path='/user' element= {<Axios />}/>
      </Routes>
      <footer>&copy; @2025, rehan</footer>
    </Router>
  )
}

export default App
