import { Container, Card, CardHeader, CardContent, Button, Heading, Text, Link, Badge, Avatar, AvatarGroup } from '@/components/ui'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <Container size="lg">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Elite Portfolio System
          </Heading>
          <Text size="lg" color="muted" className="mb-8">
            Next.js 15 + TypeScript + Tailwind CSS + Design System
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card variant="elevated" padding="md">
            <CardHeader>
              <Heading as="h3" size="lg" className="mb-2">
                Foundation Complete
              </Heading>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Text size="sm" color="muted">✅ Project Structure</Text>
                <Text size="sm" color="muted">✅ Dependencies</Text>
                <Text size="sm" color="muted">✅ TypeScript Strict Mode</Text>
                <Text size="sm" color="muted">✅ ESLint + Prettier</Text>
                <Text size="sm" color="muted">✅ Husky Pre-commit Hooks</Text>
                <Text size="sm" color="muted">✅ Testing Framework</Text>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" padding="md">
            <CardHeader>
              <Heading as="h3" size="lg" className="mb-2">
                Design System
              </Heading>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Text size="sm" color="muted">✅ Design Tokens</Text>
                <Text size="sm" color="muted">✅ 8-Point Grid System</Text>
                <Text size="sm" color="muted">✅ Color Palette</Text>
                <Text size="sm" color="muted">✅ Typography Scale</Text>
                <Text size="sm" color="muted">✅ Component Library</Text>
                <Text size="sm" color="muted">✅ Theme Support</Text>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" padding="md">
            <CardHeader>
              <Heading as="h3" size="lg" className="mb-2">
                Components Built
              </Heading>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Text size="sm" color="muted">✅ Button, Input, Card</Text>
                  <Badge variant="success" size="sm">Core</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Text size="sm" color="muted">✅ Modal, Dropdown</Text>
                  <Badge variant="primary" size="sm">Interactive</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Text size="sm" color="muted">✅ Forms (Textarea, Checkbox, Radio)</Text>
                  <Badge variant="secondary" size="sm">Forms</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Text size="sm" color="muted">✅ Toast, Badge, Avatar</Text>
                  <Badge variant="warning" size="sm">UI</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Text size="sm" color="muted">✅ Typography, Link</Text>
                  <Badge variant="outline" size="sm">Text</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card variant="outlined" padding="lg" className="text-center">
          <Heading as="h2" size="2xl" className="mb-4">
            Component Showcase
          </Heading>
          <Text color="muted" className="mb-8">
            Interactive demonstration of our design system components
          </Text>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="primary" size="lg">
              Primary Button
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Button
            </Button>
            <Button variant="outline" size="lg">
              Outline Button
            </Button>
            <Button variant="ghost" size="lg">
              Ghost Button
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#" variant="primary">Primary Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="underline">Underlined Link</Link>
            <Link href="https://github.com" variant="default" external>
              External Link
            </Link>
          </div>

          <div className="mb-8">
            <Heading as="h3" size="lg" className="mb-4">
              Advanced Components
            </Heading>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Text size="sm">Badges:</Text>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-3">
                <Text size="sm">Avatars:</Text>
                <Avatar size="sm" fallback="JD" />
                <Avatar size="md" fallback="AB" />
                <Avatar size="lg" fallback="CD" />
              </div>
              
              <div className="flex items-center gap-3">
                <Text size="sm">Avatar Group:</Text>
                <AvatarGroup max={3}>
                  <Avatar fallback="A" />
                  <Avatar fallback="B" />
                  <Avatar fallback="C" />
                  <Avatar fallback="D" />
                  <Avatar fallback="E" />
                </AvatarGroup>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
              Phase 1 Day 1: Complete
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
              Phase 1 Day 2: Complete
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
              Phase 1 Day 3: Complete
            </span>
            <span className="px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium">
              Phase 1 Day 4: Complete
            </span>
          </div>
          <Text color="muted">
            15+ Components Built • Ready for Day 5: Database & API Setup
          </Text>
        </div>
      </Container>
    </div>
  );
}
