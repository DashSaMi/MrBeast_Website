import React from 'react';
import Section from './Section';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';
import { Twitter, Instagram } from 'lucide-react';

const TeamGrid: React.FC = () => {
  return (
    <Section id="team" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white mb-4">
          Meet The <span className="text-cyan-400">Boys</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {TEAM.map((member, index) => (
          <motion.div 
            key={index}
            className="group relative text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 border-4 border-slate-800 group-hover:border-cyan-400 transition-colors neon-box-blue mx-auto max-w-[180px]">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {member.twitter && (
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-lg"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {member.instagram && (
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-lg"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-black text-white uppercase">{member.name}</h3>
            <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TeamGrid;