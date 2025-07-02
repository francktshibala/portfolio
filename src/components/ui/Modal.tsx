'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
}

interface ModalHeaderProps {
  className?: string
  children: React.ReactNode
}

interface ModalContentProps {
  className?: string
  children: React.ReactNode
}

interface ModalFooterProps {
  className?: string
  children: React.ReactNode
}

const modalVariants = {
  size: {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }
}

export const Modal = ({ 
  open, 
  onClose, 
  size = 'md', 
  className, 
  children 
}: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        className={cn(
          'relative w-full mx-4 bg-white rounded-lg shadow-xl',
          'animate-in fade-in-0 zoom-in-95 duration-200',
          modalVariants.size[size],
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  )
}

export const ModalHeader = ({ className, children }: ModalHeaderProps) => {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-200', className)}>
      {children}
    </div>
  )
}

export const ModalContent = ({ className, children }: ModalContentProps) => {
  return (
    <div className={cn('px-6 py-4', className)}>
      {children}
    </div>
  )
}

export const ModalFooter = ({ className, children }: ModalFooterProps) => {
  return (
    <div className={cn('px-6 py-4 border-t border-gray-200 flex justify-end gap-3', className)}>
      {children}
    </div>
  )
}