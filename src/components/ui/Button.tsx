import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MutableRefObject,
  type PointerEvent,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
import { useMagnetic } from '../../hooks/useMagnetic'

type Variant = 'primary' | 'secondary' | 'ghost'

type SharedProps = {
  variant?: Variant
  magnetic?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-electric via-cyan to-purple text-bg font-semibold shadow-[0_0_28px_rgba(0,168,255,0.35)] hover:shadow-[0_0_40px_rgba(0,229,255,0.45)] hover:-translate-y-0.5',
  secondary:
    'glass text-white hover:border-cyan/40 hover:bg-panel/80 hover:-translate-y-0.5',
  ghost:
    'bg-transparent border border-electric/20 text-muted hover:text-white hover:border-cyan/40',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      variant = 'primary',
      magnetic = false,
      className,
      children,
      ...rest
    } = props

    const { ref, onPointerMove, onPointerLeave } = useMagnetic(0.22)
    const classes = cn(
      'relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      className,
    )

    const setRefs = (node: HTMLButtonElement | HTMLAnchorElement | null) => {
      ref.current = node
      if (typeof forwardedRef === 'function') forwardedRef(node as HTMLButtonElement)
      else if (forwardedRef) {
        ;(forwardedRef as MutableRefObject<HTMLButtonElement | HTMLAnchorElement | null>).current =
          node
      }
    }

    const motionHandlers = magnetic
      ? {
          onPointerMove: (e: PointerEvent) => {
            onPointerMove(e as PointerEvent<HTMLElement>)
          },
          onPointerLeave,
          style: {
            transition: 'transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease',
          } as CSSProperties,
        }
      : {}

    if ('href' in rest && rest.href) {
      const { href, ...anchorRest } = rest as ButtonAsLink
      return (
        <a
          ref={setRefs}
          href={href}
          className={classes}
          data-cursor={variant === 'primary' ? 'CLICK' : 'LINK'}
          {...motionHandlers}
          {...anchorRest}
        >
          {children}
        </a>
      )
    }

    const buttonRest = rest as ButtonAsButton
    return (
      <button
        ref={setRefs as (n: HTMLButtonElement | null) => void}
        type={buttonRest.type ?? 'button'}
        className={classes}
        data-cursor="CLICK"
        {...motionHandlers}
        {...buttonRest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
