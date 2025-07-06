'use client'

import { useState, useEffect, useMemo } from 'react'
import { Skill, SkillCategory } from '../types'
import { mockSkills, getFeaturedSkills, getSkillsByCategory, getTopSkills } from '../data/skills'

interface UseSkillsOptions {
  featured?: boolean
  category?: SkillCategory
  topN?: number
  search?: string
}

interface UseSkillsReturn {
  skills: Skill[]
  loading: boolean
  error: string | null
  featuredSkills: Skill[]
  categories: SkillCategory[]
  topSkills: Skill[]
  skillsByCategory: Record<SkillCategory, Skill[]>
}

export const useSkills = (options: UseSkillsOptions = {}): UseSkillsReturn => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load skills')
        setLoading(false)
      }
    }

    loadSkills()
  }, [])

  const filteredSkills = useMemo(() => {
    let result = [...mockSkills]

    if (options.featured) {
      result = getFeaturedSkills()
    }

    if (options.category) {
      result = getSkillsByCategory(options.category)
    }

    if (options.topN) {
      result = getTopSkills(options.topN)
    }

    if (options.search) {
      const searchTerm = options.search.toLowerCase()
      result = result.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm) ||
        (skill.description && skill.description.toLowerCase().includes(searchTerm))
      )
    }

    return result.sort((a, b) => b.level - a.level)
  }, [options])

  const featuredSkills = useMemo(() => getFeaturedSkills(), [])

  const categories = useMemo(() => {
    return Object.values(SkillCategory)
  }, [])

  const topSkills = useMemo(() => getTopSkills(10), [])

  const skillsByCategory = useMemo(() => {
    const categorized: Record<SkillCategory, Skill[]> = {} as Record<SkillCategory, Skill[]>
    
    Object.values(SkillCategory).forEach(category => {
      categorized[category] = getSkillsByCategory(category)
    })
    
    return categorized
  }, [])

  return {
    skills: filteredSkills,
    loading,
    error,
    featuredSkills,
    categories,
    topSkills,
    skillsByCategory
  }
}

export const useSkill = (id: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const skill = useMemo(() => {
    return mockSkills.find(s => s.id === id)
  }, [id])

  useEffect(() => {
    const loadSkill = async () => {
      try {
        setLoading(true)
        setError(null)
        
        await new Promise(resolve => setTimeout(resolve, 100))
        
        if (!skill) {
          setError('Skill not found')
        }
        
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load skill')
        setLoading(false)
      }
    }

    loadSkill()
  }, [skill])

  return {
    skill,
    loading,
    error
  }
}