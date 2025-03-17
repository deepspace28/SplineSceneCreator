'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

interface ServiceDemoProps {
  title: string;
  description: string;
  scene: string;
  className?: string;
}

export function ServiceDemo({ title, description, scene, className }: ServiceDemoProps) {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border border-neutral-800 shadow-xl transition-all hover:border-neutral-700">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-neutral-300 max-w-lg">
            {description}
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[250px] md:min-h-0">
          <SplineScene 
            scene={scene}
            className="w-full h-full md:h-[600px] lg:h-[700px]" // Added responsive height classes
          />
        </div>
      </div>
    </Card>
  );
}