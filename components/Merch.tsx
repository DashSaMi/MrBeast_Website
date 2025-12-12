import React from 'react';
import Section from './Section';
import { MERCH } from '../constants';
import { motion } from 'framer-motion';

const Merch: React.FC = () => {
  return (
    <Section id="merch" className="bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-5xl font-black uppercase italic text-white mb-2">
            Shop <span className="text-pink-500 neon-text-pink">Merch</span>
          </h2>
          <p className="text-slate-400">Limited drops. High quality. Beast style.</p>
        </div>
        <a 
          href="https://mrbeast.store/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block text-pink-500 font-bold uppercase tracking-widest hover:text-white transition-colors"
        >
          View All Products
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MERCH.map((item, idx) => (
          <a 
            key={idx} 
            href="https://mrbeast.store/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-pink-500 transition-colors neon-box-pink"
          >
            <div className="aspect-square relative overflow-hidden bg-slate-700">
              <img 
                src={item.imageFront} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" 
              />
              <img 
                src={item.imageBack} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 scale-110" 
              />
              <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                New Arrival
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white uppercase">{item.name}</h3>
                <span className="text-cyan-400 font-bold text-lg">{item.price}</span>
              </div>
              <div className="w-full mt-4 bg-slate-900 text-white font-bold uppercase py-3 rounded-lg border border-slate-700 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all text-center">
                Shop Now
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Merch;