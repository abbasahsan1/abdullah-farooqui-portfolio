import React from 'react';
import Terminal from './Terminal';
import { RESUME_DATA } from '../data';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] lg:min-h-screen pt-16 grid grid-cols-1 lg:grid-cols-3 border-b border-border">
      {/* Left Content */}
      <div className="lg:col-span-2 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative grid-bg">
        <div className="max-w-3xl">
          <p className="font-mono text-signal mb-4 tracking-widest uppercase text-xs md:text-sm font-medium">
            // STATUS: ONLINE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-sans font-bold tracking-tightest leading-[0.9] mb-8 text-foreground uppercase break-words">
            Scalable<br />
            Systems.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed mb-10 font-medium">
            {RESUME_DATA.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-paper font-mono text-sm tracking-wide hover:bg-signal transition-colors duration-200"
            >
              VIEW_SYSTEMS
            </a>
            <a 
              href={RESUME_DATA.contact.github ? `https://${RESUME_DATA.contact.github}` : '#'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground text-foreground font-mono text-sm tracking-wide hover:bg-background hover:text-signal hover:border-signal transition-all duration-200"
            >
              GITHUB_REPO
            </a>
          </div>
        </div>
      </div>

      {/* Right Terminal - Hidden on mobile to prevent unnecessary render cycles and crashes */}
      <div className="hidden lg:block lg:col-span-1 h-full min-h-[500px] border-t lg:border-t-0 border-border">
        <Terminal />
      </div>
    </section>
  );
};

export default Hero;