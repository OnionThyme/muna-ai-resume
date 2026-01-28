
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Self-Assessment</h2>
          <p className="text-slate-500">
            Categorization of capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="flex flex-col h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 ${
                  cat.category === 'Strong' ? 'bg-emerald-100 text-emerald-700' :
                  cat.category === 'Moderate' ? 'bg-sky-100 text-sky-700' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {cat.category === 'Strong' ? '✓ Strong' : 
                   cat.category === 'Moderate' ? '○ Moderate' : 
                   '✕ Gaps'}
                </div>
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-slate-500 text-sm">{cat.description}</p>
              </div>

              <div className="space-y-6 flex-1">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{skill.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">Certifications</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['Business Analysis: Essential Tools and Techniques', 'Requirements Elicitation and Analysis', 'Agile Requirements Foundation', 'Learning Data Analytics: 1 Foundations'].map((cert, i) => (
              <span key={i} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-slate-600 shadow-sm">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
