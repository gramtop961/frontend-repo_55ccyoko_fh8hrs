import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative bg-[#0b0f1a] py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,120,40,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About the mountain</h2>
        <p className="mt-4 text-lg leading-relaxed text-orange-50/90">
          K2 rises from the heart of the Karakoram, straddling the Pakistan–China border. Its slopes are steep, its weather volatile, and its routes unforgiving. Unlike Everest, K2 offers no easy line to the top—every side is a wall, every camp hard‑won.
        </p>
        <p className="mt-4 text-orange-100/80">
          The mountain’s elusiveness has shaped its legend: long storms, narrow ridges, blue ice, and seracs that fracture like glass. Yet, at dawn, the peak ignites in amber light, and the world below falls silent. Few places feel so remote—and so alive.
        </p>
      </div>
    </section>
  )
}

export default About
