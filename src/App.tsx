import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import InteractivePlanner from './components/InteractivePlanner';
import { Mail, MapPin, ExternalLink, ArrowUp, Rocket, Check, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll behavior to highlight navbar links and show ScrollToTop button
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'faq', 'contact'];
    
    const handleScroll = () => {
      // Toggle scroll-to-top button
      setShowScrollTop(window.scrollY > 500);

      // Identify active viewport section
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPlannerWithService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setIsPlannerOpen(true);
  };

  const handleOpenPlannerDirect = () => {
    setPreselectedServiceId(undefined);
    setIsPlannerOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-blue-950 min-h-screen relative flex flex-col font-sans antialiased smooth-scrolling">
      
      {/* Decorative Grid Mesh Underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eff6ff_1px,transparent_1px),linear-gradient(to_bottom,#eff6ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)] pointer-events-none z-0" />

      {/* Sticky Primary Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPlanner={handleOpenPlannerDirect}
      />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        
        {/* Home Section */}
        <Hero
          onExploreServices={() => handleNavigate('services')}
          onOpenPlanner={handleOpenPlannerDirect}
        />

        {/* About Ethos Section */}
        <About />

        {/* Services Spectrum Section */}
        <Services
          onSelectService={handleOpenPlannerWithService}
          onOpenPlanner={handleOpenPlannerDirect}
        />

        {/* Success Projects Section */}
        <Projects />

        {/* Frequently Asked Questions Accordions */}
        <FAQ />

        {/* Outreach / Message Capture Form Section */}
        <Contact />

      </main>

      {/* Premium Corporate Footer */}
      <footer className="bg-blue-50/30 border-t border-blue-100 pt-16 pb-8 relative z-10 text-xs text-blue-900/85">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-custom to-blue-600 flex items-center justify-center text-white font-bold text-base">
                M
              </div>
              <span className="font-display font-bold text-base text-blue-950 tracking-tight uppercase">
                MIDUSA
              </span>
            </div>
            
            <p className="text-xs font-light leading-relaxed">
              Precision digital design and custom software configurations engineered specifically to skyrocket local storefront conversion rates.
            </p>

            <span className="block font-mono text-[10px] text-primary-custom uppercase tracking-wider font-semibold">
              Engineered to Perfection
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-mono text-blue-950 text-[10px] tracking-widest uppercase font-bold">Navigation Matrix</h5>
            <ul className="grid grid-cols-2 gap-2 font-mono">
              {['home', 'about', 'services', 'projects', 'faq', 'contact'].map((sect) => (
                <li key={sect}>
                  <button
                    onClick={() => handleNavigate(sect)}
                    className="capitalize hover:text-primary-custom transition-colors cursor-pointer text-left text-blue-900/80"
                  >
                    {sect}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="space-y-4">
            <h5 className="font-mono text-blue-950 text-[10px] tracking-widest uppercase font-bold">Business Registry</h5>
            <ul className="space-y-2.5 text-blue-900/80">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-custom" />
                <a href="mailto:solutions@midusa.com" className="hover:text-primary-custom transition-colors">
                  solutions@midusa.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-neutral-custom shrink-0" />
                <span>Nairobi, Kenya — Serving clients worldwide</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality Commitment Badge */}
          <div className="p-5 bg-white rounded-xl border border-blue-100 space-y-3 shadow-sm">
            <span className="text-[10px] font-mono text-primary-custom font-bold uppercase tracking-widest flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-neutral-custom" /> 
              TRUST & COMPLIANCE
            </span>
            <p className="text-[11px] leading-relaxed font-light text-blue-900/80">
              We deal in direct contracting options, transparent pricing, and zero hidden platform subscription models.
            </p>
          </div>

        </div>

        {/* Footer legal bounds */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-blue-105 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-blue-900/50 font-mono">
          <p>© {new Date().getFullYear()} Midusa Digital Solutions. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-primary-custom">Privacy Operations</a>
            <span>•</span>
            <a href="#about" className="hover:text-primary-custom">Service Covenant</a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top button */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white text-primary-custom hover:text-white hover:bg-primary-custom rounded-xl border border-blue-100 shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-2 duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive Questionnaire Proposal Wizard Popup Dialog overlay */}
      <AnimatePresence>
        {isPlannerOpen && (
          <InteractivePlanner
            onClose={() => setIsPlannerOpen(false)}
            preselectedServiceId={preselectedServiceId}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}
