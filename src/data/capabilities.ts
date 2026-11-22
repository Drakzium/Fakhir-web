export interface Capability {
  id: string
  title: string
  description: string
  icon: 'globe' | 'app' | 'code' | 'phone' | 'brain' | 'bot' | 'server' | 'game'
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'websites',
    title: 'Websites',
    description: 'Cinematic, responsive sites with strong identity and polish.',
    icon: 'globe',
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Interactive product interfaces and application experiences.',
    icon: 'app',
  },
  {
    id: 'software',
    title: 'Software',
    description: 'Utilities, tools, and application logic built from the ground up.',
    icon: 'code',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Mobile-focused concepts and interactive application builds.',
    icon: 'phone',
  },
  {
    id: 'ai',
    title: 'AI Projects',
    description: 'Experiments that bring intelligence into software systems.',
    icon: 'brain',
  },
  {
    id: 'discord-bots',
    title: 'Discord Bots',
    description: 'Interactive bots with custom commands and integrations.',
    icon: 'bot',
  },
  {
    id: 'discord-servers',
    title: 'Discord Server Systems',
    description: 'Roles, channels, permissions, and community architecture.',
    icon: 'server',
  },
  {
    id: 'roblox',
    title: 'Roblox Systems',
    description: 'Gameplay mechanics, scripting, and interactive game systems.',
    icon: 'game',
  },
]
