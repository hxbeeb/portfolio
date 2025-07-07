import React, { useEffect, useRef, useState } from 'react';

const SPOTLIGHT_RADIUS = 120; // px
const SPOTLIGHT_DURATION = 100; // ms

export default function SpotlightOverlay() {
  const [active, setActive] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setActive(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setActive(false), SPOTLIGHT_DURATION);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!active) return null;

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 99999,
    transition: 'opacity 0.5s',
    opacity: active ? 1 : 0,
    background: 'rgba(0, 0, 0, 0.57)',
    WebkitMaskImage: `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${coords.x}px ${coords.y}px, transparent 0%, transparent 90%, black 100%)`,
    maskImage: `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${coords.x}px ${coords.y}px, transparent 0%, transparent 90%, black 100%)`,
  };

  return <div style={style} />;
} 