import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  variants: Variants;
  threshold?: number;
  delay?: number;
  className?: string;
}

/**
 * ScrollReveal Component
 * Triggers animations when element comes into view during scroll
 * Uses Intersection Observer API for performance
 */
export function ScrollReveal({
  children,
  variants,
  threshold = 0.1,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const controls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before starting animation
          const timer = setTimeout(() => {
            controls.start("visible");
          }, delay);

          return () => clearTimeout(timer);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [controls, delay, threshold]);

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealContainerProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

/**
 * ScrollRevealContainer
 * Container for coordinating multiple ScrollReveal children with stagger effect
 */
export function ScrollRevealContainer({
  children,
  variants,
  className = "",
}: ScrollRevealContainerProps) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollTriggerAnimationProps {
  children: ReactNode;
  onInView?: () => void;
  threshold?: number;
  className?: string;
}

/**
 * ScrollTriggerAnimation
 * Minimal wrapper that triggers a callback when element comes into view
 * Useful for triggering custom logic (like number counters, etc.)
 */
export function ScrollTriggerAnimation({
  children,
  onInView,
  threshold = 0.5,
  className = "",
}: ScrollTriggerAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && onInView) {
          onInView();
          // Unobserve after first trigger
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [onInView, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
