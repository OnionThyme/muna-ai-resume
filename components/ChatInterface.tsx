
import React, { useState, useRef, useEffect } from 'react';
import { queryExperience } from '../services/gemini';
import { ChatMessage } from '../types';

const SUGGESTED_PROMPTS = [
  "What AI projects has Muna led?",
  "Tell me about her Federal Reserve experience",
  "How does she approach stakeholder management?",
  "What's her experience with HIPAA compliance?"
];

const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  
  const renderLineContent = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={i} className="text-base font-bold text-slate-900 mt-6 mb-2 border-b border-slate-100 pb-1 first:mt-0">
              {renderLineContent(trimmed.replace('### ', ''))}
            </h4>
          );
        }

        if (trimmed.startsWith('* ')) {
          return (
            <div key={i} className="flex gap-3 ml-1 py-0.5">
              <span className="text-sky-500 font-black mt-0.5">•</span>
              <span className="flex-1 text-slate-700 leading-relaxed">
                {renderLineContent(trimmed.replace('* ', ''))}
              </span>
            </div>
          );
        }

        if (!trimmed) return <div key={i} className="h-2" />;

        return (
          <p key={i} className="leading-relaxed text-slate-700">
            {renderLineContent(line)}
          </p>
        );
      })}
    </div>
  );
};

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const resultText = await queryExperience(textToSend);
    const modelMsg: ChatMessage = { 
      role: 'model', 
      text: resultText
    };
    
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-16 px-4 bg-white border-b border-gray-100">
      <div className="max-w-4xl w-full text-center mb-10">
        <div className="mb-6">
          <span className="handwritten text-5xl md:text-7xl text-sky-400 opacity-90 -rotate-3 inline-block">Yes, I built this</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Interactive AI Assistant</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Ask about my project history, specialized skills, or strategic approach. 
          The assistant is grounded in my real work artifacts and experience.
        </p>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center gap-3 mx-auto active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.05a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17.657 16.657a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM10 6a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          {isOpen ? 'Close Interface' : 'Ask AI About Muna'}
        </button>
      </div>

      {isOpen && (
        <div className="max-w-5xl w-full border border-gray-200 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden animate-in zoom-in-95 fade-in duration-300 flex flex-col bg-slate-50 min-h-[600px]">
          {/* Header */}
          <div className="bg-white px-8 py-6 flex justify-between items-center border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-sky-50 rounded-xl">
                <svg className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 leading-tight">Ask AI About Muna</h3>
                <p className="text-xs text-slate-500 font-medium">Powered by her real experience</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat Content */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 flex flex-col">
            {messages.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                  <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Start a Conversation</h4>
                <p className="text-slate-500 text-sm max-w-md mb-10 leading-relaxed">
                  Ask me anything about Muna's experience, skills, or projects. I'll provide detailed, specific answers grounded in her actual work.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {SUGGESTED_PROMPTS.map((prompt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(prompt)}
                      className="text-left p-5 bg-white border border-gray-200 rounded-2xl text-sm font-medium text-slate-700 hover:border-sky-300 hover:bg-sky-50 transition-all hover:shadow-md active:scale-[0.98]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-6 rounded-3xl text-sm leading-relaxed shadow-sm animate-in fade-in duration-300 ${
                      msg.role === 'user' 
                        ? 'bg-sky-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
                    }`}>
                      <FormattedText text={msg.text} />
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl rounded-bl-none border border-gray-100 flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto flex gap-3 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Muna's experience..."
                className="flex-1 border border-gray-200 bg-slate-50 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all focus:bg-white"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-sky-600 text-white px-6 rounded-2xl hover:bg-sky-700 disabled:opacity-50 transition-all flex items-center justify-center shadow-lg hover:shadow-sky-200 active:scale-95"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-4 font-bold uppercase tracking-[0.2em]">
              AI assistant may occasionally hallucinate details. Verify with the resume sections below.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
