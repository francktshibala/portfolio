import { prisma } from './db'
import { 
  ProjectStatus, 
  SkillCategory, 
  ExperienceType, 
  ContactStatus,
  type Project,
  type Skill,
  type Experience,
  type Contact,
  type Blog
} from './types'

export class DatabaseError extends Error {
  constructor(message: string, public readonly operation: string) {
    super(message)
    this.name = 'DatabaseError'
  }
}

export const parseJsonField = (jsonString: string): any[] => {
  try {
    const parsed = JSON.parse(jsonString)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const stringifyJsonField = (array: any[]): string => {
  return JSON.stringify(array)
}

export const transformProjectFromDb = (dbProject: any): Project => ({
  ...dbProject,
  technologies: parseJsonField(dbProject.technologies),
  images: parseJsonField(dbProject.images),
  status: dbProject.status as ProjectStatus
})

export const transformSkillFromDb = (dbSkill: any): Skill => ({
  ...dbSkill,
  category: dbSkill.category as SkillCategory
})

export const transformExperienceFromDb = (dbExperience: any): Experience => ({
  ...dbExperience,
  achievements: parseJsonField(dbExperience.achievements),
  type: dbExperience.type as ExperienceType,
  skills: dbExperience.skills?.map(transformSkillFromDb) || []
})

export const transformContactFromDb = (dbContact: any): Contact => ({
  ...dbContact,
  status: dbContact.status as ContactStatus
})

export const transformBlogFromDb = (dbBlog: any): Blog => ({
  ...dbBlog,
  tags: parseJsonField(dbBlog.tags)
})

export const projectService = {
  async findAll(query: {
    featured?: boolean
    status?: ProjectStatus
    category?: string
    limit?: number
    offset?: number
  } = {}) {
    try {
      const { featured, status, category, limit = 10, offset = 0 } = query
      
      const projects = await prisma.project.findMany({
        where: {
          ...(featured !== undefined && { featured }),
          ...(status && { status }),
          ...(category && { category })
        },
        orderBy: [
          { featured: 'desc' },
          { priority: 'desc' },
          { createdAt: 'desc' }
        ],
        take: limit,
        skip: offset
      })
      
      return projects.map(transformProjectFromDb)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch projects: ${error}`, 'findAll')
    }
  },

  async findById(id: string) {
    try {
      const project = await prisma.project.findUnique({
        where: { id }
      })
      
      if (!project) return null
      return transformProjectFromDb(project)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch project: ${error}`, 'findById')
    }
  },

  async create(data: any) {
    try {
      const project = await prisma.project.create({
        data: {
          ...data,
          technologies: stringifyJsonField(data.technologies || []),
          images: stringifyJsonField(data.images || [])
        }
      })
      
      return transformProjectFromDb(project)
    } catch (error) {
      throw new DatabaseError(`Failed to create project: ${error}`, 'create')
    }
  },

  async update(id: string, data: any) {
    try {
      const project = await prisma.project.update({
        where: { id },
        data: {
          ...data,
          ...(data.technologies && { technologies: stringifyJsonField(data.technologies) }),
          ...(data.images && { images: stringifyJsonField(data.images) })
        }
      })
      
      return transformProjectFromDb(project)
    } catch (error) {
      throw new DatabaseError(`Failed to update project: ${error}`, 'update')
    }
  },

  async delete(id: string) {
    try {
      await prisma.project.delete({
        where: { id }
      })
    } catch (error) {
      throw new DatabaseError(`Failed to delete project: ${error}`, 'delete')
    }
  }
}

export const skillService = {
  async findAll(query: {
    category?: SkillCategory
    featured?: boolean
    limit?: number
    offset?: number
  } = {}) {
    try {
      const { category, featured, limit = 10, offset = 0 } = query
      
      const skills = await prisma.skill.findMany({
        where: {
          ...(category && { category }),
          ...(featured !== undefined && { featured })
        },
        orderBy: [
          { featured: 'desc' },
          { level: 'desc' },
          { name: 'asc' }
        ],
        take: limit,
        skip: offset
      })
      
      return skills.map(transformSkillFromDb)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch skills: ${error}`, 'findAll')
    }
  },

  async findById(id: string) {
    try {
      const skill = await prisma.skill.findUnique({
        where: { id }
      })
      
      if (!skill) return null
      return transformSkillFromDb(skill)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch skill: ${error}`, 'findById')
    }
  },

  async create(data: any) {
    try {
      const skill = await prisma.skill.create({
        data
      })
      
      return transformSkillFromDb(skill)
    } catch (error) {
      throw new DatabaseError(`Failed to create skill: ${error}`, 'create')
    }
  },

  async update(id: string, data: any) {
    try {
      const skill = await prisma.skill.update({
        where: { id },
        data
      })
      
      return transformSkillFromDb(skill)
    } catch (error) {
      throw new DatabaseError(`Failed to update skill: ${error}`, 'update')
    }
  },

  async delete(id: string) {
    try {
      await prisma.skill.delete({
        where: { id }
      })
    } catch (error) {
      throw new DatabaseError(`Failed to delete skill: ${error}`, 'delete')
    }
  }
}

export const experienceService = {
  async findAll(query: {
    current?: boolean
    type?: ExperienceType
    limit?: number
    offset?: number
  } = {}) {
    try {
      const { current, type, limit = 10, offset = 0 } = query
      
      const experiences = await prisma.experience.findMany({
        where: {
          ...(current !== undefined && { current }),
          ...(type && { type })
        },
        orderBy: [
          { current: 'desc' },
          { startDate: 'desc' }
        ],
        take: limit,
        skip: offset
      })
      
      return experiences.map(transformExperienceFromDb)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch experiences: ${error}`, 'findAll')
    }
  },

  async findById(id: string) {
    try {
      const experience = await prisma.experience.findUnique({
        where: { id }
      })
      
      if (!experience) return null
      return transformExperienceFromDb(experience)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch experience: ${error}`, 'findById')
    }
  },

  async create(data: any) {
    try {
      const experience = await prisma.experience.create({
        data: {
          ...data,
          achievements: stringifyJsonField(data.achievements || [])
        }
      })
      
      return transformExperienceFromDb(experience)
    } catch (error) {
      throw new DatabaseError(`Failed to create experience: ${error}`, 'create')
    }
  },

  async update(id: string, data: any) {
    try {
      const experience = await prisma.experience.update({
        where: { id },
        data: {
          ...data,
          ...(data.achievements && { achievements: stringifyJsonField(data.achievements) })
        }
      })
      
      return transformExperienceFromDb(experience)
    } catch (error) {
      throw new DatabaseError(`Failed to update experience: ${error}`, 'update')
    }
  },

  async delete(id: string) {
    try {
      await prisma.experience.delete({
        where: { id }
      })
    } catch (error) {
      throw new DatabaseError(`Failed to delete experience: ${error}`, 'delete')
    }
  }
}

export const contactService = {
  async findAll(query: {
    status?: ContactStatus
    limit?: number
    offset?: number
  } = {}) {
    try {
      const { status, limit = 10, offset = 0 } = query
      
      const contacts = await prisma.contact.findMany({
        where: {
          ...(status && { status })
        },
        orderBy: [
          { createdAt: 'desc' }
        ],
        take: limit,
        skip: offset
      })
      
      return contacts.map(transformContactFromDb)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch contacts: ${error}`, 'findAll')
    }
  },

  async findById(id: string) {
    try {
      const contact = await prisma.contact.findUnique({
        where: { id }
      })
      
      if (!contact) return null
      return transformContactFromDb(contact)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch contact: ${error}`, 'findById')
    }
  },

  async create(data: any) {
    try {
      const contact = await prisma.contact.create({
        data
      })
      
      return transformContactFromDb(contact)
    } catch (error) {
      throw new DatabaseError(`Failed to create contact: ${error}`, 'create')
    }
  },

  async update(id: string, data: any) {
    try {
      const contact = await prisma.contact.update({
        where: { id },
        data
      })
      
      return transformContactFromDb(contact)
    } catch (error) {
      throw new DatabaseError(`Failed to update contact: ${error}`, 'update')
    }
  },

  async delete(id: string) {
    try {
      await prisma.contact.delete({
        where: { id }
      })
    } catch (error) {
      throw new DatabaseError(`Failed to delete contact: ${error}`, 'delete')
    }
  }
}

export const blogService = {
  async findAll(query: {
    published?: boolean
    featured?: boolean
    tag?: string
    limit?: number
    offset?: number
  } = {}) {
    try {
      const { published, featured, tag, limit = 10, offset = 0 } = query
      
      const blogs = await prisma.blog.findMany({
        where: {
          ...(published !== undefined && { published }),
          ...(featured !== undefined && { featured }),
          ...(tag && { tags: { contains: tag } })
        },
        orderBy: [
          { featured: 'desc' },
          { publishedAt: 'desc' },
          { createdAt: 'desc' }
        ],
        take: limit,
        skip: offset
      })
      
      return blogs.map(transformBlogFromDb)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch blogs: ${error}`, 'findAll')
    }
  },

  async findBySlug(slug: string) {
    try {
      const blog = await prisma.blog.findUnique({
        where: { slug }
      })
      
      if (!blog) return null
      return transformBlogFromDb(blog)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch blog: ${error}`, 'findBySlug')
    }
  },

  async findById(id: string) {
    try {
      const blog = await prisma.blog.findUnique({
        where: { id }
      })
      
      if (!blog) return null
      return transformBlogFromDb(blog)
    } catch (error) {
      throw new DatabaseError(`Failed to fetch blog: ${error}`, 'findById')
    }
  },

  async create(data: any) {
    try {
      const blog = await prisma.blog.create({
        data: {
          ...data,
          tags: stringifyJsonField(data.tags || []),
          ...(data.published && { publishedAt: new Date() })
        }
      })
      
      return transformBlogFromDb(blog)
    } catch (error) {
      throw new DatabaseError(`Failed to create blog: ${error}`, 'create')
    }
  },

  async update(id: string, data: any) {
    try {
      const blog = await prisma.blog.update({
        where: { id },
        data: {
          ...data,
          ...(data.tags && { tags: stringifyJsonField(data.tags) }),
          ...(data.published && { publishedAt: new Date() })
        }
      })
      
      return transformBlogFromDb(blog)
    } catch (error) {
      throw new DatabaseError(`Failed to update blog: ${error}`, 'update')
    }
  },

  async delete(id: string) {
    try {
      await prisma.blog.delete({
        where: { id }
      })
    } catch (error) {
      throw new DatabaseError(`Failed to delete blog: ${error}`, 'delete')
    }
  }
}

export const databaseHealthCheck = async () => {
  try {
    await prisma.$queryRaw`SELECT 1`
    return { healthy: true, message: 'Database connection is healthy' }
  } catch (error) {
    return { healthy: false, message: `Database connection failed: ${error}` }
  }
}