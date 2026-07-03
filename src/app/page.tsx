"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [theme, setTheme] = useState('system');
  const [activeTab, setActiveTab] = useState('intro');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client side mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  // Update theme classes on document
  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Handle system preference changes when in 'system' mode
  useEffect(() => {
    if (!mounted || theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  return (
    <div className="h-screen w-screen bg-portfolio-bg text-portfolio-text font-sans antialiased overflow-hidden flex flex-col items-center justify-center relative transition-colors duration-300">
      
      {/* Viewport-Centered Content Card */}
      <div className="max-w-[480px] w-full px-6 pt-8 pb-5 flex flex-col h-[82vh] max-h-[580px] border border-portfolio-border/40 bg-portfolio-card rounded-2xl relative shadow-sm transition-colors duration-300 justify-between">
        
        {/* Sleek Top Header Navigation */}
        <header className="w-full flex items-center justify-between shrink-0 z-40 border-b border-portfolio-border/30 pb-4 select-none">
          <div className="flex items-center">
            <span className="font-bold text-[16px] text-portfolio-text tracking-tight">ushasree.</span>
          </div>

          {/* Spring-Animated Tab Navigation */}
          <nav className="relative flex items-center bg-portfolio-bg/50 border border-portfolio-border/30 p-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider">
            {['intro', 'projects', 'work'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1 rounded-full hover:text-portfolio-text transition-colors duration-200 cursor-pointer focus:outline-none ${
                    isActive ? 'text-portfolio-text font-semibold' : 'text-portfolio-muted'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-tab-pill"
                      className="absolute inset-0 bg-portfolio-card rounded-full border border-portfolio-border/40 -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab}
                </button>
              );
            })}
          </nav>
        </header>

        {/* Scroll-Safe Content Area */}
        <main className="flex-grow overflow-hidden flex flex-col relative min-h-0 mt-6 mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="w-full h-full overflow-y-auto pr-1 hide-scrollbar text-left flex flex-col"
            >
              {activeTab === 'intro' && (
                <div className="flex flex-col gap-5 flex-grow">
                  <Profile />
                  <a
                    href="/Ushasree_Martha_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono uppercase tracking-wider text-portfolio-accent hover:underline mt-auto block w-fit"
                  >
                    View Resume
                  </a>
                </div>
              )}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'work' && <Experience />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Minimal Footer Row */}
        <footer className="w-full border-t border-portfolio-border/40 pt-4 flex items-center justify-between z-40 shrink-0 select-none">
          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-wider text-portfolio-muted">
            <a href="mailto:ushasreemartha@gmail.com" className="hover:text-portfolio-accent transition-colors">
              Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
              LinkedIn
            </a>
          </div>
          
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </footer>

      </div>
    </div>
  );
}
