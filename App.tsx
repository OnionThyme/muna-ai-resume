
import React from 'react';
import ChatInterface from './components/ChatInterface';
import ExperienceSection from './components/ExperienceSection';
import FitAssessment from './components/FitAssessment';
import SkillsSection from './components/SkillsSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-100 selection:text-sky-900">
      {/* Hero Header */}
      <header className="relative pt-32 pb-0 px-4 text-center bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[5%] left-[-5%] w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 bg-sky-50 text-sky-700 rounded-full text-xs font-bold border border-sky-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Strategic AI & Business Analysis Engagements
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Muna Conteh
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 font-light mb-10 tracking-tight">
            Modernizing Regulatory Workflows through <span className="text-sky-600 font-medium">GenAI</span> and <span className="text-indigo-600 font-medium">Systems Analysis</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500 mb-12">
            <span className="flex items-center gap-2 px-5 py-2 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow transition-shadow">
              <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.05a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17.657 16.657a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM10 6a4 4 0 100 8 4 4 0 000-8z"></path></svg>
              GenAI Strategy
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow transition-shadow">
              <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
              Systems Analysis
            </span>
            <span className="flex items-center gap-2 px-5 py-2 bg-slate-50 rounded-lg border border-slate-100 shadow-sm hover:shadow transition-shadow">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"></path></svg>
              AI Governance & Compliance
            </span>
          </div>

          <nav className="relative z-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-t border-gray-100 pt-10 select-none cursor-default">
            <span>Experience</span>
            <span>Fit Assessment</span>
            <span>Capabilities</span>
            <span>Contact</span>
          </nav>
        </div>
      </header>

      <main>
        {/* AI Chat Interaction - Prominent & Interactive */}
        <ChatInterface />

        {/* Experience Section - The "Evidence" */}
        <ExperienceSection />

        {/* Fit Assessment Tool - The "Utility" */}
        <FitAssessment />

        {/* Skills Section - The "Self-Awareness" */}
        <SkillsSection />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-24 px-4 text-center text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 inline-block p-4 rounded-full bg-slate-800 border border-slate-700">
             <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl font-black italic">MC</div>
          </div>
          <h2 className="text-3xl font-bold mb-2">Muna Conteh</h2>
          <p className="text-slate-500 mb-12 uppercase tracking-[0.3em] text-[10px] font-black">Strategic Software Analysis Expert</p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
            <div className="group flex items-center gap-3 text-slate-400">
              <div className="p-3 rounded-full bg-slate-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-medium">Washington, DC</span>
            </div>
            <a href="mailto:1Munaconteh@gmail.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/muna-c-864086107/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all">
              <div className="p-3 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="font-medium">Connect</span>
            </a>
          </div>

          <div className="max-w-2xl mx-auto pt-16 border-t border-slate-800 text-slate-500 text-sm">
            <p className="mb-6 italic opacity-40">
              "Traditional resumes are artifacts. Interactive profiles are proof."
            </p>
            <p className="font-medium tracking-wide">© 2026 MC. Designed and developed by Muna Conteh using Generative AI & Advanced Prompt Engineering.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
