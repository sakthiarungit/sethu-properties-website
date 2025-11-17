import { Variants } from "framer-motion";

/**
 * Reusable Framer Motion animation variants for consistent animations across the app
 */

// Fade In animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleInHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Stagger container for animating child elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Child element animations for stagger effect
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hero section text animations
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

export const heroButton: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

// Card animations
export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const cardContent: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

// Number counter animation
export const counterNumber: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Button animations
export const buttonPulse: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const buttonLoadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Navigation animations
export const navLinkUnderline: Variants = {
  rest: { width: "0%" },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const mobileMenuSlide: Variants = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Form animations
export const formFieldFocus: Variants = {
  rest: { scale: 1 },
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

export const validationMessage: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Success animation
export const successCheckmark: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Parallax scroll effect
export const parallaxEffect = (offset: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: offset * -0.5,
    transition: { duration: 0.3, ease: "easeOut" },
  },
});

// Slide in from edges
export const slideInFromEdge = (side: "top" | "bottom" | "left" | "right"): Variants => {
  const baseHidden: any = { opacity: 0 };
  const baseVisible: any = { opacity: 1 };

  switch (side) {
    case "top":
      baseHidden.y = -50;
      baseVisible.y = 0;
      break;
    case "bottom":
      baseHidden.y = 50;
      baseVisible.y = 0;
      break;
    case "left":
      baseHidden.x = -50;
      baseVisible.x = 0;
      break;
    case "right":
      baseHidden.x = 50;
      baseVisible.x = 0;
      break;
  }

  return {
    hidden: baseHidden,
    visible: {
      ...baseVisible,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
};

// List stagger with delay
export const listItemVariant = (index: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.1,
    },
  },
});

// Gradient text animation
export const gradientText: Variants = {
  hidden: { backgroundPosition: "200% center" },
  visible: {
    backgroundPosition: "0% center",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const gradientHover: Variants = {
  rest: { backgroundPosition: "0% center" },
  hover: {
    backgroundPosition: "100% center",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
