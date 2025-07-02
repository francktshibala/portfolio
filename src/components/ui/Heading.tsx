'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: 'default' | 'muted' | 'primary' | 'secondary'
  children: React.ReactNode
}

const headingVariants = {
  size: {
    xs: 'text-xs leading-4',
    sm: 'text-sm leading-5',
    md: 'text-base leading-6',
    lg: 'text-lg leading-7',
    xl: 'text-xl leading-7',
    '2xl': 'text-2xl leading-8',
    '3xl': 'text-3xl leading-9',
    '4xl': 'text-4xl leading-10',
    '5xl': 'text-5xl leading-none',
    '6xl': 'text-6xl leading-none'
  },
  weight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  },
  color: {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600'
  }
}

const defaultSizeForTag = {
  h1: '4xl' as const,
  h2: '3xl' as const,
  h3: '2xl' as const,
  h4: 'xl' as const,
  h5: 'lg' as const,
  h6: 'md' as const
}

const defaultWeightForTag = {
  h1: 'extrabold' as const,
  h2: 'bold' as const,
  h3: 'bold' as const,
  h4: 'semibold' as const,
  h5: 'semibold' as const,
  h6: 'medium' as const
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ 
    className, 
    as = 'h1', 
    size, 
    weight, 
    color = 'default', 
    children, 
    ...props 
  }, ref) => {
    const Component = as
    const resolvedSize = size || defaultSizeForTag[as]
    const resolvedWeight = weight || defaultWeightForTag[as]

    return (
      <Component
        ref={ref}
        className={cn(
          'tracking-tight',
          headingVariants.size[resolvedSize],
          headingVariants.weight[resolvedWeight],
          headingVariants.color[color],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'