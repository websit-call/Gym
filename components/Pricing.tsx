'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly Pass',
    price: '₹2,499',
    period: '/month',
    desc: 'Perfect for short-term goals and trying out our facilities.',
    features: [
      'Access to all gym equipment',
      'Free fitness consultation',
      'Locker room access',
      '1 Group class per week'
    ]
  },
  {
    name: 'Quarterly Pro',
    price: '₹6,499',
    period: '/3 months',
    desc: 'Our most popular plan for committed fitness enthusiasts.',
    isPopular: true,
    features: [
      'Everything in Monthly',
      'Unlimited group classes',
      '1 Personal Training session/mo',
      'Customized diet plan',
      'Guest pass (2/month)'
    ]
  },
  {
    name: 'Annual Elite',
    price: '₹19,999',
    period: '/year',
    desc: 'The ultimate package for a complete lifestyle transformation.',
    features: [
      'Everything in Quarterly',
      '4 Personal Training sessions/mo',
      'Advanced biometric tracking',
      'Free supplement starter kit',
      'Exclusive VIP lounge access'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
          >
            Membership Plans
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
          >
            Invest In <span className="text-brand-red">Yourself</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.isPopular 
                  ? 'bg-[#101010] border border-brand-red shadow-2xl lg:-translate-y-4 shadow-brand-red/20' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-brand-red text-white text-xs font-bold uppercase tracking-widest py-2 text-center">
                  Recommended Best Value
                </div>
              )}
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-2">{plan.name}</h4>
                <p className="text-gray-400 text-xs mb-6 h-10">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1 mb-8 flex-wrap">
                  <span className="text-4xl md:text-5xl font-black italic text-white">{plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                      <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-brand-red text-white' : 'bg-white/10 text-white'}`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-lg font-bold text-[11px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                    plan.isPopular
                      ? 'bg-brand-red text-white hover:bg-brand-red-dark'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
