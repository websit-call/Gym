'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Iron Pulse Fitness Gym Background"
          fill
          className="object-cover opacity-60"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-red flex items-center gap-2 mb-4"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-brand-red"></span> PREMIUM ATHLETIC CLUB
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight sm:leading-none tracking-tight italic text-white mb-6 uppercase break-words"
          >
            Transform <br /> Your Body.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 mb-8 sm:mb-10 max-w-sm leading-relaxed"
          >
            Experience the pinnacle of luxury fitness in Kolkata. Our state-of-the-art facility combines science-based training with elite comfort.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto justify-center px-8 py-3.5 sm:py-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold rounded-full transition-transform hover:scale-105 flex items-center gap-2 text-sm shadow-lg shadow-brand-red/20 uppercase"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="w-full sm:w-auto justify-center px-8 py-3.5 sm:py-3 bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold rounded-full transition-colors flex items-center gap-2 group text-sm uppercase">
              <Play className="w-4 h-4 group-hover:text-brand-red transition-colors" />
              Watch Video
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 sm:mt-16 flex flex-wrap gap-4 max-w-md"
          >
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 min-w-[140px]">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Active Members</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 min-w-[140px]">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Elite Coaches</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
