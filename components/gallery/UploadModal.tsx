"use client"

import { useState, useRef } from "react"
import { X, Upload, Image as ImageIcon, MapPin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadModalProps {
  onClose: () => void
  onUpload: (imageData: {
    file: File
    title: string
    titleZh: string
    description: string
    location: string
    category: string
  }) => void
}

export default function UploadModal({ onClose, onUpload }: UploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [formData, setFormData] = useState({
    title: "",
    titleZh: "",
    description: "",
    location: "",
    category: "landscapes"
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    { id: "landscapes", name: "Landscapes", icon: "🏞️" },
    { id: "culture", name: "Culture", icon: "🏮" },
    { id: "festivals", name: "Festivals", icon: "🎉" },
    { id: "architecture", name: "Architecture", icon: "🏛️" },
    { id: "people", name: "People", icon: "👥" },
    { id: "wildlife", name: "Wildlife", icon: "🦜" },
  ]

  const locations = [
    "Kunming", "Lijiang", "Dali", "Shangri-La", "Xishuangbanna",
    "Yuanyang", "Lugu Lake", "Chuxiong", "Deqin", "Jianchuan", "Other"
  ]

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB")
        return
      }
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) {
      alert("Please select an image")
      return
    }
    if (!formData.title || !formData.description || !formData.location) {
      alert("Please fill in all required fields")
      return
    }

    onUpload({
      file: selectedFile,
      ...formData
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Upload Your Photo</h2>
              <p className="text-sm opacity-90">Share your Yunnan moments with the community</p>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo *
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                previewUrl
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-indigo-600 hover:bg-gray-50"
              }`}
            >
              {previewUrl ? (
                <div className="space-y-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-600">
                    Click to change image
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-gray-700 font-medium">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title (English) *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Sunset over Jade Dragon Snow Mountain"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Title Chinese */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title (中文)
            </label>
            <input
              type="text"
              value={formData.titleZh}
              onChange={(e) => setFormData({ ...formData, titleZh: e.target.value })}
              placeholder="e.g., 玉龙雪山日落"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us about this photo..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location *
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select a location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Category *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat.id })}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    formData.category === cat.id
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-200 hover:border-indigo-600"
                  }`}
                >
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-sm font-semibold">{cat.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Submission Guidelines</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Only upload photos you own or have permission to share</li>
              <li>• Photos should be from Yunnan Province</li>
              <li>• Ensure images are high quality and properly exposed</li>
              <li>• Respect cultural sensitivity when photographing people</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Photo
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
