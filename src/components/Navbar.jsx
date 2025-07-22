import React, { useState } from 'react';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
        TechTraffic<span>Solutions</span>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('hero')}>Home</a>
        <a onClick={() => scrollToSection('services')}>Services</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>

      <button className="navbar-btn" onClick={() => scrollToSection('contact')}>
        Get Started
      </button>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
    </header>
  );
};

export default Navbar;
