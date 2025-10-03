"use client"

import { useState } from "react"
import { Users, Star, MapPin, MessageCircle, Award, CheckCircle, Languages, Search, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useChat } from "@/contexts/chat-context"
import ChatWindow from "@/components/ui/chat-window"

const specialties = [
  { id: "all", name: "All Guides", icon: "👥" },
  { id: "culture", name: "Cultural Tours", icon: "🏮" },
  { id: "hiking", name: "Hiking & Trekking", icon: "⛰️" },
  { id: "photography", name: "Photography", icon: "📸" },
  { id: "food", name: "Food Tours", icon: "🍜" },
  { id: "birdwatching", name: "Nature & Wildlife", icon: "🦜" },
]

const guides = [
  {
    id: 1,
    name: "Zhang Wei",
    nameZh: "张伟",
    ethnicity: "Naxi",
    location: "Lijiang",
    languages: ["English", "Mandarin", "Naxi"],
    specialties: ["Cultural Tours", "Ancient Town", "Dongba Culture"],
    experience: 12,
    rating: 4.9,
    reviews: 287,
    verified: true,
    bio: "Born and raised in Lijiang Old Town, I've been sharing Naxi culture and traditions with travelers for over a decade. Certified Dongba script expert.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    priceRange: "¥300-500/day",
    responseTime: "< 2 hours",
    featured: true,
  },
  {
    id: 2,
    name: "Li Mei",
    nameZh: "李梅",
    ethnicity: "Bai",
    location: "Dali",
    languages: ["English", "Mandarin", "Bai"],
    specialties: ["Tie-Dye Workshops", "Cultural Tours", "Photography"],
    experience: 8,
    rating: 4.8,
    reviews: 156,
    verified: true,
    bio: "Bai minority artist specializing in traditional tie-dye and cultural experiences. Let me show you the authentic Dali!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
    priceRange: "¥250-400/day",
    responseTime: "< 3 hours",
    featured: true,
  },
  {
    id: 3,
    name: "Tenzin Dorje",
    nameZh: "丹增多吉",
    ethnicity: "Tibetan",
    location: "Shangri-La",
    languages: ["English", "Mandarin", "Tibetan"],
    specialties: ["Tibetan Buddhism", "Highland Trekking", "Monastery Tours"],
    experience: 15,
    rating: 5.0,
    reviews: 203,
    verified: true,
    bio: "Tibetan guide with deep knowledge of Buddhism and local traditions. Former monk turned cultural ambassador.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tenzin",
    priceRange: "¥350-600/day",
    responseTime: "< 4 hours",
    featured: true,
  },
  {
    id: 4,
    name: "Wang Xiaoming",
    nameZh: "王小明",
    ethnicity: "Han",
    location: "Kunming",
    languages: ["English", "Mandarin", "French"],
    specialties: ["Food Tours", "City Tours", "Stone Forest"],
    experience: 10,
    rating: 4.7,
    reviews: 412,
    verified: true,
    bio: "Kunming local with passion for Yunnan cuisine and history. Certified tour guide with culinary expertise.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
    priceRange: "¥280-450/day",
    responseTime: "< 2 hours",
    featured: true,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    nameZh: "莎拉",
    ethnicity: "Expat",
    location: "Dali",
    languages: ["English", "Mandarin", "Spanish"],
    specialties: ["Photography", "Hiking", "Cultural Exchange"],
    experience: 6,
    rating: 4.8,
    reviews: 89,
    verified: true,
    bio: "American photographer living in Yunnan for 6 years. Specialized in landscape and cultural photography tours.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    priceRange: "¥400-700/day",
    responseTime: "< 1 hour",
    featured: false,
  },
  {
    id: 6,
    name: "Chen Hao",
    nameZh: "陈浩",
    ethnicity: "Yi",
    location: "Shilin",
    languages: ["English", "Mandarin", "Yi"],
    specialties: ["Hiking & Trekking", "Stone Forest", "Yi Culture"],
    experience: 9,
    rating: 4.6,
    reviews: 134,
    verified: true,
    bio: "Yi minority guide specializing in Stone Forest and surrounding areas. Expert hiker and nature enthusiast.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
    priceRange: "¥250-380/day",
    responseTime: "< 3 hours",
    featured: false,
  },
  {
    id: 7,
    name: "Ai Lun",
    nameZh: "艾伦",
    ethnicity: "Dai",
    location: "Xishuangbanna",
    languages: ["English", "Mandarin", "Dai", "Thai"],
    specialties: ["Wildlife Tours", "Dai Culture", "Tropical Rainforest"],
    experience: 11,
    rating: 4.9,
    reviews: 178,
    verified: true,
    bio: "Dai local with expertise in tropical ecology and wildlife. Certified naturalist guide.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ailun",
    priceRange: "¥320-500/day",
    responseTime: "< 4 hours",
    featured: false,
  },
  {
    id: 8,
    name: "Liu Qiang",
    nameZh: "刘强",
    ethnicity: "Hani",
    location: "Yuanyang",
    languages: ["English", "Mandarin", "Hani"],
    specialties: ["Photography", "Rice Terraces", "Hani Culture"],
    experience: 7,
    rating: 4.8,
    reviews: 95,
    verified: true,
    bio: "Hani photographer guide born in Yuanyang. Know all the best sunrise/sunset spots on the terraces.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liu",
    priceRange: "¥280-450/day",
    responseTime: "< 2 hours",
    featured: false,
  },
]

export default function GuidesPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [showChat, setShowChat] = useState(false)
  const { startConversation } = useChat()

  const locations = ["all", ...Array.from(new Set(guides.map(g => g.location))).sort()]

  const handleContactGuide = (guide: typeof guides[0]) => {
    startConversation(guide.id.toString(), guide.name, guide.avatar)
    setShowChat(true)
  }

  const filteredGuides = guides.filter((guide) => {
    const matchesSpecialty = selectedSpecialty === "all" ||
      guide.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.nameZh.includes(searchQuery) ||
                          guide.bio.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = selectedLocation === "all" || guide.location === selectedLocation
    return matchesSpecialty && matchesSearch && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-medium">Verified Local Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect with Expert Local Guides
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Experienced, verified guides who speak your language and know Yunnan inside out
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">2000+</div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Specialty Filter */}
            <div className="flex-1 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {specialties.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpecialty(spec.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                    selectedSpecialty === spec.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{spec.icon}</span>
                  <span>{spec.name}</span>
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "all" ? "All Locations" : loc}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="container mx-auto px-4 py-6">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">{filteredGuides.length}</span> guides found
        </p>
      </section>

      {/* Featured Guides */}
      {filteredGuides.some(g => g.featured) && (
        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold mb-6">Top-Rated Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredGuides.filter(g => g.featured).map((guide) => (
              <Card key={guide.id} className="hover:shadow-2xl transition-all duration-300 border-2 border-purple-100">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={guide.avatar}
                          alt={guide.name}
                          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                        />
                        {guide.verified && (
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{guide.name}</h3>
                          <p className="text-sm text-gray-600">{guide.nameZh} • {guide.ethnicity}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-lg">{guide.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">{guide.reviews} reviews</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{guide.location}</span>
                        <span className="text-gray-300">•</span>
                        <Award className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">{guide.experience} years exp.</span>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {guide.bio}
                      </p>

                      {/* Languages */}
                      <div className="flex items-center gap-2 mb-3">
                        <Languages className="w-4 h-4 text-gray-500" />
                        <div className="flex flex-wrap gap-1">
                          {guide.languages.map((lang, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {guide.specialties.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-sm text-gray-600">From</div>
                          <div className="font-bold text-gray-900">{guide.priceRange}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleContactGuide(guide)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Guides */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.filter(g => !g.featured).map((guide) => (
            <Card key={guide.id} className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-16 h-16 rounded-full border-2 border-white shadow"
                    />
                    {guide.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg">{guide.name}</h3>
                    <p className="text-xs text-gray-600">{guide.nameZh}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{guide.rating}</span>
                      <span className="text-xs text-gray-500">({guide.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-700">{guide.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-purple-600" />
                    <span className="text-gray-700">{guide.experience} years</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                  {guide.bio}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.specialties.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleContactGuide(guide)}
                  >
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No guides found. Try adjusting your filters.</p>
          </div>
        )}
      </section>

      {/* Become a Guide CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are You a Local Guide?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of verified guides and connect with travelers from around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
              Apply to Become a Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Window */}
      {showChat && <ChatWindow onClose={() => setShowChat(false)} />}
    </div>
  )
}
