import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data'

const YEAR = new Date().getFullYear()

export default function App() {
  return (
    <div className="grid-bg min-h-screen">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-panel focus:px-3 focus:py-2"
      >
        Skip to projects
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 font-mono text-xs text-faint">
          <span>
            © {YEAR} {profile.name}
          </span>
          <span>
            built with <span className="text-dim">React + Vite + Tailwind</span>
            <span className="text-green"> ▍</span>
          </span>
        </div>
      </footer>
    </div>
  )
}
