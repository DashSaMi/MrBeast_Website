'use client';

import React from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, X, Globe } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationCTA: React.FC<{ onOpenRegister: () => void }> = ({ onOpenRegister }) => {
  return (
    <Section id="join" className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 border-y border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-black uppercase italic text-white mb-2">
            Join The <span className="text-cyan-400">Community</span>
          </h2>
          <p className="text-slate-400 max-w-lg">
            Create an account to join challenges, comment on videos, earn badges, and participate in future giveaways.
          </p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onOpenRegister}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
          >
            Register Now
          </button>
          <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold uppercase tracking-wider rounded-lg border border-white/10 transition-all">
            Login
          </button>
        </div>
      </div>
    </Section>
  );
};

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={onClose}></div>
          
          {/* Animated Particles (Simple CSS) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 bg-cyan-500 h-2 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 bg-pink-500 h-3 rounded-full animate-bounce"></div>
          </div>

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3 hover:rotate-12 transition-transform">
                  <span className="text-2xl font-black text-white">MB</span>
                </div>
                <h2 className="text-3xl font-black uppercase text-slate-900 mb-2">Create Account</h2>
                <p className="text-slate-500 text-sm font-medium">Join the community and be part of future videos.</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-10 pr-4 text-slate-900 font-medium focus:outline-none focus:border-cyan-400 transition-colors" />
                  </div>
                  <div className="relative group">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
                    <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-10 pr-4 text-slate-900 font-medium focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                      <option>USA</option>
                      <option>UK</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-10 pr-4 text-slate-900 font-medium focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
                  <input type="password" placeholder="Password" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 pl-10 pr-4 text-slate-900 font-medium focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <input type="checkbox" id="challenges" className="w-4 h-4 text-cyan-500 rounded border-slate-300 focus:ring-cyan-400" />
                  <label htmlFor="challenges" className="text-xs font-bold text-slate-600 uppercase">I want to join upcoming challenges</label>
                </div>

                <button className="w-full bg-slate-900 text-white font-black uppercase tracking-wider py-4 rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-lg hover:shadow-cyan-500/30 mt-4 relative overflow-hidden group">
                  <span className="relative z-10">Create Account</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400 font-medium mb-4">Or sign up with</p>
                <div className="flex justify-center gap-4">
                  <button className="p-2 bg-slate-50 rounded-full border border-slate-100 hover:bg-slate-100 transition-colors"><Globe size={20} className="text-slate-600" /></button>
                  <button className="p-2 bg-slate-50 rounded-full border border-slate-100 hover:bg-slate-100 transition-colors"><User size={20} className="text-slate-600" /></button>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
              <p className="text-xs text-slate-500">Already have an account? <button className="text-cyan-600 font-bold hover:underline">Login</button></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};