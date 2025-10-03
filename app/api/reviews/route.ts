import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const destinationId = searchParams.get("destinationId")
    const experienceId = searchParams.get("experienceId")
    const guideId = searchParams.get("guideId")

    const where: any = {}

    if (destinationId) where.destinationId = destinationId
    if (experienceId) where.experienceId = experienceId
    if (guideId) where.guideId = guideId

    const reviews = await prisma.review.findMany({
      where,
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
            country: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const body = await request.json()

    const review = await prisma.review.create({
      data: {
        ...body,
        userId: user.id,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
            country: true,
          },
        },
      },
    })

    // Update average rating for the reviewed entity
    if (review.destinationId) {
      const stats = await prisma.review.aggregate({
        where: { destinationId: review.destinationId },
        _avg: { rating: true },
        _count: true,
      })

      await prisma.destination.update({
        where: { id: review.destinationId },
        data: {
          // Note: These fields would need to be added to the Destination model
          // rating: stats._avg.rating || 0,
          // totalReviews: stats._count,
        },
      })
    }

    if (review.experienceId) {
      const stats = await prisma.review.aggregate({
        where: { experienceId: review.experienceId },
        _avg: { rating: true },
        _count: true,
      })

      // Update experience ratings
      // Similar logic for experiences
    }

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error("Error creating review:", error)
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    )
  }
}
