"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Users, Sparkles, Mountain, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroModern() {
  const [activeDestination, setActiveDestination] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  const destinations = [
    { id: "shangri-la", name: "Shangri-La", x: "45%", y: "18%", color: "from-amber-500 to-amber-600" },
    { id: "lijiang", name: "Lijiang", x: "38%", y: "32%", color: "from-blue-500 to-blue-600" },
    { id: "dali", name: "Dali", x: "30%", y: "48%", color: "from-purple-500 to-purple-600" },
    { id: "kunming", name: "Kunming", x: "52%", y: "55%", color: "from-emerald-500 to-emerald-600" },
    { id: "xishuangbanna", name: "Xishuangbanna", x: "60%", y: "85%", color: "from-red-500 to-red-600" },
  ]

  // Animated gradient background
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setGradientPosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(99, 102, 241, 0.4), transparent 50%)`
        }}
      />

      {/* Animated particles/grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 pt-8 pb-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-8 z-10"
            style={{ y: y1, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20"
            >
              <Sparkles className="w-4 h-4" />
              Discover Authentic China
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Go Deep Into
                <motion.span
                  className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Yunnan's Soul
                </motion.span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Experience 25 ethnic cultures, breathtaking landscapes from snow mountains to tropical rainforests,
                and authentic adventures in China's most diverse province.
              </p>
            </motion.div>

            {/* Quick Stats with counter animation */}
            <motion.div
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { value: "25+", label: "Ethnic Groups", color: "from-emerald-400 to-emerald-600" },
                { value: "100+", label: "Destinations", color: "from-blue-400 to-blue-600" },
                { value: "1000+", label: "Experiences", color: "from-purple-400 to-purple-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r {stat.color} opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity" />
                  <div className="relative space-y-1 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/plan">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg px-8 shadow-lg shadow-emerald-500/50">
                    Start Planning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/culture">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                    Explore Culture
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: MapPin, label: "Interactive Map", color: "emerald", href: "/destinations" },
                { icon: Calendar, label: "Best Season", color: "blue", href: "/tools/weather" },
                { icon: Users, label: "Local Guides", color: "purple", href: "/guides" },
              ].map((action, idx) => (
                <Link key={idx} href={action.href}>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all border border-white/10 text-white"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <action.icon className={`w-4 h-4 text-${action.color}-400`} />
                    <span className="text-sm font-medium">{action.label}</span>
                  </motion.button>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Map */}
          <motion.div
            className="relative z-10"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glassmorphism card */}
              <motion.div
                className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Map Container with 3D effect */}
                <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                    {/* Yunnan province shape with glow */}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M 60,180 L 50,140 L 55,110 L 75,90 L 100,85 L 125,75 L 150,70 L 175,65 L 200,60 L 220,55 L 240,58 L 260,65 L 280,75 L 300,85 L 315,100 L 325,120 L 335,145 L 345,175 L 350,205 L 355,235 L 358,265 L 355,295 L 345,320 L 330,340 L 310,355 L 285,365 L 255,370 L 225,372 L 195,370 L 170,365 L 145,355 L 125,340 L 110,320 L 95,295 L 85,270 L 75,245 L 68,220 L 63,195 Z"
                      fill="rgba(255,255,255,0.1)"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>

                    {/* Mountain ranges - adjusted for new shape */}
                    <motion.path
                      d="M110,100 L125,65 L140,100 M180,85 L200,50 L220,85 M260,120 L280,85 L300,120"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </svg>

                  {/* Destination Markers with enhanced animations */}
                  {destinations.map((dest, idx) => (
                    <motion.div
                      key={dest.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: dest.x, top: dest.y }}
                      onMouseEnter={() => setActiveDestination(dest.id)}
                      onMouseLeave={() => setActiveDestination(null)}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                    >
                      {/* Pulse animation */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${dest.color} rounded-full`}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />

                      {/* Marker */}
                      <div className={`relative w-4 h-4 bg-gradient-to-r ${dest.color} rounded-full ring-4 ring-white/30 shadow-lg`} />

                      {/* Label with glassmorphism */}
                      <motion.div
                        className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap
                          bg-white/20 backdrop-blur-md text-white text-xs px-3 py-2 rounded-full shadow-lg border border-white/30`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: activeDestination === dest.id ? 1 : 0,
                          y: activeDestination === dest.id ? 0 : -10
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {dest.name}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/20 backdrop-blur-md rotate-45" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Info Cards with glassmorphism */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Top Destination</div>
                    <div className="font-bold text-white">Lijiang Old Town</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-white/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-300">Active Travelers</div>
                    <div className="font-bold text-white">12,847+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <motion.div
              className="w-1.5 h-3 bg-white/60 rounded-full mx-auto"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
