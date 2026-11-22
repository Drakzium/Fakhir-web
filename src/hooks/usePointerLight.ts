import { useCallback, useRef, type PointerEvent } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function usePointerLight() {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      const el = ref.current
      if (!el || reduced) return
      if (window.matchMedia('(pointer: coarse)').matches) return

      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    },
    [reduced],
  )

  return { ref, onPointerMove }
}
