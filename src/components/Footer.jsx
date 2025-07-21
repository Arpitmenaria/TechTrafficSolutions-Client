import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>TechTraffic<span>Solutions</span></h3>
          <p>Your one-stop digital growth partner — websites, SEO, ads & AI automation.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://wa.me/916377536559" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://instagram.com/Techtrafficsolutions" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechTrafficSolutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
