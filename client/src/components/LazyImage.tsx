import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: "video" | "square" | "portrait";
  onLoad?: () => void;
  priority?: boolean;
}

const aspectRatios = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/**
 * LazyImage Component
 * Implements lazy loading with blur-up effect using Intersection Observer
 */
export function LazyImage({
  src,
  alt,
  placeholder,
  className = "",
  aspectRatio = "video",
  onLoad,
  priority = false,
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [isLoaded, setIsLoaded] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current && !imageSrc) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, imageSrc, priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const aspectRatioClass = aspectRatios[aspectRatio as keyof typeof aspectRatios];

  return (
    <motion.div
      className={`relative overflow-hidden bg-muted ${aspectRatioClass} ${className}`}
      initial={{ backgroundColor: "hsl(var(--muted))" }}
      animate={isLoaded ? { backgroundColor: "transparent" } : {}}
      transition={{ duration: 0.4 }}
    >
      {/* Placeholder/Blur-up background */}
      {placeholder && !isLoaded && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-md"
          style={{ backgroundImage: `url('${placeholder}')` }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Main image */}
      {imageSrc && (
        <motion.img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          onLoad={handleImageLoad}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * AspectRatioContainer
 * Wrapper to maintain aspect ratio and prevent CLS (Cumulative Layout Shift)
 */
interface AspectRatioContainerProps {
  ratio: number;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatioContainer({
  ratio,
  children,
  className = "",
}: AspectRatioContainerProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: `${(1 / ratio) * 100}%` }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
