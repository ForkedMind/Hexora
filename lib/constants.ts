export const APP_CONFIG = {
  name: 'Hexora',
  description: 'Transform your code into real-world impact through tokenized collaboration.',
  url: 'https://hexora.io',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/hexora_io',
    github: 'https://github.com/hexora',
    discord: 'https://discord.gg/hexora',
    docs: 'https://docs.hexora.io',
  },
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  howItWorks: '/how-it-works',
  team: '/team',
  tasks: '/tasks',
  tokenomics: '/tokenomics',
  admin: '/admin',
  auth: {
    signin: '/auth/signin',
    signup: '/auth/signup',
  },
} as const;

export const API_ENDPOINTS = {
  users: '/api/users',
  projects: '/api/projects',
  tasks: '/api/tasks',
  auth: '/api/auth',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;