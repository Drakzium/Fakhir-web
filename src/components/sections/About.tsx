import { SITE } from '../../data/site'
import { Reveal } from '../effects/Reveal'

export function About() {
  return (
    <section id="about" className="section-pad relative py-20 md:py-28">
      <div className="container-max grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">About Me</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white">
            {SITE.aboutHeadline}
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan via-electric to-transparent" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {SITE.aboutBody}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted/90 md:text-base">
            I don&apos;t want to only use technology — I want to understand it, experiment with it,
            break problems down, and build my own things.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-electric/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-purple/25 blur-3xl" />
            <ul className="relative space-y-4">
              {SITE.roles.map((role) => (
                <li key={role} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#00E5FF]" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
