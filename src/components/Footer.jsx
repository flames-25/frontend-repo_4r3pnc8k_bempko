export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">Nova Tech University</h4>
            <p className="mt-2 text-sm text-gray-600">A modern tech university for ambitious builders.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Programs</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>B.Tech CS + Entrepreneurship</li>
              <li>AI Engineering Track</li>
              <li>Product Leadership Minor</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Campus</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Student life</li>
              <li>Clubs & chapters</li>
              <li>Events & demo days</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Get in touch</h5>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>admissions@nova.tech</li>
              <li>+91 00000 00000</li>
              <li>Apply Now</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Nova Tech University. All rights reserved.</div>
      </div>
    </footer>
  )
}
