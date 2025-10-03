"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Star, Clock, DollarSign, Users, MapPin, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/ui/booking-modal"
import { FavoriteButton } from "@/components/ui/favorite-button"
import Link from "next/link"

const categories = [
  { id: "all", name: "All Experiences", icon: "🎯" },
  { id: "cultural", name: "Cultural Immersion", icon: "🏮" },
  { id: "adventure", name: "Outdoor Adventure", icon: "⛰️" },
  { id: "food", name: "Food & Cooking", icon: "🍜" },
  { id: "photography", name: "Photography", icon: "📸" },
  { id: "handicraft", name: "Handicrafts", icon: "🎨" },
  { id: "spiritual", name: "Spiritual", icon: "🙏" },
  { id: "wildlife", name: "Wildlife", icon: "🐘" },
  { id: "tea", name: "Tea & Coffee", icon: "🍵" },
]

const experiences = [
  {
    id: 1,
    title: "Naxi Cultural Walking Tour",
    category: "cultural",
    destination: "Lijiang Old Town",
    description: "Explore ancient streets with a local Naxi guide, visit traditional workshops, learn about Dongba script",
    duration: "3 hours",
    price: 280,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 127,
    groupSize: "2-8 people",
    image: "/images/experiences/naxi-culture.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Bai Tie-Dye Workshop",
    category: "handicraft",
    destination: "Dali Ancient City",
    description: "Learn the ancient Bai art of tie-dyeing with natural indigo dye. Create your own scarf to take home",
    duration: "2 hours",
    price: 180,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 93,
    groupSize: "1-10 people",
    image: "/images/experiences/bai-tiedye.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Tibetan Monastery Experience",
    category: "spiritual",
    destination: "Shangri-La",
    description: "Visit Songzanlin Monastery with a Tibetan guide. Observe morning prayers and enjoy butter tea with monks",
    duration: "4 hours",
    price: 380,
    currency: "CNY",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 156,
    groupSize: "2-6 people",
    image: "/images/experiences/tibetan-monastery.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Tiger Leaping Gorge Trek",
    category: "adventure",
    destination: "Lijiang to Shangri-La",
    description: "2-day trekking adventure through one of the world's deepest gorges with stunning mountain views",
    duration: "2 days",
    price: 850,
    currency: "CNY",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 284,
    groupSize: "4-12 people",
    image: "/images/experiences/tiger-leaping-trek.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Yunnan Coffee Farm Tour",
    category: "tea",
    destination: "Pu'er / Baoshan",
    description: "Visit specialty coffee plantations, learn about processing, and taste award-winning single-origin beans",
    duration: "Half day",
    price: 320,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 68,
    groupSize: "2-8 people",
    image: "/images/experiences/coffee-farm.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Wild Elephant Sanctuary Visit",
    category: "wildlife",
    destination: "Xishuangbanna",
    description: "Observe wild Asian elephants in their natural habitat with expert naturalist guides",
    duration: "Full day",
    price: 580,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 142,
    groupSize: "4-15 people",
    image: "/images/experiences/wild-elephant.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Crossing-Bridge Noodles Cooking Class",
    category: "food",
    destination: "Kunming",
    description: "Master the art of making Yunnan's most famous dish from scratch with a local chef",
    duration: "3 hours",
    price: 220,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 89,
    groupSize: "2-10 people",
    image: "/images/experiences/crossing-bridge-noodles.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Yuanyang Rice Terraces Photography Tour",
    category: "photography",
    destination: "Yuanyang",
    description: "Capture sunrise and sunset at UNESCO rice terraces with a professional photographer guide",
    duration: "2 days",
    price: 1280,
    currency: "CNY",
    difficulty: "Moderate",
    rating: 5.0,
    reviews: 73,
    groupSize: "2-6 people",
    image: "/images/experiences/yuanyang-photography.jpg",
    featured: true,
  },
]

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<"all" | "budget" | "mid" | "premium">("all")
  const [difficulty, setDifficulty] = useState<"all" | "Easy" | "Moderate" | "Challenging">("all")

  const filteredExperiences = experiences.filter((exp) => {
    const matchesCategory = selectedCategory === "all" || exp.category === selectedCategory
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exp.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = priceRange === "all" ||
      (priceRange === "budget" && exp.price < 300) ||
      (priceRange === "mid" && exp.price >= 300 && exp.price < 800) ||
      (priceRange === "premium" && exp.price >= 800)
    const matchesDifficulty = difficulty === "all" || exp.difficulty === difficulty
    return matchesCategory && matchesSearch && matchesPrice && matchesDifficulty
  })

  const handleBooking = (exp: typeof experiences[0]) => {
    setSelectedExperience(exp)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unforgettable Experiences
            </h1>
            <p className="text-xl opacity-90 mb-8">
              From cultural workshops to adventure treks, discover authentic activities that connect you with Yunnan's soul
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="font-medium text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Filters */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredExperiences.length}</span> experiences found
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as any)}
              className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Prices</option>
              <option value="budget">Budget (&lt; ¥300)</option>
              <option value="mid">Mid-range (¥300-800)</option>
              <option value="premium">Premium (¥800+)</option>
            </select>

            {/* Difficulty Filter */}
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging</option>
            </select>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${exp.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {exp.featured && (
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    exp.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    exp.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {exp.difficulty}
                  </span>
                </div>

                {/* Favorite Button */}
                <FavoriteButton
                  id={exp.id.toString()}
                  type="experience"
                  name={exp.title}
                  image={exp.image}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
                  iconClassName="w-5 h-5"
                />

                {/* Destination */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.destination}</span>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{exp.rating}</span>
                    <span className="text-xs text-gray-500">({exp.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-bold">
                    <span>¥{exp.price}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                  {exp.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {exp.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>{exp.groupSize}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/experiences/${exp.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleBooking(exp)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No experiences found. Try a different search or category.</p>
          </motion.div>
        )}
      </section>

      {/* Booking Modal */}
      {selectedExperience && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => {
            setIsBookingModalOpen(false)
            setSelectedExperience(null)
          }}
          item={{
            name: selectedExperience.title,
            price: selectedExperience.price,
            duration: selectedExperience.duration,
            category: selectedExperience.category,
            image: selectedExperience.image,
          }}
          type="experience"
        />
      )}
    </div>
  )
}
