import { useEffect, useMemo, useRef, useState } from 'react'
import { AI_TOPICS } from '../../data/aiLab'
import { Reveal } from '../effects/Reveal'
import { cn } from '../../lib/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Node {
  id: number
  x: number
  y: number
  r: number
}

export function AiLab() {
  const [activeId, setActiveId] = useState(AI_TOPICS[0].id)
  const active = AI_TOPICS.find((t) => t.id === activeId) ?? AI_TOPICS[0]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()
  const pointer = useRef({ x: 0.5, y: 0.5 })

  const nodes = useMemo<Node[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: 0.12 + Math.random() * 0.76,
        y: 0.15 + Math.random() * 0.7,
        r: 2 + Math.random() * 2.5,
      })),
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let t = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      t += reduced ? 0 : 0.004

      const pts = nodes.map((n) => ({
        x: n.x * width + Math.sin(t + n.id) * (reduced ? 0 : 4),
        y: n.y * height + Math.cos(t * 0.8 + n.id) * (reduced ? 0 : 4),
        r: n.r,
      }))

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 110) {
            ctx.strokeStyle = `rgba(0,229,255,${0.18 * (1 - dist / 110)})`
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
      }

      const px = pointer.current.x * width
      const py = pointer.current.y * height

      pts.forEach((p) => {
        const dist = Math.hypot(p.x - px, p.y - py)
        const boost = dist < 90 ? 1.6 : 1
        ctx.fillStyle = dist < 90 ? '#00E5FF' : '#00A8FF'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * boost, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [nodes, reduced])

  return (
    <section id="ai-lab" className="section-pad relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.12),transparent_45%)]" />
      <div className="container-max relative">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">AI Lab</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold">
            Curious About Intelligence.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Exploring how AI systems work, experimenting with architectures, and building ideas that
            bring intelligence into software.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div
              className="glass relative h-[320px] overflow-hidden rounded-3xl md:h-[380px]"
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                pointer.current.x = (e.clientX - rect.left) / rect.width
                pointer.current.y = (e.clientY - rect.top) / rect.height
              }}
            >
              <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {AI_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setActiveId(topic.id)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs transition-all',
                    activeId === topic.id
                      ? 'border-purple/50 bg-purple/15 text-white'
                      : 'border-electric/20 text-muted hover:border-cyan/30 hover:text-white',
                  )}
                >
                  {topic.title}
                </button>
              ))}
            </div>
            <div className="glass mt-5 rounded-2xl p-5">
              <h3 className="font-display text-xl font-semibold text-white">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{active.detail}</p>
              <p className="mt-4 text-xs text-muted/80">
                Active learning & experimentation — not claimed research publications or production
                model training at scale.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
