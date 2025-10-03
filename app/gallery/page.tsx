'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, MapPin, Calendar, Filter } from 'lucide-react'
import PhotoGallery from '@/components/gallery/PhotoGallery'
import { galleryImages, categories, featuredImages, recentUploads } from '@/lib/realGalleryData'
import UploadModal from '@/components/gallery/UploadModal'
import GuidelinesModal from '@/components/gallery/GuidelinesModal'
import { useGallery } from '@/contexts/gallery-context'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false)
  const [hasReadGuidelines, setHasReadGuidelines] = useState(false)
  const { uploadedImages, uploadImage, isUploading } = useGallery()

  const handleUploadClick = () => {
    if (!hasReadGuidelines) {
      setShowGuidelinesModal(true)
    } else {
      setShowUploadModal(true)
    }
  }

  const handleGuidelinesAccept = () => {
    setHasReadGuidelines(true)
    setShowGuidelinesModal(false)
    setShowUploadModal(true)
  }

  // Combine gallery images with uploaded images
  const allImages = [...uploadedImages, ...galleryImages]

  // Filter images by category
  const filteredImages = selectedCategory
    ? allImages.filter(img => img.category === selectedCategory)
    : showAllImages ? allImages : [...uploadedImages.slice(0, 3), ...featuredImages]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Camera className="w-5 h-5" />
              <span className="font-medium">Photo Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Yunnan Through Images
            </h1>
            <p className="text-xl opacity-90">
              A visual journey through Yunnan's stunning landscapes, vibrant cultures, and unforgettable moments
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <button
            onClick={() => {
              setSelectedCategory(null)
              setShowAllImages(false)
            }}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Reset Filter
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setShowAllImages(true)
              }}
              className={`p-6 bg-white rounded-xl border-2 transition-all group ${
                selectedCategory === category.id
                  ? 'border-indigo-600 shadow-lg'
                  : 'border-gray-200 hover:border-indigo-600 hover:shadow-lg'
              }`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <div className="font-semibold text-gray-900 mb-1">{category.name}</div>
              <div className="text-xs text-gray-500">{category.nameZh}</div>
              <div className="text-sm text-gray-600 mt-1">{category.count} photos</div>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-2"
            >
              {selectedCategory
                ? categories.find(c => c.id === selectedCategory)?.name + ' Photos'
                : showAllImages ? 'All Photos' : 'Featured Photos'}
            </motion.h2>
            <p className="text-gray-600">
              {selectedCategory
                ? `Explore our collection of ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} photography`
                : showAllImages
                ? 'Browse our complete photo collection from Yunnan'
                : 'Curated collection of the best photos from Yunnan'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {filteredImages.length} photos
            </span>
            {!showAllImages && !selectedCategory && (
              <button
                onClick={() => setShowAllImages(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All Photos
              </button>
            )}
          </div>
        </div>

        <PhotoGallery images={filteredImages} columns={3} />
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Photo Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Lijiang', 'Dali', 'Shangri-La', 'Xishuangbanna', 'Kunming', 'Yuanyang', 'Lugu Lake', 'Chuxiong'].map((location) => {
            const locationImages = galleryImages.filter(img => img.location === location)
            return (
              <button
                key={location}
                onClick={() => {
                  // In a real app, this would filter by location
                  setShowAllImages(true)
                }}
                className="relative group overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={locationImages[0]?.src || 'https://via.placeholder.com/400x300'}
                  alt={location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="font-semibold text-lg">{location}</div>
                  <div className="text-sm opacity-90">{locationImages.length} photos</div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Photographer Spotlight */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <Camera className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share Your Yunnan Moments
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of photographers and travelers. Upload your photos and inspire others
            to discover the beauty of Yunnan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUploadClick}
              disabled={isUploading}
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? "Uploading..." : hasReadGuidelines ? "Upload Photos" : "Read Guidelines & Upload"}
            </button>
            {hasReadGuidelines && (
              <button
                onClick={() => setShowGuidelinesModal(true)}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Guidelines Again
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Recent Uploads */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            Recent Uploads
          </motion.h2>
          {uploadedImages.length > 0 && (
            <span className="text-sm text-indigo-600 font-medium">
              {uploadedImages.length} community {uploadedImages.length === 1 ? 'upload' : 'uploads'}
            </span>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {uploadedImages.length > 0 ? (
            uploadedImages.slice(0, 6).map((image) => (
              <div key={image.id} className="aspect-square rounded-lg overflow-hidden group cursor-pointer relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  New
                </div>
              </div>
            ))
          ) : (
            recentUploads.map((image) => (
              <div key={image.id} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Photo Tips */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Photography Tips for Yunnan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl mb-3">🌅</div>
              <h3 className="font-semibold mb-2">Best Time for Photos</h3>
              <p className="text-sm text-gray-600">
                Golden hour at sunrise and sunset provides the best lighting, especially for landscapes and architecture
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Cultural Sensitivity</h3>
              <p className="text-sm text-gray-600">
                Always ask permission before photographing people, especially in ethnic minority villages
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <div className="text-2xl mb-3">📸</div>
              <h3 className="font-semibold mb-2">Must-Capture Moments</h3>
              <p className="text-sm text-gray-600">
                Don't miss sunrise at Yuanyang terraces, blue hour in Lijiang, and festivals in traditional villages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onUpload={async (imageData) => {
            await uploadImage(imageData)
          }}
        />
      )}

      {/* Guidelines Modal */}
      {showGuidelinesModal && (
        <GuidelinesModal
          onClose={() => setShowGuidelinesModal(false)}
          onAccept={!hasReadGuidelines ? handleGuidelinesAccept : undefined}
        />
      )}
    </div>
  )
}