import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 mt-8">
      {/* Background - In a real app this would be a video or optimized image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/beast_hero/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 animate-bounce">
            Official Website
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 drop-shadow-2xl">
            Changing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-text-blue">The World</span><br />
            One <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 neon-text-pink">Idea</span> At A Time
          </h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Watch crazy challenges, massive giveaways, and world-record breaking videos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase text-base tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 neon-box-blue flex items-center gap-3">
              <span className="relative z-10 flex items-center gap-2"><PlayCircle size={24} fill="black" /> Watch Latest</span>
            </button>
            <button className="group px-8 py-4 bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-black uppercase text-base tracking-widest rounded-full transition-all hover:scale-105 flex items-center gap-3">
              Explore Projects <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>
  );
};

export default Hero;