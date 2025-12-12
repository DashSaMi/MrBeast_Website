import React from 'react';
import Section from './Section';
import { CREATOR_TIMELINE, FUTURE_FEATURES } from '../constants';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Twitter, CheckCircle, ArrowRight } from 'lucide-react';

export const CreatorProfile: React.FC = () => {
  return (
    <Section id="creator" className="bg-slate-950 border-t border-white/5">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Profile Card */}
        <div className="w-full lg:w-2/5">
          <motion.div 
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative bg-slate-900 border-2 border-pink-500 rounded-3xl p-12 shadow-[0_0_30px_rgba(236,72,153,0.2)]"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full p-1 mb-8">
              <img 
                src="/images/youtuber.jpg"
                alt="Sami CroCode - YouTube Channel" 
                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-black text-white uppercase italic mb-3">Sami CroCode</h3>
              <p className="text-pink-500 font-bold text-lg mb-8">Building this live on YouTube</p>
              
              <div className="flex justify-center gap-4 mb-10">
                <a 
                  href="https://www.youtube.com/@Sami_CroCode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800 rounded-full hover:text-red-500 hover:bg-red-500/10 cursor-pointer transition-colors"
                >
                  <Youtube size={24} />
                </a>
                <div className="p-4 bg-slate-800 rounded-full hover:text-pink-500 hover:bg-pink-500/10 cursor-pointer transition-colors">
                  <Instagram size={24} />
                </div>
                <div className="p-4 bg-slate-800 rounded-full hover:text-blue-400 hover:bg-blue-400/10 cursor-pointer transition-colors">
                  <Twitter size={24} />
                </div>
              </div>
              
              <a
                href="https://www.youtube.com/@Sami_CroCode"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 hover:bg-pink-500 text-white font-bold uppercase py-4 rounded-xl transition-all shadow-lg hover:shadow-pink-500/25 text-center"
              >
                Subscribe Channel
              </a>
            </div>
          </motion.div>
        </div>

        {/* Content & Timeline */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-6">
            Meet The <span className="text-cyan-400">Creator</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
            Hi! I’m the developer behind this website. I build crazy web projects inspired by MrBeast. 
            This site is part of a video where I show the entire process from design to code.
          </p>

          <div className="space-y-6">
            {CREATOR_TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-16 text-right font-black text-pink-500 uppercase text-sm whitespace-nowrap pt-1">
                  {item.day}
                </div>
                <div className="relative flex-1 bg-slate-900 border border-white/10 p-4 rounded-xl hover:border-cyan-400 transition-colors">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-700 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                  <h4 className="font-bold text-white uppercase mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="mt-10 flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest hover:text-white transition-colors group">
            Watch The Full Build Video <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export const FeatureShowcase: React.FC = () => {
  return (
    <Section id="features" className="bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4">
          What We Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Build</span>
        </h2>
        <p className="text-slate-400">Vote for the next features to be added to the site.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {FUTURE_FEATURES.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all group"
          >
            <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
              <feature.icon size={28} />
            </div>
            <h3 className="text-xl font-black text-white uppercase mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{feature.description}</p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500 group-hover:text-cyan-400 transition-colors">
              <CheckCircle size={14} /> In Development
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center relative z-10">
        <button className="bg-transparent border-2 border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
          Vote For Next Feature
        </button>
      </div>
    </Section>
  );
};