import { Skill, SkillCategory } from '../types'

export const mockSkills: Skill[] = [
  // Frontend Skills
  {
    id: '1',
    name: 'TypeScript',
    level: 90,
    category: SkillCategory.FRONTEND,
    description: 'Advanced TypeScript development with complex type systems',
    iconUrl: '/icons/typescript.svg',
    yearsOfExperience: 4,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '2',
    name: 'React',
    level: 95,
    category: SkillCategory.FRONTEND,
    description: 'Expert in React ecosystem including hooks, context, and performance optimization',
    iconUrl: '/icons/react.svg',
    yearsOfExperience: 5,
    certified: true,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '3',
    name: 'Next.js',
    level: 85,
    category: SkillCategory.FRONTEND,
    description: 'Proficient in Next.js App Router, SSR, SSG, and API routes',
    iconUrl: '/icons/nextjs.svg',
    yearsOfExperience: 3,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    level: 88,
    category: SkillCategory.FRONTEND,
    description: 'Advanced utility-first CSS framework with custom design systems',
    iconUrl: '/icons/tailwind.svg',
    yearsOfExperience: 3,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '5',
    name: 'Vue.js',
    level: 80,
    category: SkillCategory.FRONTEND,
    description: 'Competent in Vue 3 composition API and ecosystem',
    iconUrl: '/icons/vue.svg',
    yearsOfExperience: 2,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Backend Skills
  {
    id: '6',
    name: 'Node.js',
    level: 90,
    category: SkillCategory.BACKEND,
    description: 'Expert in Node.js server development and ecosystem',
    iconUrl: '/icons/nodejs.svg',
    yearsOfExperience: 4,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '7',
    name: 'Python',
    level: 85,
    category: SkillCategory.BACKEND,
    description: 'Proficient in Python for web development and data science',
    iconUrl: '/icons/python.svg',
    yearsOfExperience: 3,
    certified: true,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '8',
    name: 'Express.js',
    level: 88,
    category: SkillCategory.BACKEND,
    description: 'Advanced Express.js API development and middleware',
    iconUrl: '/icons/express.svg',
    yearsOfExperience: 4,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Database Skills
  {
    id: '9',
    name: 'PostgreSQL',
    level: 85,
    category: SkillCategory.DATABASE,
    description: 'Advanced PostgreSQL database design and optimization',
    iconUrl: '/icons/postgresql.svg',
    yearsOfExperience: 3,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '10',
    name: 'Prisma',
    level: 80,
    category: SkillCategory.DATABASE,
    description: 'Type-safe database access with Prisma ORM',
    iconUrl: '/icons/prisma.svg',
    yearsOfExperience: 2,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '11',
    name: 'MongoDB',
    level: 75,
    category: SkillCategory.DATABASE,
    description: 'NoSQL database design and aggregation pipelines',
    iconUrl: '/icons/mongodb.svg',
    yearsOfExperience: 2,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // DevOps Skills
  {
    id: '12',
    name: 'Docker',
    level: 80,
    category: SkillCategory.DEVOPS,
    description: 'Containerization and Docker Compose orchestration',
    iconUrl: '/icons/docker.svg',
    yearsOfExperience: 3,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '13',
    name: 'AWS',
    level: 75,
    category: SkillCategory.DEVOPS,
    description: 'Cloud infrastructure and serverless architecture',
    iconUrl: '/icons/aws.svg',
    yearsOfExperience: 2,
    certified: true,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Mobile Skills
  {
    id: '14',
    name: 'React Native',
    level: 78,
    category: SkillCategory.MOBILE,
    description: 'Cross-platform mobile app development',
    iconUrl: '/icons/react-native.svg',
    yearsOfExperience: 2,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Testing Skills
  {
    id: '15',
    name: 'Jest',
    level: 85,
    category: SkillCategory.TESTING,
    description: 'Unit and integration testing with Jest and React Testing Library',
    iconUrl: '/icons/jest.svg',
    yearsOfExperience: 3,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Tools
  {
    id: '16',
    name: 'Git',
    level: 90,
    category: SkillCategory.TOOLS,
    description: 'Advanced Git workflow and collaboration',
    iconUrl: '/icons/git.svg',
    yearsOfExperience: 5,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },

  // Soft Skills
  {
    id: '17',
    name: 'Problem Solving',
    level: 92,
    category: SkillCategory.SOFT_SKILLS,
    description: 'Complex problem analysis and solution design',
    yearsOfExperience: 5,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '18',
    name: 'Team Leadership',
    level: 85,
    category: SkillCategory.SOFT_SKILLS,
    description: 'Technical team leadership and mentoring',
    yearsOfExperience: 3,
    certified: false,
    featured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  }
]

export const getFeaturedSkills = (): Skill[] => {
  return mockSkills.filter(skill => skill.featured)
}

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return mockSkills.filter(skill => skill.category === category)
}

export const getTopSkills = (limit: number = 10): Skill[] => {
  return mockSkills
    .sort((a, b) => b.level - a.level)
    .slice(0, limit)
}