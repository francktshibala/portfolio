'use client'

import { Container, Heading, Text, Card, CardHeader, CardContent, Badge } from '@/components/ui'
import { useSkills, useExperience } from '@/lib/hooks'
import { SkillCategory } from '@/lib/types'

const SkillProgressBar = ({ skill }: { skill: { name: string; level: number; yearsOfExperience?: number } }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <Text size="sm" className="font-medium">{skill.name}</Text>
      <div className="flex items-center gap-2">
        <Text size="xs" className="text-gray-500">{skill.level}%</Text>
        {skill.yearsOfExperience && (
          <Text size="xs" className="text-gray-400">
            {skill.yearsOfExperience}y
          </Text>
        )}
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
)

const ExperienceTimeline = () => {
  const { experience, loading } = useExperience()

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
      ))}
    </div>
  }

  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={exp.id} className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className={`w-4 h-4 rounded-full ${exp.current ? 'bg-green-500' : 'bg-blue-500'} border-4 border-white shadow`} />
            {index < experience.length - 1 && (
              <div className="w-0.5 h-16 bg-gray-300 mt-2" />
            )}
          </div>
          
          <div className="flex-1 pb-8">
            <div className="flex items-start justify-between mb-2">
              <div>
                <Heading level={4} className="mb-1">{exp.title}</Heading>
                <Text className="font-medium text-blue-600">{exp.company}</Text>
                {exp.location && (
                  <Text size="sm" className="text-gray-500">{exp.location}</Text>
                )}
              </div>
              <div className="text-right">
                <Text size="sm" className="text-gray-600">
                  {new Date(exp.startDate).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  })} - {exp.current ? 'Present' : new Date(exp.endDate!).toLocaleDateString('en-US', { 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </Text>
                {exp.current && (
                  <Badge variant="success" size="sm" className="mt-1">Current</Badge>
                )}
              </div>
            </div>
            
            <Text size="sm" className="text-gray-700 mb-3">{exp.description}</Text>
            
            {exp.achievements.length > 0 && (
              <div>
                <Text size="sm" className="font-medium mb-2">Key Achievements:</Text>
                <ul className="space-y-1">
                  {exp.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  const { skillsByCategory, loading: skillsLoading, totalYears } = useSkills()
  const { totalYears: experienceYears } = useExperience()

  const categoryDisplayNames: Record<SkillCategory, string> = {
    [SkillCategory.FRONTEND]: 'Frontend Development',
    [SkillCategory.BACKEND]: 'Backend Development',
    [SkillCategory.DATABASE]: 'Database & Storage',
    [SkillCategory.DEVOPS]: 'DevOps & Infrastructure',
    [SkillCategory.MOBILE]: 'Mobile Development',
    [SkillCategory.DESIGN]: 'Design & UX',
    [SkillCategory.TESTING]: 'Testing & QA',
    [SkillCategory.TOOLS]: 'Tools & Utilities',
    [SkillCategory.SOFT_SKILLS]: 'Soft Skills'
  }

  const stats = [
    { label: 'Years of Experience', value: `${experienceYears}+` },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies Mastered', value: '20+' },
    { label: 'Happy Clients', value: '30+' }
  ]

  return (
    <Container className="py-16">
      <div className="mb-12">
        <Heading level={1} className="mb-4">About Me</Heading>
        <Text size="lg" className="text-gray-600 max-w-3xl">
          I'm a passionate full-stack developer with over {experienceYears} years of experience 
          creating innovative web solutions. I specialize in modern JavaScript frameworks, 
          scalable backend architectures, and delivering exceptional user experiences.
        </Text>
      </div>

      <div className="grid gap-8 md:grid-cols-4 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <Heading level={2} className="text-3xl text-blue-600 mb-2">
                {stat.value}
              </Heading>
              <Text size="sm" className="text-gray-600">{stat.label}</Text>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Heading level={2} className="mb-6">Professional Journey</Heading>
          <ExperienceTimeline />
        </div>

        <div>
          <Heading level={2} className="mb-6">Skills & Expertise</Heading>
          
          {skillsLoading ? (
            <div className="animate-pulse space-y-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(skillsByCategory)
                .filter(([_, skills]) => skills.length > 0)
                .slice(0, 6)
                .map(([category, skills]) => (
                <div key={category}>
                  <Heading level={3} className="mb-4">
                    {categoryDisplayNames[category as SkillCategory]}
                  </Heading>
                  <div className="space-y-3">
                    {skills
                      .sort((a, b) => b.level - a.level)
                      .slice(0, 4)
                      .map(skill => (
                        <SkillProgressBar key={skill.id} skill={skill} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 p-8 bg-gray-50 rounded-lg">
        <Heading level={2} className="mb-4">My Approach</Heading>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <Heading level={4} className="mb-2 text-blue-600">Clean Code</Heading>
            <Text size="sm" className="text-gray-700">
              I believe in writing maintainable, well-documented code that stands the test of time.
            </Text>
          </div>
          <div>
            <Heading level={4} className="mb-2 text-blue-600">User-Centric</Heading>
            <Text size="sm" className="text-gray-700">
              Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.
            </Text>
          </div>
          <div>
            <Heading level={4} className="mb-2 text-blue-600">Continuous Learning</Heading>
            <Text size="sm" className="text-gray-700">
              Technology evolves rapidly, and I stay current with the latest tools and best practices.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  )
}