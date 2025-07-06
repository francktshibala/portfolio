'use client'

import { useState, useEffect, useMemo } from 'react'
import { Project, ProjectStatus } from '../types'
import { 
  mockProjects, 
  getFeaturedProjects, 
  getProjectsByCategory, 
  getProjectsByTechnology,
  searchProjects,
  getProjectsByStatus,
  projectCategories,
  allTechnologies
} from '../data/projects'

interface UseProjectsOptions {
  featured?: boolean
  category?: string
  technology?: string
  status?: ProjectStatus
  search?: string
}

interface UseProjectsReturn {
  projects: Project[]
  loading: boolean
  error: string | null
  featuredProjects: Project[]
  categories: string[]
  technologies: string[]
  totalCount: number
  hasMore: boolean
  refetch: () => void
}

export const useProjects = (options: UseProjectsOptions = {}): UseProjectsReturn => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
        setLoading(false)
      }
    }

    loadProjects()
  }, [refreshKey])

  const filteredProjects = useMemo(() => {
    let result = [...mockProjects]

    if (options.featured) {
      result = getFeaturedProjects()
    }

    if (options.category) {
      result = result.filter(project => project.category === options.category)
    }

    if (options.technology) {
      result = result.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(options.technology!.toLowerCase())
        )
      )
    }

    if (options.status) {
      result = result.filter(project => project.status === options.status)
    }

    if (options.search) {
      result = searchProjects(options.search)
      
      if (options.featured) {
        result = result.filter(project => project.featured)
      }
      if (options.category) {
        result = result.filter(project => project.category === options.category)
      }
      if (options.technology) {
        result = result.filter(project =>
          project.technologies.some(tech =>
            tech.toLowerCase().includes(options.technology!.toLowerCase())
          )
        )
      }
      if (options.status) {
        result = result.filter(project => project.status === options.status)
      }
    }

    return result.sort((a, b) => a.priority - b.priority)
  }, [options])

  const featuredProjects = useMemo(() => getFeaturedProjects(), [])

  const categories = useMemo(() => projectCategories, [])
  
  const technologies = useMemo(() => allTechnologies, [])

  const refetch = () => {
    setRefreshKey(prev => prev + 1)
  }

  return {
    projects: filteredProjects,
    loading,
    error,
    featuredProjects,
    categories,
    technologies,
    totalCount: mockProjects.length,
    hasMore: false,
    refetch
  }
}

export const useProject = (id: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const project = useMemo(() => {
    return mockProjects.find(p => p.id === id)
  }, [id])

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        if (!project) {
          setError('Project not found')
        }
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project')
        setLoading(false)
      }
    }

    loadProject()
  }, [project])

  return {
    project,
    loading,
    error
  }
}