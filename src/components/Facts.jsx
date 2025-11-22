import React from 'react'
import { Activity, TrendingUp, Wind, Thermometer, Flag, CloudFog } from 'lucide-react'

const Item = ({ icon: Icon, label, value }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]">
    <div className="flex items-center gap-3 text-orange-100">
      <Icon className="h-5 w-5 opacity-80" />
      <span className="text-sm uppercase tracking-wide text-orange-200/70">{label}</span>
    </div>
    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
  </div>
)

const Facts = () => {
  return (
    <section id="facts" className="relative bg-[#0b0f1a] py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,165,0,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Quick facts</h2>
        <p className="mt-2 max-w-2xl text-orange-100/80">A snapshot of K2’s scale, climate, and challenge.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Item icon={TrendingUp} label="Elevation" value="8,611 m (28,251 ft)" />
          <Item icon={Activity} label="Prominence" value="4,017 m" />
          <Item icon={Flag} label="First ascent" value="1954 – Lacedelli & Compagnoni" />
          <Item icon={Wind} label="Winds" value="Often 100+ km/h" />
          <Item icon={Thermometer} label="Winter temps" value="−30°C and below" />
          <Item icon={CloudFog} label="Nickname" value="The Savage Mountain" />
        </div>
      </div>
    </section>
  )
}

export default Facts
