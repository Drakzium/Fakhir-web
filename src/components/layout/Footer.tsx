import { ArrowUp } from 'lucide-react'
import { Logo } from '../brand/Logo'
import { NAV_ITEMS } from '../../data/navigation'
import { EMAIL, WHATSAPP, DISCORD } from '../../data/contact'
import { enabledSocials } from '../../data/socials'
import { SITE } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()
  const socials = enabledSocials()

  return (
    <footer className="section-pad relative border-t border-electric/10 bg-bg-secondary/50 pt-14 pb-8">
      <div className="container-max grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {SITE.name} — building digital experiences, experimenting with AI, and exploring systems
            across web, bots, and interactive worlds.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-white">Navigate</h3>
          <ul className="space-y-2 text-sm text-muted">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="hover:text-cyan">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-white">Connect</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={EMAIL.href} className="hover:text-cyan">
                {EMAIL.display}
              </a>
            </li>
            <li>
              <a href={WHATSAPP.href} className="hover:text-cyan">
                WhatsApp {WHATSAPP.display}
              </a>
            </li>
            <li>
              <a href={DISCORD.href} className="hover:text-cyan" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            {socials
              .filter((s) => s.id !== 'discord')
              .map((s) => (
                <li key={s.id}>
                  <a href={s.href} className="hover:text-cyan" target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="container-max mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted">
        <p>
          © {year} {SITE.fullName}. Built with curiosity.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 rounded-full border border-electric/20 px-3 py-2 hover:border-cyan/40 hover:text-cyan"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  )
}
