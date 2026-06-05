import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECT_DETAILS = {
  '2021': { title: 'Asistente de Sistemas', points: ['Soporte técnico integral', 'Administración de infraestructura base'] },
  '2022': { title: 'Optimización de Inventarios', points: ['Automatización de procesos', 'Fortalecimiento lógico-programático', 'Optimización de stock'] },
  '2024': { title: 'Centro Médico El Bosque', points: ['Plataforma integral multirrol', 'Integración API WhatsApp (reducción ausentismo)', 'Módulos de BI para estadísticas médicas'] },
  '2025': { title: 'Gemelo Digital 3D', points: ['Gemelo Digital de inventario real-time', 'IA para predicción de demanda', 'Galardonado: Mención Honorífica y Publicación'] },
  '2026': { title: 'Altrueer (Web3)', points: ['Arquitectura backend L1', 'PostGIS + H3 (Geoespacial)', 'TimescaleDB para series temporales', 'Streaming optimizado con Redis/Nginx'] },
};

export default function HUD({ selectedNode, onClose }) {
  const [showModal, setShowModal] = useState(false);
  const projectInfo = PROJECT_DETAILS[selectedNode] || { title: '', points: [] };

  // Control estricto: Solo mostramos el modal si tenemos un nodo y no estamos cerrando
  useEffect(() => {
    if (selectedNode) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [selectedNode]);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-10 left-10 z-20 pointer-events-none">
        <div className="border-l-2 border-emerald-400 pl-4 bg-zinc-950/80 backdrop-blur-md p-5 min-w-50">
          <h2 className="text-emerald-400 font-mono text-[10px] uppercase">Node Status</h2>
          <p className="text-zinc-100 font-bold text-lg font-mono">{selectedNode ? `ID: ${selectedNode}` : 'ROOT_ACTIVE'}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && selectedNode && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-default"
            onClick={onClose}
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-zinc-900 border border-emerald-500/30 p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-emerald-400 font-mono text-2xl mb-6 tracking-tighter">{projectInfo.title}</h3>
              <ul className="space-y-4">
                {projectInfo.points.map((pt, i) => (
                  <li key={i} className="text-zinc-300 font-mono text-sm flex gap-2">
                    <span className="text-emerald-500">{'>'}</span> {pt}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onClose}
                className="mt-8 text-zinc-500 font-mono text-[10px] uppercase hover:text-white"
              >
                [ Close_Session ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}