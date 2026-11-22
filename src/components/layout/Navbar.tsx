import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { NAV_ITEMS } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 section-pad pt-4">
      <nav
        className={cn(
          'container-max mx-auto flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300',
          scrolled ? 'glass glow-border shadow-lg shadow-black/30' : 'bg-transparent',
        )}
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  'relative rounded-lg px-2.5 py-2 text-[13px] transition-colors',
                  active === item.id ? 'text-cyan' : 'text-muted hover:text-white',
                )}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href="#contact" variant="primary" magnetic className="!py-2.5 !text-xs tracking-wide">
            Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-electric/25 bg-panel/60 text-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'container-max mx-auto mt-2 overflow-hidden rounded-2xl glass transition-all duration-300 xl:hidden',
          open ? 'max-h-[420px] opacity-100' : 'pointer-events-none max-h-0 border-0 opacity-0',
        )}
        inert={!open ? true : undefined}
      >
        <ul className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  'block rounded-xl px-4 py-3 text-sm',
                  active === item.id ? 'bg-electric/10 text-cyan' : 'text-muted hover:text-white',
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href="#contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
