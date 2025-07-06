import { Container, Heading, Text, Button } from '@/components/ui'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <Heading as="h1" className="text-6xl font-bold text-[var(--color-primary-600)] mb-4">
            404
          </Heading>
          <Heading as="h2" className="mb-4">
            Page Not Found
          </Heading>
          <Text size="lg" className="text-[var(--color-text-secondary)] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </Text>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="primary">
              Go Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export const metadata = {
  title: '404 - Page Not Found - Elite Portfolio',
  description: 'The page you are looking for could not be found.',
}