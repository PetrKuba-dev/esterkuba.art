import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Instagram, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleScroll = () => {
  //   const section = document.getElementById('contact');
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <motion.header
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl h-21 sm:h-35 mx-auto md:px-12 px-4 md:py-4 py-2 flex justify-between items-start">
        <NavLink to="/" className="z-50 relative">
          <h1 className="text-4xl text-center sm:text-7xl flex flex-col">
            <span className="pb-2 text-gray-900">ESTER</span>
            <span className="p-2 bg-gray-900 text-white">KUBA</span>
          </h1>
        </NavLink>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex h-full">
        <nav className="flex flex-col justify-between">
          <div className="flex justify-end gap-4 mb-4">
            <motion.a 
            href="https://www.instagram.com/ester.kuba/" 
            target="_blank"
            rel="noreferrer"
            className="flex justify-end"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}>
              <Instagram strokeWidth={1.5} className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"/>
            </motion.a>
          </div>
          <div className="sm:gap-6 gap-2 flex flex-wrap justify-end">
            <NavLink to="/" className="whitespace-nowrap text-sm sm:text-base underline underline-offset-8 text-gray-800 hover:text-black hover:no-underline text-lg transition-all duration-300">
              <span>Homepage</span>
            </NavLink>
            <NavLink to="/o-mne" className="whitespace-nowrap text-sm sm:text-base underline underline-offset-8 text-gray-800 hover:text-black hover:no-underline text-lg transition-all duration-300">
              <span>O mně</span>
            </NavLink>
            <NavLink to="/galerie" className="whitespace-nowrap text-sm sm:text-base underline underline-offset-8 text-gray-800 hover:text-black hover:no-underline text-lg transition-all duration-300">
              <span>Galerie</span>
            </NavLink>
            <NavLink to="/kontakt" className="whitespace-nowrap text-sm sm:text-base underline underline-offset-8 text-gray-800 hover:text-black hover:no-underline text-lg transition-all duration-300">
              <span>Kontakt</span>
            </NavLink>
            {/* <a 
            onClick={() => handleScroll()}
            className="text-gray-600 cursor-pointer underline underline-offset-8 hover:text-gray-800"><span>Kontakt</span></a> */}
          </div>
        </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="self-center sm:hidden flex items-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="p-2 text-gray-800 hover:text-black transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={1.5} className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu strokeWidth={1.5} className="w-6 h-6 cursor-pointer" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence mode='wait'>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white border-t border-gray-200 relative z-40 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="flex justify-center mb-4">
                <motion.a 
                  href="https://www.instagram.com/ester.kuba/" 
                  target="_blank"
                  rel="noreferrer"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Instagram strokeWidth={1.5} className="w-6 h-6 text-gray-800"/>
                </motion.a>
              </div>
              <div className="space-y-3 text-center">
                <NavLink 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-800 hover:text-black transition-colors duration-300"
                >
                  Homepage
                </NavLink>
                <NavLink 
                  to="/o-mne" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-800 hover:text-black transition-colors duration-300"
                >
                  O mně
                </NavLink>
                <NavLink 
                  to="/galerie" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-800 hover:text-black transition-colors duration-300"
                >
                  Galerie
                </NavLink>
                <NavLink 
                  to="/kontakt" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-gray-800 hover:text-black transition-colors duration-300"
                >
                  Kontakt
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
