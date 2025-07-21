// ✅ src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  { slug: "website-development", title: "Website Development", desc: "Responsive, fast, and modern websites to grow your business." },
  { slug: "search-engine-optimization-seo", title: "Search Engine Optimization (SEO)", desc: "Improve your Google rankings and organic visibility." },
  { slug: "online-advertising", title: "Online Advertising", desc: "Run result-driven ad campaigns on Facebook, Instagram & Google Ads (Search, Display, YouTube)." },
  { slug: "e-commerce-account-management", title: "E-commerce Account Management", desc: "We set up Etsy & Amazon Seller Account, optimize, and manage your seller presence." },
  { slug: "web-promotions", title: "Web Promotions", desc: "Digital strategies to boost your brand reach." },
  { slug: "crm-and-automation", title: "CRM & Automation Setup", desc: "WhatsApp Automation, Chatbot Setup (e.g., using Tidio, Meta), Basic CRM Setup (HubSpot, Zoho, etc.)" },
  { slug: "social-media-management", title: "Social Media Management & Promotions", desc: "Engaging content and campaigns across all platforms." },
  { slug: "content-writing-copywriting", title: "Content Writing & Copywriting", desc: "Blog Posts, Website Copy, Product Descriptions, Ad Copy & Captions" },
  { slug: "email-marketing", title: "Email Marketing", desc: "Email Campaign Creation, Newsletter Design, Automation (e.g., welcome emails, follow-ups), Mailchimp, Sendinblue setup" },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a href={`/services/${service.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
