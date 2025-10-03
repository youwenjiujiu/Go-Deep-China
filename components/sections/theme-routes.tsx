"use client"

import { Camera, Backpack, Coffee, Mountain, Palmtree, Music, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const routes = [
  {
    id: "photography",
    icon: Camera,
    title: "Photography Paradise",
    gradient: "from-orange-400 to-pink-500",
    image: "/images/experiences/yuanyang-photography.jpg",
    duration: "7-10 days",
  },
  {
    id: "adventure",
    icon: Backpack,
    title: "Outdoor Adventure",
    gradient: "from-green-400 to-emerald-600",
    image: "/images/experiences/tiger-leaping-trek.jpg",
    duration: "10-14 days",
  },
  {
    id: "tea-coffee",
    icon: Coffee,
    title: "Tea & Coffee Trail",
    gradient: "from-amber-400 to-orange-600",
    image: "/images/experiences/coffee-farm.jpg",
    duration: "5-7 days",
  },
  {
    id: "spiritual",
    icon: Mountain,
    title: "Spiritual Journey",
    gradient: "from-purple-400 to-indigo-600",
    image: "/images/experiences/tibetan-monastery.jpg",
    duration: "8-12 days",
  },
  {
    id: "tropical",
    icon: Palmtree,
    title: "Tropical Escape",
    gradient: "from-green-400 to-teal-500",
    image: "/images/experiences/wild-elephant.jpg",
    duration: "5-7 days",
  },
  {
    id: "ethnic",
    icon: Music,
    title: "Cultural Immersion",
    gradient: "from-red-400 to-rose-600",
    image: "/images/experiences/naxi-culture.jpg",
    duration: "7-14 days",
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
                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${route.gradient} opacity-40 group-hover:opacity-30 transition-opacity`} />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {route.title}
                    </h3>
                    <p className="text-white/90 text-sm">{route.duration}</p>
                  </div>
                </div>
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
