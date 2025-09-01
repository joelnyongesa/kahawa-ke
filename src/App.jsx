import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='font-poppins'>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
