'use client'

import { useState } from 'react'
import { Container, Heading, Text } from '@/components/ui'
import { useProjects } from '@/lib/hooks'
import { ProjectStatus } from '@/lib/types'
import { ProjectCard, ProjectFilters } from './components'

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
          <Heading as="h1" className="text-red-600 mb-4">Error</Heading>
          <Text className="text-gray-600">{error}</Text>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <nav className="mb-6">
        <div className="flex items-center text-sm text-[var(--color-text-secondary)]">
          <a href="/" className="hover:text-[var(--color-text-primary)] transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-[var(--color-text-primary)]">Projects</span>
        </div>
      </nav>

      <div className="mb-12">
        <Heading as="h1" className="mb-4">Projects</Heading>
        <Text size="lg" className="text-[var(--color-text-secondary)] max-w-2xl">
          Explore my portfolio of projects showcasing expertise in modern web development,
          from enterprise applications to creative experiments.
        </Text>
      </div>

      <ProjectFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTechnology={selectedTechnology}
        onTechnologyChange={setSelectedTechnology}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        categories={categories}
        technologies={technologies}
        onClearFilters={clearFilters}
        hasFilters={hasFilters}
        resultCount={projects.length}
      />

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <Heading as="h3" className="text-gray-500 mb-2">No projects found</Heading>
          <Text className="text-gray-400">Try adjusting your search criteria</Text>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </Container>
  )
}