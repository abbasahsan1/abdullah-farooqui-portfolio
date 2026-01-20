import React from 'react';

interface ServiceCardProps {
  id: string;
  title: string;
  role: string;
  period: string;
  points: string[];
  tech?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, role, period, points, tech }) => {
  return (
    <div className="group relative bg-paper border border-border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-hard hover:border-signal">
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-xs text-muted group-hover:text-signal transition-colors">
          {id}
        </span>
        <span className="font-mono text-xs text-foreground bg-background px-2 py-1 border border-border">
          {period}
        </span>
      </div>
      
      <h3 className="text-2xl font-sans font-bold text-foreground mb-1 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-signal font-mono text-sm mb-6 uppercase tracking-wide">
        {role}
      </p>

      <ul className="space-y-3 mb-8">
        {points.slice(0, 4).map((point, idx) => (
          <li key={idx} className="text-muted text-sm leading-relaxed pl-4 border-l border-border group-hover:border-signal transition-colors">
            {point}
          </li>
        ))}
      </ul>

      {tech && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border group-hover:border-signal/20">
          {tech.slice(0, 5).map(t => (
            <span key={t} className="text-[10px] font-mono uppercase text-foreground bg-background px-1.5 py-0.5 border border-border">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(ServiceCard);