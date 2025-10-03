"use client"

import { useState } from "react"
import { X, Calendar, Users, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    name: string
    nameZh?: string
    price: number
    duration?: string
    category?: string
    image?: string
  }
  type: "experience" | "accommodation" | "guide"
}

export function BookingModal({ isOpen, onClose, item, type }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In production, this would send data to API
  }

  const totalPrice = item.price * bookingData.guests

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="font-bold text-lg mb-4">Select Date & Time</h3>

      {/* Booking Info Alerts */}
      <div className="space-y-2">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold">Confirmation Type: Pending Confirmation</p>
            <p className="text-blue-700 mt-1">Your booking will be confirmed within 24 hours</p>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
          <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900">
            <p className="font-semibold">Minimum Group Size: 4 people</p>
            <p className="text-amber-700 mt-1">Tour departs only when minimum group size is met</p>
          </div>
        </div>

        <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-900">
            <p className="font-semibold">Departure Status: 6/10 spots booked</p>
            <p className="text-green-700 mt-1">This departure is guaranteed to operate</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          Date
        </label>
        <input
          type="date"
          value={bookingData.date}
          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
          min={new Date().toISOString().split('T')[0]}
        />
        <p className="text-xs text-gray-500 mt-1">
          Available departure dates: Every Monday, Wednesday, Friday
        </p>
      </div>

      {type === "experience" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4 inline mr-1" />
            Time
          </label>
          <select
            value={bookingData.time}
            onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option value="">Select time</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
          </select>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Users className="w-4 h-4 inline mr-1" />
          Number of Guests
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setBookingData({ ...bookingData, guests: Math.max(1, bookingData.guests - 1) })}
            className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-colors font-bold"
          >
            -
          </button>
          <span className="text-2xl font-bold w-12 text-center">{bookingData.guests}</span>
          <button
            type="button"
            onClick={() => setBookingData({ ...bookingData, guests: Math.min(10, bookingData.guests + 1) })}
            className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-colors font-bold"
          >
            +
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">Maximum 10 guests per booking</p>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="font-bold text-lg mb-4">Contact Information</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          value={bookingData.name}
          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={bookingData.email}
          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={bookingData.phone}
          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="+1 234 567 8900"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          value={bookingData.specialRequests}
          onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-24"
          placeholder="Dietary restrictions, accessibility needs, etc."
        />
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Confirmed!</h3>
      <p className="text-gray-600 mb-6">
        We've sent a confirmation email to <strong>{bookingData.email}</strong>
      </p>

      <Card className="bg-gray-50 border-2 border-gray-200 mb-6">
        <CardContent className="p-6 text-left">
          <h4 className="font-bold text-sm text-gray-900 mb-3">Booking Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Activity:</span>
              <span className="font-semibold">{item.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{bookingData.date}</span>
            </div>
            {bookingData.time && (
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{bookingData.time}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Guests:</span>
              <span className="font-semibold">{bookingData.guests}</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between text-lg">
              <span className="font-bold text-gray-900">Total:</span>
              <span className="font-bold text-emerald-600">¥{totalPrice}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-left mb-6">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-semibold mb-1">What's Next?</p>
            <ul className="space-y-1 text-blue-800">
              <li>• Check your email for booking details</li>
              <li>• Save the confirmation number: <strong>GDC-{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong></li>
              <li>• We'll contact you 24 hours before your activity</li>
            </ul>
          </div>
        </div>
      </div>

      <Button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700">
        Done
      </Button>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{item.name}</h2>
            {item.nameZh && <p className="text-gray-600">{item.nameZh}</p>}
            {item.duration && (
              <p className="text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 inline mr-1" />
                {item.duration}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {step} of 2
              </span>
              <span className="text-sm text-gray-600">
                {step === 1 ? "Date & Guests" : "Contact Info"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {!isSubmitted ? (
            <>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}

              {/* Price Summary */}
              <Card className="mt-6 bg-emerald-50 border-2 border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-700" />
                      <div>
                        <p className="text-sm text-emerald-800">Total Price</p>
                        <p className="text-xs text-emerald-700">
                          ¥{item.price} × {bookingData.guests} {bookingData.guests > 1 ? "guests" : "guest"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-emerald-700">¥{totalPrice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                {step < 2 ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    disabled={!bookingData.date || (type === "experience" && !bookingData.time)}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                  >
                    Confirm Booking
                  </Button>
                )}
              </div>
            </>
          ) : (
            renderConfirmation()
          )}
        </form>
      </div>
    </div>
  )
}
