"use client"

import { useState } from "react"
import { Sparkles, Calendar, Users, DollarSign, Heart, Mountain, Coffee, Camera, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const interests = [
  { id: "culture", name: "Culture & History", icon: "🏮", color: "from-purple-400 to-pink-500" },
  { id: "adventure", name: "Outdoor Adventure", icon: "⛰️", color: "from-green-400 to-emerald-500" },
  { id: "photography", name: "Photography", icon: "📸", color: "from-orange-400 to-red-500" },
  { id: "food", name: "Food & Cuisine", icon: "🍜", color: "from-yellow-400 to-orange-500" },
  { id: "spiritual", name: "Spiritual Journey", icon: "🙏", color: "from-indigo-400 to-purple-500" },
  { id: "nature", name: "Nature & Wildlife", icon: "🐘", color: "from-green-500 to-teal-500" },
  { id: "tea", name: "Tea & Coffee", icon: "🍵", color: "from-amber-400 to-brown-500" },
  { id: "crafts", name: "Handicrafts", icon: "🎨", color: "from-blue-400 to-cyan-500" },
]

const budgetRanges = [
  { id: "budget", name: "Budget", range: "Under $50/day", icon: "💰" },
  { id: "moderate", name: "Moderate", range: "$50-100/day", icon: "💵" },
  { id: "comfort", name: "Comfortable", range: "$100-200/day", icon: "💴" },
  { id: "luxury", name: "Luxury", range: "$200+/day", icon: "💎" },
]

const durations = [
  { id: "3-5", name: "3-5 days", desc: "Quick escape" },
  { id: "7-10", name: "7-10 days", desc: "Best value" },
  { id: "10-14", name: "10-14 days", desc: "In-depth" },
  { id: "14+", name: "14+ days", desc: "Complete tour" },
]

export default function TripPlannerPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    duration: "",
    interests: [] as string[],
    budget: "",
    travelers: 2,
    travelStyle: "",
    startDate: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const toggleInterest = (id: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(id)
        ? formData.interests.filter((i) => i !== id)
        : [...formData.interests, id],
    })
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setStep(5)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">AI-Powered Trip Planning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Perfect Yunnan Journey
            </h1>
            <p className="text-xl opacity-90">
              Answer a few questions and let AI create a personalized itinerary tailored to your interests,
              budget, and travel style
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            {[
              { num: 1, label: "Duration" },
              { num: 2, label: "Interests" },
              { num: 3, label: "Budget" },
              { num: 4, label: "Details" },
              { num: 5, label: "Itinerary" },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s.num
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s.num ? <CheckCircle className="w-6 h-6" /> : s.num}
                  </div>
                  <span className="text-xs mt-2 text-gray-600 hidden sm:block">{s.label}</span>
                </div>
                {idx < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      step > s.num ? "bg-emerald-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Duration */}
          {step === 1 && (
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">How long is your trip?</CardTitle>
                </div>
                <p className="text-gray-600">Choose the duration that fits your schedule</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {durations.map((dur) => (
                    <button
                      key={dur.id}
                      onClick={() => setFormData({ ...formData, duration: dur.id })}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.duration === dur.id
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="text-xl font-bold mb-1">{dur.name}</div>
                      <div className="text-sm text-gray-600">{dur.desc}</div>
                    </button>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => setStep(2)}
                  disabled={!formData.duration}
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">What are you interested in?</CardTitle>
                </div>
                <p className="text-gray-600">Select all that apply (at least one)</p>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {interests.map((interest) => (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.interests.includes(interest.id)
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${interest.color} rounded-lg flex items-center justify-center text-2xl mb-2`}>
                        {interest.icon}
                      </div>
                      <div className="text-sm font-semibold">{interest.name}</div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => setStep(3)}
                    disabled={formData.interests.length === 0}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Budget */}
          {step === 3 && (
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">What's your budget?</CardTitle>
                </div>
                <p className="text-gray-600">Daily budget per person</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget.id}
                      onClick={() => setFormData({ ...formData, budget: budget.id })}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        formData.budget === budget.id
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">{budget.icon}</div>
                      <div className="text-lg font-bold mb-1">{budget.name}</div>
                      <div className="text-sm text-gray-600">{budget.range}</div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => setStep(4)}
                    disabled={!formData.budget}
                  >
                    Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Final Details */}
          {step === 4 && (
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">A few more details</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of travelers
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setFormData({ ...formData, travelers: Math.max(1, formData.travelers - 1) })}
                      className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-emerald-600 font-bold"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold w-12 text-center">{formData.travelers}</span>
                    <button
                      onClick={() => setFormData({ ...formData, travelers: formData.travelers + 1 })}
                      className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-emerald-600 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Travel style
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {["Relaxed", "Moderate", "Fast-paced"].map((style) => (
                      <button
                        key={style}
                        onClick={() => setFormData({ ...formData, travelStyle: style })}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.travelStyle === style
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Approximate start date (optional)
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(3)}
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    onClick={handleGenerate}
                    disabled={!formData.travelStyle}
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate Itinerary
                        <Sparkles className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Generated Itinerary Preview */}
          {step === 5 && (
            <div className="space-y-6">
              <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-emerald-600" />
                    <div>
                      <CardTitle className="text-2xl">Your Personalized Itinerary</CardTitle>
                      <p className="text-gray-600">{formData.duration} days • {formData.travelers} travelers • {formData.budget} budget</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We've created a custom itinerary based on your preferences focusing on: {formData.interests.join(", ")}
                  </p>
                  <div className="flex gap-3">
                    <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                      View Full Itinerary
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                      Start Over
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Day Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Day 1: Arrival in Lijiang</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-sm font-semibold text-gray-500 w-20">Morning</div>
                    <div className="flex-1">
                      <div className="font-semibold">Arrive at Lijiang Airport</div>
                      <p className="text-sm text-gray-600">Transfer to your hotel in Lijiang Old Town (30 mins)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm font-semibold text-gray-500 w-20">Afternoon</div>
                    <div className="flex-1">
                      <div className="font-semibold">Explore Lijiang Old Town</div>
                      <p className="text-sm text-gray-600">Walking tour of ancient streets, local markets, and waterways</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm font-semibold text-gray-500 w-20">Evening</div>
                    <div className="flex-1">
                      <div className="font-semibold">Naxi Ancient Music Performance</div>
                      <p className="text-sm text-gray-600">Traditional music concert showcasing Dongba culture</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
