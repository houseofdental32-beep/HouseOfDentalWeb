import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [particles, setParticles] = useState([]);

  // Position motion values for center tooth
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Position motion values for outer ring (slower spring for lag effect)
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // Spring configurations: stiffness: 150, damping: 20 for outer ring
  const springConfig = { stiffness: 150, damping: 20, mass: 0.4 };
  const ringXSpring = useSpring(ringX, springConfig);
  const ringYSpring = useSpring(ringY, springConfig);

  // Spring configuration for inner tooth (very fast, near instant)
  const toothSpringConfig = { stiffness: 450, damping: 30, mass: 0.1 };
  const toothXSpring = useSpring(cursorX, toothSpringConfig);
  const toothYSpring = useSpring(cursorY, toothSpringConfig);

  useEffect(() => {
    // Check if it is a touch device or mobile screen
    const checkTouchDevice = () => {
      const isTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouchDevice();

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return; // Disable on touch screen
    }

    let lastEmitTime = 0;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update motion values
      cursorX.set(x);
      cursorY.set(y);
      ringX.set(x);
      ringY.set(y);
      
      if (!isVisible) setIsVisible(true);

      // Emit trail particle if hovered
      const now = Date.now();
      if (isHovered && now - lastEmitTime > 80) {
        lastEmitTime = now;
        const newParticle = {
          id: Math.random().toString(),
          x: x,
          y: y,
          angle: Math.random() * 360,
          speed: 0.6 + Math.random() * 1.2,
          scale: 0.3 + Math.random() * 0.3,
          createdAt: now
        };
        setParticles((prev) => [...prev, newParticle]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Scaling micro-interaction on hover over interactive tags
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.getAttribute('role') === 'button';
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsActive(true);
      
      // Create a burst of 6 sparkles in a circle
      const now = Date.now();
      const x = cursorX.get();
      const y = cursorY.get();
      const newParticles = Array.from({ length: 6 }).map((_, i) => ({
        id: Math.random().toString() + i,
        x: x,
        y: y,
        angle: (i * 360) / 6 + Math.random() * 15,
        speed: 1.5 + Math.random() * 2.0,
        scale: 0.4 + Math.random() * 0.4,
        createdAt: now
      }));
      setParticles((prev) => [...prev, ...newParticles]);
    };

    const handleMouseUp = () => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible, isHovered]);

  // Handle document level custom-cursor-active class to hide default cursor
  useEffect(() => {
    if (!isTouchDevice && isVisible) {
      document.documentElement.classList.add('custom-cursor-active');
    } else {
      document.documentElement.classList.remove('custom-cursor-active');
    }
    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible, isTouchDevice]);

  // Clean up particles
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles((prev) => prev.filter((p) => now - p.createdAt < 800));
    }, 100);
    return () => clearInterval(interval);
  }, [particles.length]);

  // Don't render cursor on mobile/touch screens or if hidden
  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* 1. Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 border-dashed"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 52 : 36,
          height: isHovered ? 52 : 36,
          borderColor: isHovered ? 'var(--color-accent-earth)' : 'var(--color-accent-moss)',
          backgroundColor: isHovered ? 'rgba(141, 123, 104, 0.08)' : 'rgba(78, 94, 80, 0.03)',
          boxShadow: isHovered ? '0 0 8px rgba(141, 123, 104, 0.2)' : 'none',
        }}
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          rotate: isHovered ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0.5 },
          borderColor: { duration: 0.3 },
          backgroundColor: { duration: 0.3 },
          width: { type: 'spring', stiffness: 250, damping: 25 },
          height: { type: 'spring', stiffness: 250, damping: 25 },
        }}
      />

      {/* 2. Inner Tooth Element */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: toothXSpring,
          y: toothYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: 24,
          height: 24,
          color: isHovered ? 'var(--color-accent-earth)' : 'var(--color-accent-moss)',
          filter: isHovered ? 'drop-shadow(0 0 4px var(--color-accent-earth))' : 'none',
        }}
        animate={{
          scale: isActive ? 0.75 : isHovered ? 1.25 : 1,
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 400, damping: 15 },
          rotate: isHovered ? { repeat: Infinity, repeatType: "mirror", duration: 1.5, ease: "easeInOut" } : { duration: 0.2 },
          color: { duration: 0.3 },
        }}
      >
        {/* Elegant Minimal Tooth SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Main tooth body */}
          <path d="M12 2C8.5 2 6 4 6 7.5c0 3 1.5 6 2.5 8c1 2 1.5 3 1.5 5.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1c0-2.5.5-3.5 1.5-5.5 1-2 2.5-5 2.5-8C18 4 15.5 2 12 2Z" fill="var(--color-bg-primary)"/>
          {/* Tooth top contour lines for depth */}
          <path d="M12 2c-.5 2-1.5 3-3.5 3" fill="none" stroke="currentColor"/>
          <path d="M12 2c.5 2 1.5 3 3.5 3" fill="none" stroke="currentColor"/>
        </svg>
      </motion.div>

      {/* 3. Floating Sparkle Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: p.x,
            y: p.y,
            translateX: '-50%',
            translateY: '-50%',
            color: 'var(--color-accent-earth)',
          }}
          initial={{ 
            opacity: 1, 
            scale: p.scale,
            rotate: 0 
          }}
          animate={{ 
            opacity: 0, 
            scale: 0.1,
            rotate: p.angle + 360,
            x: p.x + Math.cos((p.angle * Math.PI) / 180) * p.speed * 60,
            y: p.y + Math.sin((p.angle * Math.PI) / 180) * p.speed * 60,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9Z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}
