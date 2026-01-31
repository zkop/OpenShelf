import { NextRequest, NextResponse } from 'next/server'
import { recentActivity, type RecentActivity } from '@/lib/dashboard-data'

// In-memory storage for activity
let activities = [...recentActivity]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const type = searchParams.get('type') as RecentActivity['type'] | null

  let result = [...activities]

  if (type) {
    result = result.filter((a) => a.type === type)
  }

  if (limit) {
    result = result.slice(0, parseInt(limit))
  }

  return NextResponse.json({ activities: result, total: result.length })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newActivity: RecentActivity = {
      id: (activities.length + 1).toString(),
      type: body.type,
      space: body.space,
      customer: body.customer,
      time: 'Just now',
      status: body.status || 'pending',
    }

    activities.unshift(newActivity)

    return NextResponse.json(
      { success: true, activity: newActivity },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}
