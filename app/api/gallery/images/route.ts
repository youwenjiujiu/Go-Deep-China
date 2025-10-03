import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    const where = category && category !== "all"
      ? { category: category.toUpperCase() as any }
      : {}

    const images = await prisma.galleryImage.findMany({
      where,
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        src: true,
        alt: true,
        title: true,
        titleZh: true,
        description: true,
        location: true,
        photographer: true,
        category: true,
        createdAt: true,
      }
    })

    // Format images to match GalleryImage interface
    const formattedImages = images.map(img => ({
      id: img.id,
      src: img.src,
      alt: img.alt,
      title: img.title,
      titleZh: img.titleZh || undefined,
      description: img.description,
      location: img.location || undefined,
      photographer: img.photographer || undefined,
      category: img.category.toLowerCase() as any,
    }))

    return NextResponse.json({
      success: true,
      images: formattedImages
    })
  } catch (error) {
    console.error("Failed to fetch images:", error)
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    )
  }
}
