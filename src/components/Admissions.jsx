import { CheckCircle2 } from 'lucide-react'

export default function Admissions() {
  const steps = [
    { title: 'Tell us about you', desc: 'Share your background, projects, and why you want to build.', },
    { title: 'Aptitude & creativity', desc: 'Short challenge to assess problem solving and grit.', },
    { title: 'Interview', desc: 'Jam with our faculty on your work and aspirations.', },
    { title: 'Decision', desc: 'Fast turnaround. If it’s a match, welcome aboard!', },
  ]

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Admissions built for builders</h2>
          <p className="mt-4 text-gray-600">We care about your curiosity, agency, and evidence of building — not just marks.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 p-6">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#apply" className="inline-flex items-center rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors">Apply Now</a>
        </div>
      </div>
    </section>
  )
}
