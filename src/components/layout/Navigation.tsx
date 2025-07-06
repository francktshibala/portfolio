'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-[var(--z-index-sticky)] bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <Container className="flex items-center justify-between py-4">
        <Link 
          href="/" 
          className="text-xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary-600)] transition-colors duration-[var(--duration-fast)]"
        >
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-[var(--duration-fast)] hover:bg-[var(--color-background-secondary)] ${
                isActive(item.href)
                  ? 'text-[var(--color-primary-600)] bg-[var(--color-primary-50)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--color-primary-600)] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[var(--color-background-secondary)] transition-colors duration-[var(--duration-fast)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)] md:hidden">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-[var(--duration-fast)] ${
                    isActive(item.href)
                      ? 'text-[var(--color-primary-600)] bg-[var(--color-primary-50)] border-r-2 border-[var(--color-primary-600)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}