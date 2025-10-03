"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle, XCircle, AlertCircle } from "lucide-react"

// Sample booking data
const sampleBookings = [
  {
    id: "1",
    experienceName: "Naxi Cultural Walking Tour",
    destination: "Lijiang Old Town",
    date: "2025-11-15",
    time: "09:00",
    guests: 2,
    totalPrice: 560,
    status: "confirmed",
    bookingNumber: "GDC-A1B2C3",
    contactName: "John Doe",
    contactEmail: "john@example.com",
    contactPhone: "+1 234 567 8900",
  },
  {
    id: "2",
    experienceName: "Tiger Leaping Gorge Trek",
    destination: "Lijiang to Shangri-La",
    date: "2025-12-01",
    time: "08:00",
    guests: 4,
    totalPrice: 3400,
    status: "pending",
    bookingNumber: "GDC-D4E5F6",
    contactName: "John Doe",
    contactEmail: "john@example.com",
    contactPhone: "+1 234 567 8900",
  },
]

export default function BookingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming")

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

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-100 text-green-700 border-green-200",
      pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      cancelled: "bg-red-100 text-red-700 border-red-200",
      completed: "bg-blue-100 text-blue-700 border-blue-200",
    }

    const icons = {
      confirmed: <CheckCircle className="w-4 h-4" />,
      pending: <AlertCircle className="w-4 h-4" />,
      cancelled: <XCircle className="w-4 h-4" />,
      completed: <CheckCircle className="w-4 h-4" />,
    }

    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border-2 ${styles[status as keyof typeof styles]}`}>
        {icons[status as keyof typeof icons]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your travel bookings and reservations</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`pb-4 px-2 text-sm font-semibold transition-colors ${
                activeTab === "upcoming"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`pb-4 px-2 text-sm font-semibold transition-colors ${
                activeTab === "past"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Past
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={`pb-4 px-2 text-sm font-semibold transition-colors ${
                activeTab === "cancelled"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {activeTab === "upcoming" && sampleBookings.length > 0 ? (
            sampleBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image Placeholder */}
                    <div className="w-full md:w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-6xl">
                      🏔️
                    </div>

                    {/* Booking Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {booking.experienceName}
                          </h3>
                          <p className="text-gray-600 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {booking.destination}
                          </p>
                        </div>
                        {getStatusBadge(booking.status)}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="text-xs text-gray-500">Date</div>
                            <div className="font-semibold">{booking.date}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="text-xs text-gray-500">Time</div>
                            <div className="font-semibold">{booking.time}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                          <Users className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="text-xs text-gray-500">Guests</div>
                            <div className="font-semibold">{booking.guests} people</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                          <div className="text-xs text-gray-500">Booking #</div>
                          <div className="font-semibold font-mono text-sm">{booking.bookingNumber}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-sm text-gray-600">Total Price</div>
                          <div className="text-2xl font-bold text-emerald-600">¥{booking.totalPrice}</div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            Contact Support
                          </Button>
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No {activeTab} bookings
                </h3>
                <p className="text-gray-600 mb-6">
                  You don't have any {activeTab} bookings at the moment.
                </p>
                <Button
                  onClick={() => router.push("/experiences")}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Browse Experiences
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Help Section */}
        {sampleBookings.length > 0 && (
          <Card className="mt-8 bg-blue-50 border-2 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-blue-900 mb-3">Need Help?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">24/7 Support Hotline</div>
                    <div>+86 123 4567 8900</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Email Support</div>
                    <div>support@godeepchina.com</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
