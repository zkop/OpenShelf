import { NextResponse } from 'next/server'
import { dashboardMetrics } from '@/lib/dashboard-data'

export async function GET() {
  return NextResponse.json(dashboardMetrics)
}
