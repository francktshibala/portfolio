'use client'

import { useState, useEffect, useMemo } from 'react'
import { Experience, ExperienceType } from '../types'
import { mockExperience, getCurrentExperience, getExperienceByType, getTotalYearsOfExperience } from '../data/experience'

interface UseExperienceOptions {
  type?: ExperienceType
  current?: boolean
  search?: string
}

interface UseExperienceReturn {
  experience: Experience[]
  loading: boolean
  error: string | null
  currentExperience: Experience | undefined
  totalYears: number
  experienceByType: Record<ExperienceType, Experience[]>
}

export const useExperience = (options: UseExperienceOptions = {}): UseExperienceReturn => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadExperience = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load experience')
        setLoading(false)
      }
    }

    loadExperience()
  }, [])

  const filteredExperience = useMemo(() => {
    let result = [...mockExperience]

    if (options.type) {
      result = getExperienceByType(options.type)
    }

    if (options.current !== undefined) {
      result = result.filter(exp => exp.current === options.current)
    }

    if (options.search) {
      const searchTerm = options.search.toLowerCase()
      result = result.filter(exp =>
        exp.title.toLowerCase().includes(searchTerm) ||
        exp.company.toLowerCase().includes(searchTerm) ||
        exp.description.toLowerCase().includes(searchTerm) ||
        exp.achievements.some(achievement => achievement.toLowerCase().includes(searchTerm))
      )
    }

    return result.sort((a, b) => {
      if (a.current && !b.current) return -1
      if (!a.current && b.current) return 1
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    })
  }, [options])

  const currentExperience = useMemo(() => getCurrentExperience(), [])

  const totalYears = useMemo(() => getTotalYearsOfExperience(), [])

  const experienceByType = useMemo(() => {
    const byType: Record<ExperienceType, Experience[]> = {} as Record<ExperienceType, Experience[]>
    
    Object.values(ExperienceType).forEach(type => {
      byType[type] = getExperienceByType(type)
    })
    
    return byType
  }, [])

  return {
    experience: filteredExperience,
    loading,
    error,
    currentExperience,
    totalYears,
    experienceByType
  }
}

export const useExperienceItem = (id: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const experience = useMemo(() => {
    return mockExperience.find(exp => exp.id === id)
  }, [id])

  useEffect(() => {
    const loadExperience = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        if (!experience) {
          setError('Experience not found')
        }
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load experience')
        setLoading(false)
      }
    }

    loadExperience()
  }, [experience])

  return {
    experience,
    loading,
    error
  }
}