import { useCallback, useRef, type PointerEvent } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useMagnetic(strength = 0.28) {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      const el = ref.current
      if (!el || reduced) return
      if (window.matchMedia('(pointer: coarse)').matches) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [reduced, strength],
  )

  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
