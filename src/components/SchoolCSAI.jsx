import { Cpu, Database, Bot, Terminal, Brain, Rocket } from 'lucide-react'

const offerings = [
  {
    title: 'SYSTEMS & ALGORITHMS',
    desc: 'Master data structures, algorithms, OS, and networks to build fast, reliable systems.',
    icon: Cpu,
  },
  {
    title: 'DATA & DATABASES',
    desc: 'Design schemas, query efficiently, and scale with modern data pipelines.',
    icon: Database,
  },
  {
    title: 'APPLIED AI & LLMs',
    desc: 'Ship AI features with embeddings, RAG, fine-tuning, and evaluation.',
    icon: Bot,
  },
  {
    title: 'FULL-STACK BUILDING',
    desc: 'From APIs to frontends — ship products end-to-end with best practices.',
    icon: Terminal,
  },
  {
    title: 'ML FOUNDATIONS',
    desc: 'Math, optimization, and model intuition that make AI systems work.',
    icon: Brain,
  },
  {
    title: 'LAUNCH & IMPACT',
    desc: 'Demo days, capstones, and real users — focus on outcomes, not theory alone.',
    icon: Rocket,
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
            {offerings.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm font-bold tracking-wide text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
