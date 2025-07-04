'use client';

import { useEffect, useRef } from 'react';

interface HexagonBackgroundProps {
  className?: string;
  density?: number;
  speed?: number;
}

export function HexagonBackground({ 
  className = '', 
  density = 15,
  speed = 0.5 
}: HexagonBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const hexagonsRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    depth: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initHexagons = () => {
      hexagonsRef.current = [];
      for (let i = 0; i < density; i++) {
        hexagonsRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: Math.random() * 30 + 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.3 + 0.1,
          depth: Math.random() * 0.5 + 0.5,
        });
      }
    };

    const drawHexagon = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 255, 198, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      hexagonsRef.current.forEach(hexagon => {
        // Update rotation
        hexagon.rotation += hexagon.rotationSpeed * speed;
        
        // Subtle floating movement
        hexagon.y += Math.sin(Date.now() * 0.001 + hexagon.x * 0.01) * 0.1 * speed;
        
        // Wrap around screen
        if (hexagon.y > canvas.offsetHeight + hexagon.size) {
          hexagon.y = -hexagon.size;
          hexagon.x = Math.random() * canvas.offsetWidth;
        }
        
        // Draw hexagon
        drawHexagon(
          hexagon.x,
          hexagon.y,
          hexagon.size * hexagon.depth,
          hexagon.rotation,
          hexagon.opacity * hexagon.depth
        );
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initHexagons();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initHexagons();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}