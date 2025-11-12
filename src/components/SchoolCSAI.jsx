import { Cpu, Database, Bot, Terminal, Brain, Rocket } from 'lucide-react'

const offerings = [
  {
    title: 'SYSTEMS & ALGORITHMS',
    desc: 'Master data structures, algorithms, OS, and networks to build fast, reliable systems.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'DATA & DATABASES',
    desc: 'Design schemas, query efficiently, and scale with modern data pipelines.',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'APPLIED AI & LLMs',
    desc: 'Ship AI features with embeddings, RAG, fine-tuning, and evaluation.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'FULL-STACK BUILDING',
    desc: 'From APIs to frontends — ship products end-to-end with best practices.',
    icon: Terminal,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'ML FOUNDATIONS',
    desc: 'Math, optimization, and model intuition that make AI systems work.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1542639019-31a734fb5f2a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'LAUNCH & IMPACT',
    desc: 'Demo days, capstones, and real users — focus on outcomes, not theory alone.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function SchoolCSAI() {
  return (
    <section id="school" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left: 1/3 width */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white/90">School of CS & AI</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[0.15em] text-gray-900 uppercase leading-tight">
              SCHOOL OF COMPUTER SCIENCE & AI
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A builder-first curriculum that fuses computer science rigor with applied AI. Learn by designing, coding, and shipping real systems with creators from top startups.
            </p>
          </div>

          {/* Right: 2/3 width with tiles */}
          <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ title, desc, icon: Icon, image }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/0 p-0 shadow-sm"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />
                  {/* Subtle tinted hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-white/10 text-white flex items-center justify-center shadow-sm backdrop-blur-sm ring-1 ring-white/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm font-bold tracking-wide text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/85">{desc}</p>
                </div>

                {/* Focus ring on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-offset-0 transition-all group-hover:ring-2 group-hover:ring-white/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
