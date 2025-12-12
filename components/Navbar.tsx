'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, UserPlus } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenRegister?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/images/mr beast logo.jpg"
            alt="MrBeast logo"
            className="w-12 h-12 rounded-lg object-cover shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="text-xl font-black tracking-tighter uppercase hidden sm:block text-white group-hover:text-cyan-400 transition-colors">
            MrBeast
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <button 
            onClick={onOpenRegister}
            className="text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-pink-500 transition-colors flex items-center gap-1"
          >
            <UserPlus size={16} /> Join
          </button>

          <a 
            href="https://mrbeast.store/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 neon-box-pink flex items-center gap-2"
          >
            <ShoppingCart size={16} /> Shop
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-lg font-bold text-slate-300 hover:text-cyan-400 uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => { onOpenRegister?.(); setIsOpen(false); }}
                className="text-lg font-bold text-slate-300 hover:text-pink-500 uppercase tracking-widest text-left"
              >
                Join Community
              </button>
              <a 
                href="https://mrbeast.store/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 text-white w-full py-3 rounded-lg font-bold uppercase neon-box-pink text-center block"
              >
                Visit Shop
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;