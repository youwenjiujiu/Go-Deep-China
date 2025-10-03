"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"

interface SearchWithSuggestionsProps {
  placeholder?: string
  onSearch: (query: string) => void
  suggestions?: string[]
  value: string
}

export function SearchWithSuggestions({
  placeholder = "Search...",
  onSearch,
  suggestions = [],
  value,
}: SearchWithSuggestionsProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (value && suggestions.length > 0) {
      const filtered = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5)
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }, [value, suggestions])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault()
      onSearch(filteredSuggestions[selectedIndex])
      setIsFocused(false)
      setSelectedIndex(-1)
    } else if (e.key === "Escape") {
      setIsFocused(false)
      setSelectedIndex(-1)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    onSearch(suggestion)
    setIsFocused(false)
    setSelectedIndex(-1)
  }

  const handleClear = () => {
    onSearch("")
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        onKeyDown={handleKeyDown}
        className="w-full pl-12 pr-12 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}

      {/* Suggestions Dropdown */}
      {isFocused && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
        >
          {filteredSuggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full px-4 py-3 text-left hover:bg-emerald-50 transition-colors flex items-center gap-3 ${
                idx === selectedIndex ? "bg-emerald-50" : ""
              }`}
            >
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
