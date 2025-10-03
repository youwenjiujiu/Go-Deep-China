"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users } from "lucide-react"
import Image from "next/image"

const ethnicGroups = [
  {
    id: "naxi",
    name: "Naxi",
    population: "309,000",
    region: "Lijiang, Shangri-La",
    color: "from-blue-400 to-cyan-500",
    image: "/images/culture/naxi.jpg",
  },
  {
    id: "bai",
    name: "Bai",
    population: "1.9 million",
    region: "Dali, Eryuan",
    color: "from-purple-400 to-pink-500",
    image: "/images/culture/bai.jpg",
  },
  {
    id: "yi",
    name: "Yi",
    population: "5 million",
    region: "Throughout Yunnan",
    color: "from-red-400 to-orange-500",
    image: "/images/culture/yi.jpg",
  },
  {
    id: "dai",
    name: "Dai",
    population: "1.2 million",
    region: "Xishuangbanna",
    color: "from-green-400 to-emerald-500",
    image: "/images/culture/dai.jpg",
  },
  {
    id: "tibetan",
    name: "Tibetan",
    population: "150,000",
    region: "Shangri-La, Deqen",
    color: "from-yellow-400 to-amber-500",
    image: "/images/culture/tibetan.jpg",
  },
  {
    id: "miao",
    name: "Miao (Hmong)",
    population: "1.1 million",
    region: "Northeast Yunnan",
    color: "from-indigo-400 to-purple-500",
    image: "/images/culture/miao.jpg",
  },
]

export default function EthnicCultures() {
  const [selectedGroup, setSelectedGroup] = useState(ethnicGroups[0])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            25 Ethnic Minorities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Living Museum of Cultures
          </h2>
          <p className="text-xl text-gray-600">
            Yunnan is home to China's greatest ethnic diversity. Discover unique traditions,
            languages, festivals, and ways of life preserved for thousands of years.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ethnicGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                selectedGroup.id === group.id
                  ? 'ring-4 ring-emerald-500 scale-105'
                  : 'hover:scale-105 hover:shadow-xl'
              }`}
            >
              {/* Image */}
              <Image
                src={group.image}
                alt={group.name}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${group.color} opacity-40 group-hover:opacity-30 transition-opacity`} />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-bold text-white text-sm">{group.name}</h3>
                <p className="text-white/80 text-xs">{group.population}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Group Detail - Simplified */}
        <div className="mt-8">
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={selectedGroup.image}
                alt={selectedGroup.name}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${selectedGroup.color} opacity-50`} />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-4xl font-bold text-white mb-2">{selectedGroup.name} People</h3>
                <p className="text-white/90 text-lg">{selectedGroup.region}</p>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="flex gap-3">
                <Link href={`/culture/${selectedGroup.id}`} className="flex-1">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
                    Explore Culture
                  </Button>
                </Link>
                <Link href="/destinations" className="flex-1">
                  <Button variant="outline" className="w-full text-lg py-6">
                    View Destinations
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
