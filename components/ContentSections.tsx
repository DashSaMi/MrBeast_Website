import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Heart, Globe, Droplet, ArrowRight, Instagram, Youtube, Twitter, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { JOBS, PROJECTS } from '../constants';

// --- About Section ---
export const About: React.FC = () => (
  <Section id="about" className="bg-slate-900">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-30 blur-xl"></div>
        <img 
          src="/images/mr beast image.jpg" 
          alt="Jimmy Donaldson" 
          className="relative rounded-3xl border-2 border-white/10 shadow-2xl w-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6">
          Who Is <span className="text-cyan-400">MrBeast?</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Jimmy Donaldson, better known as MrBeast, is an American YouTube personality, entrepreneur, and philanthropist. He has been credited with pioneering a genre of YouTube videos that centers on expensive stunts and challenges.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          His mission is simple: <strong>Make the best videos possible and help as many people as he can.</strong>
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" /> <span>Content Creator</span>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" /> <span>Philanthropist</span>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" /> <span>Entrepreneur</span>
          </div>
        </div>
        
        <a 
          href="https://www.youtube.com/@MrBeast" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wider rounded-full shadow-lg hover:shadow-red-500/40 transition-all hover:scale-105"
        >
          <Youtube size={24} fill="currentColor" /> Watch MrBeast
        </a>
      </div>
    </div>
  </Section>
);

// --- Philanthropy Section ---
export const Philanthropy: React.FC = () => (
  <Section id="philanthropy" className="bg-white text-slate-900">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">
        Beast <span className="text-green-600">Philanthropy</span>
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
        We don't just make videos, we make a difference. 100% of profits from our philanthropy channel go to charity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'Team Trees', count: '24,000,000+', label: 'Trees Planted', color: 'bg-green-100 text-green-700' },
        { title: 'Team Seas', count: '33,000,000+', label: 'Lbs Trash Removed', color: 'bg-blue-100 text-blue-700' },
        { title: 'Food Bank', count: '5,000,000+', label: 'Meals Served', color: 'bg-orange-100 text-orange-700' }
      ].map((item, idx) => (
        <div key={idx} className={`p-8 rounded-3xl ${item.color} flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-xl`}>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
            <Heart className="w-8 h-8 opacity-80" />
          </div>
          <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
          <div className="text-4xl font-black mb-2">{item.count}</div>
          <p className="font-bold opacity-70 uppercase tracking-widest text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  </Section>
);

// --- Jobs Section ---
export const Jobs: React.FC = () => (
  <Section id="jobs" className="bg-slate-950 border-t border-white/5">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
      <div>
        <h2 className="text-4xl font-black uppercase italic text-white mb-2">
          Join The <span className="text-pink-500">Crew</span>
        </h2>
        <p className="text-slate-400">Want to help us change the world?</p>
      </div>
      <a 
        href="https://www.mrbeastjobs.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 lg:mt-0 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
      >
        View All Openings <ArrowRight size={18} />
      </a>
    </div>

    <div className="grid gap-4">
      {JOBS.map((job, idx) => (
        <div key={idx} className="bg-slate-900 border border-white/5 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between hover:border-pink-500/50 transition-colors group">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors">{job.title}</h4>
            <div className="text-slate-500 text-sm font-medium flex gap-4 justify-center md:justify-start mt-1">
              <span>{job.department}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.type}</span>
            </div>
          </div>
          <button className="px-6 py-2 rounded-lg bg-pink-500/10 text-pink-400 font-bold uppercase text-sm hover:bg-pink-500 hover:text-white transition-all">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </Section>
);

// --- Water Section ---
export const Water: React.FC = () => (
  <Section id="water" className="bg-gradient-to-b from-sky-400 to-blue-600 relative overflow-hidden text-white" fullWidth>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
      <div className="w-full md:w-1/2">
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          src="/images/prime image.png" 
          alt="Prime Hydration" 
          className="max-h-[800px] w-full object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4">
          New Product
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-6">
          Hydrate <br />Like A <span className="text-yellow-300">Beast</span>
        </h2>
        <p className="text-xl font-medium text-white/90 mb-8 max-w-md mx-auto md:mx-0">
          Ethically sourced, 100% recycled plastic, and tastes amazing.
        </p>
        <a 
          href="https://mrbeast.store/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-black uppercase text-xl tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl"
        >
          Buy Now
        </a>
      </div>
    </div>
  </Section>
);

// --- Projects Section ---
export const Projects: React.FC = () => (
  <Section id="projects" className="bg-slate-950">
    <h2 className="text-4xl md:text-6xl font-black uppercase italic text-center text-white mb-16">
      Mega <span className="text-cyan-400">Projects</span>
    </h2>
    <div className="space-y-24">
      {PROJECTS.map((proj, idx) => (
        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
          <div className="w-full md:w-3/5">
            <div className="relative group overflow-hidden rounded-3xl border-2 border-slate-800">
              <img src={proj.image} alt={proj.title} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <div className="text-cyan-400 font-bold uppercase tracking-widest mb-2">{proj.stats}</div>
                <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic">{proj.title}</h3>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">{proj.title}</h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">{proj.description}</p>
            <a 
              href={
                proj.title === 'Team Trees' ? 'https://teamtrees.org/' :
                proj.title === 'Team Seas' ? 'https://teamseas.org/' :
                '#philanthropy'
              }
              target={proj.title === 'Beast Philanthropy' ? undefined : '_blank'}
              rel={proj.title === 'Beast Philanthropy' ? undefined : 'noopener noreferrer'}
              className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
            >
              Learn More <ArrowRight size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// --- Socials Section ---
export const Socials: React.FC = () => (
  <Section id="socials" className="bg-slate-900 overflow-hidden">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black uppercase italic text-white">
        Join The <span className="text-pink-500">Community</span>
      </h2>
    </div>
    <div className="flex justify-center gap-8 flex-wrap">
      {[
        { icon: Youtube, label: '450M Subs', color: 'hover:text-red-500', url: 'https://www.youtube.com/@MrBeast' },
        { icon: Instagram, label: '40M Followers', color: 'hover:text-pink-500', url: 'https://www.instagram.com/mrbeast/' },
        { icon: Twitter, label: '30M Followers', color: 'hover:text-blue-400', url: 'https://twitter.com/MrBeast' },
        { icon: Globe, label: 'Discord', color: 'hover:text-indigo-400', url: 'https://discord.gg/mrbeast' },
      ].map((s, i) => (
        <a 
          key={i} 
          href={s.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group flex flex-col items-center gap-3 p-6 bg-slate-800 rounded-2xl min-w-[150px] border border-white/5 hover:border-white/20 transition-all ${s.color}`}
        >
          <s.icon size={40} className="transition-transform group-hover:scale-110" />
          <span className="font-bold text-white uppercase text-sm">{s.label}</span>
        </a>
      ))}
    </div>
  </Section>
);

// --- Beast Games Section ---
export const BeastGames: React.FC = () => (
  <Section id="beast-games" className="bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-purple-500/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4 text-purple-300">
          Gaming Platform
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4">
          Beast <span className="text-purple-400">Games</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          The ultimate gaming experience where challenges meet entertainment. Play, compete, and win epic prizes!
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
          <motion.a
            href="https://www.beastgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            <img
              src="/images/beast-games.webp"
              alt="Beast Games"
              className="relative rounded-3xl border-2 border-purple-500/30 shadow-2xl w-full"
            />
          </motion.a>
          <motion.a
            href="https://www.beastgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-4 -right-4 bg-purple-600 px-6 py-3 rounded-full font-black uppercase text-sm text-white shadow-xl cursor-pointer"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.4)",
                "0 0 40px rgba(139, 92, 246, 0.6)",
                "0 0 20px rgba(139, 92, 246, 0.4)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.15 }}
          >
            Play Now
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-purple-400 mb-2 uppercase">Epic Challenges</h3>
              <p className="text-slate-300">Compete in the most insane challenges ever created. Only the best survive!</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-purple-400 mb-2 uppercase">Massive Prizes</h3>
              <p className="text-slate-300">Win life-changing prizes. From cash to cars, we give it all away!</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-purple-400 mb-2 uppercase">Live Events</h3>
              <p className="text-slate-300">Join millions of players in real-time events and tournaments.</p>
            </motion.div>
          </div>

          <motion.a
            href="https://www.beastgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all inline-flex items-center justify-center"
          >
            Join The Games <ArrowRight className="inline ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </Section>
);

// --- Beast Theme Park Section ---
export const BeastThemePark: React.FC = () => (
  <Section id="beast-theme-park" className="bg-gradient-to-br from-orange-950 via-slate-950 to-yellow-950 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-orange-500/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest mb-4 text-orange-300">
          Coming Soon
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-4">
          Beast <span className="text-orange-400">Theme Park</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          The world's most epic theme park experience. Opening soon in <span className="font-bold text-orange-400">Riyadh, Saudi Arabia</span>!
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
          <motion.a
            href="https://riyadhseason.com/en/zones/beast-land-rs25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="block"
          >
            <img
              src="/images/beast theme park.avif"
              alt="Beast Theme Park"
              className="relative rounded-3xl border-2 border-orange-500/30 shadow-2xl w-full"
            />
          </motion.a>
          <motion.a
            href="https://riyadhseason.com/en/zones/beast-land-rs25"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-4 -left-4 bg-orange-600 px-6 py-3 rounded-full font-black uppercase text-sm text-white shadow-xl cursor-pointer"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(251, 146, 60, 0.4)",
                "0 0 40px rgba(251, 146, 60, 0.6)",
                "0 0 20px rgba(251, 146, 60, 0.4)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.15 }}
          >
            Riyadh, Saudi Arabia
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 p-6 rounded-xl hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-orange-400 mb-2 uppercase">Epic Rides</h3>
              <p className="text-slate-300">Experience the most thrilling and unique rides you've ever seen. Built for the ultimate adventure!</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 p-6 rounded-xl hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-orange-400 mb-2 uppercase">Live Challenges</h3>
              <p className="text-slate-300">Participate in real-life challenges inspired by MrBeast videos. Win prizes while having fun!</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 p-6 rounded-xl hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-2xl font-black text-orange-400 mb-2 uppercase">World-Class Experience</h3>
              <p className="text-slate-300">State-of-the-art facilities, amazing food, and unforgettable memories await you.</p>
            </motion.div>
          </div>

          <motion.a
            href="https://riyadhseason.com/en/zones/beast-land-rs25"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all inline-flex items-center justify-center"
          >
            Get Updates <ArrowRight className="inline ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </Section>
);

// --- Contact Section ---
export const Contact: React.FC = () => (
  <Section id="contact" className="bg-slate-950 py-24">
    <div className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl font-black uppercase italic text-white mb-4">Contact Us</h2>
        <p className="text-slate-400">Business inquiries, partnerships, or just want to say hi?</p>
      </div>

      <form className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="bg-slate-950 border border-slate-700 text-white rounded-xl p-4 focus:outline-none focus:border-cyan-400 transition-colors w-full" />
          <input type="email" placeholder="Email" className="bg-slate-950 border border-slate-700 text-white rounded-xl p-4 focus:outline-none focus:border-cyan-400 transition-colors w-full" />
        </div>
        <select className="bg-slate-950 border border-slate-700 text-white rounded-xl p-4 focus:outline-none focus:border-cyan-400 transition-colors w-full appearance-none">
          <option>General Inquiry</option>
          <option>Business/Sponsorship</option>
          <option>Press</option>
          <option>Fan Mail</option>
        </select>
        <textarea placeholder="Message" rows={4} className="bg-slate-950 border border-slate-700 text-white rounded-xl p-4 focus:outline-none focus:border-cyan-400 transition-colors w-full"></textarea>
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
          Send Message
        </button>
      </form>
    </div>
  </Section>
);