"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, Filter, Search, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const festivals = [
  {
    id: 1,
    name: "Water Splashing Festival",
    nameZh: "泼水节",
    ethnicGroup: "Dai",
    month: "April",
    date: "April 13-15",
    type: "fixed",
    location: ["Xishuangbanna", "Dehong"],
    description: "The Dai New Year celebration where people splash water to wash away bad luck and pray for good fortune",
    duration: "3 days",
    activities: ["Water splashing", "Dragon boat racing", "Peacock dance", "Lantern floating"],
    image: "💧",
    color: "from-blue-400 to-cyan-500",
    featured: true,
    popularity: 5,
  },
  {
    id: 2,
    name: "Torch Festival",
    nameZh: "火把节",
    ethnicGroup: "Yi",
    month: "July",
    date: "Late July (Lunar 6/24)",
    type: "lunar",
    location: ["Chuxiong", "Shilin", "Various Yi regions"],
    description: "Yi people's most important festival with torch processions, wrestling, horse racing, and bullfighting",
    duration: "3 days",
    activities: ["Torch processions", "Wrestling", "Horse racing", "Bullfighting", "Dancing"],
    image: "🔥",
    color: "from-red-400 to-orange-500",
    featured: true,
    popularity: 5,
  },
  {
    id: 3,
    name: "March Fair",
    nameZh: "三月街",
    ethnicGroup: "Bai",
    month: "April",
    date: "Late April (Lunar 3/15)",
    type: "lunar",
    location: ["Dali Ancient City"],
    description: "One of China's oldest trade fairs dating back over 1000 years with cultural performances and markets",
    duration: "7-10 days",
    activities: ["Horse racing", "Handicraft fair", "Traditional opera", "Archery", "Wrestling"],
    image: "🎨",
    color: "from-purple-400 to-pink-500",
    featured: true,
    popularity: 4,
  },
  {
    id: 4,
    name: "Sanduo Festival",
    nameZh: "三朵节",
    ethnicGroup: "Naxi",
    month: "February",
    date: "February 8 (Lunar 2/8)",
    type: "lunar",
    location: ["Lijiang", "Jade Dragon Snow Mountain"],
    description: "Celebrating the Naxi guardian deity Sanduo with offerings, music, and mountain pilgrimages",
    duration: "1 day",
    activities: ["Temple offerings", "Naxi ancient music", "Mountain hiking", "Horse racing"],
    image: "🏔️",
    color: "from-blue-500 to-indigo-500",
    featured: false,
    popularity: 3,
  },
  {
    id: 5,
    name: "Knife Ladder Festival",
    nameZh: "刀杆节",
    ethnicGroup: "Lisu",
    month: "February",
    date: "Mid-February (Lunar 2/8)",
    type: "lunar",
    location: ["Nujiang Valley"],
    description: "Daring festival where men climb ladders made of sharp knives barefoot to demonstrate courage",
    duration: "2 days",
    activities: ["Knife ladder climbing", "Sea of fire walking", "Crossbow shooting", "Traditional dance"],
    image: "🪜",
    color: "from-pink-400 to-rose-500",
    featured: false,
    popularity: 3,
  },
  {
    id: 6,
    name: "Around the Three Pagodas",
    nameZh: "绕三灵",
    ethnicGroup: "Bai",
    month: "April",
    date: "Late April (Lunar 4/23-25)",
    type: "lunar",
    location: ["Dali, Eryuan"],
    description: "Bai people's grand gathering with processions around villages, singing, and dancing",
    duration: "3 days",
    activities: ["Village processions", "Folk singing", "Dancing", "Picnics"],
    image: "⛩️",
    color: "from-green-400 to-emerald-500",
    featured: false,
    popularity: 3,
  },
  {
    id: 7,
    name: "Long Table Feast",
    nameZh: "长街宴",
    ethnicGroup: "Hani",
    month: "November",
    date: "Mid-November (after harvest)",
    type: "seasonal",
    location: ["Yuanyang", "Honghe"],
    description: "Hani harvest celebration with tables stretching through villages, sharing food and wine",
    duration: "1 day",
    activities: ["Long table banquet", "Traditional dancing", "Wine drinking songs", "Rice terrace tours"],
    image: "🌾",
    color: "from-yellow-400 to-amber-500",
    featured: true,
    popularity: 4,
  },
  {
    id: 8,
    name: "Tibetan New Year (Losar)",
    nameZh: "藏历新年",
    ethnicGroup: "Tibetan",
    month: "February",
    date: "Late February/Early March (Tibetan New Year)",
    type: "lunar",
    location: ["Shangri-La", "Deqen"],
    description: "Tibetan New Year with monastery ceremonies, butter sculpture displays, and family gatherings",
    duration: "15 days",
    activities: ["Monastery ceremonies", "Butter sculptures", "Tibetan opera", "Horse racing", "Prayer flags"],
    image: "🏯",
    color: "from-orange-400 to-red-500",
    featured: false,
    popularity: 4,
  },
]

export default function FestivalsPage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState<string | null>(null)

  const ethnicGroups = Array.from(new Set(festivals.map(f => f.ethnicGroup))).sort()

  const filteredFestivals = festivals.filter((festival) => {
    const matchesMonth = !selectedMonth || festival.month === selectedMonth
    const matchesSearch = festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          festival.nameZh.includes(searchQuery) ||
                          festival.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesEthnic = !selectedEthnicGroup || festival.ethnicGroup === selectedEthnicGroup
    return matchesMonth && matchesSearch && matchesEthnic
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">120+ Annual Festivals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Festival Calendar
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Experience vibrant celebrations of Yunnan's 25 ethnic minorities throughout the year
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search festivals by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">120+</div>
              <div className="text-sm text-gray-600">Annual Festivals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">25</div>
              <div className="text-sm text-gray-600">Ethnic Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">Year-round</div>
              <div className="text-sm text-gray-600">Celebrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Years of Tradition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Month Filter */}
            <div className="flex-1">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  onClick={() => setSelectedMonth(null)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    selectedMonth === null
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Months
                </button>
                {months.slice(0, 6).map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                      selectedMonth === month
                        ? 'bg-orange-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            {/* Ethnic Group Filter */}
            <div>
              <select
                value={selectedEthnicGroup || ""}
                onChange={(e) => setSelectedEthnicGroup(e.target.value || null)}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none"
              >
                <option value="">All Ethnic Groups</option>
                {ethnicGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="container mx-auto px-4 py-6">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">{filteredFestivals.length}</span> festivals found
        </p>
      </section>

      {/* Featured Festivals */}
      {filteredFestivals.some(f => f.featured) && (
        <section className="container mx-auto px-4 pb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Festivals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestivals.filter(f => f.featured).map((festival) => (
              <Card key={festival.id} className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-100">
                {/* Header */}
                <div className={`h-32 bg-gradient-to-br ${festival.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl opacity-30">{festival.image}</div>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {festival.month}
                    </span>
                    {[...Array(festival.popularity)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{festival.name}</CardTitle>
                  <div className="text-sm text-gray-600">{festival.nameZh}</div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{festival.ethnicGroup} People</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{festival.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700 line-clamp-1">{festival.location.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{festival.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {festival.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-700 mb-2">Activities:</div>
                    <div className="flex flex-wrap gap-1">
                      {festival.activities.slice(0, 3).map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                        >
                          {activity}
                        </span>
                      ))}
                      {festival.activities.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{festival.activities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Festivals */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Festivals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.filter(f => !f.featured).map((festival) => (
            <Card key={festival.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-24 bg-gradient-to-br ${festival.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl opacity-30">{festival.image}</div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {festival.month}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{festival.name}</CardTitle>
                <div className="text-xs text-gray-600">{festival.nameZh}</div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2 mb-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-700">{festival.ethnicGroup}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-700">{festival.date}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {festival.description}
                </p>

                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No festivals found. Try adjusting your filters.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Festival Experience
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join authentic celebrations and create unforgettable memories with local communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
                Plan My Trip
              </Button>
            </Link>
            <Link href="/experiences">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Browse Festival Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
