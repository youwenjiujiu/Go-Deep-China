import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { NextAuthProvider } from "@/components/providers/session-provider";
import { FavoritesProvider } from "@/contexts/favorites-context";
import { ReviewsProvider } from "@/contexts/reviews-context";
import { ChatProvider } from "@/contexts/chat-context";
import { GalleryProvider } from "@/contexts/gallery-context";
import { MouseTracker } from "@/components/ui/mouse-tracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GoDeep China | Discover Yunnan - Authentic Travel Experiences",
  description: "Explore Yunnan Province with GoDeep China. Discover diverse ethnic cultures, stunning landscapes, local cuisine, and unforgettable adventures in Southwest China.",
  keywords: ["Yunnan travel", "China tourism", "ethnic minorities", "Yunnan culture", "travel guide"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <NextAuthProvider>
          <ReviewsProvider>
            <FavoritesProvider>
              <ChatProvider>
                <GalleryProvider>
                  <MouseTracker />
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </GalleryProvider>
              </ChatProvider>
            </FavoritesProvider>
          </ReviewsProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
