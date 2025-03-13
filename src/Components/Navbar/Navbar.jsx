import React from 'react'
import './Navbar.css'
import  logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" />
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Events</li>
      <li>Mission</li>
      <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
