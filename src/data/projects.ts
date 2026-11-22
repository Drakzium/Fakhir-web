export type ProjectCategory = 'Web' | 'Software' | 'AI' | 'Bots' | 'Roblox'

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  category: ProjectCategory
  tags: string[]
  status: string
  /** Leave empty until a real URL exists — never invent live links. */
  liveUrl: string
  /** Leave empty until a real repository exists. */
  githubUrl: string
  accent: string
}

export const PROJECT_FILTERS = ['All', 'Web', 'Software', 'AI', 'Bots', 'Roblox'] as const

export type ProjectFilter = (typeof PROJECT_FILTERS)[number]

export const PROJECTS: Project[] = [
  {
    id: 'fusion-desk',
    title: 'Fusion Desk',
    summary:
      'A local-first AI desktop assistant exploring automation, intelligent interaction, and model integration.',
    description:
      'Fusion Desk investigates how a local AI companion can sit beside daily workflows — connecting models, tools, and desktop actions without relying on cloud-only assumptions. Active experimental development.',
    category: 'AI',
    tags: ['AI', 'Desktop', 'Automation', 'Local-first'],
    status: 'In Development',
    liveUrl: '',
    githubUrl: '',
    accent: '#00A8FF',
  },
  {
    id: 'fusion-brain',
    title: 'Fusion Brain',
    summary:
      'An experimental language-model project exploring tokenization, transformers, training, and inference.',
    description:
      'Fusion Brain is an R&D track into original language-model development — tokenizer experiments, Transformer architecture studies, training loops, and inference design. Exploratory, not production-ready.',
    category: 'AI',
    tags: ['LLM', 'Transformers', 'Research', 'Python'],
    status: 'Experimental',
    liveUrl: '',
    githubUrl: '',
    accent: '#7C3AED',
  },
  {
    id: 'discord-automation',
    title: 'Discord Automation',
    summary:
      'Custom Discord bot development covering commands, event handling, and server automation.',
    description:
      'Custom bots built for command workflows, event-driven server logic, roles, channels, and practical automation patterns tailored to each community.',
    category: 'Bots',
    tags: ['Discord', 'Bots', 'Node.js', 'APIs'],
    status: 'Active Concepts',
    liveUrl: '',
    githubUrl: '',
    accent: '#00E5FF',
  },
  {
    id: 'roblox-systems',
    title: 'Roblox Systems',
    summary:
      'Gameplay scripting, progression mechanics, NPCs, combat systems, and interactive features.',
    description:
      'Lua-driven gameplay focused on combat mechanics, NPC and quest logic, progression loops, and interactive systems designed to feel responsive in play.',
    category: 'Roblox',
    tags: ['Roblox', 'Lua', 'Gameplay', 'Systems'],
    status: 'Active Concepts',
    liveUrl: '',
    githubUrl: '',
    accent: '#00A8FF',
  },
  {
    id: 'web-experiences',
    title: 'Web Experiences',
    summary:
      'Custom websites and web applications with cinematic UI, motion, and responsive craft.',
    description:
      'Personal and experimental web builds focused on atmosphere, interaction design, and clean architecture. Includes this portfolio and related interface experiments.',
    category: 'Web',
    tags: ['React', 'TypeScript', 'UI', 'Motion'],
    status: 'Ongoing',
    liveUrl: '',
    githubUrl: '',
    accent: '#7C3AED',
  },
  {
    id: 'dev-utilities',
    title: 'Dev Utilities',
    summary:
      'Small software tools and utilities that support building, automation, and experimentation.',
    description:
      'Lightweight software projects and helpers created while exploring development workflows, automation, and practical tooling needs.',
    category: 'Software',
    tags: ['Tools', 'Automation', 'Software'],
    status: 'Ongoing',
    liveUrl: '',
    githubUrl: '',
    accent: '#00E5FF',
  },
]

export function filterProjects(filter: ProjectFilter): Project[] {
  if (filter === 'All') return PROJECTS
  return PROJECTS.filter((p) => p.category === filter)
}
