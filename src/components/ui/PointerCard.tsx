import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { usePointerLight } from '../../hooks/usePointerLight'

interface PointerCardProps {
  children: ReactNode
  className?: string
  cursorLabel?: string
  onClick?: () => void
}

export function PointerCard({ children, className, cursorLabel = 'VIEW', onClick }: PointerCardProps) {
  const { ref, onPointerMove } = usePointerLight()

  const Comp = onClick ? 'button' : 'div'

  return (
    <Comp
      ref={ref as never}
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      onPointerMove={onPointerMove}
      data-cursor={cursorLabel}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-electric/15 bg-panel/70 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_12px_40px_rgba(0,168,255,0.12)]',
        'before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[""] group-hover:before:opacity-100',
        className,
      )}
      style={{
        backgroundImage:
          'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(0,229,255,0.12), transparent 42%)',
      }}
    >
      {children}
    </Comp>
  )
}
