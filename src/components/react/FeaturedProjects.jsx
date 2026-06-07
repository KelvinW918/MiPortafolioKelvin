import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt, FaLock, FaTrophy } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const featuredData = [
  { 
    title: 'OptiStock 3D', 
    image: '/imagen/DigitalTwinWarehouse.webp', // Mapeado a tu imagen
    desc: 'Real-time Inventory Digital Twin with AI demand forecasting. Graduated with Honorable Mention.', 
    featured: true, commercial: true, videoUrl: 'https://www.youtube.com/embed/DaUsmcq2_Yg', walkthrough: "A Digital Twin that syncs three-dimensional spatial data with real-time stock management." 
  },
  { 
    title: 'KelvIA Engine', 
    image: '/imagen/KelvIA.webp', // Mapeado a tu imagen
    desc: 'Cognitive agentic engine with Llama 3.3 integration and modular toolkit for real-time AI reasoning.', 
    featured: true, isCaseStudy: true, github: 'https://github.com/KelvinW918/ai-agent-template' 
  },
  { 
    title: 'Arcadia: Emergency Dispatch', 
    image: '/imagen/SpatialIoT.webp', // He usado esta, ya que encaja con el flujo de IoT/Event-driven
    desc: 'Event-driven, low-latency microservice architecture for emergency units.', 
    featured: true, isCaseStudy: true, github: 'https://github.com/KelvinW918/Aragua_on_fire' 
  }
];

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="w-full p-4 mb-20">
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <FaStar className="text-amber-500" /> Selected Work
      </h2>
      <p className="text-zinc-500 text-sm mb-8 font-mono">
        // Click on any project to explore the architecture, challenges, and solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredData.map((project, index) => {
          const isAwardWinner = project.title === 'OptiStock 3D';
          
          return (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              onClick={() => setActiveProject(project)}
              className={`cursor-pointer bg-zinc-900 border rounded-2xl overflow-hidden flex flex-col transition-all relative ${
                isAwardWinner ? 'border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-amber-400' : 'border-zinc-800 hover:border-emerald-500'
              }`}
            >
              {/* Contenedor de la imagen */}
              <div className="h-48 w-full bg-zinc-950 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-500"
                />
                {isAwardWinner && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-zinc-950 text-[10px] font-bold px-3 py-1 rounded-md flex items-center gap-1 shadow-lg">
                    <FaTrophy size={10} /> BEST RESEARCH
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`text-lg font-bold mb-3 ${isAwardWinner ? 'text-amber-400' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  {project.commercial ? (
                    <><FaLock size={10} /> Commercial/Private</>
                  ) : (
                    <><FaExternalLinkAlt size={10} /> Open Source</>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <ProjectModal 
        project={activeProject} 
        isOpen={!!activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
}