"use client";

import { useState, useEffect } from 'react';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [theme, setTheme] = useState('system');
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
    <div className="min-h-screen w-full py-16 md:py-24 px-6 flex flex-col items-center justify-start bg-portfolio-bg text-portfolio-text font-sans antialiased selection:bg-portfolio-text/10 transition-colors duration-300">
      
      {/* Centered Scrollable Container */}
      <div className="max-w-[540px] w-full flex flex-col gap-12 relative">
        
        {/* Minimalist Top Nav Header */}
        <header className="w-full flex items-center justify-between z-40">
          <div className="flex flex-col gap-1">
            <h1 className="font-display font-bold text-2xl tracking-tight text-portfolio-text">
              ushasree martha.
            </h1>
            <div className="flex items-center gap-2 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-accent"></span>
              </span>
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-portfolio-muted">
                Available for software roles
              </span>
            </div>
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>

        {/* Section: About */}
        <section className="w-full flex flex-col gap-3">
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
            // About
          </h2>
          <Profile />
        </section>

        {/* Section: Experience */}
        <section className="w-full flex flex-col gap-5">
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
            // Experience
          </h2>
          <Experience />
        </section>

        {/* Section: Projects */}
        <section className="w-full flex flex-col gap-5">
          <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
            // Projects
          </h2>
          <Projects />
        </section>

        {/* Minimal Footer */}
        <footer className="w-full border-t border-portfolio-border/30 pt-6 mt-4 select-none flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-widest text-portfolio-muted select-none">
            <a href="mailto:ushasreemartha@gmail.com" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5">
              Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5">
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center">
            <span className="font-cursive text-2xl tracking-wide select-none text-portfolio-text/80 pointer-events-none dark:text-portfolio-text/90">
              ushasree
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}
