"use client"

import { Heart } from "lucide-react"
import { useFavorites } from "@/contexts/favorites-context"
import { cn } from "@/lib/utils"

interface FavoriteButtonProps {
  id: string
  type: 'destination' | 'experience'
  name: string
  image: string
  className?: string
  iconClassName?: string
}

export function FavoriteButton({
  id,
  type,
  name,
  image,
  className,
  iconClassName,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(id, type)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite({ id, type, name, image })
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group flex items-center justify-center transition-all",
        className
      )}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={cn(
          "transition-all",
          favorite
            ? "fill-red-500 text-red-500"
            : "text-gray-700 group-hover:text-red-500 group-hover:scale-110",
          iconClassName
        )}
      />
    </button>
  )
}
