import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

export function GridBackgroundDemo({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full bg-white dark:bg-black">
      {/* Grid background */}
      <div className={cn(
        "absolute inset-0 -z-10 grid-background"
      )} />
      
      {/* Optional radial fade */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
