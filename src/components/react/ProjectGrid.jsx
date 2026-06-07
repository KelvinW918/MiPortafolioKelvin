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
      image: '/imagen/NexusMed.png',
      desc: 'Multi-role healthcare platform with WhatsApp API integration for automated patient reminders.', 
      tags: ['Django', 'React', 'PostgreSQL'], 
      featured: true, commercial: true, videoUrl: 'https://www.youtube.com/embed/A9gngdGXRW4',
      walkthrough: "A multi-role ecosystem (Admin/Doctor/Patient) engineered to automate clinical dispatching and eliminate communication overhead."
    }
  ],
  '2025': [
    { 
      title: 'OptiStock 3D', 
      image: '/imagen/OptiStock3D.png',
      desc: 'Real-time Inventory Digital Twin with AI demand forecasting. Graduated with Honorable Mention.', 
      tags: ['Three.js', 'Python'], 
      featured: true, commercial: true, videoUrl: 'https://www.youtube.com/embed/DaUsmcq2_Yg',
      walkthrough: "A Digital Twin that syncs three-dimensional spatial data with real-time stock management."
    }
  ],
  '2026': [
    { 
      title: 'KelvIA Engine', 
      image: '/imagen/aiAgent.png',
      desc: 'Cognitive agentic engine with Llama 3.3 integration and modular toolkit for real-time AI reasoning.', 
      tags: ['Python', 'FastAPI'], 
      featured: true, isCaseStudy: true,
      challenge: "High-latency responses in standard LLM integration.",
      conventionalApproach: "Direct API calls with long-running synchronous requests.",
      myApproach: "Modular architecture with stateful Toolkit and asynchronous task handling for low-latency reasoning.",
      codeSnippet: `async def process_intent(user_input):
    agent = Agent(model="llama-3.3")
    # Non-blocking async execution
    response = await agent.run_chain(
        input=user_input,
        tools=[search_db, compute_logic]
    )
    return response`,
      github: 'https://github.com/KelvinW918/ai-agent-template'
    },
    { 
      title: 'Industrial Telemetry', 
      image: '/imagen/IndustrialTelemetryEngine.png',
      desc: 'High-concurrency IoT pipeline for +50 sensors with real-time visualization and analytics.', 
      tags: ['Python', 'PostgreSQL', 'FastAPI'], 
      featured: true, isCaseStudy: true,
      challenge: "Ingesting and visualizing continuous telemetry streams efficiently.",
      conventionalApproach: "Synchronous REST endpoints and polling.",
      myApproach: "Asynchronous Python pipelines with temporal segmentation and optimized database writes.",
      codeSnippet: `async def ingest_telemetry(data):
    # Batch async insertion for high throughput
    async with db.transaction():
        await db.execute(
            "INSERT INTO sensors_data (val, ts) VALUES ($1, NOW())",
            data['value']
        )
    await broadcast_to_dashboard(data)`,
      github: 'https://github.com/KelvinW918/industrial-telemetry-engine'
    },
    { 
      title: 'Digital Twin 3D', 
      image: '/imagen/DigitalTwin.png',
      desc: 'Warehouse inventory visualization using Three.js with dynamic color-coded stock alerts.', 
      tags: ['Three.js'], 
      featured: true, isCaseStudy: true,
      challenge: "Rendering hundreds of interactive 3D objects with state updates.",
      conventionalApproach: "Heavy DOM manipulations and static scene rendering.",
      myApproach: "Optimized scene graph rendering with efficient state-driven UI synchronisation.",
      codeSnippet: `function updateInventory(stock) {
  scene.children.forEach(obj => {
    if (obj.name === stock.id) {
      // Efficient material color update
      obj.material.color.setHex(
        stock.level < 10 ? 0xff0000 : 0x00ff00
      );
    }
  });
}`,
      github: 'https://github.com/KelvinW918/digital-twin-threejs'
    },
    { 
      title: 'Altrueer Layer 1', 
      image: '/imagen/h3GeospatialDemo.png',
      desc: 'Spatial backend architecture for blockchain protocols.', 
      tags: ['Python', 'Redis', 'PostGIS'], 
      isCaseStudy: true,
      challenge: "Persistence for indexing millions of coordinates in real-time.",
      conventionalApproach: "Haversine distance calculations scanning the entire database.",
      myApproach: "Hierarchical indexing with H3 (hexagonal grids) for O(1) spatial searches and Redis caching.",
      codeSnippet: `-- Spatial indexing via H3
SELECT h3_latlng_to_cell(geom, 9) AS h3_index 
FROM transactions
GROUP BY h3_index;

# Redis O(1) coordinate cache
redis.geoadd("fleet_loc", lon, lat, unit_id)`,
      github: 'https://github.com/KelvinW918'
    },
    { 
      title: 'H3 Spatial Demo', 
      image: '/imagen/h3GeospatialDemo.png',
      desc: 'Geospatial clustering and density analysis using Uber H3 hexagonal hierarchical indexing.', 
      tags: ['Python', 'Leaflet.js'], 
      isCaseStudy: true,
      challenge: "Complex spatial queries on millions of coordinate points.",
      conventionalApproach: "Resource-heavy geometric intersection math.",
      myApproach: "Hexagonal grid clustering for efficient spatial partitioning and density analysis.",
      codeSnippet: `import h3

# Generate hex index for spatial partition
h3_index = h3.latlng_to_cell(lat, lng, 7)
# Rapid neighbor lookup
neighbors = h3.grid_disk(h3_index, 1)

# Render clustered heat layer
map.add_layer(create_heatmap(neighbors))`,
      github: 'https://github.com/KelvinW918/h3-geospatial-demo'
    },
    { 
      title: 'Arcadia: Emergency Dispatch', 
      image: '/imagen/Arcadia.png',
      desc: 'Event-driven, low-latency microservice architecture for emergency units.', 
      tags: ['Go', 'PostgreSQL', 'Leaflet.js', 'Redpanda'], 
      featured: true, isCaseStudy: true,
      challenge: "High-throughput message buffering for real-time tracking.",
      conventionalApproach: "Constant HTTP Short Polling.",
      myApproach: "Event-driven architecture with Go (Goroutines) and Redpanda bus for streaming.",
      codeSnippet: `func streamUnitLocation(ch chan Location) {
    for loc := range ch {
        // Low-latency broadcast via Redpanda
        producer.Produce(topic, loc)
        go updateMapInterface(loc)
    }
}`,
      github: 'https://github.com/KelvinW918/Aragua_on_fire'
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
                className={`rounded-xl border transition-all duration-300 flex flex-col overflow-hidden ${
                  isClickable ? "group cursor-pointer hover:border-zinc-500" : "cursor-default border-zinc-800 bg-zinc-900/50"
                } ${
                  isAwardWinner
                    ? 'bg-amber-950/20 border-amber-500/50 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : project.featured 
                      ? 'bg-emerald-950/20 border-emerald-500/50 hover:border-emerald-400' 
                      : 'bg-zinc-900 border-zinc-800'
                }`}
              >
                {project.image && (
                  <div className="h-40 w-full overflow-hidden bg-zinc-950">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col">
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