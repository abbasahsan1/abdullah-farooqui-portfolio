import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import TechStack from './components/TechStack';
import ProjectCard from './components/ProjectCard';
import { RESUME_DATA } from './data';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-signal selection:text-white transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />

        {/* Experience Section */}
        <section id="experience" className="py-24 border-b border-border transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-border">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">Operational Log</h2>
                <p className="font-mono text-sm text-muted">Career History & Deployments</p>
              </div>
              <div className="font-mono text-xs text-muted mt-4 md:mt-0">
                TOTAL_YEARS: {(new Date().getFullYear() - 2023).toString().padStart(2, '0')}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <ServiceCard 
                  key={idx}
                  id={`EXP-${(idx + 1).toString().padStart(2, '0')}`}
                  title={exp.company}
                  role={exp.role}
                  period={exp.period}
                  points={exp.description}
                  tech={exp.tech}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="stack" className="py-24 bg-background border-b border-border transition-colors duration-300">
           <div className="container mx-auto px-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">Technical Arsenal</h2>
            <p className="font-mono text-sm text-muted">Core Competencies & Frameworks</p>
          </div>
          <div className="container mx-auto px-6">
            <TechStack categories={RESUME_DATA.skills} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-paper transition-colors duration-300">
          <div className="container mx-auto px-6">
             <div className="mb-16 pb-6 border-b border-border">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">Project Database</h2>
                <p className="font-mono text-sm text-muted">Deployed Systems & Architectures</p>
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESUME_DATA.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx + 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 bg-foreground text-background border-t border-border transition-colors duration-300">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-mono text-lg font-bold mb-2">ABDULLAH. F [SYSTEMS]</h3>
              <p className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} Abdullah Farooqui. All systems nominal.</p>
            </div>
            
            <div className="flex flex-wrap gap-8 font-mono text-sm">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-signal transition-colors">EMAIL</a>
              <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">LINKEDIN</a>
              <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">GITHUB</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;