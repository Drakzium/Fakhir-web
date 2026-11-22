export interface Skill {
  id: string
  title: string
  description: string
  icon: 'web' | 'software' | 'ai' | 'mobile' | 'bot' | 'discord' | 'roblox'
}

export const SKILLS: Skill[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Websites, frontend interfaces, responsive design, and web applications.',
    icon: 'web',
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Software projects, development utilities, application logic, and tools.',
    icon: 'software',
  },
  {
    id: 'ai',
    title: 'AI & LLM Exploration',
    description: 'LLMs, transformers, AI architecture, RAG, embeddings, and local AI exploration.',
    icon: 'ai',
  },
  {
    id: 'mobile',
    title: 'Mobile & Web Apps',
    description: 'Application concepts, interactive experiences, and mobile application development.',
    icon: 'mobile',
  },
  {
    id: 'bot',
    title: 'Bot Development',
    description: 'Bots, custom functionality, and interactive integrations.',
    icon: 'bot',
  },
  {
    id: 'discord',
    title: 'Discord Development',
    description: 'Server systems, bot functionality, roles, channels, permissions, and architecture.',
    icon: 'discord',
  },
  {
    id: 'roblox',
    title: 'Roblox Development',
    description: 'Gameplay systems, scripting, game mechanics, and interactive systems.',
    icon: 'roblox',
  },
]
