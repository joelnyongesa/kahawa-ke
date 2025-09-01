import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo-Cii2vyqo.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'service', 'contact'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 backdrop-blur-sm border-b border-amber-200/50 shadow-sm">
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <img alt="Kahawa Ke Logo" className="w-full h-full object-contain" src={Logo} />
            </div>
            <span className="font-bold text-orange-900 text-lg lg:text-xl hidden sm:block">Kahawa Ke</span>
          </a>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex gap-8 text-sm font-medium">
              {['home', 'menu', 'about', 'service', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`relative py-2 px-1 transition-all duration-300 text-stone-700 hover:text-orange-800 ${
                      activeSection === section ? 'text-orange-800' : ''
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-800 transition-all duration-300"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Voucher Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-700 to-orange-800 text-white py-2 px-4 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee w-4 h-4">
                <path d="M10 2v2"></path>
                <path d="M14 2v2"></path>
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
                <path d="M6 2v2"></path>
              </svg>
              Get Voucher
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="lg:hidden p-2 text-stone-700 hover:text-orange-800 focus:outline-none transition-all duration-300"
            aria-label="Toggle menu"
            onClick={handleMenuToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-amber-50 border-b border-amber-200 shadow-md overflow-hidden z-[100] transition-all duration-300 ease-in-out`}
        >
          <div className="container mx-auto px-4 py-4" style={{ fontFamily: 'Poppins' }}>
            <ul className="flex flex-col space-y-4">
              {['home', 'menu', 'about', 'service', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 px-4 rounded-md transition-all duration-300 text-stone-700 hover:bg-orange-50 hover:text-orange-800 ${
                      activeSection === section ? 'bg-orange-100 text-orange-800 font-medium' : ''
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-700 to-orange-800 text-white py-3 px-4 rounded-md text-sm font-medium shadow-sm mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee w-4 h-4">
                    <path d="M10 2v2"></path>
                    <path d="M14 2v2"></path>
                    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
                    <path d="M6 2v2"></path>
                  </svg>
                  Get Voucher
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
