import { Award, Briefcase, GraduationCap } from 'lucide-react'
import { certifications, timeline } from '../data'
import { Reveal, SectionHeader } from './ui'

const icons = [Briefcase, GraduationCap]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader eyebrow="Portfolio.Experience;" title="Experience & education" />

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <ol className="space-y-6">
          {timeline.map((e, i) => {
            const Icon = icons[i] ?? Briefcase
            return (
              <Reveal as="li" key={e.hash} delay={i * 100}>
                <div className="card flex gap-5 rounded-3xl p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet to-brand text-white shadow-lg shadow-brand/30">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-widest text-violet uppercase">{e.date}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-fg">{e.title}</h3>
                    <p className="text-sm text-dim">{e.place}</p>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>

        <Reveal delay={150}>
          <div className="card rounded-3xl p-6">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-fg">
              <Award className="size-5 text-violet" /> Certifications
            </h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li key={c.name} className="border-l-2 border-violet/50 pl-4">
                  <p className="text-sm font-semibold text-fg">{c.name}</p>
                  <p className="mt-0.5 text-xs text-faint">
                    {c.by} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
