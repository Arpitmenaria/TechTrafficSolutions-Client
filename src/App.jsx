import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import AdminLogin from './admin/Login';
import Dashboard from './admin/Dashboard';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

   // ✅ Add this useEffect just below location
  useEffect(() => {
    const shouldScroll = localStorage.getItem('scrollToContact');
    if (shouldScroll === 'true') {
      localStorage.removeItem('scrollToContact');

      // Wait until DOM elements have rendered
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300); // Slight delay ensures the DOM is ready
    }
  }, [location.pathname]); // Runs every time route changes

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Navbar />
              <div id="hero"><HeroSection /></div>
              <div id="services"><Services /></div>
              <div id="about"><About /></div>
              <div id="testimonials"><Testimonials /></div>
              <div id="cta"><CTA /></div>
              <div id="contact"><Contact /></div>
              <Footer />
            </PageWrapper>
          }
        />
        <Route
          path="/services/:serviceSlug"
          element={
            <PageWrapper>
              <ServiceDetail />
            </PageWrapper>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
