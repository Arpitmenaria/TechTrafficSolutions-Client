import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Empowering <span>Digital Growth</span> <br />
          Through Technology & Innovation
        </h1>
        <p>
          We build high-converting websites, market your brand, and automate your workflows with AI.
        </p>
        <button className="hero-btn" onClick={handleScrollToContact}>
          Get Free Consultation
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
