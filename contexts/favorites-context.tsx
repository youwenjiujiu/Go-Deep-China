"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface FavoriteItem {
  id: string
  type: 'destination' | 'experience'
  name: string
  image: string
  addedAt: number
}

interface FavoritesContextType {
  favorites: FavoriteItem[]
  addFavorite: (item: Omit<FavoriteItem, 'addedAt'>) => void
  removeFavorite: (id: string, type: 'destination' | 'experience') => void
  isFavorite: (id: string, type: 'destination' | 'experience') => boolean
  toggleFavorite: (item: Omit<FavoriteItem, 'addedAt'>) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse favorites:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const addFavorite = (item: Omit<FavoriteItem, 'addedAt'>) => {
    const newFavorite: FavoriteItem = {
      ...item,
      addedAt: Date.now(),
    }
    setFavorites((prev) => [...prev, newFavorite])
  }

  const removeFavorite = (id: string, type: 'destination' | 'experience') => {
    setFavorites((prev) => prev.filter((f) => !(f.id === id && f.type === type)))
  }

  const isFavorite = (id: string, type: 'destination' | 'experience') => {
    return favorites.some((f) => f.id === id && f.type === type)
  }

  const toggleFavorite = (item: Omit<FavoriteItem, 'addedAt'>) => {
    if (isFavorite(item.id, item.type)) {
      removeFavorite(item.id, item.type)
    } else {
      addFavorite(item)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}
