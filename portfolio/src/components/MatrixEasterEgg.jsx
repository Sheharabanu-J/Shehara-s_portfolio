import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MatrixEasterEgg({ active, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF</>{}[]|#@$=+-*%^&visioncrafter';
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 16, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = y / (canvas.height / fontSize);
        // Gradient: gold at top, blue in middle, dim at bottom
        if (progress < 0.3) {
          ctx.fillStyle = `rgba(56, 189, 248,  ${0.9 - progress})`;
        } else if (progress < 0.7) {
          ctx.fillStyle = `rgba(56, 189, 248,  ${0.8 - progress * 0.3})`;
        } else {
          ctx.fillStyle = `rgba(77, 158, 255, ${0.3 - progress * 0.1})`;
        }

        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 40);
    const auto = setTimeout(onClose, 8000);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      clearTimeout(auto);
      window.removeEventListener('resize', resize);
    };
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          {/* Overlay message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="text-center"
            >
              <div className="font-mono text-5xl font-bold gradient-text-blue mb-4">
                VISION CRAFTER
              </div>
              <div className="font-mono text-xl text-[rgba(56, 189, 248, 0.9)] mb-2">
                — Initializing Shehara's Matrix —
              </div>
              <div className="font-mono text-sm text-[rgba(226, 232, 240, 0.5)]">
                System auto-closes in 8 seconds
              </div>
            </motion.div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 px-4 py-2 rounded-lg font-mono text-sm pointer-events-auto"
            style={{
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38BDF8',
            }}
          >
            ✕ Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
