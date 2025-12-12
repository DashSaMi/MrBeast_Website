import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", fullWidth = false }) => {
  return (
    <section id={id} className={`relative py-20 ${className} overflow-hidden`}>
      <div className={`${fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-8 max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;