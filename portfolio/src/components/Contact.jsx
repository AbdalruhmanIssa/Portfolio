import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data'
import { CmdLink, CodeforcesIcon, GithubIcon, LinkedinIcon, Reveal, SectionHeader, Window } from './ui'

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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader command="./contact.sh" title="Get in touch" />
      <Reveal>
        <Window title="contact.sh">
          <div className="space-y-5 p-5 font-mono text-sm sm:p-8">
            <p className="text-dim">
              <span className="text-green">echo</span> <span className="text-orange">"{profile.status}. Let's talk."</span>
            </p>
            <p className="text-fg">{profile.status}. Let's talk.</p>

            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-line bg-bg p-4">
              <Mail className="size-5 text-green" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="min-w-0 break-all text-sm text-fg hover:underline sm:text-lg">
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-xs text-dim hover:border-dim hover:text-fg"
              >
                {copied ? <Check className="size-3.5 text-green" /> : <Copy className="size-3.5" />}
                {copied ? 'copied' : 'copy'}
              </button>
            </div>

            <p className="text-dim">
              <span className="text-purple">location</span>: <span className="text-fg">{profile.location}</span>
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <CmdLink href={`mailto:${profile.email}`} primary>
                <Mail className="size-4" /> send email
              </CmdLink>
              <CmdLink href={profile.links.linkedin}>
                <LinkedinIcon className="size-4" /> linkedin
              </CmdLink>
              <CmdLink href={profile.links.github}>
                <GithubIcon className="size-4" /> github
              </CmdLink>
              <CmdLink href={profile.links.codeforces}>
                <CodeforcesIcon className="size-4" /> codeforces
              </CmdLink>
              <CmdLink href={profile.cv} download>
                <Download className="size-4" /> cv.pdf
              </CmdLink>
            </div>
          </div>
        </Window>
      </Reveal>
    </section>
  )
}
