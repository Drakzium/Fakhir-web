import {
  Bot,
  Brain,
  Code2,
  Gamepad2,
  Globe2,
  MessageSquare,
  Smartphone,
} from 'lucide-react'
import { SKILLS } from '../../data/skills'
import { Reveal } from '../effects/Reveal'
import { PointerCard } from '../ui/PointerCard'
import type { Skill } from '../../data/skills'

const icons: Record<Skill['icon'], typeof Globe2> = {
  web: Globe2,
  software: Code2,
  ai: Brain,
  mobile: Smartphone,
  bot: Bot,
  discord: MessageSquare,
  roblox: Gamepad2,
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-bg-secondary/40 py-20 md:py-28">
      <div className="container-max">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">My Toolkit</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold">
            Things I Explore & Build
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SKILLS.map((skill, i) => {
            const Icon = icons[skill.icon]
            return (
              <Reveal key={skill.id} delay={i * 0.05}>
                <PointerCard className="h-full p-5 md:p-6" cursorLabel="VIEW">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/25 bg-bg/60 text-cyan transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
                </PointerCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
