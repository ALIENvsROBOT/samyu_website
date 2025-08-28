"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageData } from "@/types";

interface OptimizedImageProps extends ImageData {
  className?: string;
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
