import { SITE } from '../../data/site'
import { Reveal } from '../effects/Reveal'

export function Philosophy() {
  return (
    <section id="philosophy" className="section-pad relative py-20 md:py-28">
      <Reveal className="container-max">
        <div className="glass glow-border relative overflow-hidden rounded-[28px] px-6 py-10 md:px-12 md:py-14">
          <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-cyan/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-purple/20 blur-3xl" />
          <p className="relative mb-4 text-xs tracking-[0.22em] text-cyan uppercase">Why I Build</p>
          <blockquote className="relative font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-snug font-semibold text-white">
            <span className="text-gradient text-4xl leading-none">“</span>
            {SITE.philosophyQuote}
          </blockquote>
          <div className="relative mt-6 h-px w-32 bg-gradient-to-r from-cyan via-purple to-transparent" />
          <p className="relative mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            {SITE.philosophyBody}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
