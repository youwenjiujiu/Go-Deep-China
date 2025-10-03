"use client"

import { useState } from "react"
import { Cloud, CloudRain, Sun, Wind, Droplets, Mountain, AlertTriangle, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cities = [
  {
    id: "kunming",
    name: "Kunming",
    nameZh: "昆明",
    altitude: 1890,
    currentTemp: 18,
    condition: "Sunny",
    icon: Sun,
    forecast: [
      { day: "Mon", high: 20, low: 12, condition: "Sunny" },
      { day: "Tue", high: 19, low: 11, condition: "Partly Cloudy" },
      { day: "Wed", high: 18, low: 10, condition: "Cloudy" },
      { day: "Thu", high: 17, low: 9, condition: "Light Rain" },
      { day: "Fri", high: 19, low: 11, condition: "Sunny" },
    ],
  },
  {
    id: "lijiang",
    name: "Lijiang",
    nameZh: "丽江",
    altitude: 2400,
    currentTemp: 15,
    condition: "Partly Cloudy",
    icon: Cloud,
    forecast: [
      { day: "Mon", high: 17, low: 8, condition: "Partly Cloudy" },
      { day: "Tue", high: 16, low: 7, condition: "Sunny" },
      { day: "Wed", high: 15, low: 6, condition: "Cloudy" },
      { day: "Thu", high: 14, low: 5, condition: "Light Rain" },
      { day: "Fri", high: 16, low: 7, condition: "Sunny" },
    ],
  },
  {
    id: "shangri-la",
    name: "Shangri-La",
    nameZh: "香格里拉",
    altitude: 3280,
    currentTemp: 8,
    condition: "Cloudy",
    icon: Cloud,
    forecast: [
      { day: "Mon", high: 10, low: 2, condition: "Cloudy" },
      { day: "Tue", high: 9, low: 1, condition: "Light Snow" },
      { day: "Wed", high: 8, low: 0, condition: "Snow" },
      { day: "Thu", high: 7, low: -1, condition: "Cloudy" },
      { day: "Fri", high: 9, low: 1, condition: "Partly Cloudy" },
    ],
    altitudeWarning: true,
  },
  {
    id: "dali",
    name: "Dali",
    nameZh: "大理",
    altitude: 1900,
    currentTemp: 17,
    condition: "Sunny",
    icon: Sun,
    forecast: [
      { day: "Mon", high: 19, low: 11, condition: "Sunny" },
      { day: "Tue", high: 18, low: 10, condition: "Partly Cloudy" },
      { day: "Wed", high: 17, low: 9, condition: "Cloudy" },
      { day: "Thu", high: 16, low: 8, condition: "Light Rain" },
      { day: "Fri", high: 18, low: 10, condition: "Sunny" },
    ],
  },
  {
    id: "xishuangbanna",
    name: "Xishuangbanna",
    nameZh: "西双版纳",
    altitude: 550,
    currentTemp: 28,
    condition: "Partly Cloudy",
    icon: Cloud,
    forecast: [
      { day: "Mon", high: 30, low: 22, condition: "Partly Cloudy" },
      { day: "Tue", high: 31, low: 23, condition: "Sunny" },
      { day: "Wed", high: 29, low: 21, condition: "Thunderstorms" },
      { day: "Thu", high: 28, low: 20, condition: "Rain" },
      { day: "Fri", high: 30, low: 22, condition: "Partly Cloudy" },
    ],
  },
]

const packingGuide = {
  spring: {
    name: "Spring (March-May)",
    items: ["Light jacket", "Long pants", "T-shirts", "Sunscreen", "Sunglasses", "Light sweater for evenings"],
  },
  summer: {
    name: "Summer (June-August)",
    items: ["T-shirts", "Shorts", "Light rain jacket", "Sunscreen", "Hat", "Umbrella"],
  },
  autumn: {
    name: "Autumn (September-November)",
    items: ["Light jacket", "Long pants", "Layers", "Sunscreen", "Comfortable walking shoes"],
  },
  winter: {
    name: "Winter (December-February)",
    items: ["Warm jacket", "Thermal underwear", "Scarf & gloves", "Warm socks", "Down jacket for highland areas"],
  },
}

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState(cities[0])

  const WeatherIcon = selectedCity.icon

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Cloud className="w-5 h-5" />
              <span className="font-medium">Weather & Climate</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plan with Confidence
            </h1>
            <p className="text-xl opacity-90">
              Check weather forecasts, get packing tips, and prepare for Yunnan's diverse climates
            </p>
          </div>
        </div>
      </section>

      {/* City Selector */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`flex-shrink-0 px-6 py-3 rounded-lg transition-all ${
                  selectedCity.id === city.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-semibold">{city.name}</div>
                <div className="text-xs opacity-75">{city.nameZh}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Current Weather */}
      <section className="container mx-auto px-4 py-12">
        <Card className="border-2">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Current */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{selectedCity.name}</h2>
                <p className="text-gray-600 mb-6">{selectedCity.nameZh}</p>

                <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
                  <WeatherIcon className="w-24 h-24 text-blue-600" />
                  <div>
                    <div className="text-6xl font-bold">{selectedCity.currentTemp}°C</div>
                    <div className="text-xl text-gray-600">{selectedCity.condition}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto md:mx-0">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mountain className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Altitude</div>
                      <div className="font-semibold">{selectedCity.altitude}m</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Humidity</div>
                      <div className="font-semibold">65%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wind className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">Wind</div>
                      <div className="font-semibold">12 km/h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Sun className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">UV Index</div>
                      <div className="font-semibold">Moderate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Forecast */}
              <div>
                <h3 className="text-xl font-bold mb-4">5-Day Forecast</h3>
                <div className="space-y-3">
                  {selectedCity.forecast.map((day, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="font-semibold w-12">{day.day}</div>
                      <div className="flex-1 text-center text-sm text-gray-600">{day.condition}</div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700">
                          <span className="font-semibold">{day.high}°</span>
                          <span className="text-gray-500 text-sm"> / {day.low}°</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Altitude Warning */}
            {selectedCity.altitudeWarning && (
              <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-yellow-900 mb-1">High Altitude Alert</div>
                  <p className="text-sm text-yellow-800">
                    {selectedCity.name} is at {selectedCity.altitude}m altitude. Take it easy on arrival,
                    stay hydrated, and avoid alcohol for the first 24 hours. Consult a doctor if you have
                    concerns about altitude sickness.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Packing Guide */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What to Pack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(packingGuide).map((season) => (
            <Card key={season.name}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">{season.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {season.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Best Time to Visit Yunnan
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Yunnan's diverse climate means there's always a great time to visit somewhere!
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Peak Season (March-May, Sept-Nov)</h3>
                <p className="opacity-90">
                  Perfect weather across most of Yunnan. Ideal for sightseeing, hiking, and festivals.
                  Book accommodations early!
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Off-Season (June-Aug, Dec-Feb)</h3>
                <p className="opacity-90">
                  Summer: Great for highland areas like Shangri-La to escape heat. Winter: Perfect for
                  Xishuangbanna's tropical warmth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
