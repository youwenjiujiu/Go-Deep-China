"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Review {
  id: string
  itemId: string
  itemType: 'destination' | 'experience'
  itemName: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  comment: string
  images?: string[]
  helpful: number
  createdAt: number
  verified: boolean
}

interface ReviewsContextType {
  reviews: Review[]
  addReview: (review: Omit<Review, 'id' | 'createdAt' | 'helpful'>) => void
  getReviewsByItem: (itemId: string, itemType: 'destination' | 'experience') => Review[]
  getAverageRating: (itemId: string, itemType: 'destination' | 'experience') => number
  markHelpful: (reviewId: string) => void
  userHasReviewed: (itemId: string, itemType: 'destination' | 'experience', userId: string) => boolean
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined)

export function ReviewsProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('reviews')
    if (saved) {
      try {
        setReviews(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse reviews:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever reviews change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('reviews', JSON.stringify(reviews))
    }
  }, [reviews, isLoaded])

  const addReview = (review: Omit<Review, 'id' | 'createdAt' | 'helpful'>) => {
    const newReview: Review = {
      ...review,
      id: `review-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: Date.now(),
      helpful: 0,
    }
    setReviews((prev) => [newReview, ...prev])
  }

  const getReviewsByItem = (itemId: string, itemType: 'destination' | 'experience') => {
    return reviews
      .filter((r) => r.itemId === itemId && r.itemType === itemType)
      .sort((a, b) => b.createdAt - a.createdAt)
  }

  const getAverageRating = (itemId: string, itemType: 'destination' | 'experience') => {
    const itemReviews = getReviewsByItem(itemId, itemType)
    if (itemReviews.length === 0) return 0
    const sum = itemReviews.reduce((acc, r) => acc + r.rating, 0)
    return parseFloat((sum / itemReviews.length).toFixed(1))
  }

  const markHelpful = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, helpful: r.helpful + 1 } : r))
    )
  }

  const userHasReviewed = (itemId: string, itemType: 'destination' | 'experience', userId: string) => {
    return reviews.some((r) => r.itemId === itemId && r.itemType === itemType && r.userId === userId)
  }

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        addReview,
        getReviewsByItem,
        getAverageRating,
        markHelpful,
        userHasReviewed,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  )
}

export function useReviews() {
  const context = useContext(ReviewsContext)
  if (!context) {
    throw new Error('useReviews must be used within ReviewsProvider')
  }
  return context
}
