import { cn } from '../../lib/cn'
import { SITE } from '../../data/site'

interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <a href="#home" className={cn('inline-flex items-center gap-3', className)} aria-label={`${SITE.name} home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-cyan/30 bg-panel/80 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden>
          <defs>
            <linearGradient id="nfGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="55%" stopColor="#00A8FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* Abstract N/F monogram */}
          <path
            d="M9 31V9h3.8l8.2 13.6V9H25v22h-3.8L13 17.4V31H9Z"
            fill="url(#nfGrad)"
          />
          <path
            d="M27 9h10v3.2H30.4v5.2H36v3.1h-5.6V31H27V9Z"
            fill="url(#nfGrad)"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-wide">
          <span className="text-white">{SITE.name}</span>
          <span className="text-gradient">.dev</span>
        </span>
      )}
    </a>
  )
}
