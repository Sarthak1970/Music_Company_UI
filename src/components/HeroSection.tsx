'use client';
import React from 'react';
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="relative flex h-auto md:h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased flex-col items-center justify-center">

      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Hero Content */}
      <div className="relative z-10 p-4 w-full text-center max-w-7xl pt-36 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 text-base md:text-lg font-normal text-neutral-300 max-w-xl mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today.
          Whether you are a beginner or looking to refine your skills, we have something for everyone.
        </p>
        <div className="mt-6">
          {/* Optional Button or CTA */}
          <Button 
          borderRadius="1.75rem" className='bg-black hover:bg-gray-950'>Explore Courses</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
