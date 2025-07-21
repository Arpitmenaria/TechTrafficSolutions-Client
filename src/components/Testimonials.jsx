import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ritika Shah",
    feedback: "Their website development and SEO services gave my business a real boost. Professional, responsive, and highly creative.",
  },
  {
    name: "Aman Mehra",
    feedback: "We started with Meta and Google ads — and the results blew us away. Great support and smart strategy!",
  },
  {
    name: "Nikita Jain",
    feedback: "They managed our Amazon store and social media so well. We saw growth in just weeks. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Our <span>Clients Say</span>
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="quote">“{testimonial.feedback}”</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
