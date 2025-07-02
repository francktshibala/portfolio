'use client'

import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
  variant?: 'default' | 'error' | 'success'
}

const textareaVariants = {
  default: [
    'border-gray-300 text-gray-900 placeholder-gray-400',
    'focus:border-primary-500 focus:ring-1 focus:ring-primary-500'
  ].join(' '),
  error: [
    'border-red-300 text-gray-900 placeholder-gray-400',
    'focus:border-red-500 focus:ring-1 focus:ring-red-500'
  ].join(' '),
  success: [
    'border-green-300 text-gray-900 placeholder-gray-400',
    'focus:border-green-500 focus:ring-1 focus:ring-green-500'
  ].join(' ')
}

export const Textarea = ({ 
  className, 
  variant = 'default', 
  label, 
  helperText, 
  error, 
  id,
  rows = 4,
  ...props 
}: TextareaProps) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const showError = error || variant === 'error'
  const showSuccess = variant === 'success'

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          id={textareaId}
          rows={rows}
          className={cn(
            'block w-full px-3 py-2 rounded-md shadow-sm',
            'text-sm border bg-white resize-vertical',
            'transition-colors duration-200',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-offset-0',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            textareaVariants[showError ? 'error' : showSuccess ? 'success' : 'default'],
            className
          )}
          {...props}
        />
        {showError && (
          <div className="absolute top-2 right-2 pointer-events-none">
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        {showSuccess && (
          <div className="absolute top-2 right-2 pointer-events-none">
            <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={cn(
          'mt-1 text-sm',
          error ? 'text-red-600' : 'text-gray-500'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}