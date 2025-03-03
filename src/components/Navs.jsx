import 'react'
import { NavLink } from 'react-router-dom'

const Navs = () => {
  return (
    <div className='flex justify-between space-x-10 text-sm font-bold'>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/">SignUp</NavLink>
    </div>
  )
}

export default Navs