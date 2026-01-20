import React, { useEffect, useState, useRef } from 'react';

const LOG_LINES = [
  { type: 'info', text: 'Initializing system core...' },
  { type: 'success', text: 'Kernel loaded [v4.19.0]' },
  { type: 'info', text: 'Mounting file systems...' },
  { type: 'info', text: 'Loading neural modules...' },
  { type: 'warn', text: 'Optimizing for low latency...' },
  { type: 'data', text: 'Fetching cluster state...' },
  { type: 'success', text: 'Node [worker-01] ready' },
  { type: 'success', text: 'Node [worker-02] ready' },
  { type: 'info', text: 'Starting ingress controller...' },
  { type: 'data', text: 'TRAEFIK_ENTRYPOINTS_WEB_ADDRESS=:80' },
  { type: 'success', text: 'Pipeline active. Waiting for input.' },
];

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<typeof LOG_LINES>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      // Safety check for bounds
      if (currentIndex < LOG_LINES.length) {
        const nextLine = LOG_LINES[currentIndex];
        // Only update state if line exists
        if (nextLine) {
          setLines(prev => [...prev, nextLine]);
        }
        currentIndex++;
      } else {
        // Reset for loop effect
        setLines([]);
        currentIndex = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const getStatusColor = (type?: string) => {
    switch(type) {
      case 'success': return 'text-green-600';
      case 'warn': return 'text-amber-600';
      case 'data': return 'text-blue-600';
      default: return 'text-muted';
    }
  };

  return (
    <div className="w-full h-full bg-background border-l border-border p-6 font-mono text-xs overflow-hidden flex flex-col">
      <div className="border-b border-border pb-2 mb-4 flex justify-between items-center">
        <span className="uppercase text-muted">System.log</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-muted rounded-full opacity-20"></div>
          <div className="w-2 h-2 bg-muted rounded-full opacity-20"></div>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 scrollbar-hide">
        {lines.map((line, i) => {
          if (!line) return null; // Defensive check to prevent crash
          return (
            <div key={i} className="flex gap-3">
              <span className="text-muted opacity-50">
                {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' })}
              </span>
              <span className={getStatusColor(line.type)}>
                {line.type === 'data' ? '>' : '#'} {line.text}
              </span>
            </div>
          );
        })}
        <div className="w-2 h-4 bg-signal animate-pulse mt-1"></div>
      </div>
    </div>
  );
};

export default React.memo(Terminal);