import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import Section from './Section';

const Stats: React.FC = () => {
  return (
    <Section id="stats" className="bg-slate-950 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all hover:bg-slate-900 group"
          >
            <div className="mb-4 p-4 bg-slate-800 rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
              <stat.icon size={32} />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
              {stat.value}
            </h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;