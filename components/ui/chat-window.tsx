"use client"

import { useState, useEffect, useRef } from "react"
import { useChat } from "@/contexts/chat-context"
import { X, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatWindowProps {
  onClose: () => void
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const { activeConversation, sendMessage, markAsRead } = useChat()
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeConversation) {
      markAsRead(activeConversation.id)
    }
  }, [activeConversation, markAsRead])

  useEffect(() => {
    scrollToBottom()
  }, [activeConversation?.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSend = () => {
    if (!message.trim() || !activeConversation) return

    sendMessage(activeConversation.id, message, "You")
    setMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!activeConversation) return null

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-emerald-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          {activeConversation.guideAvatar ? (
            <img
              src={activeConversation.guideAvatar}
              alt={activeConversation.guideName}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ) : (
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          )}
          <div>
            <h3 className="font-semibold">{activeConversation.guideName}</h3>
            <p className="text-xs opacity-90">Guide</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {activeConversation.messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-gray-600 mb-2">Start a conversation with {activeConversation.guideName}</p>
            <p className="text-sm text-gray-500">Ask about tours, availability, or local tips!</p>
          </div>
        ) : (
          activeConversation.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderId === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  msg.senderId === "user"
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.senderId === "user" ? "text-emerald-100" : "text-gray-500"
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            className="bg-emerald-600 hover:bg-emerald-700 px-4"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}
