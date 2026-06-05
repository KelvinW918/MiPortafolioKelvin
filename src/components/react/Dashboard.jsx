// Dashboard.jsx
import { useState } from 'react';
import DigitalTwin from './DigitalTwin.jsx';
import ProjectGrid from './ProjectGrid.jsx';
import ProfessionalTimeline from './ProfessionalTimeline.jsx';

export default function Dashboard() {
  const [activeYear, setActiveYear] = useState('2026');

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-20">
      
      {/* 1. Modelo 3D: Contenedor Hero del Dashboard */}
      <div className="w-full h-[500px] border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-950/50 shadow-2xl relative group">
        <div className="absolute inset-0 border border-emerald-500/10 rounded-3xl pointer-events-none"></div>
        <DigitalTwin 
          onYearSelect={setActiveYear} 
          selectedId={activeYear} 
        />
      </div>

      {/* 2. Journey & Projects: Layout de dos columnas fluido */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Columna Izquierda: Trayectoria */}
        <div className="lg:col-span-4">
          <h2 className="text-sm font-mono text-emerald-500 mb-8 uppercase tracking-widest border-l-2 border-emerald-500 pl-4">// Professional Journey</h2>
          <ProfessionalTimeline 
            activeYear={activeYear} 
            setActiveYear={setActiveYear} 
          />
        </div>

        {/* Columna Derecha: Proyectos */}
        <div className="lg:col-span-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
              Featured Projects <span className="text-emerald-500">/</span> {activeYear}
            </h2>
            <p className="text-zinc-500 font-mono text-xs mt-2 uppercase tracking-widest">Technical execution & results</p>
          </div>
          <ProjectGrid selectedId={activeYear} />
        </div>
      </div>
      
    </div>
  );
}