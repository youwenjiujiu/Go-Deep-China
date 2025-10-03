"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Menu, X, Globe, Mountain, ChevronDown, User, LogOut, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@/contexts/chat-context"

export default function Header() {
  const { data: session } = useSession()
  const { getTotalUnread } = useChat()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [toolsCloseTimeout, setToolsCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const [userMenuCloseTimeout, setUserMenuCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleToolsMouseEnter = () => {
    if (toolsCloseTimeout) {
      clearTimeout(toolsCloseTimeout)
      setToolsCloseTimeout(null)
    }
    setIsToolsOpen(true)
  }

  const handleToolsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsToolsOpen(false)
    }, 200)
    setToolsCloseTimeout(timeout)
  }

  const handleUserMenuMouseEnter = () => {
    if (userMenuCloseTimeout) {
      clearTimeout(userMenuCloseTimeout)
      setUserMenuCloseTimeout(null)
    }
    setIsUserMenuOpen(true)
  }

  const handleUserMenuMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsUserMenuOpen(false)
    }, 200)
    setUserMenuCloseTimeout(timeout)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Mountain className="h-8 w-8 text-emerald-600" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">GoDeep China</span>
            <span className="text-xs text-gray-600">Discover Yunnan</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Destinations
          </Link>
          <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Experiences
          </Link>
          <Link href="/culture" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Culture
          </Link>
          <Link href="/plan" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Plan Trip
          </Link>

          {/* Messages Link with Badge */}
          {session && (
            <Link href="/messages" className="relative text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              Messages
              {getTotalUnread() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalUnread()}
                </span>
              )}
            </Link>
          )}

          {/* Travel Tools Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={handleToolsMouseEnter}
              onMouseLeave={handleToolsMouseLeave}
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors flex items-center gap-1"
            >
              Travel Tools
              <ChevronDown className="h-4 w-4" />
            </button>

            {isToolsOpen && (
              <div
                onMouseEnter={handleToolsMouseEnter}
                onMouseLeave={handleToolsMouseLeave}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
              >
                <Link href="/tools/visa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  📋 Visa Guide
                </Link>
                <Link href="/tools/weather" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  ☁️ Weather & Climate
                </Link>
                <Link href="/tools/language" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  📖 Language Helper
                </Link>
                <Link href="/tools/currency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  💱 Currency Converter
                </Link>
                <Link href="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  🧑‍🏫 Local Guides
                </Link>
                <Link href="/festivals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  🎉 Festivals
                </Link>
                <Link href="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                  📸 Photo Gallery
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <div className="relative">
              <button
                onMouseEnter={handleUserMenuMouseEnter}
                onMouseLeave={handleUserMenuMouseLeave}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {session.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-sm font-medium">{session.user?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isUserMenuOpen && (
                <div
                  onMouseEnter={handleUserMenuMouseEnter}
                  onMouseLeave={handleUserMenuMouseLeave}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                >
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    <User className="w-4 h-4 inline mr-2" />
                    My Profile
                  </Link>
                  <Link href="/bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    📅 My Bookings
                  </Link>
                  <Link href="/saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    ❤️ Saved Items
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Planning
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link href="/destinations" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
              Destinations
            </Link>
            <Link href="/experiences" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
              Experiences
            </Link>
            <Link href="/culture" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
              Culture
            </Link>
            <Link href="/plan" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
              Plan Trip
            </Link>

            {/* Mobile Tools Section */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Travel Tools</div>
              <div className="pl-4 space-y-3">
                <Link href="/tools/visa" className="block text-sm text-gray-700 hover:text-emerald-600">
                  📋 Visa Guide
                </Link>
                <Link href="/tools/weather" className="block text-sm text-gray-700 hover:text-emerald-600">
                  ☁️ Weather & Climate
                </Link>
                <Link href="/tools/language" className="block text-sm text-gray-700 hover:text-emerald-600">
                  📖 Language Helper
                </Link>
                <Link href="/tools/currency" className="block text-sm text-gray-700 hover:text-emerald-600">
                  💱 Currency Converter
                </Link>
                <Link href="/guides" className="block text-sm text-gray-700 hover:text-emerald-600">
                  🧑‍🏫 Local Guides
                </Link>
                <Link href="/festivals" className="block text-sm text-gray-700 hover:text-emerald-600">
                  🎉 Festivals
                </Link>
                <Link href="/gallery" className="block text-sm text-gray-700 hover:text-emerald-600">
                  📸 Photo Gallery
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Globe className="h-4 w-4" />
                EN
              </Button>
              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Start Planning
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
