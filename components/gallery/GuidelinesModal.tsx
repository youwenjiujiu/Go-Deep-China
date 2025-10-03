"use client"

import { X, CheckCircle, XCircle, AlertCircle, Camera, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GuidelinesModalProps {
  onClose: () => void
  onAccept?: () => void
}

export default function GuidelinesModal({ onClose, onAccept }: GuidelinesModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Photo Submission Guidelines</h2>
              <p className="text-sm opacity-90">Please read these guidelines before uploading</p>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Introduction */}
          <div className="text-center pb-6 border-b">
            <Camera className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              Thank you for sharing your Yunnan experiences with our community! Your photos help
              inspire others to discover this beautiful province.
            </p>
          </div>

          {/* What We Accept */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">What We Accept</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✓ Landscapes & Nature</h4>
                <p className="text-sm text-green-800">
                  Mountains, lakes, rice terraces, forests, and natural scenery from Yunnan Province
                </p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✓ Cultural Sites</h4>
                <p className="text-sm text-green-800">
                  Ancient towns, temples, traditional architecture, and cultural landmarks
                </p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✓ Festivals & Events</h4>
                <p className="text-sm text-green-800">
                  Traditional festivals, celebrations, and cultural performances
                </p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✓ Local Life</h4>
                <p className="text-sm text-green-800">
                  Markets, crafts, daily life, and authentic cultural experiences
                </p>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Photo Requirements</h3>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-blue-900">Original Content Only</p>
                  <p className="text-sm text-blue-800">
                    You must own the copyright or have explicit permission to share the photo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-blue-900">High Quality Images</p>
                  <p className="text-sm text-blue-800">
                    Photos should be well-exposed, in focus, and high resolution (minimum 1920x1080)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-blue-900">Yunnan Province Only</p>
                  <p className="text-sm text-blue-800">
                    Photos must be taken within Yunnan Province, China
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-blue-900">Accurate Information</p>
                  <p className="text-sm text-blue-800">
                    Provide correct titles, descriptions, and location information
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-blue-900">File Size Limit</p>
                  <p className="text-sm text-blue-800">
                    Maximum file size: 10MB. Supported formats: JPG, PNG
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Don't Accept */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">What We Don't Accept</h3>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 space-y-2">
              <p className="text-sm text-red-800">✗ Photos taken outside of Yunnan Province</p>
              <p className="text-sm text-red-800">✗ Copyrighted images without permission</p>
              <p className="text-sm text-red-800">✗ Low quality, blurry, or poorly exposed photos</p>
              <p className="text-sm text-red-800">✗ Heavily edited or filtered images that misrepresent reality</p>
              <p className="text-sm text-red-800">✗ Photos containing offensive, inappropriate, or harmful content</p>
              <p className="text-sm text-red-800">✗ Commercial advertisements or promotional material</p>
              <p className="text-sm text-red-800">✗ Watermarked images (except photographer's subtle signature)</p>
            </div>
          </section>

          {/* Cultural Sensitivity */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Cultural Sensitivity</h3>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 space-y-3">
              <p className="text-sm text-purple-900">
                Yunnan is home to 25 ethnic minorities, each with unique cultures and traditions.
                Please be respectful when photographing people and cultural sites:
              </p>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">•</span>
                  <span>Always ask permission before photographing people, especially in ethnic minority villages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">•</span>
                  <span>Respect religious sites and ceremonies - some areas may prohibit photography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">•</span>
                  <span>Avoid photos that could stereotype or misrepresent ethnic communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">•</span>
                  <span>Be mindful of sacred objects, rituals, and private moments</span>
                </li>
              </ul>
            </div>
          </section>

          {/* License */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-900">Usage License</h3>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <p className="text-sm text-gray-800 mb-3">
                By uploading photos to GoDeep China, you grant us a non-exclusive license to:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Display your photos in our gallery and website</li>
                <li>• Share them on our social media channels (with credit)</li>
                <li>• Use them in promotional materials for GoDeep China</li>
              </ul>
              <p className="text-sm text-gray-800 mt-4">
                <strong>You retain full copyright</strong> of your photos and can request removal at any time.
              </p>
            </div>
          </section>

          {/* Tips */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📸 Pro Tips for Great Photos</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">🌅 Golden Hour</p>
                <p>Shoot during sunrise/sunset for best lighting</p>
              </div>
              <div>
                <p className="font-semibold mb-1">🎨 Composition</p>
                <p>Use rule of thirds and leading lines</p>
              </div>
              <div>
                <p className="font-semibold mb-1">📍 Location</p>
                <p>Include specific location names for context</p>
              </div>
              <div>
                <p className="font-semibold mb-1">✍️ Descriptions</p>
                <p>Write detailed, informative descriptions</p>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex gap-4 pt-6 border-t">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              {onAccept ? "Cancel" : "Close"}
            </Button>
            <Button
              onClick={onAccept || onClose}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700"
            >
              {onAccept ? "I Agree - Start Uploading" : "Close"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
