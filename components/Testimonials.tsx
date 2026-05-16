'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Karan Mathur',
    role: 'Lost 18kg in 6 months',
    text: "Joining Iron Pulse was the best decision of my life. The trainers don't just guide you, they push you beyond what you thought was possible. The community keeps you going on days you want to quit.",
    imageBefore: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=400&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Sneha Banerjee',
    role: 'Gained 5kg muscle mass',
    text: "As a woman, I was intimidated by the weight section. The coaches here built my confidence and a program that completely transformed my physique. Pure luxury and pure results.",
    imageBefore: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
          >
            Real Transformations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
          >
            Success <span className="text-brand-red">Stories</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Before/After Images */}
              <div className="flex-shrink-0 flex gap-2 relative">
                <div className="relative w-28 h-40 rounded-xl overflow-hidden grayscale opacity-70">
                  <Image src={item.imageBefore} alt={`${item.name} Before`} fill sizes="112px" className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 py-1 text-center text-[10px] uppercase font-bold text-white tracking-widest">Before</div>
                </div>
                <div className="relative w-32 h-44 rounded-xl overflow-hidden shadow-2xl -mt-4 border-2 border-brand-red z-10">
                  <Image src={item.imageAfter} alt={`${item.name} After`} fill sizes="128px" className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-red py-1 text-center text-[10px] uppercase font-bold text-white tracking-widest">After</div>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6 text-sm leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
                <div>
                  <h4 className="text-white text-sm font-bold uppercase">{item.name}</h4>
                  <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
