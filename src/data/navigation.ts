export interface NavItem {
  id: string
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'ai-lab', label: 'AI Lab', href: '#ai-lab' },
  { id: 'build', label: 'What I Build', href: '#build' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
