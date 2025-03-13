import React, { useEffect, useState } from 'react'
import './Navbar.css'
import  logo from '../../assets/logo.png'
const Navbar = () => {
  const [sticky , setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
