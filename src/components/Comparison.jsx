import { CheckCircle2, XCircle, Sparkles } from 'lucide-react'

const rows = [
  {
    label: 'Learning Approach',
    a: 'Builder-first, project-driven, ship every month',
    b: 'Lecture-heavy, limited hands-on shipping',
  },
  {
    label: 'Curriculum Updates',
    a: 'Continuously refreshed for AI, LLMs, modern stacks',
    b: 'Syllabus changes slowly over years',
  },
  {
    label: 'Faculty & Mentors',
    a: 'Founders, CTOs, senior engineers and researchers',
    b: 'Primarily academic faculty',
  },
  {
    label: 'Real-world Projects',
    a: 'Startup-grade builds, demos, capstones with users',
    b: 'Toy assignments and semester labs',
  },
  {
    label: 'Career Outcomes',
    a: 'Portfolio-first, hiring network, founder pathways',
    b: 'On-campus placements with mixed alignment',
  },
  {
    label: 'Speed to Value',
    a: 'Learn → build → ship in weeks',
    b: 'Value realized near graduation',
  },
  {
    label: 'Class Size & Access',
    a: 'Small cohorts, 1:1 mentorship and feedback',
    b: 'Large lectures, limited personal feedback',
  },
  {
    label: 'Assessment',
    a: 'Product demos, code reviews, real users',
    b: 'Timed exams and theory tests',
  },
  {
    label: 'Ecosystem',
    a: 'Builders community, hack nights, demo days',
    b: 'Clubs and occasional fests',
  },
]

export default function Comparison() {
  return (
    <section id="compare" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white/90">
            <Sparkles className="h-3.5 w-3.5" /> Why this school
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            School of CS & AI vs Traditional College
          </h2>
          <p className="mt-3 text-gray-600">
            A clear, side‑by‑side look at how a builder‑first model compares with a conventional degree experience.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left align-middle">
              <thead className="bg-gray-50">
                <tr className="text-sm text-gray-600">
                  <th className="w-1/4 px-4 sm:px-6 py-4 font-semibold">Dimension</th>
                  <th className="w-3/8 px-4 sm:px-6 py-4 font-semibold">School of CS & AI</th>
                  <th className="w-3/8 px-4 sm:px-6 py-4 font-semibold">Traditional College</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((r) => (
                  <tr key={r.label} className="text-sm">
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">{r.label}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                        <span className="text-gray-800">{r.a}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-start gap-2">
                        <XCircle className="mt-0.5 h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">{r.b}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile friendly stacked view hint: the table already scrolls horizontally on small screens */}
          <div className="bg-gradient-to-b from-transparent to-gray-50 h-2" />
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Comparison reflects typical patterns; specific colleges may differ.
        </div>
      </div>
    </section>
  )
}
