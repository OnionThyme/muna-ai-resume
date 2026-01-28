
import React, { useState } from 'react';
import { analyzeJobFit } from '../services/gemini';
import { STRONG_FIT_EXAMPLE, WEAK_FIT_EXAMPLE } from '../constants';

interface AnalysisResult {
  fitLevel: 'Strong' | 'Moderate' | 'Weak';
  summary: string;
  strengths: string[];
  gaps: string[];
  verdict: string;
}

const FitAssessment: React.FC = () => {
  const [jd, setJd] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (text: string) => {
    const targetJd = text || jd;
    if (!targetJd.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeJobFit(targetJd);
      setResult(analysis);
    } catch (err) {
      setError("Failed to analyze. Please ensure the API is configured correctly.");
    } finally {
      setIsLoading(false);
    }
  };

  const getBadgeColor = (level: string) => {
    switch(level) {
      case 'Strong': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Moderate': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  return (
    <section id="fit-check" className="py-24 bg-slate-900 text-white px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Honest Fit Assessment</h2>
          <p className="text-slate-400">
            Paste a job description and get an AI-powered, honest assessment of my fit. 
            You can also click on the buttons to see an example of roles are a Strong or Weak fit.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-900">
          <div className="flex flex-wrap gap-4 mb-6">
            <button 
              onClick={() => { setJd(STRONG_FIT_EXAMPLE); handleAnalyze(STRONG_FIT_EXAMPLE); }}
              className="text-xs flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors border border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Strong Fit Example
            </button>
            <button 
              onClick={() => { setJd(WEAK_FIT_EXAMPLE); handleAnalyze(WEAK_FIT_EXAMPLE); }}
              className="text-xs flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors border border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Weak Fit Example
            </button>
          </div>

          <textarea 
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            className="w-full h-48 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 mb-6 bg-slate-50"
            placeholder="Paste a job description here..."
          ></textarea>

          <button 
            onClick={() => handleAnalyze(jd)}
            disabled={isLoading || !jd.trim()}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Analyzing Fit...
              </>
            ) : 'Analyze Fit'}
          </button>

          {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}

          {result && (
            <div className="mt-10 pt-10 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getBadgeColor(result.fitLevel)}`}>
                    {result.fitLevel} Fit
                  </div>
                  <h3 className="text-xl font-bold">Analysis Result</h3>
                </div>
              </div>

              <p className="text-slate-700 italic border-l-4 border-sky-400 pl-4 mb-8 leading-relaxed">
                "{result.summary}"
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wider mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Strength Points
                  </h4>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-emerald-500">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-amber-700 font-bold text-sm uppercase tracking-wider mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Gap Analysis
                  </h4>
                  <ul className="space-y-2">
                    {result.gaps.map((g, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-amber-500">•</span> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-slate-900 font-bold text-sm mb-2 uppercase tracking-widest opacity-50">Verdict</h4>
                <p className="text-slate-800 leading-relaxed">{result.verdict}</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-slate-500 mt-12 text-sm italic">
          ...
        </p>
      </div>
    </section>
  );
};

export default FitAssessment;
