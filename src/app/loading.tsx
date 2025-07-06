import { Container } from '@/components/ui'

export default function Loading() {
  return (
    <Container className="py-16">
      <div className="animate-pulse">
        <div className="h-8 bg-[var(--color-background-tertiary)] rounded w-64 mb-6 mx-auto"></div>
        <div className="h-4 bg-[var(--color-background-tertiary)] rounded w-96 mb-8 mx-auto"></div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-[var(--color-background-tertiary)] rounded-lg"></div>
          ))}
        </div>
      </div>
    </Container>
  )
}