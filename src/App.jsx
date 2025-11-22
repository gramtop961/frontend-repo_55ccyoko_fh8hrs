import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Sections */}
      <About />
      <Facts />
      <Gallery />

      {/* Footer */}
      <footer className="relative bg-[#0b0f1a] py-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,170,80,0.06),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-orange-100/70 text-sm">An atmospheric tribute to K2</p>
          <nav className="flex items-center gap-6 text-orange-100/70 text-sm">
            <a href="#about" className="hover:text-orange-300">About</a>
            <a href="#facts" className="hover:text-orange-300">Facts</a>
            <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-orange-300">Back to top</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
