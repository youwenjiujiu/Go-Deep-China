"use client"

import { Camera, Backpack, Coffee, Mountain, Palmtree, Music, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const routes = [
  {
    id: "photography",
    icon: Camera,
    title: "Photography Paradise",
    description: "Capture golden rice terraces, ethnic villages, and snow-capped peaks",
    gradient: "from-orange-400 to-pink-500",
    destinations: ["Yuanyang Rice Terraces", "Dongchuan Red Land", "Meili Snow Mountain"],
    duration: "7-10 days",
    difficulty: "Moderate",
  },
  {
    id: "adventure",
    icon: Backpack,
    title: "Outdoor Adventure",
    description: "Trek Tiger Leaping Gorge, climb glaciers, and explore hidden valleys",
    gradient: "from-green-400 to-emerald-600",
    destinations: ["Tiger Leaping Gorge", "Yubeng Village", "Pudacuo National Park"],
    duration: "10-14 days",
    difficulty: "Challenging",
  },
  {
    id: "tea-coffee",
    icon: Coffee,
    title: "Tea & Coffee Trail",
    description: "From ancient Pu'er tea mountains to specialty coffee plantations",
    gradient: "from-amber-400 to-orange-600",
    destinations: ["Pu'er Tea Mountains", "Baoshan Coffee", "Dali Tea Ceremonies"],
    duration: "5-7 days",
    difficulty: "Easy",
  },
  {
    id: "spiritual",
    icon: Mountain,
    title: "Spiritual Journey",
    description: "Tibetan monasteries, sacred mountains, and meditation retreats",
    gradient: "from-purple-400 to-indigo-600",
    destinations: ["Songzanlin Monastery", "Feilai Temple", "Chicken Foot Mountain"],
    duration: "8-12 days",
    difficulty: "Moderate",
  },
  {
    id: "tropical",
    icon: Palmtree,
    title: "Tropical Escape",
    description: "Rainforest adventures, exotic fruits, and Dai culture in the south",
    gradient: "from-green-400 to-teal-500",
    destinations: ["Wild Elephant Valley", "Dai Villages", "Tropical Botanical Garden"],
    duration: "5-7 days",
    difficulty: "Easy",
  },
  {
    id: "ethnic",
    icon: Music,
    title: "Cultural Immersion",
    description: "Live with local families, learn traditional crafts, attend festivals",
    gradient: "from-red-400 to-rose-600",
    destinations: ["Naxi Villages", "Yi Fire Festival", "Bai Tie-Dye Workshops"],
    duration: "7-14 days",
    difficulty: "Easy",
  },
]

export default function ThemeRoutes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Curated Experiences
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600">
            Expertly crafted theme routes designed for different passions and travel styles
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Card
                key={route.id}
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-emerald-200 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${route.gradient}`} />
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${route.gradient}
                    flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                    {route.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {route.description}
                  </p>

                  {/* Destinations */}
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-semibold text-gray-700">Highlights:</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {route.destinations.slice(0, 2).map((dest, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                          {dest}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-4 text-xs">
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">{route.duration}</span>
                      </span>
                      <span className={`px-2 py-1 rounded-full ${
                        route.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        route.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {route.difficulty}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8">
            View All Theme Routes
          </Button>
        </div>
      </div>
    </section>
  )
}
