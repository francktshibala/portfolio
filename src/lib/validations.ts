import { z } from 'zod'
import { ProjectStatus, SkillCategory, ExperienceType, ContactStatus } from './types'

export const projectStatusSchema = z.nativeEnum(ProjectStatus)
export const skillCategorySchema = z.nativeEnum(SkillCategory)
export const experienceTypeSchema = z.nativeEnum(ExperienceType)
export const contactStatusSchema = z.nativeEnum(ContactStatus)

export const createProjectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(1, 'Description is required').max(500, 'Description must be less than 500 characters'),
  longDescription: z.string().max(2000, 'Long description must be less than 2000 characters').optional(),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  githubUrl: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  liveUrl: z.string().url('Invalid live URL').optional().or(z.literal('')),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  images: z.array(z.string().url('Invalid image URL')).default([]),
  featured: z.boolean().default(false),
  status: projectStatusSchema.default(ProjectStatus.COMPLETED),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  category: z.string().min(1, 'Category is required'),
  priority: z.number().int().min(0).default(0)
})

export const updateProjectSchema = createProjectSchema.partial().extend({
  id: z.string().min(1, 'ID is required')
})

export const createSkillSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  level: z.number().int().min(1, 'Level must be at least 1').max(5, 'Level must be at most 5'),
  category: skillCategorySchema,
  description: z.string().max(500, 'Description must be less than 500 characters').optional(),
  iconUrl: z.string().url('Invalid icon URL').optional().or(z.literal('')),
  yearsOfExperience: z.number().int().min(0).max(50).optional(),
  certified: z.boolean().default(false),
  featured: z.boolean().default(false)
})

export const updateSkillSchema = createSkillSchema.partial().extend({
  id: z.string().min(1, 'ID is required')
})

export const createExperienceSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  company: z.string().min(1, 'Company is required').max(200, 'Company must be less than 200 characters'),
  location: z.string().max(200, 'Location must be less than 200 characters').optional(),
  description: z.string().min(1, 'Description is required').max(2000, 'Description must be less than 2000 characters'),
  startDate: z.date(),
  endDate: z.date().optional(),
  current: z.boolean().default(false),
  type: experienceTypeSchema,
  logoUrl: z.string().url('Invalid logo URL').optional().or(z.literal('')),
  companyUrl: z.string().url('Invalid company URL').optional().or(z.literal('')),
  achievements: z.array(z.string()).default([])
})

export const updateExperienceSchema = createExperienceSchema.partial().extend({
  id: z.string().min(1, 'ID is required')
})

export const createContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200, 'Subject must be less than 200 characters').optional(),
  message: z.string().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters')
})

export const updateContactSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  status: contactStatusSchema.optional(),
  replied: z.boolean().optional()
})

export const createBlogSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  slug: z.string().min(1, 'Slug is required').max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase, alphanumeric, and hyphen-separated'),
  excerpt: z.string().max(500, 'Excerpt must be less than 500 characters').optional(),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  tags: z.array(z.string()).default([]),
  readTime: z.number().int().min(1).optional()
})

export const updateBlogSchema = createBlogSchema.partial().extend({
  id: z.string().min(1, 'ID is required')
})

export const projectQuerySchema = z.object({
  featured: z.boolean().optional(),
  status: projectStatusSchema.optional(),
  category: z.string().optional(),
  limit: z.number().int().min(1).max(100).default(10),
  offset: z.number().int().min(0).default(0)
})

export const skillQuerySchema = z.object({
  category: skillCategorySchema.optional(),
  featured: z.boolean().optional(),
  limit: z.number().int().min(1).max(100).default(10),
  offset: z.number().int().min(0).default(0)
})

export const experienceQuerySchema = z.object({
  current: z.boolean().optional(),
  type: experienceTypeSchema.optional(),
  limit: z.number().int().min(1).max(100).default(10),
  offset: z.number().int().min(0).default(0)
})

export const contactQuerySchema = z.object({
  status: contactStatusSchema.optional(),
  limit: z.number().int().min(1).max(100).default(10),
  offset: z.number().int().min(0).default(0)
})

export const blogQuerySchema = z.object({
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  tag: z.string().optional(),
  limit: z.number().int().min(1).max(100).default(10),
  offset: z.number().int().min(0).default(0)
})

export type CreateProjectInput = z.infer<typeof createProjectSchema>
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>
export type CreateSkillInput = z.infer<typeof createSkillSchema>
export type UpdateSkillInput = z.infer<typeof updateSkillSchema>
export type CreateExperienceInput = z.infer<typeof createExperienceSchema>
export type UpdateExperienceInput = z.infer<typeof updateExperienceSchema>
export type CreateContactInput = z.infer<typeof createContactSchema>
export type UpdateContactInput = z.infer<typeof updateContactSchema>
export type CreateBlogInput = z.infer<typeof createBlogSchema>
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>
export type ProjectQuery = z.infer<typeof projectQuerySchema>
export type SkillQuery = z.infer<typeof skillQuerySchema>
export type ExperienceQuery = z.infer<typeof experienceQuerySchema>
export type ContactQuery = z.infer<typeof contactQuerySchema>
export type BlogQuery = z.infer<typeof blogQuerySchema>