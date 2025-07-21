import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Ready to <span>Grow Your Business</span> with Us?</h2>
        <p>
          Let's build something amazing together — websites, SEO, ads, automation & more.
        </p>
        <a
          href="https://wa.me/916377536559"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message Us on WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
