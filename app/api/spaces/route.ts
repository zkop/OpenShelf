import { NextRequest, NextResponse } from 'next/server'
import { mockSpaces, filterSpaces, type Space, type SpaceType } from '@/lib/space-data'

// In-memory storage (replace with database in production)
let spaces = [...mockSpaces]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const type = searchParams.get('type') as SpaceType | 'all' | null
  const maxPrice = searchParams.get('maxPrice')
  const minPrice = searchParams.get('minPrice')
  const features = searchParams.get('features')
  const services = searchParams.get('services')
  const search = searchParams.get('search')

  const filters = {
    type: type || 'all',
    maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
    minPrice: minPrice ? parseInt(minPrice) : undefined,
    features: features ? features.split(',') : undefined,
    services: services ? services.split(',') as ('pickup' | 'storage' | 'returns')[] : undefined,
    search: search || undefined,
  }

  const filteredSpaces = filterSpaces(spaces, filters)

  return NextResponse.json({
    spaces: filteredSpaces,
    total: filteredSpaces.length,
    filters: filters,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newSpace: Space = {
      id: (spaces.length + 1).toString(),
      name: body.spaceName,
      type: body.spaceType as SpaceType,
      address: body.address,
      neighborhood: body.neighborhood,
      city: body.city,
      imageUrl: '/placeholder.jpg',
      pricePerDay: parseInt(body.pricePerDay) || 0,
      pricePerWeek: parseInt(body.pricePerWeek) || 0,
      pricePerMonth: parseInt(body.pricePerMonth) || 0,
      sqft: parseInt(body.sqft) || 0,
      availableFrom: new Date().toISOString().split('T')[0],
      features: body.selectedFeatures || [],
      sustainabilityScore: Math.floor(Math.random() * 15) + 80,
      co2SavedPerDelivery: parseFloat((Math.random() * 1.5 + 1.5).toFixed(1)),
      avgDistanceSaved: parseFloat((Math.random() * 8 + 8).toFixed(1)),
      rating: 0,
      reviewCount: 0,
      pickupEnabled: body.pickupEnabled || false,
      storageEnabled: body.storageEnabled || false,
      returnsEnabled: body.returnsEnabled || false,
      operatingHours: body.operatingHours || '',
      description: body.description || '',
    }

    spaces.push(newSpace)

    return NextResponse.json(
      { success: true, space: newSpace },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}
