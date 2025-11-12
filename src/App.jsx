import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SchoolCSAI from './components/SchoolCSAI'
import Programs from './components/Programs'
import Outcomes from './components/Outcomes'
import Admissions from './components/Admissions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SchoolCSAI />
        <Programs />
        <Outcomes />
        <Admissions />
      </main>
      <Footer />
    </div>
  )
}

export default App
