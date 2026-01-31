import { NextRequest, NextResponse } from 'next/server'
import { mockSpaces } from '@/lib/space-data'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const space = mockSpaces.find((s) => s.id === id)

  if (!space) {
    return NextResponse.json(
      { error: 'Space not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({ space })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const spaceIndex = mockSpaces.findIndex((s) => s.id === id)

  if (spaceIndex === -1) {
    return NextResponse.json(
      { error: 'Space not found' },
      { status: 404 }
    )
  }

  try {
    const body = await request.json()
    const updatedSpace = { ...mockSpaces[spaceIndex], ...body }
    mockSpaces[spaceIndex] = updatedSpace

    return NextResponse.json({ success: true, space: updatedSpace })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const spaceIndex = mockSpaces.findIndex((s) => s.id === id)

  if (spaceIndex === -1) {
    return NextResponse.json(
      { error: 'Space not found' },
      { status: 404 }
    )
  }

  mockSpaces.splice(spaceIndex, 1)

  return NextResponse.json({ success: true, message: 'Space deleted' })
}
