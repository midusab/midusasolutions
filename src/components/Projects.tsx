import React, { useState } from 'react';
import { ExternalLink, Milestone, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Website Design', 'E-commerce', 'Graphic Design', 'Software Development'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[380px] h-[380px] rounded-full bg-primary-custom/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-neutral-custom/4 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-blue-950 tracking-tight">
              Fusing <span className="text-highlight-custom">Stunning Visuals</span> with Premium Code
            </h2>
            <p className="text-blue-900/80 text-sm font-light">
              Explore custom systems designed, built, and deployed by our startup team for restaurants, private enterprise groups, and e-merchants across the region.
            </p>
          </div>

          {/* Filtering control */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`project-filter-${filter.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide transition-all border cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-primary-custom text-white border-primary-custom shadow-md shadow-primary-custom/10'
                    : 'bg-blue-50/50 text-blue-900/80 border-blue-100 hover:text-blue-950 hover:bg-blue-100/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-blue-100 hover:border-primary-custom hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative h-64 overflow-hidden z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 brightness-95 saturate-[1.05]"
                  referrerPolicy="no-referrer"
                  id={`project-img-${project.id}`}
                />
                
                {/* Visual categorizer overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-white/95 text-primary-custom rounded-full border border-blue-100 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Impact metric tag in Electric Blue */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-highlight-custom text-white rounded-lg text-xs font-mono font-bold shadow-md shadow-blue-100/15 border-b border-r border-blue-400/25">
                  <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
                  <span>{project.impactMetrics}</span>
                </div>
              </div>

              {/* Informative Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6 bg-blue-50/10 border-t border-blue-100/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-neutral-custom font-semibold uppercase tracking-wide">
                      Client: {project.clientName}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-primary-custom/40 group-hover:text-primary-custom transition-all" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-blue-950 tracking-tight group-hover:text-primary-custom transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-blue-900/75 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Metadata Footer */}
                <div className="pt-5 border-t border-blue-100 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech Stack details with custom primary styling border tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-blue-50 text-primary-custom font-mono text-[10px] tracking-wide rounded border border-blue-100/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono tracking-wide text-blue-900/50 uppercase flex items-center gap-1 group-hover:text-primary-custom transition-colors">
                    Design & Development
                    <span className="w-1 h-1 rounded-full bg-neutral-custom" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state callback */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center border border-dashed border-blue-200 rounded-2xl bg-blue-50/20">
            <p className="text-blue-900/60 text-sm">More portfolio solutions added soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
