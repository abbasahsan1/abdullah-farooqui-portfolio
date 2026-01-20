import React from 'react';
import { SkillCategory } from '../types';

interface TechStackProps {
  categories: SkillCategory[];
}

const TechStack: React.FC<TechStackProps> = ({ categories }) => {
  if (!categories) return null;

  const allSkills = categories.flatMap(cat => 
    (cat.items || []).map(item => ({ item, type: cat.category }))
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-t border-border">
      {allSkills.map((skill, idx) => (
        <div 
          key={idx}
          className="aspect-square flex flex-col justify-between p-4 border-r border-b border-border bg-paper hover:bg-foreground hover:text-paper transition-colors duration-200 cursor-default group"
        >
          <span className="font-mono text-[10px] text-muted group-hover:text-gray-400">
            {idx.toString().padStart(2, '0')}
          </span>
          <span className="font-mono font-bold text-sm tracking-wide">
            {skill.item}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 text-signal transition-opacity">
            {skill.type}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;