import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // For test environments (jsdom)

    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Grid configuration
    const spacing = 40; // Space between grid lines
    const cols = Math.floor(width / spacing) + 1;
    const rows = Math.floor(height / spacing) + 1;

    // Physics parameters
    const mouse = { x: -1000, y: -1000 };
    const radius = 150; // Magnetic field radius
    const repelStrength = 40; // Max displacement
    const spring = 0.1; // Snap back speed
    const friction = 0.8; // Dampening

    // Initialize points
    let points = [];
    for (let i = 0; i <= cols; i++) {
      let rowArray = [];
      for (let j = 0; j <= rows; j++) {
        const x = i * spacing;
        const y = j * spacing;
        rowArray.push({
          baseX: x,
          baseY: y,
          x: x,
          y: y,
          vx: 0,
          vy: 0,
        });
      }
      points.push(rowArray);
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize(); // Initial resize

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // The "Signal & Precision" line color
      // Extract the primary color #a8e8ff from the theme, using a very faint opacity
      ctx.strokeStyle = 'rgba(168, 232, 255, 0.15)';
      ctx.lineWidth = 1;

      // Update physics for each point
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          let p = points[i][j];

          // Calculate distance to mouse
          const dx = mouse.x - p.baseX;
          const dy = mouse.y - p.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Magnetic repulsion force
          if (distance < radius) {
            const force = (radius - distance) / radius;
            const angle = Math.atan2(dy, dx);
            const targetX = p.baseX - Math.cos(angle) * force * repelStrength;
            const targetY = p.baseY - Math.sin(angle) * force * repelStrength;
            
            p.vx += (targetX - p.x) * spring;
            p.vy += (targetY - p.y) * spring;
          } else {
            p.vx += (p.baseX - p.x) * spring;
            p.vy += (p.baseY - p.y) * spring;
          }

          p.vx *= friction;
          p.vy *= friction;

          p.x += p.vx;
          p.y += p.vy;
        }
      }

      // Draw horizontal lines
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          let p = points[i][j];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          let p = points[i][j];
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw tiny nodes at intersections for extra precision
      ctx.fillStyle = 'rgba(168, 232, 255, 0.3)';
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          let p = points[i][j];
          // Only draw nodes that are highly displaced to highlight the "signal"
          const distFromBase = Math.abs(p.x - p.baseX) + Math.abs(p.y - p.baseY);
          if (distFromBase > 5) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-surface">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default BackgroundAnimation;
