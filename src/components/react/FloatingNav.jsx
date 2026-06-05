// components/react/FloatingNav.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 left-10 z-50 p-3 bg-zinc-900 border border-emerald-900 text-emerald-400 rounded-full hover:bg-emerald-900/20"
        >
          ↑ TOP
        </motion.button>
      )}
    </AnimatePresence>
  );
}