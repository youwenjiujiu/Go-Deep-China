"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Calendar, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [activeDestination, setActiveDestination] = useState<string | null>(null)

  const destinations = [
    { id: "lijiang", name: "Lijiang", x: "45%", y: "35%", color: "bg-blue-500" },
    { id: "dali", name: "Dali", x: "35%", y: "40%", color: "bg-purple-500" },
    { id: "kunming", name: "Kunming", x: "55%", y: "55%", color: "bg-emerald-500" },
    { id: "shangri-la", name: "Shangri-La", x: "50%", y: "20%", color: "bg-amber-500" },
    { id: "xishuangbanna", name: "Xishuangbanna", x: "65%", y: "75%", color: "bg-red-500" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Discover Authentic China
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Go Deep Into
                <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Yunnan's Soul
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience 25 ethnic cultures, breathtaking landscapes from snow mountains to tropical rainforests,
                and authentic adventures in China's most diverse province.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-emerald-600">25+</div>
                <div className="text-sm text-gray-600">Ethnic Groups</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Experiences</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore Culture
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium">Interactive Map</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Best Season</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Local Guides</span>
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Map */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Map Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl shadow-2xl p-8">
                {/* Simplified Yunnan Map Outline */}
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Stylized Yunnan province shape */}
                    <path
                      d="M100,200 Q150,100 250,120 Q320,140 350,200 Q340,280 280,340 Q200,380 140,340 Q80,280 100,200 Z"
                      fill="white"
                      stroke="#059669"
                      strokeWidth="3"
                      className="drop-shadow-lg"
                    />

                    {/* Mountain ranges illustration */}
                    <path
                      d="M120,180 L140,140 L160,180 M200,160 L220,110 L240,160 M280,190 L300,150 L320,190"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Destination Markers */}
                  {destinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: dest.x, top: dest.y }}
                      onMouseEnter={() => setActiveDestination(dest.id)}
                      onMouseLeave={() => setActiveDestination(null)}
                    >
                      {/* Pulse animation */}
                      <div className={`absolute inset-0 ${dest.color} rounded-full animate-ping opacity-20`} />

                      {/* Marker */}
                      <div className={`relative w-4 h-4 ${dest.color} rounded-full ring-4 ring-white shadow-lg
                        group-hover:scale-125 transition-transform`} />

                      {/* Label */}
                      <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap
                        bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full shadow-lg
                        transition-all duration-200 ${
                          activeDestination === dest.id
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}>
                        {dest.name}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border-2 border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Top Destination</div>
                    <div className="font-bold text-gray-900">Lijiang Old Town</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border-2 border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Active Travelers</div>
                    <div className="font-bold text-gray-900">12,847+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
