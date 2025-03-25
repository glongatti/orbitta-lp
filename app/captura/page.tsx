"use client";

import Particles from '../components/Particles';
import OrbitalSystem from '../components/OrbitalSystem';
import { Coins, Sparkles, Timer, Trophy, TrendingUp, Users, Github, Linkedin, Instagram, Mail, ChevronDown } from 'lucide-react';
import WhatsAppDialog from '../components/WhatsAppDialog';
import FloatingNavbar from '../components/FloatingNavbar';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CapturePage() {
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);

  const scrollToContact = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CtaClick');
    }
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CtaClick');
    }
    
    // @ts-ignore
    window.neurolead.open();
  }

  return (
    <main className="relative overflow-hidden bg-[#131313] text-[#f1f1f1]">
      <FloatingNavbar onContactClick={openChat} />
      <WhatsAppDialog 
        isOpen={isWhatsAppDialogOpen}
        onClose={() => setIsWhatsAppDialogOpen(false)}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <Particles />
        
        {/* Floating Spheres */}
        <div className="floating-sphere sphere-1" />
        <div className="floating-sphere sphere-2" />
        <div className="floating-sphere sphere-3" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="py-6 flex justify-between items-center">
            <div className="font-roboto text-xl font-medium">orbitta digital</div>
          </nav>
          
          <div className="min-h-[calc(100vh-88px)] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-20"
              >
                <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl xl:text-xl font-semibold leading-tight mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                    Monetize sua Base de Alunos com um Software Personalizado e Gere Receita Recorrente
                  </span>
                </h1>
                
                <p className="font-roboto text-xl text-[#c7c7c7] font-light mb-12 pr-4">
                  Vamos construir em semanas um software que ajudará seu aluno a ter mais resultados, enquanto gera uma nova fonte de receita para o seu negócio escalar ainda mais.
                </p>

                <motion.button 
                  onClick={scrollToContact}
                  className="cta-button text-lg font-medium font-roboto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>começar meu projeto</span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative lg:absolute lg:right-0 lg:w-[60%] xl:w-[55%] pointer-events-none select-none"
                style={{
                  perspective: "1000px"
                }}
              >
                <motion.div
                  animate={{
                    rotateY: [0, 2, 0],
                    rotateX: [0, -1, 0]
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Image
                    src="/images/Midnight.png"
                    alt="Software personalizado em notebook"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-xl shadow-2xl"
                    priority
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5A379F]/30 via-[#37AFFF]/30 to-[#EC5781]/30 blur-3xl -z-10" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#131313] pointer-events-none" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-8" />
        <div className="floating-sphere sphere-9" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-inter text-3xl sm:text-3xl md:text-4xl font-thin leading-tight mb-8">
              Apenas mais um passo para o seu <span className="font-semibold">projeto nascer</span>
            </h2>
            <p className="font-roboto text-lg text-gray-300 font-light mb-12">
              Toque no botão abaixo para falar diretamente com um de nossos especialistas e entenda como a orbitta pode ajudar você e seus alunos desenvolvendo aplicativos e plataformas personalizadas.
            </p>

            <button 
              onClick={openChat}
              className="cta-b