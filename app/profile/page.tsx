"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Globe, Calendar, MapPin, Edit, Save } from "lucide-react"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    country: "",
    preferredLang: "en",
  })

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    router.push("/auth/signin")
    return null
  }

  const handleSave = async () => {
    // In production, this would call an API to update the user profile
    console.log("Saving profile:", formData)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
            {session?.user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {session?.user?.name || "User"}
          </h1>
          <p className="text-gray-600">{session?.user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-emerald-100">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Active Bookings</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-emerald-100">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Completed Trips</div>
            </CardContent>
          </Card>
          <Card className="border-2 border-emerald-100">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Saved Items</div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Information */}
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsEditing(false)}
                  variant="outline"
                  size="sm"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              ) : (
                <p className="text-gray-900 font-medium">{session?.user?.name || "Not set"}</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <p className="text-gray-900 font-medium">{session?.user?.email}</p>
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                Country
              </label>
              {isEditing ? (
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="SG">Singapore</option>
                  <option value="OTHER">Other</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium">Not set</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4" />
                Preferred Language
              </label>
              {isEditing ? (
                <select
                  value={formData.preferredLang}
                  onChange={(e) => setFormData({ ...formData, preferredLang: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="en">English</option>
                  <option value="zh">简体中文</option>
                  <option value="ja">日本語</option>
                  <option value="ko">한국어</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="es">Español</option>
                </select>
              ) : (
                <p className="text-gray-900 font-medium">English</p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4" />
                Member Since
              </label>
              <p className="text-gray-900 font-medium">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => router.push("/bookings")}
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
            >
              <span className="text-2xl">📅</span>
              <div className="text-left">
                <div className="font-semibold">My Bookings</div>
                <div className="text-xs text-gray-600">View and manage bookings</div>
              </div>
            </Button>

            <Button
              onClick={() => router.push("/saved")}
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
            >
              <span className="text-2xl">❤️</span>
              <div className="text-left">
                <div className="font-semibold">Saved Items</div>
                <div className="text-xs text-gray-600">Your favorite places</div>
              </div>
            </Button>

            <Button
              onClick={() => router.push("/plan")}
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
            >
              <span className="text-2xl">🗺️</span>
              <div className="text-left">
                <div className="font-semibold">Plan New Trip</div>
                <div className="text-xs text-gray-600">Create your itinerary</div>
              </div>
            </Button>

            <Button
              onClick={() => router.push("/experiences")}
              variant="outline"
              className="w-full justify-start gap-3 h-auto py-4"
            >
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <div className="font-semibold">Browse Experiences</div>
                <div className="text-xs text-gray-600">Find activities</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
