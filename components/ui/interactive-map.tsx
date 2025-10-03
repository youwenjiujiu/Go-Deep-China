"use client"

import { useState, useCallback, useEffect } from "react"
import dynamic from 'next/dynamic'
import { MapPin, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.Map })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100">Loading map...</div>
})

const Marker = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.Marker })), { ssr: false })
const Popup = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.Popup })), { ssr: false })
const NavigationControl = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.NavigationControl })), { ssr: false })
const GeolocateControl = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.GeolocateControl })), { ssr: false })
const FullscreenControl = dynamic(() => import('react-map-gl/mapbox').then(mod => ({ default: mod.FullscreenControl })), { ssr: false })

interface Destination {
  id: number
  name: string
  nameZh: string
  slug: string
  latitude: number
  longitude: number
  rating: number
  reviews: number
  image: string
  description: string
  altitude: number
}

interface InteractiveMapProps {
  destinations: Destination[]
  initialViewState?: {
    latitude: number
    longitude: number
    zoom: number
  }
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example"

export function InteractiveMap({ destinations, initialViewState }: InteractiveMapProps) {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite'>('streets')
  const [viewState, setViewState] = useState({
    latitude: initialViewState?.latitude || 25.0,
    longitude: initialViewState?.longitude || 101.0,
    zoom: initialViewState?.zoom || 6
  })

  const handleMarkerClick = useCallback((destination: Destination) => {
    setSelectedDestination(destination)
  }, [])

  const toggleMapStyle = () => {
    setMapStyle(prev => prev === 'streets' ? 'satellite' : 'streets')
  }

  const currentMapStyle = mapStyle === 'streets'
    ? 'mapbox://styles/mapbox/streets-v12'
    : 'mapbox://styles/mapbox/satellite-streets-v12'

  return (
    <div className="w-full rounded-lg shadow-xl relative" style={{ height: '600px', backgroundColor: '#f0f0f0' }}>
      <div className="absolute inset-0 rounded-lg" style={{ overflow: 'hidden' }}>
        {/* @ts-ignore */}
        <Map
          initialViewState={viewState}
          mapStyle={currentMapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width: '100%', height: '100%' }}
          onError={(e: any) => console.error('Mapbox error:', e)}
          onLoad={() => console.log('Map loaded successfully')}
          attributionControl={true}
          reuseMaps
          padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
        >
        {/* Navigation Controls */}
        {/* @ts-ignore */}
        <NavigationControl position="top-right" />
        {/* @ts-ignore */}
        <GeolocateControl position="top-right" />
        {/* @ts-ignore */}
        <FullscreenControl position="top-right" />

        {/* Destination Markers */}
        {destinations.map((destination) => (
          // @ts-ignore
          <Marker
            key={destination.id}
            latitude={destination.latitude}
            longitude={destination.longitude}
            onClick={() => handleMarkerClick(destination)}
          >
            <button
              className="cursor-pointer transform hover:scale-125 transition-transform duration-200 animate-pulse"
              onClick={() => handleMarkerClick(destination)}
            >
              <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
            </button>
          </Marker>
        ))}

        {/* Selected Destination Popup */}
        {selectedDestination && (
          // @ts-ignore
          <Popup
            latitude={selectedDestination.latitude}
            longitude={selectedDestination.longitude}
            onClose={() => setSelectedDestination(null)}
            closeButton={true}
            closeOnClick={false}
            anchor="top"
            offset={10}
          >
            <div className="p-2" style={{ minWidth: '200px', maxWidth: '240px' }}>
              <h3 className="font-bold text-sm mb-0.5">{selectedDestination.name}</h3>
              <p className="text-xs text-gray-600 mb-1.5">{selectedDestination.nameZh}</p>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex items-center gap-0.5">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs font-semibold">{selectedDestination.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({selectedDestination.reviews})</span>
              </div>
              <Link href={`/destinations/${selectedDestination.slug}`}>
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-xs py-1 h-7">
                  View Details
                </Button>
              </Link>
            </div>
          </Popup>
        )}
        </Map>
      </div>

      {/* Map Style Toggle */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          onClick={toggleMapStyle}
          size="sm"
          className="bg-white text-gray-700 hover:bg-gray-100 shadow-lg gap-2"
          variant="outline"
        >
          <Layers className="w-4 h-4" />
          {mapStyle === 'streets' ? 'Satellite' : 'Streets'}
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600" />
          Map Legend
        </h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-600 fill-red-600" />
            <span>Destination Location</span>
          </div>
          <div className="text-gray-600 mt-2">
            Click on any marker to view destination details
          </div>
        </div>
      </div>
    </div>
  )
}
