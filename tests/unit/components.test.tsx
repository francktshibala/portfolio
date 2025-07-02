import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button, Input, Card, CardHeader, CardContent, Container, Heading, Text, Link } from '../../src/components/ui'

describe('UI Components', () => {
  describe('Button', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('bg-primary-500')
    })

    it('renders different variants', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button', { name: /secondary/i })
      expect(button).toHaveClass('bg-secondary-500')
    })

    it('shows loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('cursor-wait')
    })
  })

  describe('Input', () => {
    it('renders with label', () => {
      render(<Input label="Username" />)
      const input = screen.getByLabelText(/username/i)
      expect(input).toBeInTheDocument()
    })

    it('shows error state', () => {
      render(<Input error="This field is required" />)
      const errorText = screen.getByText(/this field is required/i)
      expect(errorText).toBeInTheDocument()
      expect(errorText).toHaveClass('text-red-600')
    })

    it('shows helper text', () => {
      render(<Input helperText="Enter your username" />)
      const helperText = screen.getByText(/enter your username/i)
      expect(helperText).toBeInTheDocument()
    })
  })

  describe('Card', () => {
    it('renders with content', () => {
      render(
        <Card>
          <CardHeader>
            <h3>Title</h3>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
        </Card>
      )
      
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('applies variant styles', () => {
      render(<Card variant="elevated" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-md')
    })
  })

  describe('Container', () => {
    it('renders with different sizes', () => {
      render(<Container size="sm" data-testid="container">Content</Container>)
      const container = screen.getByTestId('container')
      expect(container).toHaveClass('max-w-2xl')
    })

    it('centers content by default', () => {
      render(<Container data-testid="container">Content</Container>)
      const container = screen.getByTestId('container')
      expect(container).toHaveClass('mx-auto')
    })
  })

  describe('Heading', () => {
    it('renders correct semantic tag', () => {
      render(<Heading as="h2">Title</Heading>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Title')
    })

    it('applies size and weight classes', () => {
      render(<Heading size="2xl" weight="bold">Title</Heading>)
      const heading = screen.getByRole('heading')
      expect(heading).toHaveClass('text-2xl', 'font-bold')
    })
  })

  describe('Text', () => {
    it('renders with different semantic tags', () => {
      render(<Text as="span">Span text</Text>)
      const text = screen.getByText('Span text')
      expect(text.tagName).toBe('SPAN')
    })

    it('applies color variants', () => {
      render(<Text color="primary">Primary text</Text>)
      const text = screen.getByText('Primary text')
      expect(text).toHaveClass('text-primary-600')
    })
  })

  describe('Link', () => {
    it('renders internal links correctly', () => {
      render(<Link href="/about">About</Link>)
      const link = screen.getByRole('link', { name: /about/i })
      expect(link).toHaveAttribute('href', '/about')
    })

    it('handles external links', () => {
      render(<Link href="https://example.com" external>External</Link>)
      const link = screen.getByRole('link', { name: /external/i })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('shows external icon for external links', () => {
      render(<Link href="https://example.com">External</Link>)
      const link = screen.getByRole('link')
      expect(link.querySelector('svg')).toBeInTheDocument()
    })
  })
})