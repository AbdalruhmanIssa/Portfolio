import { skills } from '../data'
import { Reveal, SectionHeader, Window } from './ui'

/** Renders the skills object as syntax-highlighted JSON with line numbers. */
function jsonLines(obj) {
  const keys = Object.keys(obj)
  const lines = [[{ t: '{', c: 'text-fg' }]]
  keys.forEach((key, ki) => {
    const lastKey = ki === keys.length - 1
    lines.push([
      { t: '  ', c: '' },
      { t: `"${key}"`, c: 'text-blue' },
      { t: ': [', c: 'text-fg' },
    ])
    obj[key].forEach((v, vi) => {
      const last = vi === obj[key].length - 1
      lines.push([
        { t: '    ', c: '' },
        { t: `"${v}"`, c: 'text-orange' },
        { t: last ? '' : ',', c: 'text-fg' },
      ])
    })
    lines.push([{ t: `  ]${lastKey ? '' : ','}`, c: 'text-fg' }])
  })
  lines.push([{ t: '}', c: 'text-fg' }])
  return lines
}

export default function Skills() {
  const lines = jsonLines(skills)
  const half = Math.ceil(lines.length / 2)

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader command="cat skills.json" title="Skills" />
      <Reveal>
        <Window title="skills.json">
          <div className="scrollbar-thin overflow-x-auto py-4 font-mono text-[13px] leading-6 sm:text-sm">
            <ol className="lg:hidden">
              {lines.map((parts, i) => (
                <Line key={i} n={i + 1} parts={parts} />
              ))}
            </ol>
            {/* two columns on wide screens so the file doesn't feel endless */}
            <div className="hidden lg:grid lg:grid-cols-2">
              <ol>
                {lines.slice(0, half).map((parts, i) => (
                  <Line key={i} n={i + 1} parts={parts} />
                ))}
              </ol>
              <ol className="border-l border-line">
                {lines.slice(half).map((parts, i) => (
                  <Line key={i} n={half + i + 1} parts={parts} />
                ))}
              </ol>
            </div>
          </div>
        </Window>
      </Reveal>
    </section>
  )
}

function Line({ n, parts }) {
  return (
    <li className="flex whitespace-pre hover:bg-white/[0.03]">
      <span className="w-12 shrink-0 pr-4 text-right text-faint select-none">{n}</span>
      <span>
        {parts.map((p, i) => (
          <span key={i} className={p.c}>
            {p.t}
          </span>
        ))}
      </span>
    </li>
  )
}
