"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { GalleryImage } from "@/lib/realGalleryData"

interface GalleryContextType {
  uploadedImages: GalleryImage[]
  addUploadedImage: (image: GalleryImage) => void
  uploadImage: (imageData: {
    file: File
    title: string
    titleZh: string
    description: string
    location: string
    category: string
  }) => Promise<void>
  isUploading: boolean
  isLoading: boolean
  refreshImages: () => Promise<void>
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined)

export function GalleryProvider({ children }: { children: ReactNode }) {
  const [uploadedImages, setUploadedImages] = useState<GalleryImage[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load images from database on mount
  useEffect(() => {
    refreshImages()
  }, [])

  const refreshImages = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/gallery/images")
      if (response.ok) {
        const data = await response.json()
        setUploadedImages(data.images)
      }
    } catch (error) {
      console.error("Failed to load images:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const addUploadedImage = (image: GalleryImage) => {
    setUploadedImages(prev => [image, ...prev])
  }

  const uploadImage = async (imageData: {
    file: File
    title: string
    titleZh: string
    description: string
    location: string
    category: string
  }) => {
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", imageData.file)
      formData.append("title", imageData.title)
      formData.append("titleZh", imageData.titleZh)
      formData.append("description", imageData.description)
      formData.append("location", imageData.location)
      formData.append("category", imageData.category)

      const response = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const data = await response.json()
      addUploadedImage(data.image)

      // Show success message
      alert("Photo uploaded successfully! 🎉")
    } catch (error) {
      console.error("Upload error:", error)
      alert("Failed to upload photo. Please try again.")
      throw error
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <GalleryContext.Provider
      value={{
        uploadedImages,
        addUploadedImage,
        uploadImage,
        isUploading,
        isLoading,
        refreshImages
      }}
    >
      {children}
    </GalleryContext.Provider>
  )
}

export function useGallery() {
  const context = useContext(GalleryContext)
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryProvider")
  }
  return context
}
