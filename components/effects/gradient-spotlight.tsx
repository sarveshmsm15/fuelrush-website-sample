"use client";

import { useEffect, useRef } from "react";

export function GradientSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.4, radius: 0.35, speed: 0.0003, offset: 0 },
      { x: 0.7, y: 0.6, radius: 0.3, speed: 0.0004, offset: 2 },
      { x: 0.5, y: 0.3, radius: 0.25, speed: 0.0005, offset: 4 },
    ];

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const baseColor = isDark ? "30, 35, 30" : "240, 234, 214";

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.width * 0.8
      );
      gradient.addColorStop(0, `rgba(${baseColor}, 0)`);
      gradient.addColorStop(1, `rgba(${baseColor}, 1)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated blobs
      blobs.forEach((blob) => {
        const bx =
          canvas.width *
          (blob.x + Math.sin(time * blob.speed + blob.offset) * 0.1);
        const by =
          canvas.height *
          (blob.y + Math.cos(time * blob.speed * 0.7 + blob.offset) * 0.1);
        const br = Math.min(canvas.width, canvas.height) * blob.radius;

        const blobGrad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        blobGrad.addColorStop(0, "rgba(255, 107, 53, 0.15)");
        blobGrad.addColorStop(0.5, "rgba(255, 143, 53, 0.08)");
        blobGrad.addColorStop(1, "rgba(255, 107, 53, 0)");

        ctx.fillStyle = blobGrad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
