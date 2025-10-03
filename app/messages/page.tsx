"use client"

import { useState } from "react"
import { useChat } from "@/contexts/chat-context"
import { MessageCircle, User, Send, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MessagesPage() {
  const { conversations, activeConversation, setActiveConversation, sendMessage, markAsRead } = useChat()
  const [message, setMessage] = useState("")

  const handleSelectConversation = (conv: typeof conversations[0]) => {
    setActiveConversation(conv)
    markAsRead(conv.id)
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/guides">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Messages</h1>
          <p className="text-lg opacity-90 mt-2">Chat with your guides</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <h2 className="font-bold text-lg">Conversations</h2>
                  <p className="text-sm text-gray-600">{conversations.length} active</p>
                </div>
                <div className="divide-y max-h-[600px] overflow-y-auto">
                  {conversations.length === 0 ? (
                    <div className="p-8 text-center">
                      <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-600 mb-4">No conversations yet</p>
                      <Link href="/guides">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Find a Guide
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    conversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => handleSelectConversation(conv)}
                        className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                          activeConversation?.id === conv.id ? "bg-purple-50" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {conv.guideAvatar ? (
                            <img
                              src={conv.guideAvatar}
                              alt={conv.guideName}
                              className="w-12 h-12 rounded-full"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-gray-500" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold truncate">{conv.guideName}</h3>
                              {conv.unreadCount > 0 && (
                                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                  {conv.unreadCount}
                                </span>
                              )}
                            </div>
                            {conv.lastMessage && (
                              <p className="text-sm text-gray-600 truncate">
                                {conv.lastMessage.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-[700px] flex flex-col">
              {activeConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
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
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                    {activeConversation.messages.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MessageCircle className="w-8 h-8 text-purple-600" />
                        </div>
                        <p className="text-gray-600 mb-2">
                          Start a conversation with {activeConversation.guideName}
                        </p>
                        <p className="text-sm text-gray-500">
                          Ask about tours, availability, or local tips!
                        </p>
                      </div>
                    ) : (
                      activeConversation.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.senderId === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-4 ${
                              msg.senderId === "user"
                                ? "bg-purple-600 text-white"
                                : "bg-white border border-gray-200"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p
                              className={`text-xs mt-2 ${
                                msg.senderId === "user" ? "text-purple-100" : "text-gray-500"
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
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t bg-white rounded-b-lg">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <Button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className="bg-purple-600 hover:bg-purple-700 px-6"
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Press Enter to send, Shift+Enter for new line
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center p-8">
                  <div>
                    <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-gray-600">
                      Choose a guide from the list to start chatting
                    </p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
