import { useState, useEffect, useRef } from 'react';

/**
 * useSticky hook
 * Detects when an element becomes sticky by monitoring its position relative to the viewport.
 * @param {number} offset - The scroll offset at which the element should be considered sticky.
 * @returns {boolean} - True if the element is sticky.
 */
export const useSticky = (offset = 0) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const { top } = ref.current.getBoundingClientRect();
      // If the top of the element is at or above the threshold (offset)
      setIsSticky(top <= offset + 1); // +1 for subpixel buffer
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return { ref, isSticky };
};
