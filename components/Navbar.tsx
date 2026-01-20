import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync state with DOM on mount
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = ['EXPERIENCE', 'PROJECTS', 'STACK', 'CONTACT'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-foreground flex items-center justify-between px-6 h-16 transition-colors duration-300">
        <div className="font-mono text-lg tracking-tight font-bold text-foreground">
          ABDULLAH. F <span className="text-muted text-sm font-normal">[v2.3.5]</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-mono text-sm text-muted">
          {menuItems.map((item) => (
            <React.Fragment key={item}>
              <button 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-signal transition-colors duration-200 tracking-wide"
              >
                {item}
              </button>
              <span className="text-border last:hidden">|</span>
            </React.Fragment>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="ml-4 pl-4 border-l border-border hover:text-signal transition-colors"
          >
            {isDark ? 'LIGHT_MODE' : 'DARK_MODE'}
          </button>
        </div>

        <div className="hidden sm:flex">
          <a 
            href="mailto:abbasahsan1@hotmail.com"
            className="bg-primary text-paper px-5 py-2 font-mono text-xs hover:bg-signal transition-colors duration-200 border border-transparent hover:border-foreground"
          >
            INITIATE_CONTACT
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden gap-4">
           <button 
            onClick={toggleTheme}
            className="font-mono text-xs text-foreground border border-border px-2 py-1 hover:bg-background"
          >
            {isDark ? 'LHT' : 'DRK'}
          </button>
          <button 
            className="font-mono text-sm text-foreground border border-border px-3 py-1 hover:bg-background"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'CLOSE [X]' : 'MENU [=]'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 pb-6 flex flex-col md:hidden transition-colors duration-300">
          <div className="flex flex-col space-y-6 font-mono text-xl text-foreground">
            {menuItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left border-b border-border pb-2 hover:text-signal transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="mailto:abbasahsan1@hotmail.com"
              className="mt-8 bg-primary text-paper px-5 py-4 text-center font-mono text-sm hover:bg-signal transition-colors"
            >
              INITIATE_CONTACT
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;