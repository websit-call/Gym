'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const scheduleData = {
  Monday: [
    { time: '06:00 AM', class: 'CrossFit WOD', trainer: 'Rahul Sharma' },
    { time: '08:00 AM', class: 'Yoga Flow', trainer: 'Anjali Desai' },
    { time: '05:00 PM', class: 'Powerlifting', trainer: 'Vikram Singh' },
    { time: '07:00 PM', class: 'HIIT Burn', trainer: 'Priya Kapoor' },
  ],
  Tuesday: [
    { time: '06:00 AM', class: 'Strength Prep', trainer: 'Vikram Singh' },
    { time: '09:00 AM', class: 'Core Blast', trainer: 'Rahul Sharma' },
    { time: '06:00 PM', class: 'Mobility', trainer: 'Anjali Desai' },
  ],
  Wednesday: [
    { time: '06:00 AM', class: 'CrossFit WOD', trainer: 'Rahul Sharma' },
    { time: '08:00 AM', class: 'Ashtanga Yoga', trainer: 'Anjali Desai' },
    { time: '05:00 PM', class: 'Olympic Lifting', trainer: 'Vikram Singh' },
    { time: '07:00 PM', class: 'HIIT Burn', trainer: 'Priya Kapoor' },
  ],
  Thursday: [
    { time: '07:00 AM', class: 'Strength Prep', trainer: 'Vikram Singh' },
    { time: '10:00 AM', class: 'Core Blast', trainer: 'Rahul Sharma' },
    { time: '06:00 PM', class: 'Power Vinyasa', trainer: 'Anjali Desai' },
  ],
  Friday: [
    { time: '06:00 AM', class: 'CrossFit WOD', trainer: 'Rahul Sharma' },
    { time: '08:00 AM', class: 'Yoga Flow', trainer: 'Anjali Desai' },
    { time: '05:00 PM', class: 'Bodybuilding', trainer: 'Vikram Singh' },
    { time: '07:00 PM', class: 'Endurance', trainer: 'Priya Kapoor' },
  ],
  Saturday: [
    { time: '08:00 AM', class: 'Weekend Warrior', trainer: 'Team' },
    { time: '10:00 AM', class: 'Recovery Yoga', trainer: 'Anjali Desai' },
  ],
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <section id="schedule" className="py-16 sm:py-20 md:py-24 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
          >
            Class Schedule
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight"
          >
            Find Your <span className="text-brand-red">Rhythm</span>
          </motion.h3>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeDay === day 
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' 
                  : 'bg-[#101010] border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {scheduleData[activeDay as keyof typeof scheduleData]?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#101010] hover:bg-[#151515] border border-white/10 hover:border-brand-red/50 transition-colors rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex-shrink-0 w-32 border-l-4 border-brand-red pl-4">
                    <p className="font-black italic text-xl text-white">{item.time}</p>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-white uppercase tracking-wide mb-1">{item.class}</h4>
                    <p className="text-gray-500 text-xs tracking-widest uppercase font-bold">Trainer: <span className="text-gray-300">{item.trainer}</span></p>
                  </div>
                  <div>
                    <button className="px-6 py-2 bg-transparent border border-white/10 hover:bg-brand-red hover:border-brand-red shadow-lg hover:shadow-brand-red/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all">
                      Book Class
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
