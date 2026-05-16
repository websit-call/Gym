'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const trainers = [
  {
    name: 'Vikram Singh',
    role: 'Head Strength Coach',
    image: 'https://picsum.photos/seed/trainer1/600/800',
    exp: '12+ Years Exp.',
  },
  {
    name: 'Anjali Desai',
    role: 'Yoga & Mobility Expert',
    image: 'https://picsum.photos/seed/trainer2/600/800',
    exp: '8+ Years Exp.',
  },
  {
    name: 'Rahul Sharma',
    role: 'CrossFit Specialist',
    image: 'https://picsum.photos/seed/trainer3/600/800',
    exp: '10+ Years Exp.',
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-16 sm:py-20 md:py-24 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
            >
              Expert Coaches
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
            >
              Meet Your <span className="text-brand-red">Masters</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-brand-red hover:bg-brand-red/10 text-white text-[10px] uppercase tracking-widest font-bold rounded-lg transition-colors inline-block">
              View All Trainers
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-[#101010] aspect-[3/4] border border-white/10"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-2">{trainer.exp}</p>
                <h4 className="text-2xl font-black italic text-white uppercase mb-1">{trainer.name}</h4>
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6">{trainer.role}</p>

                {/* Social Links shown on hover */}
                <div className="flex gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand-red transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
