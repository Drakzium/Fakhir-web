import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function CustomCursor() {
  const reduced = useReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const canUse = fine && !coarse && !reduced
    setEnabled(canUse)
    document.body.classList.toggle('has-custom-cursor', canUse)
    return () => document.body.classList.remove('has-custom-cursor')
  }, [reduced])

  useEffect(() => {
    if (!enabled) return

    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        'a, button, [data-cursor], [role="button"]',
      ) as HTMLElement | null
      if (target) {
        setHovering(true)
        setLabel(target.dataset.cursor || (target.tagName === 'A' ? 'VIEW' : 'CLICK'))
      } else {
        setHovering(false)
        setLabel('')
      }
    }

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18
      ring.current.y += (pos.current.y - ring.current.y) * 0.18
      trail.current.x += (pos.current.x - trail.current.x) * 0.08
      trail.current.y += (pos.current.y - trail.current.y) * 0.08

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden>
      <div
        ref={trailRef}
        className="absolute top-0 left-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 bg-cyan/5"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ${
          hovering
            ? 'h-14 w-14 border-cyan/80 shadow-[0_0_24px_rgba(0,229,255,0.35)]'
            : 'h-9 w-9 border-electric/50'
        }`}
        style={{ willChange: 'transform' }}
      >
        <span
          ref={labelRef}
          className={`absolute inset-0 grid place-items-center font-display text-[9px] font-semibold tracking-widest text-cyan transition-opacity ${
            hovering && label ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {label}
        </span>
      </div>
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_#00E5FF]"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
