import {
  AppWindow,
  Bot,
  Brain,
  Code2,
  Gamepad2,
  Globe2,
  Server,
  Smartphone,
} from 'lucide-react'
import { CAPABILITIES } from '../../data/capabilities'
import type { Capability } from '../../data/capabilities'
import { Reveal } from '../effects/Reveal'
import { PointerCard } from '../ui/PointerCard'

const icons: Record<Capability['icon'], typeof Globe2> = {
  globe: Globe2,
  app: AppWindow,
  code: Code2,
  phone: Smartphone,
  brain: Brain,
  bot: Bot,
  server: Server,
  game: Gamepad2,
}

export function WhatIBuild() {
  return (
    <section id="build" className="section-pad relative bg-bg-secondary/35 py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">What I Build</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold">
            From Ideas to Interactive Systems.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.id} delay={i * 0.04}>
                <PointerCard className="h-full p-5" cursorLabel="VIEW">
                  <div className="mb-4 text-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </PointerCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
