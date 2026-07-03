"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options = [
    { id: 'light', name: 'light', icon: <FiSun className="w-3.5 h-3.5" /> },
    { id: 'dark', name: 'dark', icon: <FiMoon className="w-3.5 h-3.5" /> },
    { id: 'system', name: 'system', icon: <FiMonitor className="w-3.5 h-3.5" /> }
  ];

  const getIcon = () => {
    if (!mounted) return <span className="w-3.5 h-3.5 block" />;
    switch (theme) {
      case 'light': return <FiSun className="w-3.5 h-3.5" />;
      case 'dark': return <FiMoon className="w-3.5 h-3.5" />;
      default: return <FiMonitor className="w-3.5 h-3.5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light': return 'light';
      case 'dark': return 'dark';
      default: return 'system';
    }
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 p-1.5 rounded-lg border border-portfolio-border hover:bg-portfolio-card text-portfolio-muted hover:text-portfolio-text transition-all duration-200 cursor-pointer focus:outline-none ${
          isOpen ? 'bg-portfolio-card text-portfolio-text' : ''
        }`}
        title={mounted ? `Choose theme (current: ${getLabel()})` : "Choose theme"}
      >
        {getIcon()}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 w-28 rounded-lg border border-portfolio-border/40 bg-portfolio-card/75 backdrop-blur-md shadow-lg p-1 z-50 flex flex-col gap-0.5"
          >
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setTheme(option.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-2.5 py-1.5 rounded text-[11px] font-mono select-none transition-colors duration-150 cursor-pointer focus:outline-none ${
                  theme === option.id
                    ? 'text-portfolio-text bg-portfolio-text/5 font-semibold'
                    : 'text-portfolio-muted hover:text-portfolio-text hover:bg-portfolio-text/5'
                }`}
              >
                {option.icon}
                <span>{option.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
