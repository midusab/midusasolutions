import React from 'react';
import { ArrowRight, Code, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onOpenPlanner: () => void;
}

export default function Hero({ onExploreServices, onOpenPlanner }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden bg-white"
    >
      {/* Background Visual: High-end software developer workstation with premium layout */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/developer_hero_bg_1779690135081.png"
          alt="Modern developer workstation with clean programming screens"
          className="w-full h-full object-cover scale-102 filter opacity-25 contrast-[1.05] saturate-[1.1] brightness-[1.12] transition-all duration-700"
          referrerPolicy="no-referrer"
          id="hero-bg-visual"
        />
        {/* Soft white and blue gradient overlays to guarantee pristine contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/90 z-10" />
        {/* Radial light glows representing corporate primary dodgerblue ambient */}
        <div className="absolute -top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary-custom/8 blur-[130px] pointer-events-none z-10" />
        <div className="absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full bg-neutral-custom/8 blur-[110px] pointer-events-none z-10" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-8 md:pt-16">
        {/* Badge Indicator */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50/80 border border-primary-custom/30 text-[11px] font-mono tracking-wide text-primary-custom mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500"
        >
          <Sparkles className="w-3.5 h-3.5 text-highlight-custom" />
          <span className="text-blue-950 font-bold uppercase">PRO DESIGN & CUSTOM DEVELOPMENT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-custom" />
        </div>

        {/* Big Display Punchline with custom primary/highlight styling */}
        <h1
          id="hero-title"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-blue-950 leading-[1.15] mb-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          Your One-Stop{' '}
          <span className="text-primary-custom relative inline-block">
            Website Design & Development
            <span className="absolute left-0 bottom-1 w-full h-1.5 bg-gradient-to-r from-primary-custom to-highlight-custom rounded-full opacity-40" />
          </span>{' '}
          Partner
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-blue-900/80 text-lg sm:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-900"
        >
          We engineer fast, beautiful {' '}
          <span className="text-blue-950 font-semibold">websites and UI/UX designs</span>,{' '}
          seamless <span className="text-blue-950 font-semibold">WhatsApp e-commerce stores</span>,{' '}
          and eye-catching graphic posters customized to boost your local business footprint.
        </p>

        {/* Dynamic CTAs */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000"
        >
          <button
            id="hero-primary-cta"
            onClick={onOpenPlanner}
            className="w-full sm:w-auto px-8 py-4 bg-primary-custom hover:bg-blue-600 active:scale-98 text-white font-bold rounded-xl shadow-lg shadow-primary-custom/25 flex items-center justify-center gap-2.5 transition-all text-base cursor-pointer hover:scale-[1.02]"
          >
            Get a Free Project Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform animate-pulse" />
          </button>
          
          <button
            id="hero-secondary-cta"
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 bg-blue-50 hover:bg-blue-100 text-primary-custom border border-blue-100 font-semibold hover:border-blue-200 rounded-xl flex items-center justify-center gap-2 transition-all text-base cursor-pointer hover:scale-[1.02]"
          >
            View What I Do
          </button>
        </div>

        {/* Social Proof/Neutrality Streaks */}
        <div
          id="hero-streaks"
          className="mt-16 pt-8 border-t border-blue-150 max-w-3xl mx-auto flex flex-wrap items-center justify-around gap-y-4 gap-x-6 text-xs text-blue-900/70 font-mono"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-custom" />
            <span>99.8% Core Web Vitals Speed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-custom" />
            <span>SEO Engineered Out-Of-The-Box</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-neutral-custom" />
            <span>Client Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider at the bottom - Blends seamlessly into White Body */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-white fill-current"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
