'use client'

import { Suspense, lazy, useState } from 'react'
import { Loader2 } from 'lucide-react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-black/40 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="inline-block rounded-lg bg-black/60 p-6">
            <p className="text-neutral-400">3D scene temporarily unavailable</p>
            <p className="text-sm text-neutral-500 mt-2">Please check back later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 className="h-8 w-8 text-neutral-400 animate-spin" />
        </div>
      }
    >
      <div className={className}>
        <Spline
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          onError={() => setError(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Suspense>
  )
}