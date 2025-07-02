'use client'

import { forwardRef } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'default' | 'primary' | 'secondary' | 'muted' | 'underline'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  children: React.ReactNode
}

const linkVariants = {
  variant: {
    default: [
      'text-gray-900 transition-colors duration-200',
      'hover:text-primary-600 focus:text-primary-600',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
    ].join(' '),
    primary: [
      'text-primary-600 transition-colors duration-200',
      'hover:text-primary-700 focus:text-primary-700',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
    ].join(' '),
    secondary: [
      'text-secondary-600 transition-colors duration-200',
      'hover:text-secondary-700 focus:text-secondary-700',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2'
    ].join(' '),
    muted: [
      'text-gray-500 transition-colors duration-200',
      'hover:text-gray-700 focus:text-gray-700',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
    ].join(' '),
    underline: [
      'text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors duration-200',
      'hover:text-primary-600 hover:decoration-primary-300',
      'focus:text-primary-600 focus:decoration-primary-300',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
    ].join(' ')
  },
  size: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    href, 
    variant = 'default', 
    size = 'md', 
    external = false,
    children, 
    ...props 
  }, ref) => {
    const isExternalLink = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    
    const linkClassName = cn(
      'inline-flex items-center gap-1',
      'font-medium rounded-sm',
      linkVariants.variant[variant],
      linkVariants.size[size],
      className
    )

    const externalProps = isExternalLink ? {
      target: '_blank',
      rel: 'noopener noreferrer'
    } : {}

    if (isExternalLink) {
      return (
        <a
          ref={ref}
          href={href}
          className={linkClassName}
          {...externalProps}
          {...props}
        >
          {children}
          {external !== false && (
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      )
    }

    const { className: _, ...linkProps } = props
    
    return (
      <NextLink
        ref={ref}
        href={href}
        className={linkClassName}
        {...linkProps}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'