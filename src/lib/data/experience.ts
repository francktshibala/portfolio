import { Experience, ExperienceType, Skill, SkillCategory } from '../types'

const frontendSkills: Skill[] = [
  {
    id: 'skill-react',
    name: 'React',
    level: 95,
    category: SkillCategory.FRONTEND,
    certified: true,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: 'skill-typescript',
    name: 'TypeScript',
    level: 90,
    category: SkillCategory.FRONTEND,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  }
]

const backendSkills: Skill[] = [
  {
    id: 'skill-nodejs',
    name: 'Node.js',
    level: 90,
    category: SkillCategory.BACKEND,
    certified: false,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  },
  {
    id: 'skill-python',
    name: 'Python',
    level: 85,
    category: SkillCategory.BACKEND,
    certified: true,
    featured: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-07-06')
  }
]

export const mockExperience: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    description: 'Led development of enterprise-scale web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
    startDate: new Date('2022-03-01'),
    current: true,
    type: ExperienceType.FULL_TIME,
    logoUrl: '/images/companies/techcorp.png',
    companyUrl: 'https://techcorp.example.com',
    achievements: [
      'Reduced application load time by 40% through performance optimizations',
      'Led migration from monolith to microservices architecture',
      'Mentored 5 junior developers and improved team productivity by 25%',
      'Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes',
      'Architected real-time notification system handling 1M+ daily events'
    ],
    createdAt: new Date('2022-03-01'),
    updatedAt: new Date('2024-07-06'),
    skills: [...frontendSkills, ...backendSkills]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    description: 'Built core platform features for B2B SaaS product from ground up. Worked closely with product team to deliver user-centric solutions.',
    startDate: new Date('2020-08-01'),
    endDate: new Date('2022-02-28'),
    current: false,
    type: ExperienceType.FULL_TIME,
    logoUrl: '/images/companies/startupxyz.png',
    companyUrl: 'https://startupxyz.example.com',
    achievements: [
      'Developed and launched core product features used by 50+ enterprise clients',
      'Implemented payment processing system handling $2M+ monthly transactions',
      'Built responsive admin dashboard improving operational efficiency by 60%',
      'Created automated testing suite achieving 90% code coverage',
      'Collaborated with UX team to improve user onboarding flow'
    ],
    createdAt: new Date('2020-08-01'),
    updatedAt: new Date('2022-02-28'),
    skills: frontendSkills
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    description: 'Developed high-performance websites and web applications for diverse client portfolio including e-commerce and corporate sites.',
    startDate: new Date('2019-01-15'),
    endDate: new Date('2020-07-30'),
    current: false,
    type: ExperienceType.FULL_TIME,
    logoUrl: '/images/companies/digitalagency.png',
    companyUrl: 'https://digitalagency.example.com',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Improved website performance scores to 90+ on Google Lighthouse',
      'Implemented responsive designs supporting all device types',
      'Collaborated with design team to create pixel-perfect implementations',
      'Reduced client feedback cycles by 30% through better communication'
    ],
    createdAt: new Date('2019-01-15'),
    updatedAt: new Date('2020-07-30'),
    skills: [frontendSkills[0]]
  },
  {
    id: '4',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    description: 'Provided web development services to small businesses and startups. Specialized in creating modern, responsive websites and e-commerce solutions.',
    startDate: new Date('2018-06-01'),
    endDate: new Date('2018-12-31'),
    current: false,
    type: ExperienceType.FREELANCE,
    achievements: [
      'Completed 25+ freelance projects with 100% client satisfaction',
      'Specialized in WordPress and custom PHP development',
      'Built e-commerce solutions resulting in 40% increase in client sales',
      'Managed all aspects of client relationships and project delivery',
      'Developed efficient workflow reducing project delivery time by 25%'
    ],
    createdAt: new Date('2018-06-01'),
    updatedAt: new Date('2018-12-31'),
    skills: []
  },
  {
    id: '5',
    title: 'Junior Web Developer',
    company: 'WebDev Studio',
    location: 'Austin, TX',
    description: 'Entry-level position focusing on frontend development and learning modern web technologies. Supported senior developers on client projects.',
    startDate: new Date('2017-09-01'),
    endDate: new Date('2018-05-31'),
    current: false,
    type: ExperienceType.FULL_TIME,
    logoUrl: '/images/companies/webdevstudio.png',
    companyUrl: 'https://webdevstudio.example.com',
    achievements: [
      'Learned React, JavaScript ES6+, and modern development practices',
      'Contributed to 10+ client projects under senior developer guidance',
      'Improved HTML/CSS skills and responsive design principles',
      'Participated in code reviews and team development processes',
      'Received "Most Improved Developer" award after 6 months'
    ],
    createdAt: new Date('2017-09-01'),
    updatedAt: new Date('2018-05-31'),
    skills: []
  },
  {
    id: '6',
    title: 'Web Development Intern',
    company: 'Innovation Labs',
    location: 'Boston, MA',
    description: 'Summer internship focused on learning web development fundamentals and working on internal tools and prototypes.',
    startDate: new Date('2017-06-01'),
    endDate: new Date('2017-08-31'),
    current: false,
    type: ExperienceType.INTERNSHIP,
    logoUrl: '/images/companies/innovationlabs.png',
    achievements: [
      'Built internal tool for project management used by 20+ team members',
      'Learned HTML, CSS, JavaScript, and basic backend concepts',
      'Participated in daily standups and agile development process',
      'Received full-time job offer upon internship completion',
      'Completed 3 prototype projects demonstrating technical growth'
    ],
    createdAt: new Date('2017-06-01'),
    updatedAt: new Date('2017-08-31'),
    skills: []
  }
]

export const getCurrentExperience = (): Experience | undefined => {
  return mockExperience.find(exp => exp.current)
}

export const getExperienceByType = (type: ExperienceType): Experience[] => {
  return mockExperience.filter(exp => exp.type === type)
}

export const getTotalYearsOfExperience = (): number => {
  const now = new Date()
  let totalMonths = 0
  
  mockExperience.forEach(exp => {
    const endDate = exp.endDate || now
    const months = (endDate.getFullYear() - exp.startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - exp.startDate.getMonth())
    totalMonths += months
  })
  
  return Math.round(totalMonths / 12 * 10) / 10
}