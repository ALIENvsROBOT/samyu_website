"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "lg", ...props }, ref) => {
    const sizes = {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    };

    const containerClasses = cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizes[size],
      className
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
