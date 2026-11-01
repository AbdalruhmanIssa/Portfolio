import { useState } from 'react'
import { ArrowUpRight, Check, Expand, Images, User } from 'lucide-react'
import { featured, projects } from '../data'
import Lightbox from './Lightbox'
import { Chip, Reveal, SectionHeader } from './ui'

function ProjectLinks({ links, size = 'md' }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1 rounded-full border border-line font-medium text-fg transition-colors hover:border-violet/60 hover:bg-violet/10 ${
            size === 'sm' ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-sm'
          }`}
        >
          {l.label.replace('-', ' ')}
          <ArrowUpRight className="size-3.5 text-violet" />
        </a>
      ))}
    </div>
  )
}

/** Main screenshot plus a thumbnail strip. */
function Gallery({ items }) {
  const [current, setCurrent] = useState(0)
  const [zoomed, setZoomed] = useState(null)
  const item = items[current]

  return (
    <div className="min-w-0 lg:sticky lg:top-24">
      <button
        type="button"
        onClick={() => setZoomed(current)}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-black/40"
        aria-label={`Open screenshot full size: ${item.caption}`}
      >
        <img
          key={item.src}
          src={item.src}
          alt={item.caption}
          loading="lazy"
          className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-fg opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <Expand className="size-3.5" /> Expand
        </span>
      </button>
      <p className="mt-3 text-sm text-dim">{item.caption}</p>
      <div className="scrollbar-thin mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Screenshots">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={it.caption}
            onClick={() => setCurrent(i)}
            className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              i === current ? 'border-violet' : 'border-transparent opacity-50 hover:opacity-90'
            }`}
          >
            <img src={it.src} alt="" loading="lazy" className="size-full object-cover object-top" />
          </button>
        ))}
      </div>
      <Lightbox items={items} index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
    </div>
  )
}

/** Request flow, with the services Abdulrahman built highlighted. */
function Architecture({ nodes }) {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-black/20 p-5">
      <p className="mb-4 text-xs font-semibold tracking-widest text-faint uppercase">Architecture</p>
      <ol className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex flex-col items-center gap-3 sm:flex-1 sm:flex-row">
            <div
              className={`w-full rounded-xl px-4 py-3 text-center ${
                n.mine
                  ? 'border border-violet/50 bg-gradient-to-b from-violet/20 to-brand/10'
                  : 'border border-dashed border-line'
              }`}
            >
              <div className={`text-sm font-semibold ${n.mine ? 'text-fg' : 'text-dim'}`}>{n.label}</div>
              <div className="text-xs text-faint">{n.note}</div>
            </div>
            {i < nodes.length - 1 && (
              <span className="h-4 w-px shrink-0 bg-gradient-to-b from-violet to-transparent sm:h-px sm:w-6 sm:bg-gradient-to-r" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 flex items-center gap-2 text-xs text-faint">
        <span className="size-3 rounded border border-violet/50 bg-violet/20" /> Built by me
      </p>
    </div>
  )
}

function FeaturedProject({ p, flip }) {
  return (
    <Reveal>
      <article className="card rounded-3xl p-5 sm:p-8">
        <div className={`grid items-start gap-10 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <Gallery items={p.gallery} />

          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-faint">
              <span>{p.period}</span>
              <span aria-hidden="true">•</span>
              <span>{p.context}</span>
            </div>
            <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-fg">{p.name}</h3>
            <p className="mt-1 font-medium text-lilac">{p.tagline}</p>

            <p className="mt-4 inline-flex items-start gap-2 rounded-xl border border-cyan/25 bg-cyan/5 px-3 py-2 text-sm text-cyan">
              <User className="mt-0.5 size-4 shrink-0" /> {p.role}
            </p>

            <p className="mt-5 leading-relaxed text-dim">{p.summary}</p>

            <ul className="mt-5 space-y-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg/90">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-violet/20 text-violet">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>

            <div className="mt-6">
              <ProjectLinks links={p.links} />
              {p.credit && (
                <a
                  href={p.credit.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-xs text-faint hover:text-dim hover:underline"
                >
                  {p.credit.label} ↗
                </a>
              )}
            </div>
          </div>
        </div>
        {p.architecture && <Architecture nodes={p.architecture} />}
      </article>
    </Reveal>
  )
}

function ProjectCard({ p, delay }) {
  const [zoomed, setZoomed] = useState(null)
  const cover = p.images[0]
  const items = p.images.map((im) => ({ ...im, caption: im.alt }))

  return (
    <Reveal delay={delay} className="h-full">
      <article className="card group flex h-full flex-col overflow-hidden rounded-3xl">
        <button
          type="button"
          onClick={() => setZoomed(0)}
          className="relative m-3 mb-0 block aspect-[2/1] overflow-hidden rounded-2xl bg-black/40"
          aria-label={`View ${p.name} screenshots`}
        >
          {p.tree ? (
            <div className="flex size-full flex-col justify-center gap-1.5 bg-[#1e1e2e] px-6 text-left font-mono text-xs sm:text-sm">
              {p.tree.map(([node, note]) => (
                <p key={node} className="flex flex-wrap gap-x-3 whitespace-pre">
                  <span className={note ? 'text-type' : 'font-bold text-fg'}>{node}</span>
                  {note && <span className="text-cm">// {note}</span>}
                </p>
              ))}
            </div>
          ) : (
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          {p.images.length > 1 && (
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-fg backdrop-blur">
              <Images className="size-3.5" /> {p.images.length}
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium text-faint">{p.period}</p>
          <h3 className="mt-1 font-display text-xl font-bold text-fg">{p.name}</h3>
          <p className="text-sm font-medium text-lilac">{p.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-dim">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <div className="mt-auto pt-5">
            <ProjectLinks links={p.links} size="sm" />
          </div>
        </div>
      </article>
      <Lightbox items={items} index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeader
        eyebrow="Portfolio.Projects;"
        title="Featured work"
        intro="Two systems I'm proudest of: an AI-assisted medical training platform and a full-stack approvals app."
      />
      <div className="space-y-10">
        {featured.map((p, i) => (
          <FeaturedProject key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>

      <h3 className="mt-24 mb-8 font-display text-2xl font-extrabold tracking-tight text-fg">More projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} p={p} delay={(i % 2) * 100} />
        ))}
      </div>
    </section>
  )
}
