import { useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#programs', label: 'Programs' },
    { href: '#outcomes', label: 'Outcomes' },
    { href: '#curriculum', label: 'Curriculum' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 grid place-items-center text-white">
              <GraduationCap size={20} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Nova Tech University</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#apply" className="inline-flex items-center rounded-lg bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black transition-colors">
              Apply Now
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-gray-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#apply" onClick={() => setOpen(false)} className="block w-full text-center rounded-md bg-gray-900 text-white px-4 py-2">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
