import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function DentalMirrorCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Position motion values for mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer aura ring follower
  const springConfig = { stiffness: 220, damping: 22, mass: 0.3 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Fast springs for mirror head
  const mirrorConfig = { stiffness: 500, damping: 28, mass: 0.1 };
  const mirrorX = useSpring(mouseX, mirrorConfig);
  const mirrorY = useSpring(mouseY, mirrorConfig);

  useEffect(() => {
    // Check for touch / mobile screen
    const checkTouch = () => {
      const isTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(isTouch);
    };

    checkTouch();

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      mouseX.set(x);
      mouseY.set(y);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' ||
        target.tagName === 'SUMMARY' ||
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

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
  }, [mouseX, mouseY, isVisible]);

  // Hide default cursor when active desktop custom cursor is rendering
  useEffect(() => {
    if (!isTouchDevice && isVisible) {
      document.documentElement.classList.add('custom-mirror-active');
    } else {
      document.documentElement.classList.remove('custom-mirror-active');
    }
    return () => {
      document.documentElement.classList.remove('custom-mirror-active');
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* 1. Outer Interactive Aura Ring (expands & glows when over buttons or tabs) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] border border-japandi-moss/40"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 28 : 18,
          height: isHovered ? 28 : 18,
          borderColor: isHovered ? 'var(--color-accent-earth)' : 'var(--color-accent-moss)',
          backgroundColor: isHovered ? 'rgba(197, 155, 39, 0.12)' : 'rgba(78, 94, 80, 0.04)',
          boxShadow: isHovered ? '0 0 10px rgba(197, 155, 39, 0.3)' : 'none',
        }}
        animate={{
          scale: isActive ? 0.85 : isHovered ? 1.1 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 350, damping: 20 },
          width: { type: 'spring', stiffness: 300, damping: 22 },
          height: { type: 'spring', stiffness: 300, damping: 22 },
        }}
      />

      {/* 2. Animated Dental Mirror Cursor (Tilts & Pops over buttons/tabs) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center"
        style={{
          x: mirrorX,
          y: mirrorY,
          translateX: '-3px',
          translateY: '-3px',
        }}
        animate={{
          scale: isActive ? 0.88 : isHovered ? 1.35 : 1,
          rotate: isHovered ? -18 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 450, damping: 20 },
          rotate: { type: 'spring', stiffness: 350, damping: 18 },
        }}
      >
        <img 
          src="/cursors/dental-mirror.png" 
          alt="Dental Mirror Cursor"
          width="32"
          height="32"
          class="w-7 h-7 object-contain filter drop-shadow-md select-none pointer-events-none"
        />
      </motion.div>
    </>
  );
}
