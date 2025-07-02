'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'muted' | 'subtle' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  align?: 'left' | 'center' | 'right' | 'justify'
  children: React.ReactNode
}

const textVariants = {
  size: {
    xs: 'text-xs leading-4',
    sm: 'text-sm leading-5',
    md: 'text-base leading-6',
    lg: 'text-lg leading-7',
    xl: 'text-xl leading-7'
  },
  weight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  },
  color: {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    subtle: 'text-gray-500',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  },
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  }
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    as = 'p', 
    size = 'md', 
    weight = 'normal', 
    color = 'default',
    align = 'left',
    children, 
    ...props 
  }, ref) => {
    const Component = as

    return (
      <Component
        ref={ref}
        className={cn(
          textVariants.size[size],
          textVariants.weight[weight],
          textVariants.color[color],
          textVariants.align[align],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'