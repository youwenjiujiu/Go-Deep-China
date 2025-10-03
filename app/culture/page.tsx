import { Users, MapPin, Calendar, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import EthnicGroupImage from "@/components/culture/EthnicGroupImage"
import ViewAllEthnicGroups from "@/components/culture/ViewAllEthnicGroups"
import { allEthnicGroups } from "@/lib/ethnicGroups"
import { AnimatedCultureCard } from "@/components/culture/AnimatedCultureCard"

// Get the first 8 ethnic groups as featured
const featuredEthnicGroups = allEthnicGroups.slice(0, 8)

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-medium">25 Ethnic Minorities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Living Museum of Cultures
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Yunnan is home to the greatest ethnic diversity in China. Discover unique traditions,
              languages, festivals, and ways of life preserved for thousands of years.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Ethnic Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-sm text-gray-600">Annual Festivals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15M+</div>
              <div className="text-sm text-gray-600">Minority Population</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnic Groups Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Ethnic Groups
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each group has unique languages, customs, festivals, and artistic traditions.
              Click to explore their rich cultural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredEthnicGroups.map((group, index) => (
              <AnimatedCultureCard key={group.id} index={index}>
                <Link href={`/culture/${group.id}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-emerald-300">
                  {/* Header with image */}
                  <div className="h-48 relative overflow-hidden bg-gray-200">
                    <EthnicGroupImage
                      src={group.image}
                      alt={`${group.name} traditional culture`}
                      fallbackText={group.nameZh}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      {group.population}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                      {group.name}
                    </CardTitle>
                    <div className="text-sm text-gray-600">{group.nameZh}</div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-1">{group.region}</span>
                    </div>

                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                      {group.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-700 mb-2">Cultural Highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {group.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded-md bg-gradient-to-r ${group.color} text-white text-xs`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  </Card>
                </Link>
              </AnimatedCultureCard>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <ViewAllEthnicGroups />
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Cultural Immersion</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Authentic Cultures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Go beyond sightseeing with hands-on experiences that connect you with local communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Homestays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Live with local families, share meals, and participate in daily activities
                </p>
                <Button variant="outline" className="w-full">
                  Find Homestays
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <CardTitle>Craft Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn traditional skills like tie-dye, silverwork, and embroidery from masters
                </p>
                <Button variant="outline" className="w-full">
                  Browse Workshops
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Festival Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join vibrant celebrations like the Torch Festival and Water Splashing Festival
                </p>
                <Button variant="outline" className="w-full">
                  Festival Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Plan your cultural journey through Yunnan with our AI trip planner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8">
                Start Planning
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Browse Experiences
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}