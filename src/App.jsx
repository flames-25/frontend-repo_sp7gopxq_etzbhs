import Hero from './Hero'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Your Name</div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name — Data Science Portfolio
        </div>
      </footer>
    </div>
  )
}

export default App
