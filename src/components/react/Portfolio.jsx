import { useState } from 'react';
import DigitalTwin from './DigitalTwin';
import HUD from './HUD';

export default function Portfolio() {
  // Estado único que controla toda la aplicación
  const [selectedNode, setSelectedNode] = useState(null);

  // Función para manejar la selección de un nodo
  const handleNodeSelect = (id) => {
    setSelectedNode(id);
  };

  // Función para cerrar (limpiar la selección)
  const handleClose = () => {
    setSelectedNode(null);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* El Mundo 3D: Se pasa isAnalysis para controlar el zoom y la rotación */}
      <DigitalTwin 
        onNodeSelect={handleNodeSelect} 
        isAnalysis={!!selectedNode} 
        selectedId={selectedNode} 
      />

      {/* La Interfaz (HUD): Reacciona automáticamente al estado selectedNode */}
      <HUD 
        selectedNode={selectedNode} 
        onClose={handleClose} 
      />
      
      {/* Capa de fondo para estilizar (opcional) */}
      <div className="absolute bottom-10 right-10 text-emerald-400/20 font-mono text-[10px] pointer-events-none">
        K. WILLIAMS // DIGITAL_TWIN_PORTFOLIO // V.1.0
      </div>
    </div>
  );
}