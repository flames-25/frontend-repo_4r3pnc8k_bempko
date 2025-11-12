import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white/90">Modern • Playful • Tech</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Build the future at Nova Tech University
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              An industry-first tech university combining world-class computer science with hands-on product building. Learn by shipping real products with founders and CTOs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#apply" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors">
                Start your application
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Explore programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
