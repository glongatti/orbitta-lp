"use client";

import { useEffect, useRef } from 'react';

export default function OrbitalSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamanho do canvas
    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Configuração das órbitas
    const orbits = [
      { radius: 150, speed: 0.001, color: '#5A379F', planetSize: 6, offset: 0 },
      { radius: 240, speed: 0.0007, color: '#37AFFF', planetSize: 8, offset: Math.PI / 3 },
      { radius: 330, speed: 0.0005, color: '#EC5781', planetSize: 7, offset: Math.PI / 1.5 }
    ];

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Centro do canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Desenhar ponto central (estrela)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Desenhar órbitas e planetas
      orbits.forEach(orbit => {
        // Desenhar caminho orbital
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          orbit.radius,
          orbit.radius * 0.8, // Tornar levemente elíptico
          Math.PI / 4, // Rotação da elipse
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `${orbit.color}40`; // 25% de opacidade
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Calcular posição do planeta
        const angle = time * orbit.speed + orbit.offset;
        const x = centerX + Math.cos(angle) * orbit.radius;
        const y = centerY + Math.sin(angle) * orbit.radius * 0.8;

        // Desenhar planeta
        ctx.beginPath();
        ctx.arc(x, y, orbit.planetSize, 0, Math.PI * 2);
        ctx.fillStyle = orbit.color;
        ctx.fill();

        // Adicionar brilho ao planeta
        ctx.beginPath();
        ctx.arc(x, y, orbit.planetSize * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orbit.planetSize * 2);
        gradient.addColorStop(0, `${orbit.color}40`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      time += 1;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}