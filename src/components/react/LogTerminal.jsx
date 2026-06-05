import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LogTerminal() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = `[${new Date().toLocaleTimeString()}] SYNC_NODE_${Math.floor(Math.random() * 999)}: STABLE_LINK_ESTABLISHED`;
      setLogs(prev => [newLog, ...prev].slice(0, 8)); // Mantiene solo los últimos 8 logs
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-10 right-10 z-50 w-64 bg-zinc-950/90 border border-emerald-900 p-4 font-mono text-[10px] text-emerald-400/80 pointer-events-none"
    >
      <h3 className="mb-2 uppercase tracking-widest text-emerald-500 font-bold border-b border-emerald-900 pb-1">System Logs</h3>
      {logs.map((log, i) => (
        <p key={i} className="leading-tight mb-1 truncate">{log}</p>
      ))}
    </motion.div>
  );
}