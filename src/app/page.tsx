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
    <div className="min-h-screen w-full bg-portfolio-bg text-portfolio-text font-sans antialiased selection:bg-portfolio-text/10 transition-colors duration-300">
      
      {/* Split Column Grid */}
      <div className="max-w-[760px] mx-auto py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 relative">
        
        {/* Left Sticky Sidebar (Header, Toggle, Links) */}
        <aside className="md:sticky md:top-24 h-fit flex flex-col justify-between gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            {/* Logo / Title */}
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-xl tracking-tight text-portfolio-text">
                ushasree martha
              </h1>
              <p className="text-[11px] text-portfolio-muted leading-relaxed font-normal">
                MERN Developer & Software Engineer
              </p>
            </div>

            {/* Status Dot */}
            <div className="flex items-center gap-2 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-portfolio-accent"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-muted">
                Available for roles
              </span>
            </div>

            {/* Theme Selector */}
            <div className="mt-2">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>

          {/* Social and Contact Links */}
          <nav className="flex flex-row md:flex-col gap-5 md:gap-2.5 font-mono text-[10px] uppercase tracking-wider text-portfolio-muted">
            <a href="mailto:ushasreemartha@gmail.com" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5 w-fit">
              Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5 w-fit">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-text transition-colors border-b border-transparent hover:border-portfolio-text pb-0.5 w-fit">
              LinkedIn
            </a>
          </nav>
        </aside>

        {/* Right Scrollable Content Pane */}
        <main className="flex-grow flex flex-col gap-12 md:gap-16 min-w-0">
          {/* Section: About */}
          <section className="flex flex-col gap-3">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
              About
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
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
              Experience
            </h2>
            <Experience />
          </section>

          {/* Section: Projects */}
          <section className="flex flex-col gap-5">
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-portfolio-accent font-semibold">
              Projects
            </h2>
            <Projects />
          </section>

          {/* Footer Signature */}
          <footer className="mt-8 pt-6 border-t border-portfolio-border/30 flex justify-between items-center text-[10px] font-mono text-portfolio-muted select-none">
            <span>© 2026</span>
            <span className="tracking-tight hover:text-portfolio-text transition-colors cursor-default">
              ushasree.
            </span>
          </footer>
        </main>

      </div>
    </div>
  );
}
