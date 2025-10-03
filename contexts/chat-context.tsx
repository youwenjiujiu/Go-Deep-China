"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface Message {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  timestamp: Date
  isRead: boolean
}

export interface Conversation {
  id: string
  guideId: string
  guideName: string
  guideAvatar?: string
  lastMessage?: Message
  unreadCount: number
  messages: Message[]
}

interface ChatContextType {
  conversations: Conversation[]
  activeConversation: Conversation | null
  setActiveConversation: (conversation: Conversation | null) => void
  sendMessage: (conversationId: string, content: string, userName: string) => void
  startConversation: (guideId: string, guideName: string, guideAvatar?: string) => Conversation
  markAsRead: (conversationId: string) => void
  getTotalUnread: () => number
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ children }: { children: ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)

  const startConversation = (guideId: string, guideName: string, guideAvatar?: string): Conversation => {
    // Check if conversation already exists
    const existing = conversations.find(c => c.guideId === guideId)
    if (existing) {
      setActiveConversation(existing)
      return existing
    }

    // Create new conversation
    const newConversation: Conversation = {
      id: `conv-${Date.now()}`,
      guideId,
      guideName,
      guideAvatar,
      unreadCount: 0,
      messages: []
    }

    setConversations(prev => [...prev, newConversation])
    setActiveConversation(newConversation)
    return newConversation
  }

  const sendMessage = (conversationId: string, content: string, userName: string) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      conversationId,
      senderId: "user",
      senderName: userName,
      content,
      timestamp: new Date(),
      isRead: false
    }

    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        const updatedMessages = [...conv.messages, newMessage]
        return {
          ...conv,
          messages: updatedMessages,
          lastMessage: newMessage
        }
      }
      return conv
    }))

    // Simulate guide response after 2 seconds
    setTimeout(() => {
      const guideMessage: Message = {
        id: `msg-${Date.now()}`,
        conversationId,
        senderId: "guide",
        senderName: conversations.find(c => c.id === conversationId)?.guideName || "Guide",
        content: "Thank you for your message! I'll get back to you shortly with more details.",
        timestamp: new Date(),
        isRead: false
      }

      setConversations(prev => prev.map(conv => {
        if (conv.id === conversationId) {
          const updatedMessages = [...conv.messages, guideMessage]
          return {
            ...conv,
            messages: updatedMessages,
            lastMessage: guideMessage,
            unreadCount: conv.unreadCount + 1
          }
        }
        return conv
      }))
    }, 2000)
  }

  const markAsRead = (conversationId: string) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          unreadCount: 0,
          messages: conv.messages.map(msg => ({ ...msg, isRead: true }))
        }
      }
      return conv
    }))
  }

  const getTotalUnread = () => {
    return conversations.reduce((total, conv) => total + conv.unreadCount, 0)
  }

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeConversation,
        setActiveConversation,
        sendMessage,
        startConversation,
        markAsRead,
        getTotalUnread
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider")
  }
  return context
}
