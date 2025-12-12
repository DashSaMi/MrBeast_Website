'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Stats from '../components/Stats';
import VideoGrid from '../components/VideoGrid';
import TeamGrid from '../components/TeamGrid';
import Merch from '../components/Merch';
import TeamWater from '../components/TeamWater';
import { CreatorProfile, FeatureShowcase } from '../components/CreatorSection';
import { RegistrationCTA, RegisterModal } from '../components/Auth';
import { About, Philanthropy, Jobs, Water, Projects, BeastGames, BeastThemePark, Socials, Contact } from '../components/ContentSections';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400 selection:text-black">
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
      
      <main className="flex flex-col">
        <Hero />
        <Highlights />
        <About />
        <Stats />
        <VideoGrid />
        <Philanthropy />
        <TeamGrid />
        <Jobs />
        <Merch />
        <Water /> {/* Feastables Water */}
        <Socials />
        <Projects />
        <BeastGames />
        <BeastThemePark />
        <Contact />
        
        {/* New Sections */}
        <TeamWater />
        <CreatorProfile />
        <FeatureShowcase />
        <RegistrationCTA onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      <Footer />
      
      {/* Modals */}
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}

