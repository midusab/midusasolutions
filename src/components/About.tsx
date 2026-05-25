import React from 'react';
import { Target, Lightbulb, ShieldCheck, HeartPulse, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-primary-custom" />,
      title: 'Precision-Engineered ROI',
      desc: 'We do not build generic landing pages. We architect digital systems loaded with SEO structures, high-efficiency caching, and direct client capture tools.',
      borderAccent: 'border-l-primary-custom'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-highlight-custom" />,
      title: 'High-Impact Brand Graphics',
      desc: 'From high-quality custom logos to traffic-stopping flyers and poster graphics, we construct beautiful designs that lock in customer memory.',
      borderAccent: 'border-l-highlight-custom'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-neutral-custom" />,
      title: 'Trust & Integrity',
      desc: 'We support local eateries, retail groups, and service agencies with transparent pricing, comprehensive ownership transfers, and commission-free tools.',
      borderAccent: 'border-l-neutral-custom'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background abstract layout */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary-custom/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-neutral-custom/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual copy & brand details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-primary-custom font-semibold uppercase block">
                MIDUSA ETHOS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-blue-950 tracking-tight leading-tight">
                Empowering Local Businesses to Dominate the{' '}
                <span className="text-primary-custom">Online Marketplace</span>
              </h2>
            </div>

            <p className="text-blue-900/80 text-base sm:text-lg font-light leading-relaxed">
              At <strong className="text-blue-950 font-bold">Midusa Digital Solutions</strong>, our goal is absolute. We partner with local companies—from neighborhood pizzerias and boutique dental clinics to professional consultants, builders, and retailers—to craft custom website designs, search optimization strategies, and professional graphic deliverables.
            </p>

            <p className="text-blue-900/60 text-sm leading-relaxed">
              Our agency was founded on the philosophy that local businesses deserve the exact same professional quality, search ranking potential, and modern custom setups enjoyed by national brands. We eliminate third-party ordering commissions, build fast-loading pages, and deliver clean branding visual kits tailored exactly to your business goals.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100/50">
                <span className="font-mono text-xl font-bold text-primary-custom">01</span>
                <h4 className="font-semibold text-blue-950 mt-1 text-sm">Design Craft</h4>
                <p className="text-xs text-blue-900/70 mt-1">E-commerce, portfolios, informational frameworks.</p>
              </div>
              <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100/50">
                <span className="font-mono text-xl font-bold text-highlight-custom">02</span>
                <h4 className="font-semibold text-blue-950 mt-1 text-sm">Action Ads</h4>
                <p className="text-xs text-blue-900/70 mt-1">High-impact flyers, print banners, vector logos.</p>
              </div>
              <div className="p-4 bg-blue-50/30 rounded-xl border border-blue-100/50">
                <span className="font-mono text-xl font-bold text-neutral-custom">03</span>
                <h4 className="font-semibold text-blue-950 mt-1 text-sm">Custom Code</h4>
                <p className="text-xs text-blue-900/70 mt-1">Custom operations software and database tools.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic decorative card stack & highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-blue-50/10 border border-blue-100 rounded-2xl relative shadow-md shadow-blue-100/10">
              <h3 className="font-display font-semibold text-xl text-blue-950 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-neutral-custom animate-pulse" />
                The Midusa Advantage
              </h3>

              <div className="space-y-6">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 p-4 rounded-xl bg-white border border-blue-100/50 border-l-4 ${pillar.borderAccent} transition-transform hover:translate-x-1 duration-200`}
                  >
                    <div className="shrink-0 pt-0.5">{pillar.icon}</div>
                    <div className="space-y-1.5">
                      <h4 className="font-semibold text-blue-950 text-base leading-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-blue-900/75 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-blue-100 flex items-center justify-between text-xs font-mono text-blue-900/60">
                <span>LOCAL ROOTS</span>
                <span className="text-primary-custom">•</span>
                <span>GLOBAL EXCELLENCE</span>
                <span className="text-primary-custom">•</span>
                <span>ZERO COMMISSIONS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
