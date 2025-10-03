'use client'

import { useState } from 'react'
import { MapPin, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GalleryImage } from '@/lib/realGalleryData'

interface PhotoGalleryProps {
  images: GalleryImage[]
  columns?: number
}

export default function PhotoGallery({ images, columns = 3 }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const getImageSrc = (image: GalleryImage) => {
    return image.src
  }

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols] || gridCols[3]} gap-4`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-100"
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <img
                src={getImageSrc(image)}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">
                  {image.title}
                  {image.titleZh && <span className="ml-2 text-sm opacity-90">{image.titleZh}</span>}
                </h3>
                {image.location && (
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="w-3 h-3" />
                    <span>{image.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
              {image.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image and details */}
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageSrc(selectedImage)}
              alt={selectedImage.alt}
              className="max-h-[70vh] w-auto object-contain mb-6"
            />

            <div className="text-center text-white max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">
                {selectedImage.title}
                {selectedImage.titleZh && (
                  <span className="ml-3 text-xl opacity-80">{selectedImage.titleZh}</span>
                )}
              </h2>

              <p className="text-gray-300 mb-4">{selectedImage.description}</p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                {selectedImage.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImage.location}</span>
                  </div>
                )}
                {selectedImage.photographer && (
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    <span>{selectedImage.photographer}</span>
                  </div>
                )}
              </div>

              {/* Image counter */}
              <div className="mt-6 text-sm text-gray-400">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
