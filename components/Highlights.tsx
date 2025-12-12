'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Section from './Section';

const HIGHLIGHTS = [
  { 
    title: "Ranking MrBeast Charity Stream Moments!", 
    img: "/images/rnading mr beast charity stream.png", 
    url: "https://www.youtube.com/shorts/y1jU9f3tFpc"
  },
  { 
    title: "Last One To Fall Win $10,000", 
    img: "/images/last to fall win.png", 
    url: "https://www.youtube.com/shorts/954wJ3uHVAk"
  },
  { 
    title: "Find Your Dog, Win $10,000", 
    img: "/images/find you dog win 10 000 .png", 
    url: "https://www.youtube.com/shorts/69g-YcbmgQA"
  },
  { 
    title: "Mr.Beast vs CR7", 
    img: "/images/mr beast vs cr7.png", 
    url: "https://www.youtube.com/shorts/UhaNIbyBIXM"
  },
  { 
    title: "The $100,000 Mr. Beast challenge winner!", 
    img: "/images/the 100000 mr beast challenge winner.png", 
    url: "https://www.youtube.com/shorts/h-81SdW2zoQ"
  },
  { 
    title: "$100,000,000 Car Doors", 
    img: "/images/100000000 car door.png", 
    url: "https://www.youtube.com/shorts/IQxea9UB1nQ"
  },
  { 
    title: "Human vs Jet Engine", 
    img: "/images/human vs jet engine.png", 
    url: "https://www.youtube.com/shorts/ZNt_GoOBHq8"
  },
];

const Highlights: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="iconic-moments" className="bg-slate-900 border-b border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">
          Iconic <span className="text-cyan-400">Moments</span>
        </h3>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
      >
        {HIGHLIGHTS.map((item, index) => (
          <motion.div 
            key={index}
            className="flex-none w-80 snap-center relative group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
          >
            <div className="relative overflow-hidden rounded-xl aspect-video border-2 border-transparent group-hover:border-cyan-400 transition-all neon-box-blue">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play fill="white" className="ml-1" />
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                <Play size={10} fill="white" /> SHORTS
              </div>
            </div>
            <h4 className="mt-3 text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Highlights;