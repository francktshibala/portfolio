'use client'

import { cn } from '@/lib/utils'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  helperText?: string
  error?: string
  indeterminate?: boolean
}

export const Checkbox = ({ 
  className, 
  label, 
  helperText, 
  error, 
  indeterminate = false,
  id,
  ...props 
}: CheckboxProps) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="w-full">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={checkboxId}
            type="checkbox"
            ref={(input) => {
              if (input) input.indeterminate = indeterminate
            }}
            className={cn(
              'w-4 h-4 text-primary-600 bg-white border-gray-300 rounded',
              'focus:ring-primary-500 focus:ring-2 focus:ring-offset-0',
              'disabled:bg-gray-50 disabled:border-gray-200 disabled:cursor-not-allowed',
              'transition-colors duration-200',
              error && 'border-red-300 focus:ring-red-500',
              className
            )}
            {...props}
          />
        </div>
        {label && (
          <div className="ml-3">
            <label
              htmlFor={checkboxId}
              className={cn(
                'text-sm font-medium cursor-pointer',
                error ? 'text-red-900' : 'text-gray-700',
                props.disabled && 'cursor-not-allowed opacity-50'
              )}
            >
              {label}
            </label>
            {(helperText || error) && (
              <p className={cn(
                'mt-1 text-sm',
                error ? 'text-red-600' : 'text-gray-500'
              )}>
                {error || helperText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}