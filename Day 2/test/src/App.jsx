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
