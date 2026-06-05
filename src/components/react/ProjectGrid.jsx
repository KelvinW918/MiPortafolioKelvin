// ProjectGrid.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLock, FaExternalLinkAlt, FaNodeJs, FaJava, FaPython, 
  FaReact, FaDatabase, FaServer, FaCode, FaDesktop, FaBriefcase, 
  FaBox, FaBook, FaBrain 
} from 'react-icons/fa';
import { GiPanda } from 'react-icons/gi';
import { SiGo, SiPostgresql, SiCplusplus, SiDjango, SiThreedotjs, SiRedis, SiFastapi, SiLeaflet } from 'react-icons/si';
import ProjectModal from './ProjectModal';

// Tech icon map
const techIcons = {
  'Node.js': <FaNodeJs />, 'Java': <FaJava />, 'Python': <FaPython />, 'C++': <SiCplusplus />,
  'Go': <SiGo />, 'React': <FaReact />, 'Django': <SiDjango />, 'PostgreSQL': <SiPostgresql />,
  'Three.js': <SiThreedotjs />, 'MySQL': <FaDatabase />, 'Express': <FaServer />, 
  'Redis': <SiRedis />, 'FastAPI': <SiFastapi />, 'Leaflet.js': <SiLeaflet />, 'Redpanda': <GiPanda />,
  'Default': <FaCode />
};

// Badge icon map
const badgeIcons = {
  'IT Support': <FaDesktop />, 'On-Site': <FaBriefcase />,
  'Enterprise': <FaLock />, 'Legacy': <FaLock />, 'Private Code': <FaBox />,
  'R&D': <FaBook />, 'Core Learning': <FaBrain />
};

const projectsData = {
  '2021': [
    { title: 'Systems Infrastructure', desc: 'Foundational phase: Focused on network deployment, hardware troubleshooting, and OS optimization.', tags: ['Networking', 'Troubleshooting'], badges: ['IT Support', 'On-Site'] }
  ],
  '2022': [
    { title: 'Full-Stack Inventory', desc: 'Architected a full-stack inventory app with automated reporting.', tags: ['Node.js', 'MySQL', 'Express'], badges: ['Enterprise', 'Private Code'] },
    { title: 'Java Enterprise Solution', desc: 'Robust desktop inventory application with typed data flows.', tags: ['Java', 'PostgreSQL'], badges: ['Enterprise', 'Private Code'] },
    { title: 'C++ Performance Utils', desc: 'High-efficiency background algorithms and memory-optimized CLI modules.', tags: ['C++', 'Algorithms'], badges: ['Enterprise', 'Private Code'] }
  ],
  '2023': [
    { title: 'Deep-Dive R&D Sprint', desc: 'Aggressive learning sprint: Mastered asynchronous task scheduling, spatial indexing, and distributed systems.', tags: ['Python', 'Go'], badges: ['R&D', 'Core Learning'] }
  ],
  '2024': [
    { 
      title: 'Centro Médico El Bosque', 
      desc: 'Multi-role healthcare platform with WhatsApp API integration for automated patient reminders.', 
      tags: ['Django', 'React', 'PostgreSQL'], 
      featured: true, commercial: true, videoUrl: 'https://www.youtube.com/embed/A9gngdGXRW4',
      walkthrough: "A multi-role ecosystem (Admin/Doctor/Patient) engineered to automate clinical dispatching and eliminate communication overhead."
    }
  ],
  '2025': [
    { 
      title: 'OptiStock 3D', 
      desc: 'Real-time Inventory Digital Twin with AI demand forecasting. Graduated with Honorable Mention.', 
      tags: ['Three.js', 'Python'], 
      featured: true, commercial: true, videoUrl: 'https://www.youtube.com/embed/DaUsmcq2_Yg',
      walkthrough: "A Digital Twin that syncs three-dimensional spatial data with real-time stock management."
    }
  ],
  '2026': [
    { 
      title: 'Arcadia: Emergency Dispatch', 
      desc: 'Event-driven, low-latency microservice architecture.', 
      tags: ['Go', 'PostGIS', 'Leaflet.js'], 
      featured: true, isCaseStudy: true,
      challenge: "Transmit real-time movement of multiple units without freezing the map.",
      conventionalApproach: "Constant HTTP requests (Short Polling), saturating the unit table.",
      myApproach: "Event-driven architecture using Go (Goroutines) and Redpanda message bus for low-latency streaming.",
      codeSnippet: "func streamEvents(ch chan Event) { for event := range ch { broadcast(event) } }",
      github: 'https://github.com/KelvinW918/Aragua_on_fire.git'
    },
    { 
      title: 'Altrueer Layer 1', 
      desc: 'Spatial backend architecture for blockchain protocols.', 
      tags: ['Python', 'Redis', 'PostGIS'], 
      isCaseStudy: true,
      challenge: "Persistence for indexing millions of coordinates in real-time.",
      conventionalApproach: "Haversine distance calculations point-by-point scanning the entire database.",
      myApproach: "Hierarchical indexing with H3 (hexagonal grids) for O(1) searches and Redis caching.",
      codeSnippet: "CREATE INDEX idx_spatial ON tracking_table USING GIST(geom);"
    },
    { 
      title: 'IoT Telemetry Pipeline', 
      desc: 'High-concurrency ingestion engine for +10,000 concurrent vehicles.', 
      tags: ['FastAPI', 'PostGIS'], 
      isCaseStudy: true,
      challenge: "Process massive telemetry bursts without collapsing the backend.",
      conventionalApproach: "Synchronous endpoint processing each record individually via an ORM.",
      myApproach: "Asynchronous pipeline with FastAPI delegating load to PostGIS and temporal segmentation.",
      codeSnippet: "await db.execute('INSERT INTO telemetry ...') # Batch async insertion",
      github: 'https://github.com/KelvinW918/spatial-iot-platform.git'
    }
  ]
};

export default function ProjectGrid({ selectedId }) {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const projects = projectsData[selectedId] || [];

  const handleCardClick = (project) => {
    if (project.videoUrl || project.isCaseStudy) {
      setActiveProject(project);
      setShowModal(true);
    }
  };

  return (
    <div className={`w-full ${projects.length <= 2 ? "flex flex-wrap justify-center gap-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"} p-4`}>
      <AnimatePresence mode="wait">
        {projects.length > 0 ? (
          projects.map((project, index) => {
            const isAwardWinner = project.title.includes('OptiStock');
            const isClickable = project.videoUrl || project.isCaseStudy;
            
            return (
              <motion.div
                key={`${selectedId}-${index}`}
                onClick={() => handleCardClick(project)}
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                className={`p-6 rounded-xl border transition-all duration-300 flex flex-col ${
                  isClickable ? "group cursor-pointer hover:border-zinc-500" : "cursor-default border-zinc-800 bg-zinc-900/50"
                } ${
                  isAwardWinner
                    ? 'bg-amber-950/20 border-amber-500/50 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : project.featured 
                      ? 'bg-emerald-950/20 border-emerald-500/50 hover:border-emerald-400' 
                      : 'bg-zinc-900 border-zinc-800'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-lg font-bold ${isAwardWinner ? 'text-amber-400' : project.featured ? 'text-emerald-400' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  {isClickable && (
                    <div className="text-zinc-500 group-hover:text-white transition-colors">
                      {project.commercial ? <FaLock size={14} /> : <FaExternalLinkAlt size={14} />}
                    </div>
                  )}
                </div>

                <p className="text-zinc-400 mb-6 text-sm leading-relaxed flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.badges?.map(badge => (
                    <span key={badge} className="text-[10px] font-bold px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                      {badgeIcons[badge]} {badge}
                    </span>
                  ))}
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-500 flex items-center gap-1.5">
                      {techIcons[tag] || techIcons['Default']} {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="text-zinc-600 italic text-center w-full">Select a year to view technical evolution.</p>
        )}
      </AnimatePresence>
      
      <ProjectModal 
        project={activeProject} 
        isOpen={showModal} 
        onClose={() => { setShowModal(false); setActiveProject(null); }} 
      />
    </div>
  );
}