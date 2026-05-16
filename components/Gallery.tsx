'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  { src: 'https://picsum.photos/seed/gym1/800/600', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'https://picsum.photos/seed/gym2/400/400', span: 'col-span-1 row-span-1' },
  { src: 'https://picsum.photos/seed/gym3/400/400', span: 'col-span-1 row-span-1' },
  { src: 'https://picsum.photos/seed/gym4/400/800', span: 'col-span-1 row-span-2' },
  { src: 'https://picsum.photos/seed/gym5/800/400', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'https://picsum.photos/seed/gym6/400/400', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
          >
            The Facility
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
          >
            Inside <span className="text-brand-red">Iron Pulse</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden group border border-white/10 bg-[#101010] ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Gym Facility Gallery ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
