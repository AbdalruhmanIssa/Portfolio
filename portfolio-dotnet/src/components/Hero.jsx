import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { featured, profile, projects } from '../data'
import { Button, CodeCard, CodeforcesIcon, GithubIcon, LinkedinIcon } from './ui'

// [text, color class] tokens per line, rendered like Visual Studio's dark theme
const K = 'text-kw'
const T = 'text-type'
const S = 'text-str'
const F = 'text-fn'
const P = 'text-prop'
const C = 'text-cm'
const N = 'text-fg/80'

const program = [
  [['// Program.cs', C]],
  [['var', K], [' builder = ', N], ['WebApplication', T], ['.', N], ['CreateBuilder', F], ['(args);', N]],
  [],
  [['builder', N], ['.', N], ['Services', P], ['.', N], ['AddEngineer', F], ['<', N], ['AbdulrahmanIssa', T], ['>(o =>', N]],
  [['{', N]],
  [['    o.', N], ['Focus', P], ['    = ', N], ['".NET backend · full stack"', S], [';', N]],
  [['    o.', N], ['Stack', P], ['    = [', N], ['"C#"', S], [', ', N], ['"ASP.NET Core"', S], [', ', N], ['"EF Core"', S], ['];', N]],
  [['    o.', N], ['Also', P], ['     = [', N], ['"React"', S], [', ', N], ['"FastAPI"', S], [', ', N], ['"TensorFlow"', S], ['];', N]],
  [['    o.', N], ['Location', P], [' = ', N], ['"Saudi Arabia"', S], [';', N]],
  [['});', N]],
  [],
  [['var', K], [' app = builder.', N], ['Build', F], ['();', N]],
  [['app.', N], ['MapGet', F], ['(', N], ['"/hire"', S], [', () => ', N], ['Results', T], ['.', N], ['Ok', F], ['(', N], ['"Let\'s talk"', S], ['));', N]],
  [['app.', N], ['Run', F], ['();', N]],
]

const stats = [
  { value: featured.length + projects.length, label: 'projects shipped' },
  { value: '4', label: 'platforms deployed to' }, // Google Cloud, Azure, Render, MonsterASP
  { value: '.NET 10', label: 'latest stack' },
  { value: '2026', label: 'CSE graduate' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-20 sm:pt-40 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-lilac">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            {profile.status}
          </p>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-fg sm:text-6xl">
            Hi, I'm {profile.name.split(' ')[0]}.
            <br />
            <span className="text-gradient">I build backends that ship.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">{profile.summary}</p>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-dim">
            <MapPin className="size-4 text-violet" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View projects <ArrowRight className="size-4" />
            </Button>
            <Button href={`mailto:${profile.email}`}>
              <Mail className="size-4" /> Contact me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {[
              [profile.links.github, GithubIcon, 'GitHub'],
              [profile.links.linkedin, LinkedinIcon, 'LinkedIn'],
              [profile.links.codeforces, CodeforcesIcon, 'Codeforces'],
            ].map(([href, Icon, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-line text-dim transition-colors hover:border-violet/60 hover:text-fg"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="float relative min-w-0">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/20 blur-3xl" aria-hidden="true" />
          <CodeCard file="Program.cs">
            <pre className="scrollbar-thin overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
              <code>
                {program.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-7 shrink-0 pr-3 text-right text-white/20 select-none">{i + 1}</span>
                    <span>
                      {line.length === 0
                        ? ' '
                        : line.map(([t, c], j) => (
                            <span key={j} className={c}>
                              {t}
                            </span>
                          ))}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </CodeCard>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-panel px-6 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-extrabold text-fg sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-dim">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
