"use client";

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  trail: boolean;
  trailLength: number;
  trailPositions: { x: number; y: number }[];
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive canvas setup
    const setCanvasSize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      
      // Reinitialize particles when canvas is resized
      initParticles();
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000); // Adjust density based on screen size

      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }

      particlesRef.current = particles;
    };

    const createParticle = (): Particle => {
      const trail = Math.random() < 0.1; // 10% chance of being a trailing particle
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: trail ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5,
        speedX: -(Math.random() * 0.1 + 0.05), // Significantly slower horizontal speed
        speedY: Math.random() * 0.5 - 0.05, // Very subtle vertical movement
        opacity: Math.random() * 0.3 + 0.1,
        trail,
        trailLength: trail ? Math.floor(Math.random() * 15) + 15 : 0, // Longer trails due to slower movement
        trailPositions: [],
      };
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();

      // Draw trail if particle is a trailing particle
      if (particle.trail && particle.trailPositions.length > 0) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        
        particle.trailPositions.forEach((pos, index) => {
          const opacity = particle.opacity * (1 - index / particle.trailPositions.length);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`; // More subtle trails
          ctx.lineTo(pos.x, pos.y);
        });
        
        ctx.stroke();
      }
    };

    const updateParticle = (particle: Particle) => {
      // Update trail positions
      if (particle.trail) {
        particle.trailPositions.unshift({ x: particle.x, y: particle.y });
        if (particle.trailPositions.length > particle.trailLength) {
          particle.trailPositions.pop();
        }
      }

      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Reset particle if it moves off screen
      if (particle.x + particle.size < 0) {
        particle.x = canvas.width + particle.size;
        particle.y = Math.random() * canvas.height;
        particle.trailPositions = []; // Clear trail when resetting
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'transparent',
      }}
    />
  );
}