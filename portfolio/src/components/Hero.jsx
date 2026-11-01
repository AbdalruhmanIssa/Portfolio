import { useEffect, useState } from 'react'
import { Download, FolderOpen, Mail } from 'lucide-react'
import { profile } from '../data'
import { CmdLink, CodeforcesIcon, GithubIcon, LinkedinIcon, Window } from './ui'

const LOGO = [
  ' █████╗ ██╗',
  '██╔══██╗██║',
  '███████║██║',
  '██╔══██║██║',
  '██║  ██║██║',
  '╚═╝  ╚═╝╚═╝',
]

const facts = [
  ['role', 'Software Engineer'],
  ['focus', '.NET backend · full stack'],
  ['stack', 'C#, ASP.NET Core, EF Core, SQL Server'],
  ['also', 'React, Python/FastAPI, TensorFlow'],
  ['location', profile.location],
  ['status', profile.status],
]

const commands = ['whoami', 'cat role.txt', 'neofetch']

/** Types each command, then reveals its output, like a real shell session. */
function useTypedSession() {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [step, setStep] = useState(reduced ? commands.length : 0)
  const [chars, setChars] = useState(0)

  useEffect(() => {
    if (step >= commands.length) return
    const cmd = commands[step]
    if (chars < cmd.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 55 + Math.random() * 45)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1)
      setChars(0)
    }, 380)
    return () => clearTimeout(t)
  }, [step, chars])

  return { step, chars }
}

function Prompt({ children, typing }) {
  return (
    <p className="text-dim">
      <span className="text-green">{profile.handle}@portfolio</span>
      <span className="text-fg">:</span>
      <span className="text-blue">~</span>
      <span className="text-fg">$ </span>
      <span className={`text-fg ${typing ? 'cursor' : ''}`}>{children}</span>
    </p>
  )
}

export default function Hero() {
  const { step, chars } = useTypedSession()
  const typed = (i) => (step > i ? commands[i] : step === i ? commands[i].slice(0, chars) : null)

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:pt-20">
      <Window title={`${profile.handle}@portfolio: ~`}>
        <div className="min-h-[430px] space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:p-7 sm:text-sm">
          {typed(0) !== null && <Prompt typing={step === 0}>{typed(0)}</Prompt>}
          {step > 0 && <h1 className="text-2xl font-bold text-fg sm:text-4xl">{profile.name}</h1>}

          {typed(1) !== null && <Prompt typing={step === 1}>{typed(1)}</Prompt>}
          {step > 1 && <p className="text-orange">{profile.role}</p>}

          {typed(2) !== null && <Prompt typing={step === 2}>{typed(2)}</Prompt>}
          {step > 2 && (
            <div className="flex flex-col gap-6 pt-1 md:flex-row md:items-start">
              <pre className="hidden leading-tight text-green sm:block" aria-hidden="true">
                {LOGO.join('\n')}
              </pre>
              <div className="min-w-0">
                <p>
                  <span className="text-green">{profile.handle}</span>
                  <span className="text-fg">@</span>
                  <span className="text-green">portfolio</span>
                </p>
                <p className="text-faint">-----------------------</p>
                <dl>
                  {facts.map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <dt className="shrink-0 text-purple">{k}:</dt>
                      <dd className="min-w-0 text-fg">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-3 flex" aria-hidden="true">
                  {['#ff7b72', '#3fb950', '#e3b341', '#58a6ff', '#d2a8ff', '#39c5cf', '#e6edf3'].map((c) => (
                    <span key={c} className="h-3 w-6" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step > 2 && <Prompt typing />}
        </div>
      </Window>

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-2xl text-base leading-relaxed text-dim sm:text-lg">{profile.summary}</p>
        <div className="flex flex-wrap gap-2 md:justify-end">
          <CmdLink href="#projects" primary>
            <FolderOpen className="size-4" /> ./projects
          </CmdLink>
          <CmdLink href={profile.cv} download>
            <Download className="size-4" /> cv.pdf
          </CmdLink>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <CmdLink href={profile.links.github}>
          <GithubIcon className="size-4" /> github
        </CmdLink>
        <CmdLink href={profile.links.linkedin}>
          <LinkedinIcon className="size-4" /> linkedin
        </CmdLink>
        <CmdLink href={profile.links.codeforces}>
          <CodeforcesIcon className="size-4" /> codeforces
        </CmdLink>
        <CmdLink href={`mailto:${profile.email}`}>
          <Mail className="size-4" /> email
        </CmdLink>
      </div>
    </section>
  )
}
