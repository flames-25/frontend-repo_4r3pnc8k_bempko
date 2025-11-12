export default function Programs() {
  const programs = [
    {
      title: 'B.Tech in CS + Entrepreneurship',
      badge: 'Flagship',
      desc: 'A 4-year, industry-integrated program to become a world-class builder. Learn CS fundamentals, product, AI, and startup craft.',
      points: ['Full-stack engineering', 'AI/ML foundations', 'Product & design', 'Startup building sprints'],
    },
    {
      title: 'AI Engineering Track',
      badge: 'New',
      desc: 'A deep, hands-on specialization in applied AI, LLMs, and systems engineering to ship intelligent products.',
      points: ['LLMs & RAG systems', 'MLOps & deployment', 'Prompt + function calling', 'Ethics & safety'],
    },
    {
      title: 'Product Leadership Minor',
      badge: 'Popular',
      desc: 'Learn to lead cross-functional teams, define strategy, and ship from 0→1.',
      points: ['Roadmapping', 'User research', 'GTMs & metrics', 'Leadership studio'],
    },
  ]

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Programs that shape builders</h2>
          <p className="mt-4 text-gray-600">Curriculum that merges computer science rigor with real-world product building.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-gray-900 text-white">{p.badge}</span>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
