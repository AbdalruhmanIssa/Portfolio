import { Award } from 'lucide-react'
import { certifications, timeline } from '../data'
import { Reveal, SectionHeader } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader command="git log --career" title="Experience & education" />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <ol className="relative space-y-8 border-l border-line pl-6 font-mono">
          {timeline.map((e, i) => (
            <Reveal as="li" key={e.hash} delay={i * 100} className="relative">
                <span
                  className="absolute top-1.5 -left-[31px] size-3 rounded-full border-2 border-bg bg-yellow ring-1 ring-yellow/40"
                  aria-hidden="true"
                />
                <p className="text-sm">
                  <span className="text-yellow">commit {e.hash}</span>{' '}
                  <span className="text-dim">(</span>
                  <span className="text-green">{e.ref}</span>
                  <span className="text-dim">)</span>
                </p>
                <p className="text-xs text-faint">Date: {e.date}</p>
                <h3 className="mt-3 text-lg font-bold text-fg">{e.title}</h3>
                <p className="text-sm text-dim">{e.place}</p>
                <ul className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-fg/90">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="font-mono text-green" aria-hidden="true">
                        +
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={150}>
          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono text-sm text-dim">
              <span className="text-green">$</span> ls certifications/
            </p>
            <ul className="mt-4 space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="flex gap-3">
                  <Award className="mt-0.5 size-5 shrink-0 text-purple" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-fg">{c.name}</p>
                    <p className="font-mono text-xs text-faint">
                      {c.by} · {c.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
