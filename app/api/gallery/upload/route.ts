import { NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"

export async function POST(request: NextRequest) {
  try {
    // Get session
    const session = await getServerSession()

    const formData = await request.formData()
    const file = formData.get("file") as File
    const title = formData.get("title") as string
    const titleZh = formData.get("titleZh") as string
    const description = formData.get("description") as string
    const location = formData.get("location") as string
    const category = formData.get("category") as string

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, "-")
    const filename = `${timestamp}-${originalName}`

    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), "public", "uploads", "gallery")
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Save file
    const filepath = join(uploadDir, filename)
    await writeFile(filepath, buffer)

    // Map category to enum format
    const categoryEnum = category.toUpperCase() as any

    // Save to database
    const dbImage = await prisma.galleryImage.create({
      data: {
        src: `/uploads/gallery/${filename}`,
        alt: description,
        title,
        titleZh: titleZh || null,
        description,
        location: location || null,
        category: categoryEnum,
        photographer: session?.user?.name || "Community Upload",
        uploadedById: session?.user ? (session.user as any).id : null,
      }
    })

    // Create image data for response
    const imageData = {
      id: dbImage.id,
      src: dbImage.src,
      alt: dbImage.alt,
      title: dbImage.title,
      titleZh: dbImage.titleZh,
      description: dbImage.description,
      location: dbImage.location,
      category: category,
      photographer: dbImage.photographer,
      uploadedAt: dbImage.createdAt.toISOString()
    }

    return NextResponse.json({
      success: true,
      image: imageData
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    )
  }
}
