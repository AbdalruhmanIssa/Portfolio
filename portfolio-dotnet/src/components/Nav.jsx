import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data'

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center gap-4 rounded-full border px-3 py-2 transition-all duration-300 ${
          scrolled || open ? 'border-line bg-panel/80 shadow-xl shadow-black/30 backdrop-blur-lg' : 'border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 pl-1" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-brand font-display text-sm font-extrabold text-white shadow-lg shadow-brand/40">
            AI
          </span>
          <span className="hidden font-display text-sm font-bold text-fg sm:block">{profile.name}</span>
        </a>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? 'bg-white/[0.07] text-fg' : 'text-dim hover:text-fg'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={profile.cv}
          download
          className="ml-auto hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-violet md:ml-2 md:inline-flex"
        >
          <Download className="size-4" /> CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto rounded-full p-2 text-fg hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-panel/95 p-3 shadow-xl backdrop-blur-lg md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-medium text-fg hover:bg-white/[0.06]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3 font-semibold text-white"
          >
            <Download className="size-4" /> Download CV
          </a>
        </div>
      )}
    </header>
  )
}
