'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui'

interface ProjectGalleryProps {
  images: string[]
  title: string
  className?: string
}

export function ProjectGallery({ images, title, className = '' }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className={className}>
        <Heading as="h3" className="mb-4">Gallery</Heading>
        <div className="grid gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt={`${title} enlarged view`}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}