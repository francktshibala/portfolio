'use client'

import { useParams } from 'next/navigation'
import { Container, Heading, Text, Card, CardContent, Badge, Button, Link } from '@/components/ui'
import { useProject } from '@/lib/hooks'
import { ProjectStatus } from '@/lib/types'
import { ProjectTechList, ProjectGallery } from '../components'

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  
  const { project, loading, error } = useProject(id)

  if (loading) {
    return (
      <Container className="py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-96 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-48 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </Container>
    )
  }

  if (error || !project) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <Heading level={1} className="text-red-600 mb-4">Project Not Found</Heading>
          <Text className="text-gray-600 mb-8">
            {error || 'The project you are looking for does not exist.'}
          </Text>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Container>
    )
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date)
  }

  const getDuration = () => {
    if (!project.startDate) return null
    
    const start = new Date(project.startDate)
    const end = project.endDate ? new Date(project.endDate) : new Date()
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    
    if (months < 1) return 'Less than a month'
    if (months === 1) return '1 month'
    if (months < 12) return `${months} months`
    
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
  }

  return (
    <Container className="py-16">
      <div className="mb-8">
        <Link href="/projects" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Projects
        </Link>
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <Heading level={1} className="mb-2">{project.title}</Heading>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{project.category}</Badge>
              <Badge 
                variant={project.status === ProjectStatus.COMPLETED ? 'success' : 
                         project.status === ProjectStatus.IN_PROGRESS ? 'warning' : 'secondary'}
              >
                {project.status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
              </Badge>
              {project.featured && (
                <Badge variant="primary">Featured</Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">View Live Demo</Button>
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">View Source Code</Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {project.imageUrl && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-8">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <ProjectGallery 
            images={project.images} 
            title={project.title}
            className="mb-8"
          />

          <div className="prose max-w-none">
            <Heading level={2} className="mb-4">About This Project</Heading>
            <Text className="text-gray-700 leading-relaxed">
              {project.longDescription || project.description}
            </Text>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <Heading level={3} className="mb-4">Project Details</Heading>
              
              <div className="space-y-4">
                {project.startDate && (
                  <div>
                    <Text size="sm" className="font-medium text-gray-900 mb-1">Timeline</Text>
                    <Text size="sm" className="text-gray-600">
                      {formatDate(project.startDate)}
                      {project.endDate ? ` - ${formatDate(project.endDate)}` : ' - Present'}
                    </Text>
                    {getDuration() && (
                      <Text size="sm" className="text-gray-500">
                        ({getDuration()})
                      </Text>
                    )}
                  </div>
                )}

                <div>
                  <Text size="sm" className="font-medium text-gray-900 mb-2">Status</Text>
                  <Badge 
                    variant={project.status === ProjectStatus.COMPLETED ? 'success' : 
                             project.status === ProjectStatus.IN_PROGRESS ? 'warning' : 'secondary'}
                  >
                    {project.status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                  </Badge>
                </div>

                <div>
                  <Text size="sm" className="font-medium text-gray-900 mb-2">Category</Text>
                  <Text size="sm" className="text-gray-600">{project.category}</Text>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <ProjectTechList technologies={project.technologies} />
            </CardContent>
          </Card>

          {(project.liveUrl || project.githubUrl) && (
            <Card>
              <CardContent className="p-6">
                <Heading level={3} className="mb-4">Links</Heading>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <div>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Live Demo →
                      </Link>
                    </div>
                  )}
                  {project.githubUrl && (
                    <div>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 font-medium"
                      >
                        Source Code →
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Container>
  )
}