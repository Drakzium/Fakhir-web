import { ArrowRight } from 'lucide-react'
import type { Ref } from 'react'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { usePointerLight } from '../../hooks/usePointerLight'
import heroImage from '../../assets/hero-hooded-developer.jpg'

export function Hero() {
  const { ref, onPointerMove } = usePointerLight()

  return (
    <section
      id="home"
      ref={ref as Ref<HTMLElement>}
      onPointerMove={onPointerMove}
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16"
      style={{
        background:
          'radial-gradient(900px 500px at var(--mx, 70%) var(--my, 40%), rgba(0,168,255,0.14), transparent 55%), radial-gradient(700px 400px at 15% 20%, rgba(124,58,237,0.12), transparent 50%), #03050B',
      }}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-electric/10 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-purple/15 blur-[110px]" aria-hidden />

      <div className="section-pad relative z-10">
        <div className="container-max grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
          <div className="relative z-20 max-w-xl lg:max-w-none">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-panel/60 px-3 py-1.5 text-[11px] tracking-[0.18em] text-cyan uppercase">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan shadow-[0_0_10px_#00E5FF]" />
              {SITE.heroBadge}
            </div>

            <h1 className="font-display text-[clamp(2.1rem,5.2vw,4.2rem)] leading-[1.05] font-bold tracking-tight">
              <span className="block text-white">{SITE.heroLines[0]}</span>
              <span className="block">
                I Explore <span className="text-gradient">Intelligence.</span>
              </span>
              <span className="block text-white">
                I Create <span className="text-gradient">What&apos;s Next.</span>
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {SITE.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects" variant="primary" magnetic>
                Explore My Work <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s Connect
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-bg-secondary/80 px-3 py-1.5 text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/50 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                {SITE.availabilityLabel}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {SITE.roles.slice(0, 4).map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-white/5 bg-panel/50 px-2.5 py-1 text-[11px] text-muted"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-4 w-full max-w-[620px] lg:mt-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 sm:block"
              aria-hidden
            >
              <div className="animate-ring-spin absolute inset-[6%] rounded-full border border-electric/30 shadow-[0_0_40px_rgba(0,168,255,0.12)]" />
              <div className="animate-ring-spin-rev absolute inset-[16%] rounded-full border border-cyan/25" />
              <div className="absolute inset-[26%] rounded-full border border-purple/25" />
              <div className="absolute top-[16%] right-[10%] h-9 w-9 rotate-12 border border-cyan/40 bg-cyan/10 shadow-[0_0_20px_rgba(0,229,255,0.35)]" />
              <div className="absolute bottom-[20%] left-[8%] h-6 w-6 rotate-45 border border-purple/40 bg-purple/15" />
              <div className="absolute top-[40%] left-[4%] h-3 w-3 rounded-sm bg-electric/50 blur-[1px]" />
            </div>

            <div className="animate-float-soft relative min-h-[240px] sm:min-h-[340px] lg:min-h-[520px]">
              <div className="absolute inset-x-4 bottom-0 h-32 rounded-full bg-electric/35 blur-3xl" />
              <img
                src={heroImage}
                alt="Hooded developer at a futuristic workstation"
                className="relative z-10 mx-auto mt-2 w-[112%] max-w-none -translate-x-[3%] -scale-x-100 object-contain drop-shadow-[0_24px_70px_rgba(0,168,255,0.35)] [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)] sm:w-full sm:max-w-[680px] sm:translate-x-0 lg:absolute lg:inset-x-0 lg:bottom-[-4%] lg:mt-0 lg:w-full lg:max-w-none"
                width={1280}
                height={720}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
