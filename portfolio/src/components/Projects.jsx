import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Images, Maximize2 } from 'lucide-react'
import { featured, projects } from '../data'
import Lightbox from './Lightbox'
import { Reveal, SectionHeader, Tag, Window } from './ui'

function ProjectLinks({ links }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-blue hover:underline"
        >
          {l.label}
          <ArrowUpRight className="size-3.5" />
        </a>
      ))}
    </div>
  )
}

/** Screenshot viewer with file-name tabs, like an editor. */
function Gallery({ items }) {
  const [current, setCurrent] = useState(0)
  const [zoomed, setZoomed] = useState(null)
  const item = items[current]

  return (
    <div className="min-w-0">
      <div role="tablist" aria-label="Screenshots" className="scrollbar-thin flex overflow-x-auto border-b border-line bg-bg">
        {items.map((it, i) => (
          <button
            key={it.name}
            type="button"
            role="tab"
            aria-selected={i === current}
            onClick={() => setCurrent(i)}
            className={`shrink-0 border-r border-line px-3 py-2 font-mono text-xs transition-colors ${
              i === current ? 'bg-panel text-fg shadow-[inset_0_2px_0_var(--color-green)]' : 'text-faint hover:text-dim'
            }`}
          >
            {it.name}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setZoomed(current)}
        className="group relative block aspect-[16/10] w-full overflow-hidden bg-bg sm:aspect-[2/1]"
        aria-label={`Open ${item.name} full size`}
      >
        <img
          key={item.src}
          src={item.src}
          alt={item.caption}
          loading="lazy"
          className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
        <span className="absolute right-3 bottom-3 rounded-md border border-line bg-panel/90 p-1.5 text-dim opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="size-4" />
        </span>
      </button>
      <p className="border-t border-line px-4 py-2.5 font-mono text-xs text-dim">
        <span className="text-green">// </span>
        {item.caption}
      </p>
      <Lightbox items={items} index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
    </div>
  )
}

function Architecture({ nodes }) {
  return (
    <div className="border-t border-line px-5 py-5 sm:px-7">
      <p className="mb-3 font-mono text-xs text-dim">
        <span className="text-green">$</span> cat architecture.txt
      </p>
      <ol className="flex flex-col gap-2 font-mono text-xs sm:flex-row sm:items-stretch">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex flex-col items-center gap-2 sm:flex-1 sm:flex-row">
            <div
              className={`w-full rounded-md border px-3 py-2 text-center ${
                n.mine ? 'border-green/50 bg-green/5 text-fg' : 'border-dashed border-line text-dim'
              }`}
            >
              <div className="font-bold">{n.label}</div>
              <div className="text-faint">{n.note}</div>
            </div>
            {i < nodes.length - 1 && <ArrowRight className="size-4 shrink-0 rotate-90 text-faint sm:rotate-0" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <p className="mt-3 font-mono text-xs text-faint">
        <span className="mr-1 inline-block size-2 rounded-sm border border-green/50 bg-green/20 align-middle" /> built by me
      </p>
    </div>
  )
}

function FeaturedProject({ p, index }) {
  return (
    <Reveal>
      <Window title={`~/projects/${p.id}`} right={<span className="font-mono text-xs text-faint">0{index + 1}</span>}>
        <div className="border-b border-line">
          <Gallery items={p.gallery} />
        </div>

        <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-mono text-xs text-faint">
                {p.period} · {p.context}
              </p>
              <h3 className="mt-1 font-mono text-2xl font-bold text-fg">{p.name}</h3>
              <p className="text-orange">{p.tagline}</p>
            </div>

            <p className="w-fit rounded-md border border-green/30 bg-green/5 px-3 py-2 font-mono text-xs text-green">
              {p.role}
            </p>

            <p className="leading-relaxed text-dim">{p.summary}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            <div className="mt-auto space-y-2 pt-1">
              <ProjectLinks links={p.links} />
              {p.credit && (
                <p className="font-mono text-xs text-faint">
                  <a href={p.credit.href} target="_blank" rel="noreferrer" className="hover:text-dim hover:underline">
                    {p.credit.label} ↗
                  </a>
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs text-dim">
              <span className="text-green">$</span> cat highlights.md
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-fg/90">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-0.5 font-mono text-green" aria-hidden="true">
                    ▸
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {p.architecture && <Architecture nodes={p.architecture} />}
      </Window>
    </Reveal>
  )
}

function ProjectCard({ p, delay }) {
  const [zoomed, setZoomed] = useState(null)
  const cover = p.images[0]
  const items = p.images.map((im) => ({ ...im, caption: im.alt }))

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel transition-colors hover:border-dim">
        <button
          type="button"
          onClick={() => setZoomed(0)}
          className="relative block aspect-[2/1] overflow-hidden border-b border-line bg-bg"
          aria-label={`View ${p.name} screenshots`}
        >
          {p.tree ? (
            <div className="flex size-full flex-col justify-center gap-1.5 px-6 text-left font-mono text-xs sm:text-sm">
              {p.tree.map(([node, note]) => (
                <p key={node} className="flex flex-wrap gap-x-3 whitespace-pre">
                  <span className={note ? 'text-blue' : 'font-bold text-fg'}>{node}</span>
                  {note && <span className="text-faint">// {note}</span>}
                </p>
              ))}
            </div>
          ) : (
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              className={`size-full transition-transform duration-500 group-hover:scale-[1.03] ${
                cover.tree ? 'object-contain p-3' : 'object-cover object-top'
              }`}
            />
          )}
          {p.images.length > 1 && (
            <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-md border border-line bg-panel/90 px-1.5 py-0.5 font-mono text-xs text-dim">
              <Images className="size-3.5" /> {p.images.length}
            </span>
          )}
        </button>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <p className="font-mono text-xs text-faint">{p.period}</p>
            <h3 className="font-mono text-lg font-bold text-fg">{p.name}</h3>
            <p className="text-sm text-orange">{p.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed text-dim">{p.summary}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <div className="mt-auto pt-1">
            <ProjectLinks links={p.links} />
          </div>
        </div>
      </article>
      <Lightbox items={items} index={zoomed} onChange={setZoomed} onClose={() => setZoomed(null)} />
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader command="ls ~/projects --featured" title="Featured projects" />
      <div className="space-y-10">
        {featured.map((p, i) => (
          <FeaturedProject key={p.id} p={p} index={i} />
        ))}
      </div>

      <div className="mt-20">
        <SectionHeader command="ls ~/projects --more" title="More projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
