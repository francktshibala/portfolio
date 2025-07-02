'use client'

import { cn } from '@/lib/utils'

interface RadioOption {
  value: string
  label: string
  disabled?: boolean
  helperText?: string
}

interface RadioGroupProps {
  name: string
  options: RadioOption[]
  value?: string
  onChange: (value: string) => void
  label?: string
  error?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  helperText?: string
  error?: string
}

export const Radio = ({ 
  className, 
  label, 
  helperText, 
  error, 
  id,
  ...props 
}: RadioProps) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={radioId}
          type="radio"
          className={cn(
            'w-4 h-4 text-primary-600 bg-white border-gray-300',
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
            htmlFor={radioId}
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
  )
}

export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  className,
  orientation = 'vertical'
}: RadioGroupProps) => {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="mb-3">
          <span className="block text-sm font-medium text-gray-700">
            {label}
          </span>
        </div>
      )}
      <div className={cn(
        'space-y-3',
        orientation === 'horizontal' && 'flex space-x-6 space-y-0'
      )}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            label={option.label}
            helperText={option.helperText}
            disabled={option.disabled}
            error={error}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}