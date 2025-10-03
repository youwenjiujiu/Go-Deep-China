"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingStarsProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  interactive?: boolean
  onRatingChange?: (rating: number) => void
  showNumber?: boolean
  className?: string
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRatingChange,
  showNumber = false,
  className,
}: RatingStarsProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const handleClick = (index: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(index + 1)
    }
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < Math.floor(rating)
        const isHalf = index < rating && index >= Math.floor(rating)

        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={!interactive}
            className={cn(
              "relative",
              interactive && "cursor-pointer hover:scale-110 transition-transform"
            )}
            type="button"
          >
            {isHalf ? (
              <div className="relative">
                <Star className={cn(sizeClasses[size], "text-gray-300")} />
                <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                  <Star className={cn(sizeClasses[size], "fill-yellow-400 text-yellow-400")} />
                </div>
              </div>
            ) : (
              <Star
                className={cn(
                  sizeClasses[size],
                  isFilled
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                )}
              />
            )}
          </button>
        )
      })}
      {showNumber && (
        <span className="text-sm font-semibold text-gray-700 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
