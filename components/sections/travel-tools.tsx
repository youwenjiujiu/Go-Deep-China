"use client"

import {
  Globe,
  DollarSign,
  Cloud,
  MapPin,
  Plane,
  BookOpen,
  Heart,
  Calendar,
  Phone,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tools = [
  {
    id: "visa",
    icon: Globe,
    title: "Visa Assistant",
    description: "Step-by-step visa application guide with required documents checklist",
    color: "bg-blue-500",
    features: ["144-hour transit", "Tourist visa", "Embassy locator"],
  },
  {
    id: "language",
    icon: BookOpen,
    title: "Language Helper",
    description: "Essential Chinese phrases with pinyin and audio pronunciation",
    color: "bg-purple-500",
    features: ["Common phrases", "Food terms", "Emergency words"],
  },
  {
    id: "currency",
    icon: DollarSign,
    title: "Currency Converter",
    description: "Real-time exchange rates and digital payment setup guides",
    color: "bg-green-500",
    features: ["Live rates", "WeChat Pay", "Alipay guide"],
  },
  {
    id: "weather",
    icon: Cloud,
    title: "Weather & Climate",
    description: "Multi-city forecasts with packing suggestions and altitude warnings",
    color: "bg-yellow-500",
    features: ["10-day forecast", "Altitude alerts", "Packing tips"],
  },
  {
    id: "transport",
    icon: Plane,
    title: "Transport Planner",
    description: "Flight, train, and bus bookings with route optimization",
    color: "bg-red-500",
    features: ["Flight search", "Train tickets", "Local transport"],
  },
  {
    id: "map",
    icon: MapPin,
    title: "Offline Maps",
    description: "Download GPS-enabled maps for hiking and remote areas",
    color: "bg-emerald-500",
    features: ["Hiking trails", "City maps", "Offline access"],
  },
  {
    id: "health",
    icon: Heart,
    title: "Health Guide",
    description: "Altitude sickness prevention, hospitals, and travel insurance",
    color: "bg-pink-500",
    features: ["Altitude tips", "Hospitals", "Insurance"],
  },
  {
    id: "events",
    icon: Calendar,
    title: "Festival Calendar",
    description: "Plan around 120+ annual ethnic minority festivals and celebrations",
    color: "bg-orange-500",
    features: ["All festivals", "Best times", "Booking help"],
  },
  {
    id: "emergency",
    icon: Phone,
    title: "Emergency Resources",
    description: "Embassy contacts, police stations, and 24/7 support hotline",
    color: "bg-gray-700",
    features: ["Embassy info", "Police", "Helpline"],
  },
]

export default function TravelTools() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Essential Travel Tools
          </h2>
          <p className="text-xl text-gray-600">
            From visa applications to weather forecasts, we've got you covered with smart tools
            that make traveling in Yunnan effortless.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center
                      group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600
                      group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  <div className="space-y-1.5">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Tool Highlight */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                ⭐ Featured Tool
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Trip Planner</h3>
              <p className="text-lg text-gray-700 mb-6">
                Answer a few questions about your interests, budget, and travel style, and our AI will create
                a personalized itinerary with accommodations, activities, and local experiences.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Customized to your preferences and time constraints</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Real-time availability and pricing for hotels & tours</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Export to Google Maps or download as PDF</span>
                </li>
              </ul>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Try AI Trip Planner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Duration</div>
                    <div className="text-xs text-gray-600">7-10 days suggested</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Interests</div>
                    <div className="text-xs text-gray-600">Culture, Photography, Food</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Budget</div>
                    <div className="text-xs text-gray-600">$1000-2000 USD</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-center text-sm text-gray-600 mb-3">
                    Generating your perfect itinerary...
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '65%' }} />
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
