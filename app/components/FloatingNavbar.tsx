"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingNavbarProps {
  onContactClick: () => void;
}

export default function FloatingNavbar({ onContactClick }: FloatingNavbarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="backdrop-blur-md bg-[#131313]/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                <div className="font-roboto text-lg font-medium">
                  orbitta digital
                </div>
                
                <div className="hidden md:block">
                  <p className="font-roboto text-sm text-gray-300">
                    transforme seu infoproduto em saas e escale seu negócio
                  </p>
                </div>

                <button
                  onClick={onContactClick}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#5A379F] via-[#37AFFF] to-[#EC5781] text-white font-medium text-sm hover:scale-105 transition-transform"
                >
                  Começar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}