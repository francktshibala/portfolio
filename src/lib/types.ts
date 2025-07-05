export enum ProjectStatus {
  PLANNING = 'PLANNING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED'
}

export enum SkillCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DATABASE = 'DATABASE',
  DEVOPS = 'DEVOPS',
  MOBILE = 'MOBILE',
  DESIGN = 'DESIGN',
  TESTING = 'TESTING',
  TOOLS = 'TOOLS',
  SOFT_SKILLS = 'SOFT_SKILLS'
}

export enum ExperienceType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  FREELANCE = 'FREELANCE',
  INTERNSHIP = 'INTERNSHIP',
  VOLUNTEER = 'VOLUNTEER'
}

export enum ContactStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
  REPLIED = 'REPLIED',
  ARCHIVED = 'ARCHIVED'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  images: string[]
  featured: boolean
  status: ProjectStatus
  startDate?: Date
  endDate?: Date
  category: string
  priority: number
  createdAt: Date
  updatedAt: Date
}

export interface Skill {
  id: string
  name: string
  level: number
  category: SkillCategory
  description?: string
  iconUrl?: string
  yearsOfExperience?: number
  certified: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  description: string
  startDate: Date
  endDate?: Date
  current: boolean
  type: ExperienceType
  logoUrl?: string
  companyUrl?: string
  achievements: string[]
  createdAt: Date
  updatedAt: Date
  skills: Skill[]
}

export interface Contact {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  status: ContactStatus
  replied: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Blog {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  published: boolean
  featured: boolean
  imageUrl?: string
  tags: string[]
  readTime?: number
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

export interface CreateProjectInput {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  images?: string[]
  featured?: boolean
  status?: ProjectStatus
  startDate?: Date
  endDate?: Date
  category: string
  priority?: number
}

export interface UpdateProjectInput extends Partial<CreateProjectInput> {
  id: string
}

export interface CreateSkillInput {
  name: string
  level: number
  category: SkillCategory
  description?: string
  iconUrl?: string
  yearsOfExperience?: number
  certified?: boolean
  featured?: boolean
}

export interface UpdateSkillInput extends Partial<CreateSkillInput> {
  id: string
}

export interface CreateExperienceInput {
  title: string
  company: string
  location?: string
  description: string
  startDate: Date
  endDate?: Date
  current?: boolean
  type: ExperienceType
  logoUrl?: string
  companyUrl?: string
  achievements?: string[]
}

export interface UpdateExperienceInput extends Partial<CreateExperienceInput> {
  id: string
}

export interface CreateContactInput {
  name: string
  email: string
  subject?: string
  message: string
}

export interface UpdateContactInput {
  id: string
  status?: ContactStatus
  replied?: boolean
}

export interface CreateBlogInput {
  title: string
  slug: string
  excerpt?: string
  content: string
  published?: boolean
  featured?: boolean
  imageUrl?: string
  tags?: string[]
  readTime?: number
}

export interface UpdateBlogInput extends Partial<CreateBlogInput> {
  id: string
}