import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data'
import { Button, CodeforcesIcon, GithubIcon, LinkedinIcon, Reveal } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-violet/40 bg-gradient-to-br from-brand via-[#3b1fa3] to-[#1b1240] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-violet/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="font-mono text-sm text-lilac">
              <span className="text-kw">await</span> <span className="text-fn">ContactAsync</span>();
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's build something together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              {profile.status}. Based in {profile.location.split(' · ')[0]}, with a transferable Iqama.
            </p>

            <div className="mx-auto mt-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-black/25 py-2 pr-2 pl-5 backdrop-blur">
              <a href={`mailto:${profile.email}`} className="min-w-0 truncate font-medium text-white hover:underline">
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-lg hover:bg-lilac"
              >
                <Mail className="size-4" /> Send email
              </a>
              <Button href={profile.cv} download className="border-white/25 bg-white/5">
                <Download className="size-4" /> Download CV
              </Button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {[
                [profile.links.linkedin, LinkedinIcon, 'LinkedIn'],
                [profile.links.github, GithubIcon, 'GitHub'],
                [profile.links.codeforces, CodeforcesIcon, 'Codeforces'],
              ].map(([href, Icon, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
