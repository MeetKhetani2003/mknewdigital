"use client";
import React, { useRef, useEffect } from "react";

export function CosmicParticlesCanvas({
  count = 50,
  speed = 0.3,
  className = "absolute inset-0 pointer-events-none z-0",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      { r: 255, g: 223, b: 133 }, // Solar gold
      { r: 229, g: 184, b: 76 },  // Radiant gold
      { r: 251, g: 191, b: 36 },  // Amber glow
      { r: 255, g: 255, b: 255 }, // Brilliant star
      { r: 216, g: 180, b: 254 }, // Amethyst starlight
    ];

    const particles = Array.from({ length: count }, () => {
      const c = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.6,
        r: c.r,
        g: c.g,
        b: c.b,
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: -(Math.random() * speed + 0.15), // Gently drift upwards
        isStar: Math.random() > 0.7, // 30% are 4-pointed twinkling diamond stars
      };
    });

    function drawDiamondStar(cx, cy, spikes, outerRadius, innerRadius, color) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.pulsePhase += p.pulseSpeed;
        const alpha = Math.max(0.1, Math.min(1, p.baseAlpha + Math.sin(p.pulsePhase) * 0.4));
        const color = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha})`;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around canvas edges
        if (p.y < -15) p.y = height + 15;
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        if (p.isStar) {
          drawDiamondStar(p.x, p.y, 4, p.radius * 2.8, p.radius * 0.8, color);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${p.r}, ${p.g}, ${p.b}, 0.9)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, speed]);

  return <canvas ref={canvasRef} className={className} />;
}

