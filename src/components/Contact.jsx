import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://techtrafficsolutions-server.onrender.com/api/inquiry', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Try again.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Let's <span>Work Together</span></h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder="Service You're Interested In"
            required
            value={formData.service}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us more..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
        {status && <p className="status-msg">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
