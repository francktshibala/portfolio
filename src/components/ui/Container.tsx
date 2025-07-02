'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  center?: boolean
  children: React.ReactNode
}

const containerVariants = {
  size: {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  },
  padding: {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8'
  }
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    size = 'lg', 
    padding = 'md', 
    center = true,
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          containerVariants.size[size],
          containerVariants.padding[padding],
          center && 'mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'