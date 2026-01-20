import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div className="border border-border bg-background p-0 flex flex-col h-full hover:border-foreground transition-colors duration-300">
      <div className="p-6 border-b border-border bg-paper flex justify-between items-baseline">
        <h3 className="font-sans font-bold text-xl uppercase">{project.name}</h3>
        <span className="font-mono text-xs text-muted">PRJ-{index.toString().padStart(2, '0')}</span>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="font-mono text-xs text-signal mb-3 uppercase">{project.tagline}</p>
          <p className="text-sm text-muted leading-relaxed mb-6">{project.description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] font-mono border border-border bg-paper px-2 py-1 text-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;