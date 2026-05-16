'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck, Target, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Trainers',
    desc: 'Work with the best certified professionals in the fitness industry.'
  },
  {
    icon: Target,
    title: 'Custom Plans',
    desc: 'Tailored workout and nutrition plans to crush your specific goals.'
  },
  {
    icon: Zap,
    title: 'Modern Equipment',
    desc: 'State-of-the-art machines and free weights for maximum results.'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    desc: 'Join thousands of members who have successfully transformed their lives.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#050505] relative">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
                  alt="Kettlebell workout"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
                  alt="Battle ropes"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[28rem] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
                alt="Deadlift training"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/80 to-transparent mix-blend-multiply" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col items-center justify-center text-center z-10 w-40 h-40 rounded-full border-4 border-[#050505]"
            >
              <p className="text-4xl font-black text-brand-red italic">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mt-1">Years of<br/>Excellence</p>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">About The Gym</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white mb-6 uppercase tracking-tight">
                Not Just a Gym. <br/> A <span className="text-brand-red">Lifestyle.</span>
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Iron Pulse Fitness is Kolkata&apos;s premier luxury fitness destination. We believe that fitness is not a mere hobby, but a lifestyle choice. Our facility combines world-class equipment, elite personal trainers, and a supportive community to help you achieve your ultimate physical potential.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-red border border-white/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
