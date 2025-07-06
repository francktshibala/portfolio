'use client'

import { useState } from 'react'
import { Container, Heading, Text, Card, CardHeader, CardContent, Input, Badge, Button, Link } from '@/components/ui'
import { useProjects } from '@/lib/hooks'
import { ProjectStatus } from '@/lib/types'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTechnology, setSelectedTechnology] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | ''>('')

  const { projects, loading, error, categories, technologies } = useProjects({
    search: searchTerm || undefined,
    category: selectedCategory || undefined,
    technology: selectedTechnology || undefined,
    status: selectedStatus || undefined
  })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedTechnology('')
    setSelectedStatus('')
  }

  const hasFilters = searchTerm || selectedCategory || selectedTechnology || selectedStatus

  if (loading) {
    return (
      <Container className="py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-8"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <Heading level={1} className="text-red-600 mb-4">Error</Heading>
          <Text className="text-gray-600">{error}</Text>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <div className="mb-12">
        <Heading level={1} className="mb-4">Projects</Heading>
        <Text size="lg" className="text-gray-600 max-w-2xl">
          Explore my portfolio of projects showcasing expertise in modern web development,
          from enterprise applications to creative experiments.
        </Text>
      </div>

      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedTechnology}
            onChange={(e) => setSelectedTechnology(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Technologies</option>
            {technologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as ProjectStatus | '')}
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
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Showing {projects.length} project{projects.length !== 1 ? 's' : ''}</span>
          {hasFilters && <span>• Filters applied</span>}
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <Heading level={3} className="text-gray-500 mb-2">No projects found</Heading>
          <Text className="text-gray-400">Try adjusting your search criteria</Text>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-200">
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
          ))}
        </div>
      )}
    </Container>
  )
}