import { Project, ProjectStatus } from '../types'

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Elite Portfolio System',
    description: 'Modern portfolio website with advanced animations and performance optimization',
    longDescription: 'A comprehensive portfolio system built with Next.js 14, featuring advanced animations, performance optimization, and a complete admin dashboard. Implements server-side rendering, static generation, and dynamic data management.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://portfolio.example.com',
    imageUrl: '/images/projects/portfolio.jpg',
    images: ['/images/projects/portfolio-1.jpg', '/images/projects/portfolio-2.jpg'],
    featured: true,
    status: ProjectStatus.IN_PROGRESS,
    startDate: new Date('2024-01-15'),
    category: 'Web Development',
    priority: 1,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    longDescription: 'A complete e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing via Stripe, and comprehensive admin dashboard for inventory management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://shop.example.com',
    imageUrl: '/images/projects/ecommerce.jpg',
    images: ['/images/projects/ecommerce-1.jpg', '/images/projects/ecommerce-2.jpg'],
    featured: true,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2023-09-01'),
    endDate: new Date('2023-12-15'),
    category: 'Full Stack',
    priority: 2,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    longDescription: 'A comprehensive task management solution featuring real-time collaboration, drag-and-drop interfaces, team management, and advanced filtering capabilities.',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/username/taskapp',
    liveUrl: 'https://tasks.example.com',
    imageUrl: '/images/projects/taskapp.jpg',
    images: ['/images/projects/taskapp-1.jpg'],
    featured: false,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-08-30'),
    category: 'Web Development',
    priority: 3,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-08-30')
  },
  {
    id: '4',
    title: 'Mobile Weather App',
    description: 'React Native weather application with location services and weather alerts',
    longDescription: 'A feature-rich weather application built with React Native, providing accurate weather forecasts, location-based services, weather alerts, and beautiful visualizations.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Weather API', 'AsyncStorage'],
    githubUrl: 'https://github.com/username/weather-app',
    imageUrl: '/images/projects/weather.jpg',
    images: ['/images/projects/weather-1.jpg', '/images/projects/weather-2.jpg'],
    featured: false,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-05-15'),
    category: 'Mobile Development',
    priority: 4,
    createdAt: new Date('2023-03-01'),
    updatedAt: new Date('2023-05-15')
  },
  {
    id: '5',
    title: 'Data Analytics Dashboard',
    description: 'Business intelligence dashboard with interactive charts and real-time data',
    longDescription: 'A comprehensive analytics dashboard providing business intelligence insights through interactive charts, real-time data visualization, and customizable reporting features.',
    technologies: ['Python', 'Flask', 'D3.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/username/analytics-dashboard',
    imageUrl: '/images/projects/analytics.jpg',
    images: ['/images/projects/analytics-1.jpg'],
    featured: true,
    status: ProjectStatus.PLANNING,
    startDate: new Date('2024-06-01'),
    category: 'Data Science',
    priority: 5,
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: '6',
    title: 'AI-Powered Code Review Tool',
    description: 'Intelligent code review assistant using machine learning to identify bugs and suggest improvements',
    longDescription: 'An innovative code review tool that leverages artificial intelligence to analyze code quality, detect potential bugs, and suggest improvements. Features include integration with popular Git platforms, customizable rule sets, and team collaboration features.',
    technologies: ['Python', 'FastAPI', 'OpenAI GPT', 'React', 'Docker', 'GitHub API', 'MongoDB'],
    githubUrl: 'https://github.com/username/ai-code-review',
    liveUrl: 'https://codereview-ai.example.com',
    imageUrl: '/images/projects/ai-code.jpg',
    images: ['/images/projects/ai-code-1.jpg', '/images/projects/ai-code-2.jpg'],
    featured: false,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-05-15'),
    category: 'Machine Learning',
    priority: 6,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-05-15')
  },
  {
    id: '7',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology with cryptographic verification',
    longDescription: 'A decentralized voting system that ensures transparency, security, and immutability using blockchain technology. Features include voter authentication, encrypted ballot casting, and real-time result verification.',
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'MetaMask', 'IPFS'],
    githubUrl: 'https://github.com/username/blockchain-voting',
    liveUrl: 'https://secure-vote-dapp.netlify.app',
    imageUrl: '/images/projects/blockchain.jpg',
    images: ['/images/projects/blockchain-1.jpg', '/images/projects/blockchain-2.jpg'],
    featured: false,
    status: ProjectStatus.COMPLETED,
    startDate: new Date('2023-09-01'),
    endDate: new Date('2023-11-30'),
    category: 'Blockchain',
    priority: 7,
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-11-30')
  },
  {
    id: '8',
    title: 'DevOps Automation Platform',
    description: 'Comprehensive DevOps platform for CI/CD pipeline management and infrastructure automation',
    longDescription: 'A powerful DevOps automation platform that streamlines development workflows through automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring. Features include multi-cloud support, container orchestration, and advanced security scanning.',
    technologies: ['Go', 'Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/username/devops-platform',
    liveUrl: 'https://devops-automation.example.com',
    imageUrl: '/images/projects/devops.jpg',
    images: ['/images/projects/devops-1.jpg', '/images/projects/devops-2.jpg', '/images/projects/devops-3.jpg'],
    featured: true,
    status: ProjectStatus.IN_PROGRESS,
    startDate: new Date('2024-03-01'),
    category: 'DevOps',
    priority: 8,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-07-06')
  }
]

export const getFeaturedProjects = (): Project[] => {
  return mockProjects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return mockProjects.filter(project => project.category === category)
}

export const getProjectsByTechnology = (technology: string): Project[] => {
  return mockProjects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockProjects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.longDescription?.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)) ||
    project.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return mockProjects.filter(project => project.status === status)
}

export const projectCategories = [
  'Web Development',
  'Full Stack',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Blockchain',
  'DevOps',
  'Frontend',
  'Backend'
]

export const allTechnologies = [
  'React',
  'Vue.js',
  'Angular',
  'Next.js',
  'Node.js',
  'Express',
  'Python',
  'Django',
  'FastAPI',
  'Flask',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Tailwind CSS',
  'React Native',
  'Expo',
  'Firebase',
  'AWS',
  'Azure',
  'Docker',
  'Kubernetes',
  'Git',
  'GitHub API',
  'OpenAI GPT',
  'D3.js',
  'Socket.io',
  'Stripe',
  'JWT',
  'Weather API',
  'AsyncStorage',
  'Solidity',
  'Web3.js',
  'Ethereum',
  'IPFS',
  'MetaMask',
  'Go',
  'Terraform',
  'Prometheus',
  'Grafana',
  'Framer Motion',
  'Prisma'
]