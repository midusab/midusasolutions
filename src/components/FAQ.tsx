import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, FileText, BadgeHelp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="absolute top-0 right-[15%] w-[320px] h-[320px] rounded-full bg-primary-custom/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full bg-neutral-custom/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-blue-950 tracking-tight">
            Answering Your <span className="text-neutral-custom">Development & Design Questions</span>
          </h2>
          <p className="text-blue-900/80 text-sm font-light">
            Everything you need to know about our custom pricing scopes, timeline estimations, vector branding suites, and operational integrations.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-blue-50/15 border-primary-custom shadow-md shadow-blue-100/10'
                    : 'bg-white border-blue-100/80 hover:border-blue-200'
                }`}
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                      isOpen ? 'text-primary-custom' : 'text-blue-300'
                    }`} />
                    <span className="font-display font-bold text-blue-950 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 bg-blue-50 rounded-lg border border-blue-100/80 text-blue-900/60 hover:text-blue-950 hover:bg-blue-100 transition-colors mt-0.5">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 border-t border-blue-50 animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <p className="text-xs sm:text-sm text-blue-900/80 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro prompt */}
        <div className="mt-12 text-center p-6 bg-blue-50/35 rounded-2xl border border-blue-100 max-w-lg mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-blue-900/80 text-left">
            <MessageCircle className="w-4 h-4 text-highlight-custom shrink-0 animate-pulse" />
            <span>Have a custom operational design brief or specific framework requirement?</span>
          </div>
          <a
            href="#contact"
            className="text-primary-custom font-mono font-semibold uppercase hover:underline shrink-0"
          >
            Ask us directly →
          </a>
        </div>

      </div>
    </section>
  );
}
