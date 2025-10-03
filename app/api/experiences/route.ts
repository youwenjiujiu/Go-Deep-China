import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const difficulty = searchParams.get("difficulty")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const featured = searchParams.get("featured")
    const destinationId = searchParams.get("destinationId")

    const where: any = {}

    if (category && category !== "all") {
      where.category = category
    }

    if (difficulty && difficulty !== "all") {
      where.difficulty = difficulty
    }

    if (minPrice || maxPrice) {
      where.price = {}
      if (minPrice) where.price.gte = parseFloat(minPrice)
      if (maxPrice) where.price.lte = parseFloat(maxPrice)
    }

    if (featured === "true") {
      where.featured = true
    }

    if (destinationId) {
      where.destinationId = destinationId
    }

    const experiences = await prisma.experience.findMany({
      where,
      include: {
        destination: {
          select: {
            name: true,
            nameZh: true,
            slug: true,
          },
        },
        ethnicGroup: {
          select: {
            name: true,
            nameZh: true,
          },
        },
      },
      orderBy: {
        featured: "desc",
      },
    })

    return NextResponse.json(experiences)
  } catch (error) {
    console.error("Error fetching experiences:", error)
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const experience = await prisma.experience.create({
      data: body,
    })

    return NextResponse.json(experience, { status: 201 })
  } catch (error) {
    console.error("Error creating experience:", error)
    return NextResponse.json(
      { error: "Failed to create experience" },
      { status: 500 }
    )
  }
}
