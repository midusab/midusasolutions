import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Website Design');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitting(true);
    setTimeout(() => {
      // Persist locally for robustness
      const messages = JSON.parse(localStorage.getItem('midusa_messages') || '[]');
      messages.push({
        name,
        email,
        service,
        message,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('midusa_messages', JSON.stringify(messages));
      
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-blue-50/15 border-t border-blue-100 relative">
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-primary-custom/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-neutral-custom/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-highlight-custom font-semibold uppercase px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
            CLIENT OUTREACH
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-blue-950 tracking-tight">
            Let's Engineer Your <span className="text-primary-custom font-bold">Online Success</span>
          </h2>
          <p className="text-blue-900/80 text-sm font-light">
            Ready to upgrade your business footprint? Send us a direct operation brief or ask about branding packages, restaurant setups, and custom database platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-white rounded-2xl border border-blue-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-[-30px] w-[200px] h-[200px] rounded-full bg-primary-custom/5 blur-3xl pointer-events-none" />

            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-custom block">
                  MIDUSA DIGITAL OFFICE
                </span>
                <h3 className="font-display font-bold text-2xl text-blue-950">
                  Get in Touch
                </h3>
                <p className="text-xs text-blue-900/70 font-light leading-relaxed">
                  We respond with detailed timeline estimations and layout mockups within 24 working hours of submission.
                </p>
              </div>

              {/* coordinates list */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-custom shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-blue-900/50 font-mono text-[10px] uppercase">Email Contact Address</span>
                    <a href="mailto:solutions@midusa.com" className="text-sm font-bold text-blue-950 hover:text-primary-custom hover:underline transition-colors block mt-0.5">
                      solutions@midusa.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-custom shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-blue-900/50 font-mono text-[10px] uppercase">Agency Location Hub</span>
                    <p className="text-sm font-bold text-blue-950 mt-0.5">
                      Nairobi Innovation District, Kenya
                    </p>
                    <p className="text-[10px] text-blue-900/70 mt-0.5 font-light">Crafting products for clients globally</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-highlight-custom shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-blue-900/50 font-mono text-[10px] uppercase">Operation Working Hours</span>
                    <p className="text-sm font-bold text-blue-950 mt-0.5">
                      Monday — Friday: 8:00 AM — 6:00 PM
                    </p>
                    <p className="text-[10px] text-blue-900/70 mt-0.5 font-light">Closed on public holidays & Sundays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality statement with neutralist colors */}
            <div className="mt-12 pt-6 border-t border-blue-50 text-xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary-custom shrink-0" />
              <p className="text-blue-900/75 leading-snug font-light">
                Secure digital pipelines. Personal account managers coordinates assigned per project. Includes legal ownership transfers.
              </p>
            </div>
          </div>

          {/* Right Block: Message Capture Form */}
          <div className="lg:col-span-7 p-8 bg-white border border-blue-105 rounded-2xl relative shadow-md shadow-blue-100/10">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary-custom" />
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-primary-custom/30 flex items-center justify-center text-primary-custom text-3xl shadow-md">
                  ✓
                </div>
                <div className="space-y-1.5 max-w-md">
                  <h4 className="font-display font-bold text-blue-950 text-lg">Inquiry Registry Recorded!</h4>
                  <p className="text-xs text-blue-900/70 font-light">
                    A dedicated architectural coordinator from our startup agency has received your parameters. Expect a comprehensive brief shortly.
                  </p>
                </div>
                <button
                  id="contact-reset-btn"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-blue-50 border border-blue-100 text-primary-custom rounded-xl text-xs font-mono transition-colors hover:bg-blue-100 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-blue-950 font-bold uppercase tracking-wider block">
                      Client Full Name <span className="text-primary-custom">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="Liam Foster"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3 text-sm text-blue-950 placeholder-blue-900/45 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-blue-950 font-bold uppercase tracking-wider block">
                      Inquiry Mail Address <span className="text-primary-custom">*</span>
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="liam@fostermarket.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3 text-sm text-blue-950 placeholder-blue-900/45 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase tracking-wider block">
                    Target Solution Sphere
                  </label>
                  <select
                    id="contact-service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none focus:ring-1 focus:ring-primary-custom transition-all"
                  >
                    <option value="Website Design">Website Systems (Business, Informational, Restaurant)</option>
                    <option value="E-commerce Solutions">E-commerce platforms (Stripe, Product Catalogues)</option>
                    <option value="Graphic Deliverables font-sans">Graphic Design (Flyers, Posters, Vector Logo Kits)</option>
                    <option value="Custom Software">Custom Enterprise Software (CRM, Portals)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase tracking-wider block">
                    Outline Design/Software Project Brief <span className="text-primary-custom">*</span>
                  </label>
                  <textarea
                    id="contact-message-textarea"
                    required
                    rows={4}
                    placeholder="Provide details about your storefront, intended features, timeline, layouts, or logo ideas."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl p-4 text-xs text-blue-950 placeholder-blue-900/45 focus:outline-none transition-all"
                  ></textarea>
                </div>

                {/* Submit button using primary blue color */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-primary-custom hover:bg-blue-600 active:scale-98 transition-all disabled:opacity-45 rounded-xl font-bold font-mono tracking-wide text-xs text-white shadow-lg shadow-primary-custom/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? 'Transmitting Inbound brief...' : 'Register Outreach Transmission'}
                  <Send className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
