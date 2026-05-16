'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 px-4 sm:px-6' : 'bg-transparent py-4 px-4 sm:px-6'
      }`}
    >
      <div className="container mx-auto px-0 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group text-lg sm:text-2xl font-black tracking-tighter">
          <span className="bg-brand-red px-1.5 sm:px-2 py-0.5 rounded italic text-white group-hover:scale-105 transition-transform text-xs sm:text-base">IP</span>
          <span>IRON PULSE <span className="text-brand-red">FITNESS</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-red/20 transition-all hover:scale-105 active:scale-95"
          >
            JOIN NOW
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-3xl border-b border-white/10 md:hidden overflow-y-auto pb-32"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-400 hover:text-white hover:text-brand-red py-2 border-b border-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-brand-red text-white font-bold rounded-full shadow-lg shadow-brand-red/20 uppercase"
              >
                Join Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
