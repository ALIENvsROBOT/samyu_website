"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ImageData } from "@/types";

interface OptimizedImageProps extends ImageData {
  className?: string;
  animate?: boolean;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      className,
      animate = false,
      priority = false,
      placeholder = "empty",
      blurDataURL,
      onLoad,
      onError,
      ...props
    },
    ref
  ) => {
    const imageClasses = cn("object-cover", className);

    // Animation variants for the image
    const imageVariants = {
      hidden: { opacity: 0, scale: 1.1 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            className={imageClasses}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            onLoad={onLoad}
            onError={onError}
            {...props}
          />
        </motion.div>
      );
    }

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={imageClasses}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={onLoad}
        onError={onError}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export { OptimizedImage };
