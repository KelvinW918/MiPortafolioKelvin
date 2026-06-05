// ProjectModal.jsx
import { useEffect } from 'react';
import { FaWhatsapp, FaGithub, FaShoppingCart } from 'react-icons/fa';

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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl w-full max-h-[85vh] flex flex-col overflow-hidden relative shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">Close</button>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row overflow-hidden flex-grow">
          <div className="w-full md:w-3/5 p-6 flex items-center justify-center bg-black">
            {project.videoUrl ? (
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                <iframe className="w-full h-full" src={project.videoUrl} allowFullScreen></iframe>
              </div>
            ) : (
              <div className="w-full p-6 font-mono text-xs text-emerald-500 bg-zinc-950 rounded-lg border border-zinc-800 overflow-y-auto max-h-[60vh]">
                <pre className="whitespace-pre-wrap">{project.codeSnippet}</pre>
              </div>
            )}
          </div>

          <div className="w-full md:w-2/5 p-6 overflow-y-auto">
            {/* Sales Section for Commercial Projects */}
            {project.commercial && (
              <div className="mb-6 p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                <h4 className="text-emerald-400 font-bold text-sm mb-1 flex items-center gap-2">
                  <FaShoppingCart /> Professional Solution
                </h4>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  This project is production-ready. <strong>Purchase this source code</strong> or hire me to implement this custom solution for your business. Let's scale your operations together.
                </p>
              </div>
            )}

            {project.isCaseStudy ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest">The Challenge</h4>
                  <p className="text-zinc-100 text-sm">{project.challenge}</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-zinc-950 p-3 rounded border border-red-900/20">
                    <h4 className="text-red-400 font-bold text-[10px] mb-1">❌ Conventional Approach</h4>
                    <p className="text-zinc-500 text-xs">{project.conventionalApproach}</p>
                  </div>
                  <div className="bg-emerald-950/10 p-3 rounded border border-emerald-900/20">
                    <h4 className="text-emerald-400 font-bold text-[10px] mb-1">🟢 My Approach</h4>
                    <p className="text-zinc-300 text-xs">{project.myApproach}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest">Walkthrough</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.walkthrough}</p>
              </div>
            )}
            
            <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
              {/* GitHub Button */}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 text-white text-center font-bold rounded-lg hover:bg-zinc-700 transition-all text-sm">
                  <FaGithub size={18} />
                  View Repository
                </a>
              )}
              
              {/* Action Button (Dynamic) */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 text-black text-center font-bold rounded-lg hover:bg-emerald-400 transition-all text-sm">
                <FaWhatsapp size={18} />
                {project.commercial ? "Acquire Solution" : "Discuss Architecture"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}