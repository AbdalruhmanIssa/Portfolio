import { BrainCircuit, Cloud, Code2, Globe, Languages, Server } from 'lucide-react'
import { skills } from '../data'
import { Reveal, SectionHeader } from './ui'

const groups = [
  { key: 'backend', title: 'Backend', icon: Server, span: 'lg:col-span-2' },
  { key: 'languages', title: 'Languages', icon: Code2 },
  { key: 'frontend', title: 'Frontend', icon: Globe },
  { key: 'ai', title: 'AI / ML', icon: BrainCircuit },
  { key: 'spoken', title: 'Spoken', icon: Languages },
  { key: 'cloudAndTools', title: 'Cloud & tools', icon: Cloud, span: 'sm:col-span-2 lg:col-span-3' },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="Portfolio.Skills;"
        title="What I work with"
        intro="Backend-first with C# and ASP.NET Core, comfortable across the stack and into AI services."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, title, icon: Icon, span = '' }, i) => (
          <Reveal key={key} delay={(i % 3) * 80} className={span}>
            <div className="card h-full rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet/30 to-brand/20 text-lilac">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-fg">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills[key].map((s) => (
                  <li key={s} className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-fg/90">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
