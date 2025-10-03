"use client"

import { useFavorites } from "@/contexts/favorites-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Sparkles, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SavedPage() {
  const { favorites, removeFavorite } = useFavorites()
  const [filter, setFilter] = useState<"all" | "destination" | "experience">("all")

  const filteredFavorites = favorites.filter((f) => {
    if (filter === "all") return true
    return f.type === filter
  })

  const destinationCount = favorites.filter((f) => f.type === "destination").length
  const experienceCount = favorites.filter((f) => f.type === "experience").length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 fill-white" />
              <span className="font-medium">{favorites.length} Saved Items</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Saved Items
            </h1>
            <p className="text-xl opacity-90">
              Keep track of destinations and experiences you love
            </p>
          </div>
        </div>
      </section>

      {/* Stats & Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`p-4 rounded-xl border-2 transition-all ${
                filter === "all"
                  ? "border-pink-600 bg-pink-50"
                  : "border-gray-200 hover:border-pink-300"
              }`}
            >
              <div className="text-2xl font-bold text-pink-600">{favorites.length}</div>
              <div className="text-sm text-gray-600">All Items</div>
            </button>
            <button
              onClick={() => setFilter("destination")}
              className={`p-4 rounded-xl border-2 transition-all ${
                filter === "destination"
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-gray-200 hover:border-emerald-300"
              }`}
            >
              <div className="text-2xl font-bold text-emerald-600">{destinationCount}</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </button>
            <button
              onClick={() => setFilter("experience")}
              className={`p-4 rounded-xl border-2 transition-all ${
                filter === "experience"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-2xl font-bold text-blue-600">{experienceCount}</div>
              <div className="text-sm text-gray-600">Experiences</div>
            </button>
          </div>

          {/* Empty State */}
          {favorites.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No saved items yet</h2>
              <p className="text-gray-600 mb-6">
                Start exploring and save your favorite destinations and experiences
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/destinations">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <MapPin className="mr-2 h-4 w-4" />
                    Browse Destinations
                  </Button>
                </Link>
                <Link href="/experiences">
                  <Button variant="outline">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Browse Experiences
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Favorites Grid */}
          {filteredFavorites.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFavorites.map((item) => (
                <Card key={`${item.type}-${item.id}`} className="overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === "destination"
                          ? "bg-emerald-600 text-white"
                          : "bg-blue-600 text-white"
                      }`}>
                        {item.type === "destination" ? "Destination" : "Experience"}
                      </span>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFavorite(item.id, item.type)}
                      className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-50 transition-colors group/btn"
                    >
                      <Trash2 className="w-4 h-4 text-gray-700 group-hover/btn:text-red-600" />
                    </button>

                    {/* Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg line-clamp-2">{item.name}</h3>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <Link
                      href={item.type === "destination" ? `/destinations/${item.id}` : `/experiences/${item.id}`}
                      className="block"
                    >
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Filtered Empty State */}
          {filteredFavorites.length === 0 && favorites.length > 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600">
                No {filter}s saved yet. Switch to "All Items" to see your other saved items.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
