import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPlanner: () => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenPlanner }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-blue-100 py-3 shadow-md shadow-blue-100/20'
          : 'bg-white/80 backdrop-blur-md border-b border-blue-50/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo"
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary-custom to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-custom/20 group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight block text-blue-950 group-hover:text-primary-custom transition-colors">
              MIDUSA
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-primary-custom font-semibold">
              Digital Solutions
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-blue-50/50 p-1.5 rounded-full border border-blue-100/40">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-primary-custom text-white shadow-md shadow-primary-custom/15'
                    : 'text-blue-900/80 hover:text-blue-950 hover:bg-blue-100/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            id="nav-planner-cta"
            onClick={onOpenPlanner}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-custom to-blue-700 text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-custom/15 cursor-pointer"
          >
            <Rocket className="w-4 h-4" />
            Launch Planner
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div id="mobile-menu-controls" className="flex items-center gap-3 md:hidden">
          <button
            id="nav-planner-mobile-cta"
            onClick={onOpenPlanner}
            className="p-2.5 bg-primary-custom text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
            aria-label="Launch planner"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          
          <button
            id="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-blue-900 hover:text-blue-950 rounded-lg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-blue-100 py-6 px-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`py-3 px-4 rounded-xl text-left text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-primary-custom border-l-2 border-primary-custom'
                    : 'text-blue-900/80 hover:bg-blue-50/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            id="mobile-nav-cta"
            onClick={() => {
              setIsOpen(false);
              onOpenPlanner();
            }}
            className="w-full py-3.5 bg-gradient-to-r from-primary-custom to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary-custom/10 cursor-pointer"
          >
            <Rocket className="w-4 h-4" />
            Instant Project Planner
          </button>
        </div>
      )}
    </nav>
  );
}
