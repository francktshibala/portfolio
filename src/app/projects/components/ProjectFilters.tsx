'use client'

import { Input, Button } from '@/components/ui'
import { ProjectStatus } from '@/lib/types'

interface ProjectFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedTechnology: string
  onTechnologyChange: (value: string) => void
  selectedStatus: ProjectStatus | ''
  onStatusChange: (value: ProjectStatus | '') => void
  categories: string[]
  technologies: string[]
  onClearFilters: () => void
  hasFilters: boolean
  resultCount: number
}

export function ProjectFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTechnology,
  onTechnologyChange,
  selectedStatus,
  onStatusChange,
  categories,
  technologies,
  onClearFilters,
  hasFilters,
  resultCount
}: ProjectFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-sm"
        />

        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedTechnology}
          onChange={(e) => onTechnologyChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Technologies</option>
          {technologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value as ProjectStatus | '')}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Statuses</option>
          {Object.values(ProjectStatus).map(status => (
            <option key={status} value={status}>
              {status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
            </option>
          ))}
        </select>

        {hasFilters && (
          <Button variant="outline" onClick={onClearFilters}>
            Clear Filters
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Showing {resultCount} project{resultCount !== 1 ? 's' : ''}</span>
        {hasFilters && <span>• Filters applied</span>}
      </div>
    </div>
  )
}