import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About <span>TechTrafficSolutions</span></h2>
        <p>
          We are a next-gen digital agency offering a powerful blend of website development, SEO, paid ads, and automation. Whether you're a startup or scaling brand, we craft personalized strategies to build your online presence, drive traffic, and automate your growth using smart technologies.
        </p>
        <p>
          From responsive websites and performance marketing to Amazon/Etsy seller support and AI tools — we’ve got every tool you need to grow online, in one place.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
