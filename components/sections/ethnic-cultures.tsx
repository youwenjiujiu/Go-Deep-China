"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users } from "lucide-react"

const ethnicGroups = [
  {
    id: "naxi",
    name: "Naxi",
    population: "309,000",
    region: "Lijiang, Shangri-La",
    description: "Ancient matriarchal society with unique Dongba pictographic script",
    culture: ["Dongba Religion", "Naxi Ancient Music", "Matriarchal Traditions"],
    color: "from-blue-400 to-cyan-500",
    image: "🏔️",
  },
  {
    id: "bai",
    name: "Bai",
    population: "1.9 million",
    region: "Dali, Eryuan",
    description: "Known for marble craftsmanship and the Three Pagodas",
    culture: ["Tie-Dye Art", "March Fair Festival", "Architectural Heritage"],
    color: "from-purple-400 to-pink-500",
    image: "🎨",
  },
  {
    id: "yi",
    name: "Yi",
    population: "5 million",
    region: "Throughout Yunnan",
    description: "Famous for their fire worship and distinctive costumes",
    culture: ["Torch Festival", "Yi Calendar", "Fire Worship"],
    color: "from-red-400 to-orange-500",
    image: "🔥",
  },
  {
    id: "dai",
    name: "Dai",
    population: "1.2 million",
    region: "Xishuangbanna",
    description: "Theravada Buddhist culture with Southeast Asian influences",
    culture: ["Water Splashing Festival", "Peacock Dance", "Bamboo Houses"],
    color: "from-green-400 to-emerald-500",
    image: "💧",
  },
  {
    id: "tibetan",
    name: "Tibetan",
    population: "150,000",
    region: "Shangri-La, Deqen",
    description: "Tibetan Buddhist monasteries and highland pastoral life",
    culture: ["Tibetan Buddhism", "Thangka Painting", "Horse Racing"],
    color: "from-yellow-400 to-amber-500",
    image: "🏯",
  },
  {
    id: "miao",
    name: "Miao (Hmong)",
    population: "1.1 million",
    region: "Northeast Yunnan",
    description: "Elaborate silver jewelry and embroidery traditions",
    culture: ["Silver Craftsmanship", "Reed-Pipe Dance", "Embroidery"],
    color: "from-indigo-400 to-purple-500",
    image: "✨",
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Ethnic Groups List */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">
              Featured Groups
            </h3>
            {ethnicGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedGroup.id === group.id
                    ? 'border-emerald-500 bg-white shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-3xl w-12 h-12 rounded-lg bg-gradient-to-br ${group.color}
                    flex items-center justify-center flex-shrink-0`}>
                    {group.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900">{group.name}</div>
                    <div className="text-sm text-gray-600 truncate">{group.region}</div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    selectedGroup.id === group.id ? 'text-emerald-600 translate-x-1' : 'text-gray-400'
                  }`} />
                </div>
              </button>
            ))}

            <Button variant="outline" className="w-full mt-4">
              View All 25 Groups
            </Button>
          </div>

          {/* Right: Detailed View */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-2 shadow-xl">
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${selectedGroup.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-20">{selectedGroup.image}</div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-bold text-gray-900">{selectedGroup.name} People</h3>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                      {selectedGroup.population}
                    </span>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    {selectedGroup.region}
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {selectedGroup.description}
                </p>

                {/* Cultural Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Cultural Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedGroup.culture.map((item, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${selectedGroup.color}
                          text-white text-sm font-medium`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Options */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <div className="text-sm text-emerald-800 font-semibold mb-1">Immersive Stays</div>
                    <div className="text-xs text-emerald-700">Live with local families</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-800 font-semibold mb-1">Cultural Workshops</div>
                    <div className="text-xs text-blue-700">Learn traditional crafts</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-purple-800 font-semibold mb-1">Festival Tours</div>
                    <div className="text-xs text-purple-700">Join celebrations</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="text-sm text-orange-800 font-semibold mb-1">Local Guides</div>
                    <div className="text-xs text-orange-700">Native speakers available</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    Explore {selectedGroup.name} Culture
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Destinations
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-emerald-600">25+</div>
                <div className="text-sm text-gray-600">Ethnic Groups</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-blue-600">120+</div>
                <div className="text-sm text-gray-600">Festivals/Year</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
