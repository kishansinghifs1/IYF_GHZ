import React, { useEffect, useState } from 'react';
import { Link  , animateScroll as scroll } from 'react-scroll'; 
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);
  const scrollToFooter = () => {
    scroll.scrollToBottom({ duration: 2000, smooth: "easeInOutQuart" });
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="homepage" smooth={true} offset={-20} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-250} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="abt" smooth={true} offset={-250} duration={500}>
            Events
          </Link>
        </li>
        <li>
          <Link to="ISKM" smooth={true} offset={-250} duration={500}>
            Mission
          </Link>
        </li>
        <li>
          <button className="btn" onClick={scrollToFooter}>Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
