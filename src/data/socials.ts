export interface SocialLink {
  id: string
  label: string
  href: string
  /** Only enabled links are rendered. Never invent URLs. */
  enabled: boolean
}

export const SOCIALS: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: '', enabled: false },
  { id: 'linkedin', label: 'LinkedIn', href: '', enabled: false },
  { id: 'discord', label: 'Discord', href: 'https://discord.gg/KskCySxM8f', enabled: true },
  { id: 'youtube', label: 'YouTube', href: '', enabled: false },
  { id: 'instagram', label: 'Instagram', href: '', enabled: false },
]

export const enabledSocials = () => SOCIALS.filter((s) => s.enabled && s.href)
