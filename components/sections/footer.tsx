import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Mountain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">GoDeep China</span>
                <span className="text-xs text-gray-400">Discover Yunnan</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              Your gateway to authentic travel experiences in Yunnan, China. Explore diverse cultures,
              stunning landscapes, and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations" className="hover:text-emerald-500 transition-colors">Destinations</Link></li>
              <li><Link href="/experiences" className="hover:text-emerald-500 transition-colors">Experiences</Link></li>
              <li><Link href="/culture" className="hover:text-emerald-500 transition-colors">Ethnic Cultures</Link></li>
              <li><Link href="/food" className="hover:text-emerald-500 transition-colors">Food & Cuisine</Link></li>
              <li><Link href="/festivals" className="hover:text-emerald-500 transition-colors">Festivals</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/plan" className="hover:text-emerald-500 transition-colors">Trip Planner</Link></li>
              <li><Link href="/visa" className="hover:text-emerald-500 transition-colors">Visa Guide</Link></li>
              <li><Link href="/tools" className="hover:text-emerald-500 transition-colors">Travel Tools</Link></li>
              <li><Link href="/guides" className="hover:text-emerald-500 transition-colors">Local Guides</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-500 transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
              <li><Link href="/community" className="hover:text-emerald-500 transition-colors">Community</Link></li>
              <li><Link href="/partners" className="hover:text-emerald-500 transition-colors">Partners</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-500 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © 2024 GoDeep China. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-emerald-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
