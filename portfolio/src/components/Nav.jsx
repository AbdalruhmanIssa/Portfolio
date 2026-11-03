import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'
import { GithubIcon } from './ui'

const tabs = [
  { id: 'home', label: '~/home' },
  { id: 'projects', label: 'projects/' },
  { id: 'skills', label: 'skills.json' },
  { id: 'experience', label: 'experience.log' },
  { id: 'contact', label: 'contact.sh' },
]

export default function Nav() {
  const [active, setActive] = useState('home')
  const strip = useRef(null)

  // on narrow screens the tab strip scrolls sideways; keep the active tab visible
  useEffect(() => {
    const el = strip.current?.querySelector('[aria-current]')
    if (!el) return
    const s = strip.current
    const left = el.offsetLeft // the strip is position: relative, so this is relative to it
    if (left < s.scrollLeft || left + el.offsetWidth > s.scrollLeft + s.clientWidth) {
      s.scrollTo({ left: left - 16, behavior: 'smooth' })
    }
  }, [active])

  useEffect(() => {
    const sections = tabs.map((t) => document.getElementById(t.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4">
        <a href="#home" className="flex shrink-0 items-center gap-2 py-2.5 font-mono text-sm font-bold text-fg">
          {/* same mark as public/favicon.svg */}
          <span className="inline-flex items-center rounded-md border border-line bg-panel px-1.5 py-0.5 text-xs" aria-hidden="true">
            AI<span className="ml-px h-[3px] w-2 self-end mb-[3px] bg-green" />
          </span>
          {profile.handle}
        </a>
        <div ref={strip} className="scrollbar-thin relative -mb-px flex flex-1 overflow-x-auto">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              aria-current={active === t.id ? 'true' : undefined}
              className={`shrink-0 border-b-2 px-3 py-3 font-mono text-xs transition-colors sm:text-sm ${
                active === t.id ? 'border-green text-fg' : 'border-transparent text-dim hover:text-fg'
              }`}
            >
              {t.label}
            </a>
          ))}
        </div>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 text-dim hover:text-fg sm:block"
          aria-label="GitHub profile"
        >
          <GithubIcon className="size-5" />
        </a>
      </div>
    </nav>
  )
}
