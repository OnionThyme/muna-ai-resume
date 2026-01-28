
import React, { useState } from 'react';
import { PROJECTS, RESUME_PDF_LINK } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            {project.isCurrent && (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Current</span>
            )}
          </div>
          <p className="text-sky-600 font-medium">{project.company} {project.client ? `| Client: ${project.client}` : ''}</p>
        </div>
        <div className="text-sm text-slate-500 text-right">
          <p className="flex items-center md:justify-end gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {project.period}
          </p>
          <p className="flex items-center md:justify-end gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-slate-600 text-sm">
            <span className="text-sky-500 mt-1">•</span>
            {h}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sky-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:text-sky-700 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {isExpanded ? 'Hide Context' : 'View Full Context'}
      </button>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-100 grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-2">The Challenge</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.fullStory.challenge}</p>
            <h4 className="text-slate-900 font-bold text-sm mb-2">My Action</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{project.fullStory.action}</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold text-sm mb-2">Technical Detail</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.fullStory.technicalDetail}</p>
            <h4 className="text-slate-900 font-bold text-sm mb-2">The Result</h4>
            <p className="text-slate-600 text-sm leading-relaxed font-medium text-sky-800">{project.fullStory.result}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center mb-16">
        <div className="mb-10">
          <a 
            href={RESUME_PDF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume (PDF)
          </a>
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Experience & Projects</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Click "View Full Context" on any role to explore the challenges, actions, and measurable results beyond the highlights.</p>
        </div>
      </div>

      <div className="space-y-8">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
