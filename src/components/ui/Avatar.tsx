'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

interface AvatarGroupProps {
  children: React.ReactNode
  max?: number
  className?: string
}

const avatarVariants = {
  size: {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl'
  }
}

export const Avatar = ({ 
  src, 
  alt, 
  fallback, 
  size = 'md', 
  className 
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false)
  
  const initials = fallback || alt?.split(' ').map(name => name[0]).join('').slice(0, 2).toUpperCase() || '?'

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        'bg-gray-100 rounded-full overflow-hidden',
        'font-medium text-gray-600',
        'select-none',
        avatarVariants.size[size],
        className
      )}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="leading-none">{initials}</span>
      )}
    </div>
  )
}

export const AvatarGroup = ({ children, max = 5, className }: AvatarGroupProps) => {
  const childrenArray = Array.isArray(children) ? children : [children]
  const visibleChildren = childrenArray.slice(0, max)
  const remainingCount = childrenArray.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="ring-2 ring-white rounded-full">
          <Avatar
            fallback={`+${remainingCount}`}
            className="bg-gray-500 text-white"
          />
        </div>
      )}
    </div>
  )
}