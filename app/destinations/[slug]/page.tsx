import { MapPin, Calendar, Mountain, Users, Star, ArrowRight, Clock, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/destinations"
import { notFound } from "next/navigation"

// Get destination data by slug
async function getDestination(slug: string) {
  const destination = destinations.find(d => d.slug === slug)

  if (!destination) {
    notFound()
  }

  // Return destination with additional details
  return {
    ...destination,
    region: destination.region === "northwest" ? "Northwest Yunnan" :
            destination.region === "central" ? "Central Yunnan" :
            destination.region === "southeast" ? "Southeast Yunnan" : "Southwest Yunnan",
    bestSeasons: [destination.bestSeason],
    highlights: destination.tags,
    coverImage: destination.image,
  }
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const destination = await getDestination(slug)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${destination.coverImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-end h-full pb-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              <p className="text-2xl text-white/90 mb-6">
                {destination.nameZh}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{destination.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-5 h-5" />
                  <span>{destination.altitude}m altitude</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5 (1,247 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Experiences */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Top Experiences</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Naxi Cultural Walking Tour",
                    duration: "3 hours",
                    price: 280,
                    description: "Explore ancient streets with a local Naxi guide, visit traditional workshops",
                    rating: 4.9,
                  },
                  {
                    title: "Dongba Culture Workshop",
                    duration: "2 hours",
                    price: 180,
                    description: "Learn about Dongba pictographic writing and create your own scroll",
                    rating: 4.8,
                  },
                  {
                    title: "Traditional Music Performance",
                    duration: "1.5 hours",
                    price: 150,
                    description: "Evening performance of ancient Naxi music at local theater",
                    rating: 4.7,
                  },
                ].map((exp, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{exp.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{exp.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              ¥{exp.price} per person
                            </div>
                          </div>
                        </div>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Getting There */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Getting There</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">By Air</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Lijiang Sanyi Airport (LJG) is 28km from the old town. Direct flights from major Chinese cities including Beijing, Shanghai, Guangzhou, and Chengdu. Airport shuttle buses available.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">By Train</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      High-speed trains connect Lijiang with Kunming (3 hours) and Dali (2 hours). The railway station is about 10km from the old town.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      Best Time to Visit
                    </div>
                    <div className="space-y-1">
                      {destination.bestSeasons.map((season) => (
                        <div key={season} className="text-sm font-medium">{season}</div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Users className="w-4 h-4" />
                      Local Culture
                    </div>
                    <div className="text-sm font-medium">Naxi Minority</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Mountain className="w-4 h-4" />
                      Altitude
                    </div>
                    <div className="text-sm font-medium">{destination.altitude}m</div>
                    <p className="text-xs text-gray-500 mt-1">
                      Take it easy on arrival to acclimate
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Planner CTA */}
              <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Plan Your Visit</h3>
                  <p className="text-gray-700 mb-4">
                    Let AI create a personalized itinerary including this destination
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Use Trip Planner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Local Guides */}
              <Card>
                <CardHeader>
                  <CardTitle>Local Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Book a verified Naxi guide for authentic insights
                  </p>
                  <Button variant="outline" className="w-full">
                    Find a Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
