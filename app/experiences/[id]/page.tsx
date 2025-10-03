"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Star, Clock, Users, MapPin, Calendar, Heart, Share2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookingModal } from "@/components/ui/booking-modal"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { ReviewsSection } from "@/components/ui/reviews-section"

const experiences = [
  {
    id: 1,
    title: "Naxi Cultural Walking Tour",
    category: "cultural",
    destination: "Lijiang Old Town",
    description: "Explore ancient streets with a local Naxi guide, visit traditional workshops, learn about Dongba script",
    fullDescription: "Immerse yourself in the rich culture of the Naxi people with this comprehensive walking tour of Lijiang Old Town. Led by a local Naxi guide, you'll explore the ancient cobblestone streets, visit traditional workshops where artisans practice centuries-old crafts, and learn about the fascinating Dongba script - one of the world's last living pictographic writing systems.\n\nYour journey will take you through the heart of the UNESCO World Heritage site, visiting key landmarks including the Mu Residence, traditional Naxi houses, and local markets. You'll have the opportunity to taste authentic Naxi snacks, observe traditional music performances, and gain deep insights into the unique matriarchal society and animistic beliefs that have shaped Naxi culture for over a thousand years.",
    duration: "3 hours",
    price: 280,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 127,
    groupSize: "2-8 people",
    image: "https://images.unsplash.com/photo-1599498209715-b1c7f0f0e0c3?w=800",
    featured: true,
    included: [
      "Professional Naxi guide",
      "Traditional snack tasting",
      "Entrance to cultural sites",
      "Small group experience"
    ],
    notIncluded: [
      "Personal purchases",
      "Additional meals",
      "Transportation to meeting point"
    ],
    meetingPoint: "Lijiang Old Town Square, by the large water wheel",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1599498209715-b1c7f0f0e0c3?w=800",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
    ]
  },
  {
    id: 2,
    title: "Bai Tie-Dye Workshop",
    category: "handicraft",
    destination: "Dali Ancient City",
    description: "Learn the ancient Bai art of tie-dyeing with natural indigo dye. Create your own scarf to take home",
    fullDescription: "Experience the centuries-old Bai tradition of tie-dyeing in this hands-on workshop. You'll work with master artisans to learn the intricate techniques passed down through generations, using natural indigo dye extracted from plants.\n\nDuring this immersive session, you'll learn about the cultural significance of tie-dye in Bai society, master various folding and binding techniques, and create your own unique scarf to take home as a memorable souvenir. This intimate workshop provides deep insight into Bai culture while allowing you to create something beautiful with your own hands.",
    duration: "2 hours",
    price: 180,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 93,
    groupSize: "1-10 people",
    image: "https://images.unsplash.com/photo-1604882737321-c8c7e4940f4f?w=800",
    featured: true,
    included: [
      "All materials and dye",
      "Expert instruction",
      "Your finished scarf",
      "Tea and refreshments"
    ],
    notIncluded: [
      "Transportation",
      "Additional scarves (can be purchased)"
    ],
    meetingPoint: "Bai Tie-Dye Cultural Center, Dali Ancient City South Gate",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1604882737321-c8c7e4940f4f?w=800",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800"
    ]
  },
  {
    id: 3,
    title: "Tibetan Monastery Experience",
    category: "spiritual",
    destination: "Shangri-La",
    description: "Visit Songzanlin Monastery with a Tibetan guide. Observe morning prayers and enjoy butter tea with monks",
    fullDescription: "Begin your day with a profound spiritual experience at Songzanlin Monastery, the largest Tibetan Buddhist monastery in Yunnan Province. Your Tibetan guide will lead you through this architectural masterpiece, often called the 'Little Potala Palace.'\n\nYou'll witness the mesmerizing morning prayer rituals, learn about Tibetan Buddhism's rich traditions, and have the rare opportunity to share butter tea with resident monks. The experience includes exploring the monastery's ornate halls, prayer wheels, and sacred artwork while gaining insights into the daily life of Tibetan monks and the philosophy that guides them.",
    duration: "4 hours",
    price: 380,
    currency: "CNY",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 156,
    groupSize: "2-6 people",
    image: "https://images.unsplash.com/photo-1545242726-7c20e720f986?w=800",
    featured: true,
    included: [
      "Monastery entrance fee",
      "Tibetan guide",
      "Butter tea ceremony",
      "Cultural insights and Q&A"
    ],
    notIncluded: [
      "Donations (optional)",
      "Transportation from hotel",
      "Breakfast"
    ],
    meetingPoint: "Songzanlin Monastery main entrance",
    languages: ["English", "Chinese", "Tibetan"],
    gallery: [
      "https://images.unsplash.com/photo-1545242726-7c20e720f986?w=800",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
      "https://images.unsplash.com/photo-1544990731-d7a1d4c223d5?w=800"
    ]
  },
  {
    id: 4,
    title: "Tiger Leaping Gorge Trek",
    category: "adventure",
    destination: "Lijiang to Shangri-La",
    description: "2-day trekking adventure through one of the world's deepest gorges with stunning mountain views",
    fullDescription: "Embark on an unforgettable 2-day trek through Tiger Leaping Gorge, one of the world's deepest river canyons. This challenging but rewarding adventure offers spectacular views of the Jade Dragon and Haba Snow Mountains towering over the rushing Jinsha River.\n\nYou'll hike along ancient paths carved into cliff faces, passing through small Naxi villages and staying overnight in a mountain guesthouse with stunning gorge views. Your experienced guide will share stories of the gorge's legends, point out rare Himalayan wildlife, and ensure your safety throughout this bucket-list trek. This is an adventure that combines physical challenge with natural beauty and cultural immersion.",
    duration: "2 days",
    price: 850,
    currency: "CNY",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 284,
    groupSize: "4-12 people",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    featured: true,
    included: [
      "Professional trekking guide",
      "1 night guesthouse accommodation",
      "All meals during trek",
      "Entrance fees",
      "First aid kit"
    ],
    notIncluded: [
      "Transportation to/from trailhead",
      "Personal trekking gear",
      "Travel insurance",
      "Beverages"
    ],
    meetingPoint: "Qiaotou Town, Tiger Leaping Gorge entrance",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800"
    ]
  },
  {
    id: 5,
    title: "Yunnan Coffee Farm Tour",
    category: "tea",
    destination: "Pu'er / Baoshan",
    description: "Visit specialty coffee plantations, learn about processing, and taste award-winning single-origin beans",
    fullDescription: "Discover why Yunnan is becoming one of Asia's premier specialty coffee regions on this immersive farm tour. You'll visit sustainable coffee plantations nestled in the mountains, learning about the unique terroir that gives Yunnan coffee its distinctive flavor profile.\n\nWatch the entire coffee process from cherry to cup, participate in a professional cupping session, and taste award-winning single-origin beans. Your expert guide will explain how altitude, climate, and processing methods create the complex flavors that have put Yunnan coffee on the world map.",
    duration: "Half day",
    price: 320,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 68,
    groupSize: "2-8 people",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    featured: false,
    included: [
      "Farm tour with coffee expert",
      "Professional cupping session",
      "Coffee samples to taste",
      "Light refreshments"
    ],
    notIncluded: [
      "Coffee beans purchase",
      "Transportation",
      "Meals"
    ],
    meetingPoint: "Varies by farm location (provided upon booking)",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
    ]
  },
  {
    id: 6,
    title: "Wild Elephant Sanctuary Visit",
    category: "wildlife",
    destination: "Xishuangbanna",
    description: "Observe wild Asian elephants in their natural habitat with expert naturalist guides",
    fullDescription: "Experience the thrill of observing wild Asian elephants in their natural rainforest habitat in Xishuangbanna. Led by expert naturalist guides, you'll trek through lush tropical forest to areas where elephant herds are known to frequent.\n\nLearn about elephant behavior, conservation efforts, and the delicate balance between wildlife protection and local communities. This full-day adventure combines wildlife watching with rainforest ecology education, offering a rare glimpse into the lives of these magnificent creatures in one of China's most biodiverse regions.",
    duration: "Full day",
    price: 580,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 142,
    groupSize: "4-15 people",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    featured: false,
    included: [
      "Expert naturalist guide",
      "Park entrance fees",
      "Lunch",
      "Transportation within park",
      "Binoculars (if needed)"
    ],
    notIncluded: [
      "Hotel pickup/drop-off",
      "Personal expenses",
      "Gratuities"
    ],
    meetingPoint: "Wild Elephant Valley entrance",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
    ]
  },
  {
    id: 7,
    title: "Crossing-Bridge Noodles Cooking Class",
    category: "food",
    destination: "Kunming",
    description: "Master the art of making Yunnan's most famous dish from scratch with a local chef",
    fullDescription: "Learn to prepare Yunnan's most iconic dish - Crossing-Bridge Noodles (过桥米线) - in this hands-on cooking class. A local chef will teach you the secrets behind this beloved delicacy, from making the rice noodles to preparing the rich, aromatic broth and fresh accompaniments.\n\nYou'll hear the romantic legend behind the dish's name while learning authentic techniques passed down through generations. The class includes a visit to a local market to select fresh ingredients, followed by cooking and enjoying your creation. Perfect for food lovers who want to take a taste of Yunnan home with them.",
    duration: "3 hours",
    price: 220,
    currency: "CNY",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 89,
    groupSize: "2-10 people",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    featured: false,
    included: [
      "Professional chef instruction",
      "All ingredients and equipment",
      "Recipe cards to take home",
      "Your lunch/dinner",
      "Market tour"
    ],
    notIncluded: [
      "Hotel pickup",
      "Additional dishes",
      "Beverages"
    ],
    meetingPoint: "Cooking school in Kunming city center (address provided)",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
    ]
  },
  {
    id: 8,
    title: "Yuanyang Rice Terraces Photography Tour",
    category: "photography",
    destination: "Yuanyang",
    description: "Capture sunrise and sunset at UNESCO rice terraces with a professional photographer guide",
    fullDescription: "Join a professional photographer on this 2-day journey to capture the breathtaking beauty of Yuanyang's UNESCO World Heritage rice terraces. You'll visit the best viewpoints at optimal times to photograph the terraces in their most stunning light - from golden sunrise reflections to dramatic sunset colors.\n\nYour expert guide will provide technical photography instruction, help you compose shots, and share insights about the Hani minority people who sculpted these mountains over 1,300 years. This tour includes visits to traditional Hani villages, adding cultural depth to your photographic portfolio.",
    duration: "2 days",
    price: 1280,
    currency: "CNY",
    difficulty: "Moderate",
    rating: 5.0,
    reviews: 73,
    groupSize: "2-6 people",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800",
    featured: true,
    included: [
      "Professional photographer guide",
      "1 night accommodation",
      "All meals",
      "Private transportation",
      "Photo location permits"
    ],
    notIncluded: [
      "Camera equipment",
      "Drone fees (if applicable)",
      "Personal expenses",
      "Photo printing services"
    ],
    meetingPoint: "Yuanyang County bus station",
    languages: ["English", "Chinese"],
    gallery: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800",
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800"
    ]
  },
]

export default function ExperienceDetailPage() {
  const params = useParams()
  const experienceId = parseInt(params.id as string)
  const experience = experiences.find(exp => exp.id === experienceId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Experience not found</h1>
          <Link href="/experiences">
            <Button>Back to Experiences</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/experiences" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Experiences</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Main Image */}
            <div className="md:col-span-2 relative h-96 md:h-[500px] rounded-xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${experience.gallery[selectedImage]})` }}
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <FavoriteButton
                  id={experience.id.toString()}
                  type="experience"
                  name={experience.title}
                  image={experience.image}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
                  iconClassName="w-6 h-6"
                />
                <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex md:flex-col gap-4">
              {experience.gallery.slice(0, 3).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-32 md:h-40 flex-1 rounded-lg overflow-hidden transition-all ${
                    selectedImage === idx ? 'ring-4 ring-emerald-600' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Quick Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                {experience.featured && (
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  experience.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  experience.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {experience.difficulty}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>{experience.destination}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{experience.rating}</span>
                  <span>({experience.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span>{experience.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-gray-600">Languages:</span>
                  <span className="font-medium">{experience.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Experience</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {experience.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-600">What's Included</h3>
                    <ul className="space-y-2">
                      {experience.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-600">Not Included</h3>
                    <ul className="space-y-2">
                      {experience.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-5 h-5 flex-shrink-0 text-gray-400 mt-0.5">×</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Meeting Point */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Meeting Point</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{experience.meetingPoint}</p>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <ReviewsSection
              itemId={experience.id.toString()}
              itemType="experience"
              itemName={experience.title}
            />
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-emerald-600">¥{experience.price}</span>
                    <span className="text-gray-600">per person</span>
                  </div>
                  <p className="text-sm text-gray-500">Best price guarantee</p>
                </div>

                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 mb-4 h-12 text-lg"
                >
                  Book Now
                </Button>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Free cancellation up to 24 hours before</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">Small group experience</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold mb-3">Have questions?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Our local experts are here to help you plan the perfect experience.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        item={{
          name: experience.title,
          price: experience.price,
          duration: experience.duration,
          category: experience.category,
          image: experience.image,
        }}
        type="experience"
      />
    </div>
  )
}
