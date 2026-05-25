import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Check, Send, Sparkles, Phone, Mail, CheckCircle } from 'lucide-react';
import { OutreachSubmission } from '../types';
import { useToast } from './Toast';

interface InteractivePlannerProps {
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function InteractivePlanner({ onClose, preselectedServiceId }: InteractivePlannerProps) {
  const { showToast } = useToast();
  // Simple form state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [extraDetails, setExtraDetails] = useState('');
  
  // Submission flags
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize selected service if pre-selected
  useEffect(() => {
    if (preselectedServiceId) {
      if (preselectedServiceId === 'web-development') {
        setSelectedServices(['Website Development']);
      } else if (preselectedServiceId === 'web-design') {
        setSelectedServices(['Website Design & UI/UX']);
      } else if (preselectedServiceId === 'posters-flyers') {
        setSelectedServices(['Posters & Flyers Design']);
      } else if (preselectedServiceId === 'clothing-ecommerce') {
        setSelectedServices(['Clothing & Retail E-commerce']);
      } else {
        setSelectedServices(['Website Development']);
      }
    }
  }, [preselectedServiceId]);

  const serviceOptions = [
    'Website Development',
    'Website Design & UI/UX',
    'Posters & Flyers Design',
    'Clothing & Retail E-commerce'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || selectedServices.length === 0) return;

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      const submission: OutreachSubmission = {
        name: clientName,
        email: clientEmail,
        businessName: businessName || 'Not Specified',
        projectType: selectedServices.join(', '),
        budgetRange: 'Standard Quote',
        details: `Phone: ${clientPhone}. Details: ${extraDetails}`,
        timestamp: new Date().toISOString()
      };

      // Persistence
      const existing = JSON.parse(localStorage.getItem('midusa_outreach') || '[]');
      existing.push(submission);
      localStorage.setItem('midusa_outreach', JSON.stringify(existing));

      setIsSubmitting(false);
      setSubmitted(true);
      showToast(
        'success',
        'Spec Sent successfully!',
        'Your quote has been calculated and sent to our Nairobi design agency lead.',
        5000
      );
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-blue-950/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border border-blue-100 w-full max-w-3xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        
        {/* Left Column: Direct and Clear Form */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white">
          <div className="flex items-center justify-between border-b border-blue-100 pb-4 mb-6">
            <div>
              <h4 className="font-display font-bold text-xl text-blue-950">Let's Discuss Your Project</h4>
            </div>
            <button
              id="planner-close-btn"
              onClick={onClose}
              className="text-blue-900/60 hover:text-blue-950 shrink-0 p-1 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100/30 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service Selection Checklist */}
              <div>
                <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block mb-2.5">
                  Select What You Need <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((srv) => {
                    const isChecked = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        id={`planner-srv-${srv.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => toggleService(srv)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer text-xs ${
                          isChecked
                            ? 'bg-blue-50 border-primary-custom text-blue-950 font-medium'
                            : 'bg-white border-blue-100 text-blue-900/80 hover:bg-blue-50/20 hover:border-blue-200'
                        }`}
                      >
                        <span>{srv}</span>
                        <div className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-primary-custom border-primary-custom' : 'border-blue-200 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Informational Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block">Your Name <span className="text-red-500">*</span></label>
                  <input
                    id="planner-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-3 py-2 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block">Email Address <span className="text-red-500">*</span></label>
                  <input
                    id="planner-email"
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-3 py-2 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block">Phone / WhatsApp Number</label>
                  <input
                    id="planner-phone"
                    type="tel"
                    placeholder="e.g. +254 700 000 000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-3 py-2 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block">Business Name</label>
                  <input
                    id="planner-business"
                    type="text"
                    placeholder="e.g. Acme Café"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl px-3 py-2 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-blue-950 font-bold uppercase block">Brief Project Description</label>
                <textarea
                  id="planner-details"
                  rows={3}
                  placeholder="Tell us what you want to achieve with this project (dimensions, features, menu style, or e-commerce target)..."
                  value={extraDetails}
                  onChange={(e) => setExtraDetails(e.target.value)}
                  className="w-full bg-blue-50/30 border border-blue-100 focus:border-primary-custom focus:bg-white rounded-xl p-3 text-xs text-blue-950 placeholder-blue-900/40 focus:outline-none transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="planner-submit"
                disabled={isSubmitting || selectedServices.length === 0}
                className="w-full py-3 bg-primary-custom hover:opacity-95 disabled:opacity-50 text-white font-bold rounded-xl text-xs font-mono tracking-wide flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Message & Get Quote'}
              </button>

            </form>
          ) : (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-305">
              <div className="w-12 h-12 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center text-primary-custom mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="font-display font-bold text-base text-blue-950">Thank You! Request Received</h5>
                <p className="text-xs text-blue-900/70 max-w-sm mx-auto leading-relaxed">
                  We are reviewing your selected requirements. We will contact you via email or WhatsApp within 24 hours to discuss and present your custom plan.
                </p>
              </div>
              <button
                type="button"
                id="planner-close-success"
                onClick={onClose}
                className="px-5 py-2 bg-blue-50 text-primary-custom hover:bg-blue-100/80 rounded-xl text-xs font-mono border border-blue-100 cursor-pointer"
              >
                Close Planner
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Key details sidebar */}
        <div className="hidden md:flex md:w-64 bg-blue-50/60 p-6 flex-col justify-between border-l border-blue-100">
          <div className="space-y-6">
            <div className="space-y-4 text-[11px] leading-relaxed text-blue-950">
              <div className="space-y-1">
                <h6 className="font-bold">No Templates, Pure Custom Design</h6>
                <p className="text-blue-900/70 font-light">Every project we code is tailored exactly around your customer lifecycle with clean Inter font typography.</p>
              </div>
              
              <div className="space-y-1">
                <h6 className="font-bold">Direct WhatsApp Checkout</h6>
                <p className="text-blue-900/70 font-light">Direct e-commerce orders sent straight to your phone to maximize orders and bypass third-party platforms.</p>
              </div>

              <div className="space-y-1">
                <h6 className="font-bold">No High Recurring Fees</h6>
                <p className="text-blue-900/70 font-light">Transparent, itemized pricing. You completely own 100% of the visual assets and codebase we hand over.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-blue-100 text-[10px] font-mono text-blue-900/50 flex flex-col gap-1.5">
            <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary-custom" /> midusab@gmail.com</span>
            <span className="flex items-center gap-1 leading-tight"><Phone className="w-3 h-3 text-neutral-custom" /> 0112478220</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
