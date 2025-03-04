import './App.css'
import Login from './components/Login.jsx';
import Signup from "./components/Signup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Bmr from './components/Bmr.jsx'
import Eer from './components/Eer.jsx'
import Tips from './components/Tips.jsx'
import Tracker from './components/Tracker.jsx'
import Planner from './components/Planner.jsx'
import Forum from './components/Forum.jsx';
import { Profile } from './components/Profile.jsx';
import Settings  from './components/Settings.jsx';


function App() {
  return (
    <div className=' bg-gradient-to-b from-lime-200 to-lime-600'>
      
      <Router>
      <Navbar/>
      <div className="h-screen flexitems-center justify-center pb-40">
        <Routes>
        < Route path='/' element={<Signup/> } />
        < Route path='/login' element={<Login/> } />
        < Route path='/dashboard' element={<Dashboard/>}/>
        < Route path='/bmr' element={<Bmr/>}/>
        < Route path='/eer' element={<Eer/>}/>
        < Route path='/tips' element={<Tips/>}/>
        < Route path='/tracker' element={<Tracker/>}/>
        < Route path='/planner' element={<Planner/>}/>        
        < Route path='/forum' element={<Forum/>}/>
        < Route path='/profile' element={<Profile/>}/>
        < Route path='/settings' element={<Settings/>}/>
        </Routes>
        </div>

  </Router>
    </div>

  )
}

export default App
