# Project: Elite Portfolio System

## Tech Stack
- Framework: Next.js 14.2 with App Router
- Language: TypeScript 5.3
- Database: PostgreSQL 15 with Prisma
- Styling: Tailwind CSS + Framer Motion
- Deployment: Vercel

## Architecture Principles
- Follow microservices pattern for scalability
- Use event-driven communication between services
- Implement proper error boundaries everywhere
- Maintain 90%+ test coverage
- Mobile-first responsive design
- Performance budget: <3s load time, 95+ Lighthouse

## Code Standards
- Use ES modules syntax exclusively
- Prefer composition over inheritance
- IMPORTANT: No verbose comments - code should be self-documenting
- YOU MUST: Run tests before committing
- Follow Airbnb TypeScript style guide
- Component files: PascalCase, utilities: camelCase

## Design System Rules
- Use CSS custom properties for theming
- Implement 8-point grid system
- Follow WCAG 2.1 AA accessibility standards
- Animation duration: 200-400ms for micro, 400-800ms for major
- Z-index scale: 10, 20, 30, 40, 50 (no arbitrary values)

## Performance Requirements
- Lazy load all images with blur placeholders
- Code split at route level minimum
- Implement virtual scrolling for lists >50 items
- Cache static assets for 1 year
- Use ISR for project pages

## Testing Strategy
- Unit tests for all utilities
- Integration tests for API routes
- E2E tests for critical user flows
- Visual regression tests for components
- Performance tests for Core Web Vitals

## AI Assistant Guidelines
- Focus on creating reusable, composable components
- Generate comprehensive test suites automatically
- Suggest performance optimizations proactively
- Implement proper error handling without prompting
- Use React Server Components where beneficial