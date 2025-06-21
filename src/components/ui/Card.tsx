import React from "react";
import { cn } from "@/lib/utils"; // If you don't have this, I’ll give you a fallback below

// Card wrapper
export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-white shadow rounded-2xl p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Card content section
export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}

