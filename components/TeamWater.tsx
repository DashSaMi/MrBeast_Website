import React from 'react';
import Section from './Section';
import { TEAM_WATER_IMPACT } from '../constants';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

const TeamWater: React.FC = () => {
  return (
    <Section id="team-water" className="bg-gradient-to-b from-blue-500 via-cyan-600 to-blue-700 relative overflow-hidden" fullWidth>
      {/* Wave Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-slate-950">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="container mx-auto px-4 py-24 relative z-10 text-slate-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <Droplet className="text-blue-700 fill-blue-700 animate-bounce" size={20} />
            <span className="font-bold uppercase tracking-wider text-blue-900">Project: Clean Water</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white drop-shadow-lg mb-6">
            Team <span className="text-blue-900">Water</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-semibold text-white/90 leading-relaxed">
            Team Water is dedicated to bringing clean drinking water to communities worldwide. 
            Inspired by the scale of our biggest challenges, we're drilling wells, building systems, 
            and changing lives one drop at a time.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {TEAM_WATER_IMPACT.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <item.icon className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{item.value}</div>
              <div className="text-blue-600 font-bold uppercase text-xs tracking-widest">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-white/30"
          >
            <img src="/images/main team water.jpg" alt="Building Wells" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-white/30 md:-mt-8"
          >
            <img src="/images/team water 3.jpg" alt="Community Joy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-80 border-4 border-white/30"
          >
            <img src="/images/team water.webp" alt="Team Water Impact" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-blue-900 text-white px-10 py-4 rounded-full font-black uppercase text-lg tracking-widest hover:bg-white hover:text-blue-900 transition-all shadow-xl hover:shadow-2xl">
            Donate Water
          </button>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-black uppercase text-lg tracking-widest hover:bg-blue-100 transition-all shadow-xl">
            Join Team Water
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TeamWater;