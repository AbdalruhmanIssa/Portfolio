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
    <div className="min-h-screen">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-8 text-sm text-faint">
          <span>
            © {YEAR} {profile.name}
          </span>
          <span>Built with React, Vite and Tailwind CSS</span>
        </div>
      </footer>
    </div>
  )
}
