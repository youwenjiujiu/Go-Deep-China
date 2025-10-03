'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, X } from 'lucide-react'
import { allEthnicGroups } from '@/lib/ethnicGroups'
import Link from 'next/link'
import EthnicGroupImage from './EthnicGroupImage'

export default function ViewAllEthnicGroups() {
  const [showAll, setShowAll] = useState(false)

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="text-lg px-8"
        onClick={() => setShowAll(true)}
      >
        View All 25 Ethnic Groups
      </Button>

      {/* Modal/Overlay for all ethnic groups */}
      {showAll && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-7xl mx-auto bg-white rounded-xl">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
                <h2 className="text-2xl font-bold">All 25 Ethnic Groups of Yunnan</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAll(false)}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {allEthnicGroups.map((group) => (
                    <Link key={group.id} href={`/culture/${group.id}`} onClick={() => setShowAll(false)}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        {/* Compact image header */}
                        <div className="h-32 relative overflow-hidden bg-gray-200">
                          <EthnicGroupImage
                            src={group.image}
                            alt={`${group.name} culture`}
                            fallbackText={group.nameZh}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                            {group.population}
                          </div>
                        </div>

                        <CardHeader className="pb-2">
                          <CardTitle className="text-base group-hover:text-emerald-600 transition-colors">
                            {group.name}
                          </CardTitle>
                          <div className="text-sm text-gray-600">{group.nameZh}</div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="line-clamp-1">{group.region}</span>
                          </div>
                          <p className="text-xs text-gray-700 line-clamp-2">
                            {group.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}