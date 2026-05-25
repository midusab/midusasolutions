import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Rocket, HelpCircle, Briefcase, ChevronRight, Sparkles, Send, Shield, Info, ClipboardList } from 'lucide-react';
import { OutreachSubmission } from '../types';

interface InteractivePlannerProps {
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function InteractivePlanner({ onClose, preselectedServiceId }: InteractivePlannerProps) {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState('');
  const [timeline, setTimeline] = useState('');
  
  // User outreach contact state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [extraDetails, setExtraDetails] = useState('');
  
  // Submission flags
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedBlueprint, setGeneratedBlueprint] = useState<any>(null);

  // Initialize pre-selected service if provided
  useEffect(() => {
    if (preselectedServiceId) {
      if (preselectedServiceId === 'seo-optimization') {
        setBusinessType('indie-service');
        setSelectedServices(['seo-targeting']);
      } else if (preselectedServiceId.includes('web')) {
        setBusinessType('retail-restaurant');
        setSelectedServices(['website-storefront']);
      } else if (preselectedServiceId.includes('graphic')) {
        setBusinessType('startup-brand');
        setSelectedServices(['flyers-branding']);
      } else if (preselectedServiceId.includes('software')) {
        setBusinessType('custom-operation');
        setSelectedServices(['bespoke-system']);
      }
      setStep(2);
    }
  }, [preselectedServiceId]);

  const businessTypes = [
    { id: 'retail-restaurant', label: 'Local Restaurant or Retailer', icon: '🏪', desc: 'Wants direct bookings, digital menus, or online checkouts.' },
    { id: 'indie-service', label: 'Professional Service Business', icon: '💼', desc: 'Service firms, clinics, or contractors looking to attract local clients.' },
    { id: 'startup-brand', label: 'Emerging Brand / Business', icon: '🚀', desc: 'Needs modern logos, posters, flyers, and sleek showcase sites.' },
    { id: 'custom-operation', label: 'Custom Operations / Portals', icon: '⚙️', desc: 'Needs database tools, client portals, and daily trackers.' }
  ];

  const serviceOptions = [
    { id: 'website-storefront', label: 'Custom Business Website', cat: 'web', desc: 'Fast, secure website optimized for search engine results.' },
    { id: 'ecommerce-checkout', label: 'E-commerce Checkout Integration', cat: 'web', desc: 'Secure payment setups and checkouts for online storefronts.' },
    { id: 'seo-targeting', label: 'SEO & Google Ranking Setup', cat: 'web', desc: 'Keyword targeting and business listing setup to grow local traffic.' },
    { id: 'flyers-branding', label: 'Branding Suite & Poster Graphics', cat: 'graphic', desc: 'High-quality logos, business graphics, and print flyers.' },
    { id: 'bespoke-system', label: 'Custom Database Tool / Client Portal', cat: 'software', desc: 'Private client dashboards, database tools, and daily trackers.' }
  ];

  const budgets = [
    { label: 'Under $1,000', labelDesc: 'Core logos, flyer designs, or search engine optimizations.' },
    { label: '$1,000 - $2,500', labelDesc: 'Custom business or restaurant website with booking and forms.' },
    { label: '$2,500 - $5,000', labelDesc: 'Full e-commerce storefronts or moderate client portal systems.' },
    { label: '$5,000+', labelDesc: 'Large database systems, comprehensive brand guidelines, and multi-page web applications.' }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && !businessType) return;
    if (step === 2 && selectedServices.length === 0) return;
    if (step === 3 && (!budgetRange || !timeline)) return;
    
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const buildBlueprint = () => {
    // Generate specialized plan elements
    const suggestedStack: string[] = ['React', 'Tailwind CSS v4'];
    let structuralHighlights = 'Primary Dodgerblue layout framing a neat minimal slate background.';
    let timelineEstimate = timeline || '3 weeks';
    let designFocus = '';

    if (businessType === 'retail-restaurant') {
      suggestedStack.push('Express backend framework', 'Veloce food reservation pipeline');
      designFocus = 'Visual culinary grid, booking highlights in electric blue, crisp fresh clean feel.';
    } else if (businessType === 'startup-brand') {
      suggestedStack.push('High-DPI Vector Suite', 'Print prep configurations');
      designFocus = 'Daring typography, high-contrast electric-blue call-to-actions, clean layouts.';
    } else {
      suggestedStack.push('Client SQL database', 'Recharts interactive dashboard panels');
      designFocus = 'Professional grid arrays, secure dashboards, stable colors.';
    }

    setGeneratedBlueprint({
      businessType,
      selectedServices,
      budgetRange,
      suggestedStack,
      structuralHighlights,
      timelineEstimate,
      designFocus,
      priceSummary: budgetRange
    });
    
    setStep(5);
  };

  const handleSubmitOutreach = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !businessName) return;

    setIsSubmitting(true);
    
    // Simulate API database write or form endpoint
    setTimeout(() => {
      const submission: OutreachSubmission = {
        name: clientName,
        email: clientEmail,
        businessName,
        projectType: businessType,
        budgetRange,
        details: extraDetails,
        timestamp: new Date().toISOString()
      };

      // Store in standard localStorage for high robustness
      const existing = JSON.parse(localStorage.getItem('midusa_outreach') || '[]');
      existing.push(submission);
      localStorage.setItem('midusa_outreach', JSON.stringify(existing));

      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-blue-950/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border border-blue-105 w-full max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        
        {/* Decorator left sidebar (Brand statement) */}
        <div className="md:w-1/3 bg-blue-50/70 p-8 flex flex-col justify-between border-r border-blue-100 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-custom" />
          
          <div className="space-y-6">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-highlight-custom animate-pulse" />
              <span className="text-[10px] font-mono text-blue-900/50 uppercase tracking-widest font-bold">MIDUSA ADVISOR</span>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-display font-bold text-xl text-blue-950 tracking-tight flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary-custom" />
                Digital Architects
              </h3>
              <p className="text-xs text-blue-900/70 font-light leading-relaxed">
                We engineer premium websites, high-converting checkout systems, and custom administrative databases from scratch.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-blue-100/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center text-primary-custom font-mono text-xs font-bold">
                P
              </div>
              <div className="text-[10px] leading-tight text-blue-900/70 font-mono">
                <span className="block text-blue-950 font-bold">PERFECTION FOCUS</span>
                Zero pre-made template limitations.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100/80 flex items-center justify-center text-highlight-custom font-mono text-xs font-bold">
                N
              </div>
              <div className="text-[10px] leading-tight text-blue-900/70 font-mono">
                <span className="block text-blue-950 font-bold">NEUTRAL INTEGRITY</span>
                You own 100% of the copyright ownership.
              </div>
            </div>
          </div>

          <button
            id="planner-close-x"
            onClick={onClose}
            className="absolute top-4 right-4 md:hidden text-blue-900/60 hover:text-blue-950"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Primary Dynamic Form Space */}
        <div id="planner-form-panel" className="flex-1 p-8 overflow-y-auto flex flex-col justify-between space-y-8 bg-white">
          
          {/* Top Panel Actions */}
          <div className="flex items-center justify-between border-b border-blue-100 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-primary-custom uppercase tracking-wider font-semibold">STEP {step} OF 5</span>
              <h4 className="font-display font-bold text-lg text-blue-950">
                {step === 1 && 'Describe Your Core Operations'}
                {step === 2 && 'Select Digital Solution Units'}
                {step === 3 && 'Define Timeline & Budget Scope'}
                {step === 4 && 'Confirm Your Growth Path'}
                {step === 5 && 'Your Custom Digital Architecture Blueprint'}
              </h4>
            </div>
            <button
              id="planner-close-btn"
              onClick={onClose}
              className="hidden md:block text-blue-900/60 hover:text-blue-950 shrink-0 p-1 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100/30"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Core Contents */}
          <div className="flex-1 min-h-[300px] flex flex-col justify-center">
            
            {/* Step 1: Business Type */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-blue-900/75 text-xs mb-4 max-w-xl">What kind of business are we engineering for today?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessTypes.map((t) => (
                    <button
                      key={t.id}
                      id={`picker-biz-${t.id}`}
                      onClick={() => setBusinessType(t.id)}
                      className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
                        businessType === t.id
                          ? 'bg-blue-50 border-primary-custom text-primary-custom shadow-sm shadow-blue-105/10'
                          : 'bg-white border-blue-100 hover:border-blue-200 hover:bg-blue-50/25 text-blue-950'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-lg font-bold">
                        <span>{t.icon}</span>
                        <span className="text-sm font-bold text-blue-950">{t.label}</span>
                      </div>
                      <p className="text-xs text-blue-900/70 font-light mt-2 leading-relaxed">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-blue-900/75 text-xs mb-4 max-w-xl">Which Midusa operational units does your company need?</p>
                <div className="grid grid-cols-1 gap-3">
                  {serviceOptions.map((s) => {
                    const active = selectedServices.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        id={`picker-srv-${s.id}`}
                        onClick={() => toggleService(s.id)}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                          active
                            ? 'bg-blue-50 border-primary-custom text-blue-950 shadow-sm shadow-blue-105/10'
                            : 'bg-white border-blue-100 hover:border-blue-150 text-blue-950'
                        }`}
                      >
                        <div className="space-y-1 pr-4">
                          <span className="text-[9px] font-mono tracking-widest text-primary-custom uppercase font-bold bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded">
                            {s.cat === 'web' ? 'Web Systems' : s.cat === 'graphic' ? 'Graphics Design' : 'Custom Software'}
                          </span>
                          <h5 className="font-bold text-sm text-blue-950 mt-1">{s.label}</h5>
                          <p className="text-xs text-blue-900/70 font-light leading-tight">{s.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                          active ? 'bg-primary-custom border-primary-custom' : 'border-blue-200'
                        }`}>
                          {active && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Budget and timeframe */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <p className="text-blue-900/75 text-xs mb-3">Select your matching budget envelope:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b.label}
                        id={`picker-budget-${b.label.replace(/[^a-zA-Z0-9]+/g, '')}`}
                        onClick={() => setBudgetRange(b.label)}
                        className={`p-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                          budgetRange === b.label
                            ? 'bg-blue-50 border-primary-custom text-blue-950 shadow-sm shadow-blue-105/10'
                            : 'bg-white border-blue-100 hover:border-blue-150 hover:bg-blue-50/10 text-blue-950'
                        }`}
                      >
                        <span className="font-bold text-xs text-blue-950 block">{b.label}</span>
                        <span className="text-[10px] text-blue-900/70 leading-tight block mt-0.5">{b.labelDesc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-blue-900/75 text-xs mb-3">Expected project delivery timeline:</p>
                  <div className="flex gap-2.5">
                    {['Urgent (2 weeks)', 'Standard (3-4 weeks)', 'Flexible (1-2 months)'].map((t) => (
                      <button
                        key={t}
                        id={`picker-timeline-${t.replace(/[^a-zA-Z0-9]+/g, '')}`}
                        onClick={() => setTimeline(t)}
                        className={`flex-1 p-3 rounded-xl border text-center text-xs font-mono tracking-wide cursor-pointer transition-all ${
                          timeline === t
                            ? 'bg-primary-custom text-white border-primary-custom shadow-sm'
                            : 'bg-blue-50/50 border-blue-100 text-blue-900 hover:bg-blue-100/40'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Core user details to trigger Outreach */}
            {step === 4 && (
              <div className="space-y-4">
                <p className="text-blue-900/75 text-xs mb-3">Enter business coordinate variables to assemble the blueprint proposal:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-blue-950 font-bold uppercase">Your Name</label>
                    <input
                      id="planner-input-name"
                      type="text"
                      required
                      placeholder="Liam Foster"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3 text-sm text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-blue-950 font-bold uppercase">Contact Email</label>
                    <input
                      id="planner-input-email"
                      type="email"
                      required
                      placeholder="liam@fostermarket.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3 text-sm text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase">Brand/Business Name</label>
                  <input
                    id="planner-input-bizname"
                    type="text"
                    required
                    placeholder="Foster Organic Market & Bakery"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3 text-sm text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase">Add Operational Details (Optional)</label>
                  <textarea
                    id="planner-input-details"
                    rows={2}
                    placeholder="Describe custom features (e.g. We need to integrate table reserve booking alerts)"
                    value={extraDetails}
                    onChange={(e) => setExtraDetails(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl p-4 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 5: Beautiful generated solution blueprint */}
            {step === 5 && generatedBlueprint && (
              <div className="space-y-5 bg-blue-50/15 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center justify-between border-b border-blue-100/60 pb-3">
                  <div className="flex items-center gap-1.5">
                    <ClipboardList className="w-5 h-5 text-primary-custom animate-pulse" />
                    <span className="font-mono text-xs text-blue-950 font-bold uppercase">Solution Proposal Configured</span>
                  </div>
                  <span className="text-[10px] font-mono bg-highlight-custom px-2.5 py-0.5 rounded text-white font-bold">
                    RECOMMENDED ROADMAP
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-3">
                    <div>
                      <span className="text-blue-900/50 block uppercase font-mono text-[9px]">Target Operations</span>
                      <p className="text-blue-950 font-bold capitalize mt-0.5">
                        {businessType.replace('-', ' ')} Solution Framework
                      </p>
                    </div>

                    <div>
                      <span className="text-blue-900/50 block uppercase font-mono text-[9px]">Calculated Cost Envelope</span>
                      <p className="text-highlight-custom font-bold mt-0.5">{generatedBlueprint.priceSummary}</p>
                    </div>

                    <div>
                      <span className="text-blue-900/50 block uppercase font-mono text-[9px]">Target Delivery Path</span>
                      <p className="text-primary-custom font-bold font-mono mt-0.5">{generatedBlueprint.timelineEstimate}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-blue-900/50 block uppercase font-mono text-[9px]">Recommended Architecture Stack</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {generatedBlueprint.suggestedStack.map((tech: string) => (
                          <span key={tech} className="px-1.5 py-0.5 bg-blue-50 text-[10px] rounded text-primary-custom border border-blue-100/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-blue-900/50 block uppercase font-mono text-[9px]">Layout Highlights Palette</span>
                      <p className="text-blue-900/80 font-normal mt-0.5 text-[11px] leading-relaxed">
                        {generatedBlueprint.designFocus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secure submission of blueprint claim */}
                {!submitted ? (
                  <form onSubmit={handleSubmitOutreach} className="pt-4 border-t border-blue-100 flex flex-col sm:flex-row gap-3 items-end sm:items-center justify-between">
                    <div className="flex items-start gap-2 max-w-md text-left">
                      <Shield className="w-4 h-4 text-primary-custom mt-0.5 shrink-0" />
                      <p className="text-[9px] text-blue-900/60 font-mono leading-tight">
                        Submit this custom blueprint proposal to lock in our current startup pricing structure. We will draft a formal, dedicated PDF contract summary for your review.
                      </p>
                    </div>
                    <button
                      id="blueprint-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 bg-primary-custom hover:bg-blue-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-1.5 shrink-0 transition-transform active:scale-95 cursor-pointer shadow-md"
                    >
                      {isSubmitting ? 'Registering...' : 'Claim Blueprint Proposal'}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-center space-y-1 animate-in fade-in duration-300">
                    <h5 className="font-bold text-primary-custom text-sm">Blueprint Locked Successfully!</h5>
                    <p className="text-blue-900/70 text-xs">
                      Liam from Midusa Digital Solutions is constructing your detailed mockup coordinates. Check your email shortly.
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Bottom Action Section Controls */}
          {step < 5 && (
            <div className="flex items-center justify-between pt-4 border-t border-blue-100">
              <button
                id="planner-back-btn"
                onClick={() => step > 1 && setStep(step - 1)}
                disabled={step === 1}
                className="px-4 py-2 text-xs font-mono text-blue-900/60 hover:text-blue-950 disabled:opacity-30 cursor-pointer"
              >
                Back
              </button>

              {step === 4 ? (
                <button
                  id="planner-generate-btn"
                  onClick={buildBlueprint}
                  disabled={!clientName || !clientEmail || !businessName}
                  className="px-6 py-3 bg-primary-custom text-white font-bold rounded-xl text-xs font-mono tracking-wide flex items-center gap-1.5 hover:opacity-95 active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
                >
                  Generate Blueprint
                  <Sparkles className="w-4 h-4 text-white animate-pulse" />
                </button>
              ) : (
                <button
                  id="planner-next-btn"
                  onClick={handleNextStep}
                  disabled={
                    (step === 1 && !businessType) ||
                    (step === 2 && selectedServices.length === 0) ||
                    (step === 3 && (!budgetRange || !timeline))
                  }
                  className="px-6 py-2.5 bg-primary-custom hover:opacity-95 text-white font-bold rounded-xl text-xs font-mono tracking-wide flex items-center gap-1 hover:translate-x-0.5 active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="flex justify-end pt-2 border-t border-blue-100">
              <button
                id="planner-finish-btn"
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-50 hover:bg-blue-100/70 text-primary-custom border border-blue-100 rounded-xl text-xs font-mono cursor-pointer"
              >
                Close Planner
              </button>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
