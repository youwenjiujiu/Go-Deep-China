import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const region = searchParams.get("region")
    const featured = searchParams.get("featured")
    const limit = searchParams.get("limit")

    const where: any = {}

    if (region && region !== "all") {
      where.region = region
    }

    if (featured === "true") {
      where.featured = true
    }

    const destinations = await prisma.destination.findMany({
      where,
      take: limit ? parseInt(limit) : undefined,
      orderBy: {
        featured: "desc",
      },
      include: {
        experiences: {
          take: 3,
        },
      },
    })

    return NextResponse.json(destinations)
  } catch (error) {
    console.error("Error fetching destinations:", error)
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const destination = await prisma.destination.create({
      data: body,
    })

    return NextResponse.json(destination, { status: 201 })
  } catch (error) {
    console.error("Error creating destination:", error)
    return NextResponse.json(
      { error: "Failed to create destination" },
      { status: 500 }
    )
  }
}
