import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiGo, SiCplusplus, SiPostgresql, 
  SiRedis, SiMongodb, SiDocker, SiNginx, SiReact, SiNodedotjs, SiFastapi, 
  SiLeaflet, SiAstro, SiApachekafka
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbDatabase, TbCube3dSphereOff, TbRobot } from 'react-icons/tb';

const TECH_STACK = [
  { name: 'Python', icon: <SiPython />, color: "#3776AB", usage: "APIs · AI Agents" },
  { name: 'Go', icon: <SiGo />, color: "#00ADD8", usage: "Microservices · High Concurrency" },
  { name: 'JavaScript', icon: <SiJavascript />, color: "#F7DF1E", usage: "Frontend · Backend" },
  { name: 'TypeScript', icon: <SiTypescript />, color: "#3178C6", usage: "Static Typing" },
  { name: 'Java', icon: <FaJava />, color: "#007396", usage: "Spring Boot" },
  { name: 'C++', icon: <SiCplusplus />, color: "#00599C", usage: "High Performance" },
  { name: 'FastAPI', icon: <SiFastapi />, color: "#009688", usage: "Async APIs" },
  { name: 'Node.js', icon: <SiNodedotjs />, color: "#339933", usage: "Backend · Streaming" },
  { name: 'React', icon: <SiReact />, color: "#61DAFB", usage: "Frontend · 3D" },
  { name: 'Astro', icon: <SiAstro />, color: "#FF5D01", usage: "Portfolio" },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: "#4169E1", usage: "Advanced SQL" },
  { name: 'PostGIS', icon: <TbDatabase />, color: "#2F6B2F", usage: "Geospatial" },
  { name: 'TimescaleDB', icon: <TbDatabase />, color: "#FDB415", usage: "Time Series" },
  { name: 'Redis', icon: <SiRedis />, color: "#DC382D", usage: "Caching" },
  { name: 'MongoDB', icon: <SiMongodb />, color: "#47A248", usage: "NoSQL" },
  { name: 'Docker', icon: <SiDocker />, color: "#2496ED", usage: "Containers" },
  { name: 'Kafka', icon: <SiApachekafka />, color: "#FF0000", usage: "Event-driven" },
  { name: 'Nginx', icon: <SiNginx />, color: "#009639", usage: "Reverse Proxy" },
  { name: 'AWS', icon: <FaAws />, color: "#FF9900", usage: "Cloud · Serverless" },
  { name: 'Azure', icon: <VscAzure />, color: "#0078D4", usage: "Cloud · DevOps" },
  { name: 'Three.js', icon: <TbCube3dSphereOff />, color: "#049ef4", usage: "3D · Visualization" },
  { name: 'Leaflet', icon: <SiLeaflet />, color: "#199900", usage: "Maps" },
  { name: 'AI/ML', icon: <TbRobot />, color: "#8b5cf6", usage: "Agents · LLMs" }
];

function BackgroundParticles() {
  const particlesRef = useRef();
  const count = 600;
  
  const particles = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 12;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 12;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#10b981" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function TwinklingSun() {
  const sunRef = useRef();
  const glowRef = useRef();
  const sparkleRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.1;
      
      // Efecto titilante (pulsación de intensidad)
      const twinkle = 0.7 + Math.sin(t * 8) * 0.15 + Math.sin(t * 3) * 0.1;
      sunRef.current.material.emissiveIntensity = 2.2 * twinkle;
    }
    
    if (glowRef.current) {
      // Pulso suave del glow
      const glowPulse = 1 + Math.sin(t * 2.5) * 0.03;
      glowRef.current.scale.setScalar(glowPulse);
      glowRef.current.material.emissiveIntensity = 0.6 + Math.sin(t * 4) * 0.2;
    }
    
    if (sparkleRef.current) {
      // Rotación de los destellos
      sparkleRef.current.rotation.y = t * 0.3;
      sparkleRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Luz principal con intensidad variable */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={1.2} 
        color="#fbbf24" 
        distance={12} 
        decay={1}
      />
      
      {/* Luz secundaria cálida pulsante */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={0.4} 
        color="#f97316" 
        distance={15} 
        decay={1.5}
      />
      
      {/* Núcleo del sol */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[0.32, 64, 64]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          emissive="#f59e0b" 
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      {/* Capa de brillo exterior pulsante */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial 
          color="#f97316" 
          emissive="#f97316" 
          emissiveIntensity={0.8}
          transparent 
          opacity={0.25}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Destellos de luz (partículas alrededor) */}
      <group ref={sparkleRef}>
        <Sparkles 
          count={80} 
          scale={1.4} 
          size={0.04} 
          speed={0.8} 
          color="#fbbf24" 
          opacity={0.6}
        />
        <Sparkles 
          count={40} 
          scale={1.6} 
          size={0.06} 
          speed={1.2} 
          color="#f97316" 
          opacity={0.4}
        />
        <Sparkles 
          count={30} 
          scale={1.8} 
          size={0.03} 
          speed={0.5} 
          color="#ffedd5" 
          opacity={0.5}
        />
      </group>
    </group>
  );
}

function TechNode({ tech, angle, radius, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef();
  
  useFrame((state) => {
    if (!nodeRef.current) return;
    const t = state.clock.getElapsedTime();
    // Movimiento ondulado limpio y suave
    const yOffset = Math.sin(angle * 2 + t * 1.2) * 0.15;
    const radiusPulse = Math.sin(t * 1.5 + index) * 0.03;
    const currentRadius = radius + radiusPulse;
    
    const x = Math.cos(angle + t * 0.15) * currentRadius;
    const z = Math.sin(angle + t * 0.15) * currentRadius;
    
    nodeRef.current.position.x = x;
    nodeRef.current.position.z = z;
    nodeRef.current.position.y = yOffset;
  });

  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  return (
    <group ref={nodeRef} position={[x, 0, z]}>
      <Html center>
        <motion.div 
          className="cursor-pointer p-2.5 rounded-xl bg-black/40 backdrop-blur-md transition-all duration-300"
          style={{ 
            border: `1px solid ${tech.color}30`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.15 }}
          animate={{ 
            scale: isHovered ? 1.15 : 1,
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
        >
          <div 
            className="text-xl"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 8, scale: 0.9 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: 8, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg text-center whitespace-nowrap shadow-lg"
                style={{ borderLeft: `3px solid ${tech.color}` }}
              >
                <div className="font-semibold text-white text-[11px]">{tech.name}</div>
                <div className="text-[9px] opacity-70">{tech.usage}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Html>
    </group>
  );
}

export default function DigitalTwin() {
  return (
    <div className="w-full h-[550px] bg-black relative overflow-hidden">
      <Canvas camera={{ position: [0, 0.5, 5.5], fov: 50 }}>
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={0.3} color="#10b981" />
        <pointLight position={[-2, 1, 3]} intensity={0.2} color="#3b82f6" />
        
        <fog attach="fog" args={['#000000', 7, 14]} />
        
        <BackgroundParticles />
        <TwinklingSun />
        
        {TECH_STACK.map((tech, i) => (
          <TechNode 
            key={tech.name} 
            tech={tech} 
            angle={(i / TECH_STACK.length) * Math.PI * 2} 
            radius={2.6}
            index={i}
          />
        ))}
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          zoomSpeed={0.6}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.2}
          minDistance={3.5}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}