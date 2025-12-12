import React from 'react';
import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img
              src="/images/mr beast logo.jpg"
              alt="MrBeast logo"
              className="w-14 h-14 rounded-lg object-cover mb-6 shadow-lg border border-white/10"
              loading="lazy"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Making the world a better place through entertainment and philanthropy.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@MrBeast" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
              <a href="https://twitter.com/MrBeast" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/mrbeast/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/MrBeast6000" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="https://www.mrbeastjobs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#philanthropy" className="hover:text-cyan-400 transition-colors">Philanthropy</a></li>
              <li><a href="https://mrbeast.store/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="https://www.beastgames.com/private-policy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.beastgames.com/private-policy" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="https://www.beastgames.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Contest Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="Enter your email" className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400" />
              <button className="bg-white text-slate-950 font-bold uppercase py-3 rounded-lg hover:bg-cyan-400 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} MrBeast. All rights reserved. Not officially affiliated. Fan clone for demo purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;