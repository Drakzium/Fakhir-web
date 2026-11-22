import { STATS } from '../../data/site'
import { Reveal } from '../effects/Reveal'

export function Stats() {
  return (
    <section className="section-pad relative -mt-6 pb-8" aria-label="Highlights">
      <Reveal className="container-max">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-5 text-center md:px-5"
            >
              <div className="font-display text-xl font-semibold text-white md:text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs tracking-wide text-muted uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
