import React, { useEffect, useRef } from "react";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const NoiseBackground = ({
  className,
  containerClassName,
  children,
  gradientColors = ["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let lastTime = 0;
    const fps = 30;
    const fpsInterval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawNoise = (time) => {
      if (time - lastTime < fpsInterval) {
        animationFrameId = requestAnimationFrame(drawNoise);
        return;
      }
      lastTime = time;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Create thicker, more visible noise
        const noise = Math.random() * 255;
        const intensity = 0.8; // Increase noise intensity
        const value = Math.min(255, noise * intensity + (255 * (1 - intensity)));
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(drawNoise);
    };

    resizeCanvas();
    drawNoise(0);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 w-full h-full opacity-60 mix-blend-overlay",
          className
        )}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
          mixBlendMode: "multiply",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
