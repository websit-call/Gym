'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#050505] border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3"
            >
              Get In Touch
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white uppercase tracking-tight mb-8"
            >
              Start Your <span className="text-brand-red">Journey</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm mb-12 max-w-lg leading-relaxed"
            >
              Ready to transform your body? Drop by our facility, call us, or send a message. Our team is ready to set you up for success.
            </motion.p>
            
            <div className="space-y-8 mb-12">
              <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-red flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Location</h4>
                  <p className="text-gray-500 text-xs">Sector V, Salt Lake, Kolkata<br/>West Bengal, India</p>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.1}} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Phone</h4>
                  <p className="text-gray-500 text-xs">+91 98765 43210</p>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.2}} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">Email</h4>
                  <p className="text-gray-500 text-xs">contact@ironpulsefit.com</p>
                </div>
              </motion.div>
            </div>

            <motion.a 
              href="https://wa.me/919876543210" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20 uppercase tracking-widest"
            >
              <MessageCircle className="w-5 h-5" /> Message on WhatsApp
            </motion.a>
          </div>

          {/* Form and Map */}
          <div>
            <motion.form 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#101010] border border-white/10 rounded-2xl p-8 mb-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h4 className="text-xl font-bold text-white mb-6 uppercase">Send a Message</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all"
                />
                <textarea 
                  placeholder="How can we help you?" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-all resize-none"
                  required
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all"
                >
                  Submit Request
                </button>
              </div>
            </motion.form>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-full h-48 bg-[#101010] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center relative grayscale hover:grayscale-0 transition-all duration-500"
            >
              {/* Google Maps Placeholder - Use iframe in real app */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop')] opacity-50 bg-cover bg-center"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="w-10 h-10 text-brand-red mb-2 drop-shadow-md" />
                <span className="font-bold text-white uppercase tracking-wider drop-shadow-md">View on Google Maps</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
