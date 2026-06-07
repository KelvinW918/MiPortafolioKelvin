// ProjectModal.jsx
import { useEffect } from 'react';
import { FaWhatsapp, FaGithub, FaShoppingCart, FaCode } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  // 1. Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const whatsappUrl = "https://wa.me/584140393662";

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden relative shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${project.featured ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`}></div>
            <h2 className="text-xl font-bold text-white tracking-tight">{project.title}</h2>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
            [ Close ]
          </button>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row overflow-hidden flex-grow">
          
          {/* Left Side: Visual / Code Terminal */}
          <div className="w-full md:w-3/5 p-4 flex items-center justify-center bg-black">
            {project.videoUrl ? (
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
                <iframe className="w-full h-full" src={project.videoUrl} allowFullScreen title={project.title}></iframe>
              </div>
            ) : (
              <div className="w-full h-full min-h-[300px] p-6 font-mono text-xs bg-zinc-950 rounded-xl border border-zinc-800 overflow-y-auto relative group">
                <div className="absolute top-3 right-4 text-zinc-700 flex items-center gap-2">
                    <FaCode /> <span className="uppercase text-[9px] tracking-tighter">Technical Snippet</span>
                </div>
                <pre className="text-emerald-500 leading-relaxed">
                  <code className="whitespace-pre-wrap">
                    {project.codeSnippet || `// Technical implementation details\n// for ${project.title}\n\n// No snippet available, but architecture \n// can be discussed via WhatsApp.`}
                  </code>
                </pre>
              </div>
            )}
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-zinc-900/50">
            
            {/* Professional/Commercial Banner */}
            {project.commercial && (
              <div className="mb-8 p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                <h4 className="text-amber-400 font-bold text-xs mb-2 flex items-center gap-2 uppercase tracking-widest">
                  <FaShoppingCart /> Industry Solution
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  This system is production-ready. You can <strong>acquire the source code</strong> or request a personalized implementation for your company.
                </p>
              </div>
            )}

            {/* Content Logic */}
            {project.isCaseStudy ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-emerald-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 opacity-70">The Challenge</h4>
                  <p className="text-zinc-100 text-sm leading-relaxed font-medium">{project.challenge}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-red-900/20">
                    <h4 className="text-red-500 font-bold text-[9px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span>❌</span> Conventional Approach
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed italic">{project.conventionalApproach || "Generic solution with high latency and scalability bottlenecks."}</p>
                  </div>
                  
                  <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
                    <h4 className="text-emerald-500 font-bold text-[9px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span>🟢</span> Optimized Approach
                    </h4>
                    <p className="text-zinc-200 text-xs leading-relaxed">{project.myApproach}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-emerald-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 opacity-70">Project Walkthrough</h4>
                <p className="text-zinc-200 text-sm leading-relaxed">{project.walkthrough || project.desc}</p>
              </div>
            )}
            
            {/* Action Footer */}
            <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-800 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-700 transition-all border border-zinc-700">
                  <FaGithub size={16} />
                  Explore Source
                </a>
              )}
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10">
                <FaWhatsapp size={16} />
                {project.commercial ? "Acquire Solution" : "Architecture Consult"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}