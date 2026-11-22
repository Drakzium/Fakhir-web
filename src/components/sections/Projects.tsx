import { useEffect, useMemo, useState } from 'react'
import { Code2, ExternalLink, X } from 'lucide-react'
import {
  filterProjects,
  PROJECT_FILTERS,
  type Project,
  type ProjectFilter,
} from '../../data/projects'
import { Reveal } from '../effects/Reveal'
import { PointerCard } from '../ui/PointerCard'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [active, setActive] = useState<Project | null>(null)
  const projects = useMemo(() => filterProjects(filter), [filter])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="projects" className="section-pad relative py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">Selected Work</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold">
            Built, Experimented, Explored.
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
          {PROJECT_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs tracking-wide transition-all',
                filter === item
                  ? 'border-cyan/50 bg-cyan/10 text-cyan'
                  : 'border-electric/20 text-muted hover:border-cyan/30 hover:text-white',
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <PointerCard
                className="flex h-full min-h-[240px] flex-col p-5 md:p-6"
                cursorLabel="VIEW"
                onClick={() => setActive(project)}
              >
                <div
                  className="mb-5 h-28 rounded-xl border border-white/5"
                  style={{
                    background: `linear-gradient(145deg, ${project.accent}33, transparent 55%), linear-gradient(180deg, #0A1020, #070B16)`,
                  }}
                />
                <div className="mb-2 text-[11px] tracking-widest text-cyan uppercase">
                  {project.category} · {project.status}
                </div>
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-bg/50 px-2 py-0.5 text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </PointerCard>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-bg/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActive(null)}
        >
          <div
            className="glass glow-border relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-xl border border-electric/20 text-muted hover:text-white"
              aria-label="Close project details"
              onClick={() => setActive(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-xs tracking-[0.2em] text-cyan uppercase">
              {active.category} · {active.status}
            </p>
            <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-bold">
              {active.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{active.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-cyan/20 bg-cyan/5 px-2.5 py-1 text-xs text-cyan"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {active.liveUrl ? (
                <Button href={active.liveUrl} variant="primary">
                  View Project <ExternalLink className="h-4 w-4" />
                </Button>
              ) : (
                <span className="rounded-xl border border-electric/15 px-4 py-3 text-xs text-muted">
                  Live link coming soon
                </span>
              )}
                  {active.githubUrl ? (
                <Button href={active.githubUrl} variant="secondary">
                  GitHub <Code2 className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
