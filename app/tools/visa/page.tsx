"use client"

import { useState } from "react"
import { Globe, FileText, CheckCircle, AlertCircle, Clock, MapPin, Phone, Mail, ExternalLink, Download, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const visaTypes = [
  {
    id: "tourist",
    name: "Tourist Visa (L)",
    validity: "30-90 days",
    entries: "Single/Double/Multiple",
    processingTime: "4-5 business days",
    description: "For tourism, family visits, and sightseeing",
    requirements: ["Passport", "Application form", "Photo", "Flight/hotel bookings", "Invitation letter (if visiting family)"],
  },
  {
    id: "transit",
    name: "144-Hour Transit Visa-Free",
    validity: "144 hours (6 days)",
    entries: "Single",
    processingTime: "On arrival",
    description: "For transit passengers through designated airports",
    requirements: ["Valid passport", "Onward ticket to 3rd country", "Arrive/depart from designated airports"],
    special: "No visa required! Available in Kunming airport.",
  },
  {
    id: "business",
    name: "Business Visa (M)",
    validity: "30-90 days",
    entries: "Single/Double/Multiple",
    processingTime: "4-5 business days",
    description: "For commercial and trade activities",
    requirements: ["Passport", "Application form", "Photo", "Invitation letter from Chinese company", "Business license"],
  },
]

const countries = [
  { name: "United States", embassy: "Washington DC, New York, Chicago, Los Angeles, San Francisco", website: "http://www.china-embassy.org" },
  { name: "United Kingdom", embassy: "London", website: "http://www.chinese-embassy.org.uk" },
  { name: "Canada", embassy: "Ottawa, Toronto, Vancouver", website: "http://ca.china-embassy.org" },
  { name: "Australia", embassy: "Canberra, Sydney, Melbourne", website: "http://au.china-embassy.org" },
  { name: "Germany", embassy: "Berlin, Frankfurt, Munich", website: "http://de.china-embassy.org" },
]

const steps = [
  {
    number: 1,
    title: "Determine Visa Type",
    description: "Choose the appropriate visa based on your purpose of visit",
    icon: Globe,
  },
  {
    number: 2,
    title: "Prepare Documents",
    description: "Gather all required documents including passport, photos, and supporting materials",
    icon: FileText,
  },
  {
    number: 3,
    title: "Complete Application",
    description: "Fill out the visa application form online or on paper",
    icon: FileText,
  },
  {
    number: 4,
    title: "Submit & Pay",
    description: "Submit your application at the embassy/consulate and pay the visa fee",
    icon: CheckCircle,
  },
  {
    number: 5,
    title: "Track & Collect",
    description: "Track your application status and collect your passport with visa",
    icon: Clock,
  },
]

export default function VisaGuidePage() {
  const [selectedVisa, setSelectedVisa] = useState(visaTypes[0])
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Globe className="w-5 h-5" />
              <span className="font-medium">Visa Assistant</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              China Visa Guide
            </h1>
            <p className="text-xl opacity-90">
              Step-by-step guidance for obtaining your China visa. Simple, clear, and up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Alert for 144-hour */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  ✈️ No Visa Required for 144-Hour Transit!
                </h3>
                <p className="text-green-800 mb-3">
                  If you're transiting through Kunming (Yunnan's capital) to a third country, you can stay visa-free for up to 6 days! Perfect for a quick Yunnan adventure.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn More
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                    Check Eligibility
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Visa Types */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Visa Type</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visaTypes.map((visa) => (
            <Card
              key={visa.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedVisa.id === visa.id
                  ? 'border-2 border-blue-600 shadow-lg scale-105'
                  : 'border hover:border-blue-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedVisa(visa)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{visa.name}</CardTitle>
                {visa.special && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mt-2">
                    {visa.special}
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{visa.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold">{visa.validity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entries:</span>
                    <span className="font-semibold">{visa.entries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing:</span>
                    <span className="font-semibold">{visa.processingTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-4 py-12 bg-blue-50 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Requirements for {selectedVisa.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {selectedVisa.requirements.map((req, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <div className="flex gap-6 items-start mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-1 h-24 bg-blue-200 my-2" />
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-blue-600" />
                        <CardTitle>{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Embassy Locator */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Your Embassy</h2>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Your Country
            </label>
            <select
              value={selectedCountry.name}
              onChange={(e) => setSelectedCountry(countries.find(c => c.name === e.target.value) || countries[0])}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
            >
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Chinese Embassy/Consulate in {selectedCountry.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Locations:</div>
                <div className="text-gray-800">{selectedCountry.embassy}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Website:</div>
                <a
                  href={selectedCountry.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  {selectedCountry.website}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <MapPin className="mr-2 h-4 w-4" />
                Find Nearest Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Helpful Resources</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Application Forms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Download the latest visa application form and sample documents
              </p>
              <Button variant="outline" className="w-full">
                Download Forms
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Get help with your visa application questions
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <AlertCircle className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Common questions about China visa applications
              </p>
              <Button variant="outline" className="w-full">
                View FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Once you have your visa sorted, let's plan your perfect Yunnan adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              Plan My Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Browse Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
