import React from 'react'

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    caption: 'Karakoram hues at dusk'
  },
  {
    url: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1400&auto=format&fit=crop',
    caption: 'Ridges cut by wind'
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
    caption: 'Glacial light'
  },
]

const Gallery = () => {
  return (
    <section className="relative bg-[#0b0f1a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_100%,rgba(255,153,0,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Atmospheres</h2>
        <p className="mt-2 max-w-2xl text-orange-100/80">Evocative scenes that echo K2’s stark beauty.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur">
              <img src={p.url} alt={p.caption} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
              <figcaption className="p-4 text-sm text-orange-100/90">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
