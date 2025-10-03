"use client"

import { useState } from "react"
import { ThumbsUp, VerifiedIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RatingStars } from "@/components/ui/rating-stars"
import { ReviewModal } from "@/components/ui/review-modal"
import { useReviews } from "@/contexts/reviews-context"
import { useSession } from "next-auth/react"

interface ReviewsSectionProps {
  itemId: string
  itemType: 'destination' | 'experience'
  itemName: string
}

export function ReviewsSection({ itemId, itemType, itemName }: ReviewsSectionProps) {
  const { data: session } = useSession()
  const { getReviewsByItem, getAverageRating, markHelpful, userHasReviewed } = useReviews()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sortBy, setSortBy] = useState<"recent" | "highest" | "helpful">("recent")

  const reviews = getReviewsByItem(itemId, itemType)
  const averageRating = getAverageRating(itemId, itemType)
  const hasReviewed = session?.user?.email ? userHasReviewed(itemId, itemType, session.user.email) : false

  // Sort reviews
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") return b.createdAt - a.createdAt
    if (sortBy === "highest") return b.rating - a.rating
    if (sortBy === "helpful") return b.helpful - a.helpful
    return 0
  })

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((r) => r.rating === rating).length
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0
    return { rating, count, percentage }
  })

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className="space-y-8">
      {/* Header & Write Review */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Reviews & Ratings</h2>
          {reviews.length > 0 && (
            <div className="flex items-center gap-3">
              <RatingStars rating={averageRating} showNumber size="lg" />
              <span className="text-sm text-gray-600">
                ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
              </span>
            </div>
          )}
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700"
          disabled={hasReviewed}
        >
          {hasReviewed ? "Already Reviewed" : "Write a Review"}
        </Button>
      </div>

      {/* Rating Distribution */}
      {reviews.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-sm font-medium">{item.rating}</span>
                    <RatingStars rating={1} maxRating={1} size="sm" />
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sort Options */}
      {reviews.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          {[
            { value: "recent", label: "Most Recent" },
            { value: "highest", label: "Highest Rated" },
            { value: "helpful", label: "Most Helpful" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSortBy(option.value as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortBy === option.value
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {sortedReviews.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-gray-600 mb-4">No reviews yet. Be the first to share your experience!</p>
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
              >
                Write the First Review
              </Button>
            </CardContent>
          </Card>
        ) : (
          sortedReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                {/* User Info & Rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {review.userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{review.userName}</span>
                        {review.verified && (
                          <VerifiedIcon className="w-4 h-4 text-blue-500 fill-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{formatDate(review.createdAt)}</p>
                    </div>
                  </div>
                  <RatingStars rating={review.rating} size="sm" />
                </div>

                {/* Review Content */}
                <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>

                {/* Helpful Button */}
                <button
                  onClick={() => markHelpful(review.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemId={itemId}
        itemType={itemType}
        itemName={itemName}
      />
    </div>
  )
}
