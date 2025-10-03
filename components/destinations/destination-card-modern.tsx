"use client"

import { motion } from "framer-motion"
import { MapPin, Star, Mountain, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface Destination {
  id: number
  name: string
  nameZh: string
  slug: string
  description: string
  altitude: number
  bestSeason: string
  tags: string[]
  rating: number
  reviews: number
  image: string
}

export default function DestinationCardModern({ destination, index }: { destination: Destination; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={`/destinations/${destination.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Image with parallax effect */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {destination.tags.slice(0, 2).map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                  className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Favorite button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault()
                setIsFavorited(!isFavorited)
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-colors hover:bg-white/30"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorited ? 'fill-red-500 text-red-500' : 'text-white'
                }`}
              />
            </motion.button>

            {/* Bottom info on image */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
              <p className="text-sm opacity-90">{destination.nameZh}</p>
            </div>
          </div>

          {/* Content section with glassmorphism */}
          <div className="p-6 space-y-4">
            {/* Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-amber-700">{destination.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({destination.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Mountain className="w-4 h-4" />
                <span className="text-xs">{destination.altitude}m</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {destination.description}
            </p>

            {/* Best season */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Best time:</span>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-700 rounded-lg font-medium">
                {destination.bestSeason}
              </span>
            </div>

            {/* CTA with animated arrow */}
            <motion.div
              className="flex items-center gap-2 text-emerald-600 font-semibold pt-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Explore destination</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 70%)'
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}
