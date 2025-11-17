import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  isScrolled: boolean;
}

/**
 * useScroll Hook
 * Tracks scroll position and provides information about scroll state
 */
export function useScroll(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    isScrolled: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const x = window.scrollX || window.pageXOffset;
      const y = window.scrollY || window.pageYOffset;

      setScrollPosition({
        x,
        y,
        isScrolled: y > 0,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * useScrollDirection Hook
 * Determines if user is scrolling up or down
 */
export function useScrollDirection(): "up" | "down" | "idle" {
  const [direction, setDirection] = useState<"up" | "down" | "idle">("idle");
  const [previousY, setPreviousY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          if (currentY > previousY + 5) {
            setDirection("down");
          } else if (currentY < previousY - 5) {
            setDirection("up");
          }

          setPreviousY(currentY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousY]);

  return direction;
}

/**
 * useScrollPercentage Hook
 * Returns the percentage of page scrolled (0-100)
 */
export function useScrollPercentage(): number {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScroll = documentHeight - windowHeight;
      const scrolled = (scrollTop / totalScroll) * 100;

      setPercentage(Math.min(scrolled, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return percentage;
}
