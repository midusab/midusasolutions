import React, { useState } from 'react';
import { Globe, ShoppingCart, Utensils, Palette, Image, Cpu, Check, HelpCircle, ArrowUpRight, Zap, Search } from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

// Keep named imports and create standard icon dictionary
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingCart,
  Utensils,
  Palette,
  Image,
  Cpu,
  Search
};

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenPlanner: () => void;
}

export default function Services({ onSelectService, onOpenPlanner }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'graphic' | 'software'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Websites, Storefronts & SEO' },
    { id: 'graphic', label: 'Logos, Graphics & Print' },
    { id: 'software', label: 'Custom Software & Portals' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-blue-50/15 border-y border-blue-100 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-primary-custom font-semibold uppercase px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100/70">
            OUR SPECTRUM OF SOLUTIONS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-blue-950 tracking-tight">
            High-Performance Digital Products Built to <span className="text-primary-custom">Grow Your Brand</span>
          </h2>
          <p className="text-blue-900/80 text-sm sm:text-base font-light">
            We fuse flawless visual design templates with robust custom coding guidelines. No templates, no bloatware—strictly custom digital assets geared for local business operations.
          </p>
        </div>

        {/* Categories Navbar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              id={`service-cat-${category.id}`}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium font-mono tracking-wide transition-all border cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-primary-custom text-white border-primary-custom shadow-md shadow-primary-custom/10'
                  : 'bg-white text-blue-900/80 border-blue-100 hover:text-blue-950 hover:bg-blue-50/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group p-6 bg-white rounded-2xl border border-blue-100/80 hover:border-primary-custom hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow layer on hover */}
                <div className="absolute inset-0 bg-radial-gradient from-primary-custom/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  {/* Service Visual Cover Image */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden bg-blue-50 border border-blue-100/50 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent" />
                  </div>

                  {/* Service Accent Head */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100/60 flex items-center justify-center text-primary-custom group-hover:bg-primary-custom group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Badge showing Price Estimate in Electric Blue */}
                    <span className="text-[11px] font-mono font-bold tracking-wide px-2.5 py-1 rounded-full bg-blue-50/80 text-highlight-custom border border-blue-100">
                      {service.priceEstimate}
                    </span>
                  </div>

                  {/* Title & Descs */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-blue-950 group-hover:text-primary-custom transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-blue-900/75 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Lists with Neutral Blue checkmarks */}
                  <ul className="space-y-2 pt-3 border-t border-blue-50">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-blue-900/85 font-light">
                        <Check className="w-3.5 h-3.5 text-primary-custom shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Trigger */}
                <div className="relative z-10 pt-6 mt-5 border-t border-blue-50 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-blue-900/50 uppercase group-hover:text-blue-900/70 transition-colors">
                    Tailored Custom Specs Available
                  </span>
                  <button
                    id={`service-btn-${service.id}`}
                    onClick={() => {
                      onSelectService(service.id);
                      onOpenPlanner();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-primary-custom group-hover:bg-primary-custom text-blue-900 group-hover:text-white text-xs font-semibold rounded-lg transition-all border border-blue-100 group-hover:border-primary-custom cursor-pointer"
                  >
                    Select
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom solution outreach helper banner */}
        <div id="services-banner" className="mt-16 p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-[20%] w-[180px] h-[180px] rounded-full bg-primary-custom/4 blur-3xl pointer-events-none" />
          
          <div className="space-y-1 text-center md:text-left relative z-10">
            <h4 className="font-display font-semibold text-blue-950 text-base md:text-lg flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-4 h-4 text-primary-custom animate-bounce" />
              Not sure which digital package matches your business?
            </h4>
            <p className="text-blue-900/70 text-xs font-light">
              We can custom craft any design or development system fit for your specific local business setup.
            </p>
          </div>

          <button
            id="services-banner-cta"
            onClick={onOpenPlanner}
            className="px-6 py-3 bg-primary-custom text-white hover:bg-blue-600 font-bold rounded-xl text-sm transition-all shadow-md shadow-primary-custom/10 cursor-pointer text-center shrink-0 relative z-10"
          >
            Get a Special Quote
          </button>
        </div>
      </div>
    </section>
  );
}
