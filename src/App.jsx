import './App.css'
import Login from './components/Login.jsx';
import Signup from "./components/Signup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';



function App() {
  return (
    <div className=' bg-gradient-to-b from-lime-200 to-lime-600'>
      
      <Router>
      <Navbar/>
      <div className="flex flex-col items-center h-screen justify-center pb-40">
        <Routes>
        < Route path='/' element={<Signup/> } />
        < Route path='/login' element={<Login/> } />
        < Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </div>

  </Router>
    </div>

  )
}

export default App
