"use client"

import { useState } from "react"
import { MapPin, Search, Filter, Mountain, Star, Thermometer, Calendar, Grid, Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InteractiveMap } from "@/components/ui/interactive-map"
import Link from "next/link"
import { motion } from "framer-motion"
import { destinations } from "@/lib/destinations"

const regions = [
  { id: "all", name: "All Regions", icon: "🗺️" },
  { id: "northwest", name: "Northwest", icon: "⛰️" },
  { id: "central", name: "Central", icon: "🏛️" },
  { id: "southeast", name: "Southeast", icon: "🌾" },
  { id: "southwest", name: "Southwest", icon: "🌴" },
]


export default function DestinationsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = destinations.filter((dest) => {
    const matchesRegion = selectedRegion === "all" || dest.region === selectedRegion
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.nameZh.includes(searchQuery) ||
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesRegion && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">100+ Destinations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Yunnan
            </h1>
            <p className="text-xl opacity-90 mb-8">
              From ancient towns to snow-capped peaks, tropical rainforests to rice terraces
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-8 relative z-10 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">UNESCO Sites</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">550-6740m</div>
              <div className="text-sm text-gray-600">Altitude Range</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8★</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Filters & View Toggle */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Region Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    selectedRegion === region.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{region.icon}</span>
                  <span>{region.name}</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded ${viewMode === "map" ? 'bg-white shadow-sm' : ''}`}
              >
                <Map className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="container mx-auto px-4 py-6">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> destinations found
        </p>
      </section>

      {/* Grid View */}
      {viewMode === "grid" && (
        <>
          {/* Featured Destinations */}
          <section className="container mx-auto px-4 pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6"
            >
              Featured Destinations
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.filter(d => d.featured).map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/destinations/${dest.slug}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${dest.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      {/* Tags */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {dest.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Name Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                        <p className="text-sm opacity-90">{dest.nameZh}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-sm">{dest.rating}</span>
                          <span className="text-xs text-gray-500">({dest.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Mountain className="w-4 h-4" />
                          <span>{dest.altitude}m</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {dest.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs">{dest.bestSeason}</span>
                        </div>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Other Destinations */}
          {filteredDestinations.filter(d => !d.featured).length > 0 && (
            <section className="container mx-auto px-4 pb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6"
              >
                More Destinations
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.filter(d => !d.featured).map((dest, index) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/destinations/${dest.slug}`}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden group h-full bg-white">
                      <div className="relative h-56 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${dest.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="absolute bottom-3 left-4 text-white">
                          <h3 className="text-xl font-bold">{dest.name}</h3>
                          <p className="text-sm opacity-90">{dest.nameZh}</p>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold">{dest.rating}</span>
                            <span className="text-xs text-gray-500">({dest.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Mountain className="w-4 h-4" />
                            <span className="text-xs">{dest.altitude}m</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{dest.description}</p>
                      </CardContent>
                        </Card>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Map View */}
      {viewMode === "map" && (
        <section className="container mx-auto px-4 pb-16">
          <InteractiveMap
            destinations={filteredDestinations.map((dest) => ({
              id: dest.id,
              name: dest.name,
              nameZh: dest.nameZh,
              slug: dest.slug,
              latitude: dest.latitude,
              longitude: dest.longitude,
              rating: dest.rating,
              reviews: dest.reviews,
              image: dest.image,
              description: dest.description,
              altitude: dest.altitude,
            }))}
            initialViewState={{
              latitude: 25.0,
              longitude: 101.0,
              zoom: 7,
            }}
          />
        </section>
      )}

      {filteredDestinations.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 pb-16 text-center"
        >
          <p className="text-gray-500 text-lg">No destinations found. Try a different search or filter.</p>
        </motion.div>
      )}
    </div>
  )
}
