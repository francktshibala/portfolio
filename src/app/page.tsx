'use client'

import { Container, Card, CardHeader, CardContent, Button, Heading, Text, Link, Badge } from '@/components/ui'
import { useProjects, useSkills, useExperience } from '@/lib/hooks'
import Image from 'next/image'

const HeroSection = () => {
  const { currentExperience, totalYears } = useExperience()
  
  return (
    <div className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-secondary-100)] -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={1} className="text-4xl lg:text-6xl font-bold mb-6">
            Full Stack Developer &<br />
            <span className="text-[var(--color-primary-600)]">Digital Craftsman</span>
          </Heading>
          
          <Text size="xl" className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I create exceptional digital experiences with modern technologies. 
            Currently {currentExperience?.title || 'Full Stack Developer'} with {totalYears}+ years 
            of expertise in web development.
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/projects">
              <Button size="lg" variant="primary">
                View My Work
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                About Me
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Available for freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Remote & San Francisco</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const FeaturedProjects = () => {
  const { featuredProjects, loading } = useProjects({ featured: true })
  
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-64 mb-8 mx-auto" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-80 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-12">
        <Heading level={2} className="mb-4">Featured Projects</Heading>
        <Text size="lg" className="text-gray-600">
          A selection of my best work showcasing technical expertise and creativity
        </Text>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {featuredProjects.slice(0, 3).map(project => (
          <Card key={project.id} className="group hover:shadow-xl transition-all duration-300">
            {project.imageUrl && (
              <div className="aspect-video bg-[var(--color-background-secondary)] rounded-t-lg overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            )}
            
            <CardHeader>
              <Heading level={3} className="mb-2">
                <Link href={`/projects/${project.id}`} className="hover:text-[var(--color-primary-600)]">
                  {project.title}
                </Link>
              </Heading>
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" size="sm">{project.category}</Badge>
                {project.featured && (
                  <Badge variant="primary" size="sm">Featured</Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <Text size="sm" className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </Text>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map(tech => (
                  <Badge key={tech} variant="secondary" size="xs">{tech}</Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" size="xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex gap-3 text-sm">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-800)]"
                  >
                    Live Demo →
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  >
                    Code →
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Link href="/projects">
          <Button variant="outline">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}

const SkillsHighlight = () => {
  const { featuredSkills, loading } = useSkills({ featured: true })
  
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6 mx-auto" />
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 w-20 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="text-center">
      <Heading level={3} className="mb-6">Core Technologies</Heading>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {featuredSkills.map(skill => (
          <Badge
            key={skill.id}
            variant="outline"
            className="px-4 py-2 text-sm font-medium hover:bg-[var(--color-primary-50)] transition-colors"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
      <Link href="/about">
        <Button variant="ghost" size="sm">
          View All Skills →
        </Button>
      </Link>
    </div>
  )
}

const Stats = () => {
  const { projects } = useProjects()
  const { totalYears } = useExperience()
  const { skills } = useSkills()
  
  const stats = [
    { label: 'Years Experience', value: `${totalYears}+` },
    { label: 'Projects Completed', value: `${projects.length}+` },
    { label: 'Technologies', value: `${skills.length}+` },
    { label: 'Happy Clients', value: '30+' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <Heading level={2} className="text-3xl text-[var(--color-primary-600)] mb-2">
            {stat.value}
          </Heading>
          <Text size="sm" className="text-[var(--color-text-secondary)]">{stat.label}</Text>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <Container className="py-16">
        <Stats />
      </Container>
      
      <Container className="py-16">
        <FeaturedProjects />
      </Container>
      
      <div className="bg-[var(--color-background-secondary)] py-16">
        <Container>
          <SkillsHighlight />
        </Container>
      </div>
      
      <Container className="py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Heading level={2} className="mb-4">Let's Work Together</Heading>
          <Text size="lg" className="text-[var(--color-text-secondary)] mb-8">
            Have a project in mind? I'd love to help bring your ideas to life with 
            clean code, thoughtful design, and exceptional user experiences.
          </Text>
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Get In Touch
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}