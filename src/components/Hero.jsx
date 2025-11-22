import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mountain, MapPin, Compass } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yJBriAlCim5ZFvlc/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f1a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 flex min-h-screen items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="text-xs text-orange-200/80">The Savage Mountain</span>
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-orange-100 to-amber-300/90 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(255,170,80,0.25)]">
            K2
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-orange-50/90">
            Rising to 8,611 m on the Pakistan–China border, K2 is the second-highest mountain on Earth. Remote, austere, and breathtaking—its beauty is matched only by its difficulty.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#about" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 px-5 py-3 text-white shadow-lg shadow-orange-900/30 transition transform hover:-translate-y-0.5">
              <Mountain className="h-5 w-5" /> About K2
            </a>
            <a href="#facts" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-orange-50/90 backdrop-blur transition hover:bg-white/10">
              <Compass className="h-5 w-5" /> Quick facts
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-orange-100/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Karakoram Range
            </div>
            <div className="h-1 w-1 rounded-full bg-orange-300/50" />
            <div>8,611 m / 28,251 ft</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
