import { useEffect, useRef, useState } from 'react'

/** Terminal/editor window frame with traffic-light dots and a title. */
export function Window({ title, right, children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-panel-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-xs text-dim">{title}</span>
        <span className="w-[42px] text-right">{right}</span>
      </div>
      {children}
    </div>
  )
}

/** "$ command" line followed by a section title. */
export function SectionHeader({ command, title }) {
  return (
    <header className="mb-8">
      <p className="font-mono text-sm text-dim">
        <span className="text-green">~</span>
        <span className="text-blue">/portfolio</span>
        <span className="text-fg"> $ </span>
        {command}
      </p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-fg sm:text-3xl">{title}</h2>
    </header>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-dim">{children}</span>
  )
}

/** Mono link styled like a CLI flag: [label] */
export function CmdLink({ href, children, primary = false, download = false }) {
  const base = 'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-sm transition-colors'
  const look = primary
    ? 'border-green/60 bg-green/10 text-green hover:bg-green/20'
    : 'border-line text-fg hover:border-dim hover:bg-panel-2'
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={`${base} ${look}`}
      download={download || undefined}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

/** Fades children in the first time they scroll into view. */
export function Reveal({ as: Tag = 'div', children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'shown' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

export const CodeforcesIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3Zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3Zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3Z" />
  </svg>
)
