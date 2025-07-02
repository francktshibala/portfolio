'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

const buttonVariants = {
  variant: {
    primary: [
      'bg-primary-500 text-white shadow-sm',
      'hover:bg-primary-600 active:bg-primary-700',
      'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed'
    ].join(' '),
    secondary: [
      'bg-secondary-500 text-white shadow-sm',
      'hover:bg-secondary-600 active:bg-secondary-700',
      'focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2',
      'disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed'
    ].join(' '),
    outline: [
      'border border-gray-300 bg-white text-gray-900 shadow-sm',
      'hover:bg-gray-50 active:bg-gray-100',
      'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed'
    ].join(' '),
    ghost: [
      'text-gray-900 bg-transparent',
      'hover:bg-gray-100 active:bg-gray-200',
      'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      'disabled:text-gray-500 disabled:cursor-not-allowed'
    ].join(' ')
  },
  size: {
    sm: 'px-3 py-1.5 text-sm font-medium rounded-md h-8',
    md: 'px-4 py-2 text-sm font-medium rounded-md h-10',
    lg: 'px-6 py-3 text-base font-medium rounded-lg h-12'
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium transition-all duration-200',
          'focus:outline-none focus-visible:ring-offset-background',
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          loading && 'cursor-wait opacity-70',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'