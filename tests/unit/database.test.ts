import { describe, it, expect, beforeEach, vi } from 'vitest'
import { projectService, skillService, parseJsonField, stringifyJsonField } from '@/lib/database'
import { ProjectStatus, SkillCategory } from '@/lib/types'

vi.mock('@/lib/db', () => ({
  prisma: {
    project: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    },
    skill: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn()
    },
    $queryRaw: vi.fn()
  }
}))

describe('Database Utilities', () => {
  describe('JSON field utilities', () => {
    it('should parse valid JSON array', () => {
      const jsonString = '["React", "TypeScript", "Next.js"]'
      const result = parseJsonField(jsonString)
      expect(result).toEqual(['React', 'TypeScript', 'Next.js'])
    })

    it('should return empty array for invalid JSON', () => {
      const invalidJson = 'invalid json'
      const result = parseJsonField(invalidJson)
      expect(result).toEqual([])
    })

    it('should stringify array to JSON', () => {
      const array = ['React', 'TypeScript', 'Next.js']
      const result = stringifyJsonField(array)
      expect(result).toBe('["React","TypeScript","Next.js"]')
    })
  })

  describe('Project Service', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should find all projects with default query', async () => {
      const mockProjects = [
        {
          id: '1',
          title: 'Test Project',
          description: 'Test description',
          technologies: '["React", "TypeScript"]',
          images: '[]',
          status: ProjectStatus.COMPLETED,
          featured: true,
          category: 'Web',
          priority: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      const { prisma } = await import('@/lib/db')
      vi.mocked(prisma.project.findMany).mockResolvedValue(mockProjects)

      const result = await projectService.findAll()

      expect(prisma.project.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: [
          { featured: 'desc' },
          { priority: 'desc' },
          { createdAt: 'desc' }
        ],
        take: 10,
        skip: 0
      })

      expect(result).toHaveLength(1)
      expect(result[0].technologies).toEqual(['React', 'TypeScript'])
    })

    it('should find project by id', async () => {
      const mockProject = {
        id: '1',
        title: 'Test Project',
        description: 'Test description',
        technologies: '["React"]',
        images: '[]',
        status: ProjectStatus.COMPLETED,
        featured: true,
        category: 'Web',
        priority: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const { prisma } = await import('@/lib/db')
      vi.mocked(prisma.project.findUnique).mockResolvedValue(mockProject)

      const result = await projectService.findById('1')

      expect(prisma.project.findUnique).toHaveBeenCalledWith({
        where: { id: '1' }
      })

      expect(result).toBeTruthy()
      expect(result?.id).toBe('1')
      expect(result?.technologies).toEqual(['React'])
    })
  })

  describe('Skill Service', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should find all skills with category filter', async () => {
      const mockSkills = [
        {
          id: '1',
          name: 'React',
          level: 5,
          category: SkillCategory.FRONTEND,
          featured: true,
          certified: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      const { prisma } = await import('@/lib/db')
      vi.mocked(prisma.skill.findMany).mockResolvedValue(mockSkills)

      const result = await skillService.findAll({ category: SkillCategory.FRONTEND })

      expect(prisma.skill.findMany).toHaveBeenCalledWith({
        where: { category: SkillCategory.FRONTEND },
        orderBy: [
          { featured: 'desc' },
          { level: 'desc' },
          { name: 'asc' }
        ],
        take: 10,
        skip: 0
      })

      expect(result).toHaveLength(1)
      expect(result[0].category).toBe(SkillCategory.FRONTEND)
    })
  })
})