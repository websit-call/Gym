'use client';

import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] pointer-events-none mix-blend-luminosity"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group text-2xl font-black tracking-tighter mb-6">
              <span className="bg-brand-red px-2 py-0.5 rounded italic text-white group-hover:scale-105 transition-transform">IP</span>
              <span className="text-white">IRON PULSE <span className="text-brand-red">FITNESS</span></span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Transform your body and upgrade your life at Kolkata&apos;s most premium and exclusive fitness facility. 
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Classes', 'Our Trainers', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-brand-red transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms & Conditions', 'Membership Rules', 'Refund Policy', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Subscribe for fitness tips, motivation, and exclusive offers.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-red hover:bg-brand-red-dark text-white rounded-lg flex items-center justify-center transition-colors">
                <span className="sr-only">Subscribe</span>
                &#x279C;
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Iron Pulse Fitness. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
