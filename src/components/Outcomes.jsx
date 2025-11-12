export default function Outcomes() {
  const stats = [
    { k: '100+', label: 'Industry mentors' },
    { k: '50+', label: 'Startup partners' },
    { k: '6', label: 'Product sprints / year' },
    { k: '95%', label: 'Placement & internships' },
  ]

  return (
    <section id="outcomes" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Graduate with an elite builder portfolio</h2>
            <p className="mt-4 text-gray-600">Ship real products with founders and CTOs. Build in public, get mentored weekly, and graduate with a portfolio that screams impact.</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white border border-gray-200 p-6">
                  <div className="text-2xl font-bold text-gray-900">{s.k}</div>
                  <div className="text-gray-600 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 bg-white">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100" />
            <p className="mt-4 text-gray-600 text-sm">Weekly demo days, live critiques, founder AMAs, and product tournaments designed to push you beyond textbooks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
