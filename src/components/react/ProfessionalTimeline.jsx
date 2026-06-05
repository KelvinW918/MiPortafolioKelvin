// ProfessionalTimeline.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircle, FaInfoCircle, FaMousePointer } from 'react-icons/fa';

const timelineData = {
  '2021': { 
    title: 'Systems Assistant | Inversiones Tornillos Serrano C.A.', 
    desc: 'Foundational entry into IT infrastructure. Developed analytical thinking, systems support, and a deep understanding of core hardware/software architectures.' 
  },
  '2022': { 
    title: 'Code Integration & Logic', 
    desc: 'Translating concepts into functional software. Focused on mastering programming logic, backend data flows, scripting, and monolithic application patterns.' 
  },
  '2023': { 
    title: 'Deep Learning & Optimization', 
    desc: 'Intensive learning sprint. Implementation of relational databases, asynchronous task management, and OOP architectural patterns.' 
  },
  '2024': { 
    title: 'Enterprise Deployment | Centro Médico El Bosque', 
    desc: 'Engineered a multi-role healthcare platform. Integrated WhatsApp API communication layers to optimize user engagement and operational efficiency.' 
  },
  '2025': { 
    title: 'Award-Winning R&D | OptiStock 3D', 
    desc: 'Developed a real-time Inventory Digital Twin with Three.js and AI demand forecasting. Graduated with Honorable Mention and Publication Mention for the excellence and technical relevance.' 
  },
  '2026': { 
    title: 'Architecture & Data Lead | Altrueer', 
    desc: 'Backend spatial architecture (Python/PostGIS/TimescaleDB). Engineered low-latency emergency dispatch systems and high-concurrency pipelines for +10,000 concurrent units.' 
  }
};

export default function ProfessionalTimeline({ activeYear, setActiveYear }) {
  const interactiveYears = ['2024', '2025', '2026'];
  const isInteractive = interactiveYears.includes(activeYear);

  return (
    <div className="w-full flex flex-col gap-6" id="trajectory">
      
      {/* Instrucciones Interactivas Fijas */}
      <div className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
        isInteractive 
          ? "text-emerald-500/80 bg-emerald-500/5 border-emerald-500/20" 
          : "text-zinc-500/70 bg-zinc-900/30 border-zinc-800"
      }`}>
        <FaInfoCircle className="text-xl animate-pulse" />
        <p className="text-xs font-mono uppercase tracking-wider">
          {isInteractive 
            ? "Click the nodes to navigate. Interactive projects are available below." 
            : "Touch a node to explore my professional history."}
        </p>
      </div>

      {/* Selector de años */}
      <div className="flex flex-wrap justify-start items-center gap-6">
        {Object.keys(timelineData).map((year) => (
          <button 
            key={year}
            onClick={() => setActiveYear(year)}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${
              activeYear === year 
                ? 'text-emerald-400 scale-110' 
                : 'text-zinc-600 hover:text-emerald-500'
            }`}
          >
            <FaCircle className="text-[10px]" />
            <span className="font-mono text-sm">{year}</span>
          </button>
        ))}
      </div>

      {/* Tarjeta de descripción */}
      <div className="min-h-[180px] bg-zinc-900/30 p-6 rounded-xl border border-zinc-800 backdrop-blur-sm relative">
        {isInteractive && (
          <div className="absolute top-4 right-4 text-emerald-500/20">
            <FaMousePointer size={20} />
          </div>
        )}
        <AnimatePresence mode="wait">
          {activeYear && timelineData[activeYear] && (
            <motion.div 
              key={activeYear}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg text-emerald-400 font-bold mb-2">{timelineData[activeYear].title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{timelineData[activeYear].desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}