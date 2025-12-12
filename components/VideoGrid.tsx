import React from 'react';
import Section from './Section';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const imageMap: { [key: string]: string } = {
  'World\'s Fastest Man Vs Robot!.webp': '/images/World\'s Fastest Man Vs Robot!.webp',
  '100 people vs worlds biggest trap.webp': '/images/100 people vs worlds biggest trap.webp',
  'I Saved 1,000 Animals From Dying.webp': '/images/I Saved 1,000 Animals From Dying.webp',
  '100 Kids Vs World\'s Strongest Man!.webp': '/images/100 Kids Vs World\'s Strongest Man!.webp',
  'would You Risk Dying For $500,000.webp': '/images/would You Risk Dying For $500,000.webp',
  'Survive 30 Days Chained To Your Ex, Win $250,000.webp': '/images/Survive 30 Days Chained To Your Ex, Win $250,000.webp',
};

const VideoGrid: React.FC = () => {
  return (
    <Section id="videos" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white mb-4">
          Latest <span className="text-pink-500 neon-text-pink">Videos</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          The craziest challenges and biggest giveaways on the internet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEOS.map((video) => (
          <motion.div
            key={video.id}
            className="group block cursor-pointer"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-2xl">
              <img 
                src={imageMap[video.thumbnail] || video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider transform scale-90 group-hover:scale-100 transition-transform">
                  <Play size={20} fill="white" /> Watch Now
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight mb-2">
              {video.title}
            </h3>
            <p className="text-slate-500 font-bold text-sm uppercase">{video.views}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://www.youtube.com/@MrBeast" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border-2 border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
        >
          View Channel
        </a>
      </div>
    </Section>
  );
};

export default VideoGrid;