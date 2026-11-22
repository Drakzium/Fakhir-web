import { MessageCircle, Mail } from 'lucide-react'
import { EMAIL, WHATSAPP } from '../../data/contact'

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={EMAIL.href}
        data-cursor="CLICK"
        aria-label="Send an email"
        className="grid h-12 w-12 place-items-center rounded-full border border-electric/30 bg-panel/90 text-cyan shadow-[0_8px_30px_rgba(0,168,255,0.25)] transition hover:-translate-y-0.5 hover:border-cyan/50"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href={WHATSAPP.href}
        target="_blank"
        rel="noreferrer"
        data-cursor="CLICK"
        aria-label="Contact on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full border border-cyan/40 bg-gradient-to-br from-electric to-cyan text-bg shadow-[0_8px_30px_rgba(0,229,255,0.35)] transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  )
}
