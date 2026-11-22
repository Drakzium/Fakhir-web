import { CustomCursor } from './components/effects/CustomCursor'
import { ScrollProgress } from './components/effects/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { SocialSidebar } from './components/layout/SocialSidebar'
import { FloatingActions } from './components/layout/FloatingActions'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { AiLab } from './components/sections/AiLab'
import { WhatIBuild } from './components/sections/WhatIBuild'
import { Philosophy } from './components/sections/Philosophy'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-white">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <AiLab />
        <WhatIBuild />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
