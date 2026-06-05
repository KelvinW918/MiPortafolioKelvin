import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiGo, SiCplusplus, SiPostgresql, 
  SiRedis, SiMongodb, SiDocker, SiNginx, SiReact, SiNodedotjs, SiFastapi, SiLeaflet, SiAstro, SiApachekafka
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbDatabase, TbCube3dSphereOff, TbRobot } from 'react-icons/tb';

const technologies = [
  // Lenguajes
  { name: 'Python', icon: <SiPython className="text-blue-500" /> },
  { name: 'Go', icon: <SiGo className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
  
  // Backend & Frameworks
  { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'React', icon: <SiReact className="text-cyan-300" /> },
  { name: 'Astro', icon: <SiAstro className="text-orange-400" /> },
  
  // Base de Datos & Geoespacial
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-400" /> },
  { name: 'PostGIS', icon: <TbDatabase className="text-emerald-500" /> },
  { name: 'TimescaleDB', icon: <TbDatabase className="text-purple-500" /> },
  { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  
  // Infraestructura & Streaming
  { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
  { name: 'Kafka/Redpanda', icon: <SiApachekafka className="text-orange-600" /> },
  { name: 'Nginx', icon: <SiNginx className="text-green-400" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  { name: 'Azure', icon: <VscAzure className="text-blue-500" /> },
  
  // Especialidades
  { name: 'Three.js', icon: <TbCube3dSphereOff className="text-white" /> },
  { name: 'Leaflet.js', icon: <SiLeaflet className="text-green-500" /> },
  { name: 'AI/ML', icon: <TbRobot className="text-purple-400" /> }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl text-emerald-400 font-mono mb-10 border-l-4 border-emerald-400 pl-4">
        STACK_TECNOLÓGICO
      </h2>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl cursor-pointer flex flex-col items-center w-24 hover:border-emerald-500/50"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <span className="text-zinc-400 text-[9px] font-mono text-center uppercase tracking-tighter">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}