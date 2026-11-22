import { MessageCircle } from 'lucide-react'
import { enabledSocials } from '../../data/socials'

const iconMap: Record<string, typeof MessageCircle> = {
  discord: MessageCircle,
}

export function SocialSidebar() {
  const socials = enabledSocials()
  if (!socials.length) return null

  return (
    <aside
      className="fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Social links"
    >
      <div className="glass flex flex-col gap-2 rounded-2xl p-2">
        {socials.map((social) => {
          const Icon = iconMap[social.id] ?? MessageCircle
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="VIEW"
              title={social.label}
              className="group relative grid h-10 w-10 place-items-center rounded-xl text-muted transition-all hover:bg-cyan/10 hover:text-cyan"
            >
              <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span className="pointer-events-none absolute left-12 rounded-md bg-panel px-2 py-1 text-[10px] tracking-wide text-white opacity-0 transition group-hover:opacity-100">
                {social.label}
              </span>
            </a>
          )
        })}
      </div>
    </aside>
  )
}
