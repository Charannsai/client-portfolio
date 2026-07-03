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
    <div className="min-h-screen w-full bg-portfolio-bg text-portfolio-text font-sans antialiased selection:bg-portfolio-accent/10 transition-colors duration-300">
      
      {/* Balanced Page Wrapper */}
      <div className="max-w-[800px] mx-auto py-16 md:py-24 px-6 md:px-12 flex flex-col relative">
        
        {/* Horizontal Nav Header */}
        <header className="w-full flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl tracking-tight text-portfolio-text">
              ushasree martha
            </h1>
            <p className="text-xs text-portfolio-muted font-normal">
              MERN Developer & Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-portfolio-muted select-none">
              <a href="mailto:ushasreemartha@gmail.com" className="hover:text-portfolio-accent transition-colors">
                Email
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
                LinkedIn
              </a>
            </nav>
            <span className="text-portfolio-border h-3.5 w-px hidden md:block" />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        {/* Top Divider */}
        <div className="w-full h-px bg-portfolio-border/40 my-8 shrink-0" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16">
          
          {/* Left Column (About & Experience) */}
          <div className="flex flex-col gap-12">
            {/* Section: About */}
            <section className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold text-portfolio-accent uppercase tracking-wider">
                about
              </h2>
              <Profile />
              <a
                href="/Ushasree_Martha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono uppercase tracking-wider text-portfolio-accent hover:underline mt-1 block w-fit"
              >
                View Resume
              </a>
            </section>

            {/* Section: Experience */}
            <section className="flex flex-col gap-5">
              <h2 className="text-xs font-semibold text-portfolio-accent uppercase tracking-wider">
                experience
              </h2>
              <Experience />
            </section>
          </div>

          {/* Right Column (Projects) */}
          <section className="flex flex-col gap-5">
            <h2 className="text-xs font-semibold text-portfolio-accent uppercase tracking-wider">
              projects
            </h2>
            <Projects />
          </section>

        </div>

        {/* Minimal Footer */}
        <footer className="w-full border-t border-portfolio-border/40 pt-6 mt-16 flex justify-between items-center text-[10px] font-mono text-portfolio-muted select-none">
          <span>© 2026</span>
          <span className="tracking-widest uppercase hover:text-portfolio-text transition-colors">
            ushasree martha.
          </span>
        </footer>

      </div>
    </div>
  );
}
