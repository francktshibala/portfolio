'use client'

import { Badge } from '@/components/ui'

interface ProjectTechProps {
  technologies: string[]
  maxVisible?: number
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

export function ProjectTech({ 
  technologies, 
  maxVisible = 4, 
  variant = 'secondary',
  size = 'xs',
  className = ''
}: ProjectTechProps) {
  const visibleTech = technologies.slice(0, maxVisible)
  const remainingCount = technologies.length - maxVisible

  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {visibleTech.map(tech => (
        <Badge key={tech} variant={variant} size={size}>
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant={variant} size={size}>
          +{remainingCount}
        </Badge>
      )}
    </div>
  )
}

interface ProjectTechListProps {
  technologies: string[]
  title?: string
  className?: string
}

export function ProjectTechList({ 
  technologies, 
  title = 'Technologies',
  className = ''
}: ProjectTechListProps) {
  return (
    <div className={className}>
      {title && (
        <h4 className="font-medium text-gray-900 mb-2 text-sm">{title}</h4>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map(tech => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}