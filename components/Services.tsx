'use client';

import { motion } from 'motion/react';
import { Dumbbell, Flame, Users, Activity, Orbit, Crosshair, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Strength Training',
    description: 'Build functional strength and muscle mass with our extensive free weights and plate-loaded machines.',
    icon: Dumbbell,
  },
  {
    title: 'Fat Loss',
    description: 'High-intensity interval training designed to maximize calorie burn and shred body fat fast.',
    icon: Flame,
  },
  {
    title: 'Personal Training',
    description: '1-on-1 coaching with elite trainers to guarantee perfect form and accelerated results.',
    icon: Users,
  },
  {
    title: 'CrossFit',
    description: 'Constantly varied, high-intensity functional movements to build supreme physical conditioning.',
    icon: Crosshair,
  },
  {
    title: 'Yoga Studio',
    description: 'Improve flexibility, core strength, and mental focus in our dedicated, peaceful yoga space.',
    icon: Orbit,
  },
  {
    title: 'Functional Fitness',
    description: 'Train your body for real-life activities with sleds, battle ropes, and plyometric boxes.',
    icon: Activity,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white/5 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
          >
            Programs & Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
          >
            Push Your <span className="text-brand-red">Limits</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-brand-red/50 transition-colors overflow-hidden flex flex-col"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-brand-red mb-6 border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 uppercase">{service.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">{service.description}</p>
                  
                  <a href="#contact" className="inline-flex w-fit items-center gap-2 text-[10px] font-bold text-white group-hover:text-brand-red transition-colors uppercase tracking-widest">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
