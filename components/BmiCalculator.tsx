'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Dumbbell, Scale, Ruler } from 'lucide-react';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!height || !weight) return;

    const h = parseFloat(height) / 100; // convert cm to meters
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory('Normal Weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-zinc-900 to-transparent blur-3xl transform rotate-12" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
            >
              Analyze Your Health
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight mb-6"
            >
              CALCULATE YOUR <span className="text-brand-red">BMI</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed"
            >
              Body Mass Index (BMI) is a simple calculation using a person&apos;s height and weight. Find out where you stand and let us help you reach your ideal physique.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={calculateBMI} 
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Height (cm)</label>
                  <div className="relative">
                    <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="number" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Weight (kg)</label>
                  <div className="relative">
                    <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full bg-white/5 border border-white/10 text-white rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
              <button 
                type="submit"
                className="px-8 py-3 bg-brand-red hover:bg-brand-red-dark text-white text-[11px] font-bold rounded-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 uppercase tracking-widest w-fit"
              >
                <Activity className="w-4 h-4" /> Calculate Now
              </button>
            </motion.form>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {bmi ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-[#101010] border border-white/10 rounded-2xl p-8 text-center"
                >
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Your Result</h4>
                  <div className="text-6xl font-black text-white italic mb-4">
                    {bmi}
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-brand-red/10 border border-brand-red/20 rounded-lg mb-6">
                    <span className="text-xs font-bold text-brand-red uppercase tracking-widest">Status: {category}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    A BMI of 18.5 - 24.9 is considered normal. Regardless of your score, our experts can help you build the best version of yourself.
                  </p>
                  <button onClick={() => { setBmi(null); setHeight(''); setWeight(''); }} className="text-gray-400 hover:text-white uppercase text-[10px] font-bold tracking-widest underline decoration-white/20 underline-offset-4">Recalculate</button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#101010] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto md:h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                    <Dumbbell className="w-6 h-6 text-gray-500" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 uppercase">Awaiting Values</h4>
                  <p className="text-gray-500 text-xs max-w-xs">Enter your height and weight in the form to see your Body Mass Index (BMI) analysis.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
