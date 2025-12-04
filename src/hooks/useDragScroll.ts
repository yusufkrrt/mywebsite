import { useRef, useEffect } from 'react';

// Basit ve güvenilir masaüstü drag-scroll hook'u
export const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // sadece sol tık
      isDown = true;
      startX = e.clientX;
      scrollLeft = el.scrollLeft;
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const x = e.clientX;
      const walk = (x - startX) * 2; // hız çarpanı
      el.scrollLeft = scrollLeft - walk;
    };

    const stop = () => {
      isDown = false;
    };

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stop);
    };
  }, []);

  return ref;
};