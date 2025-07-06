'use client'

import { Card, CardHeader, CardContent, Badge, Link, Text, Heading } from '@/components/ui'
import { Project, ProjectStatus } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-200 ${className}`}>
      {project.imageUrl && (
        <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Heading level={3} className="line-clamp-2">
            <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
              {project.title}
            </Link>
          </Heading>
          {project.featured && (
            <Badge variant="primary" size="sm">Featured</Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" size="sm">{project.category}</Badge>
          <Badge 
            variant={project.status === ProjectStatus.COMPLETED ? 'success' : 
                     project.status === ProjectStatus.IN_PROGRESS ? 'warning' : 'secondary'}
            size="sm"
          >
            {project.status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Text size="sm" className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </Text>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map(tech => (
              <Badge key={tech} variant="secondary" size="xs">{tech}</Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" size="xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View Live
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              View Code
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}