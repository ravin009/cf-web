import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';  // Import ContactUs
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <Download />
    <PrivacyPolicy />
    <ContactUs /> 
    <Footer />
  </>
);

export default App;
