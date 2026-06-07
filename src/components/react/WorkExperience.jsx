import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const experience = [
  {
    company: "Freelancer & Altrueer",
    role: "Senior Full Stack & Systems Engineer",
    period: "2025 - 2026",
    desc: "Architecture of AI reasoning engines (Llama 3.3), 3D visualization systems (Digital Twins), and geospatial backends. Specialized in high-concurrency systems, event-driven processing (Go, Redpanda), and spatial data optimization using H3.",
  },
  {
    company: "Centro Médico El Bosque",
    role: "Full Stack Developer",
    period: "2024",
    desc: "Development of a multi-role healthcare platform. Automation of clinical workflows and patient notifications via WhatsApp API. Implemented a robust architecture (Django/React/PostgreSQL) to eliminate bottlenecks in medical management.",
  },
  {
    company: "Self-Directed Learning",
    role: "R&D Software Engineer",
    period: "2023",
    desc: "Intensive year of technical specialization. Mastered distributed architectures, asynchronous programming, backend scalability, and deep-dive research into spatial indexing algorithms.",
  },
  {
    company: "Freelance",
    role: "Software Developer",
    period: "2022",
    desc: "Developed custom solutions for small businesses, retail, and organizations. Created automated inventory systems and business management tools focused on process optimization.",
  },
  {
    company: "Inversiones Tornillos Serrano",
    role: "IT Support Assistant",
    period: "2021",
    desc: "Comprehensive software and hardware technical support. Responsible for infrastructure deployment, system maintenance, technical incident resolution, and operational environment optimization.",
  }
];

export default function WorkExperience() {
  return (
    <div className="w-full p-4 mb-12">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <FaBriefcase className="text-emerald-500" /> Work Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-zinc-800 pl-6 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 border-2 border-emerald-500 rounded-full" />
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <div className="text-emerald-500 font-medium">{job.company}</div>
            <div className="text-zinc-500 text-sm mb-3 flex items-center gap-2">
              <FaCalendarAlt size={12} /> {job.period}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}