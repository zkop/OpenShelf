import { NextResponse } from 'next/server'
import { spaceUtilization } from '@/lib/dashboard-data'

export async function GET() {
  return NextResponse.json({
    utilization: spaceUtilization,
    avgUtilization: Math.round(
      spaceUtilization.reduce((acc, s) => acc + s.utilization, 0) / spaceUtilization.length
    ),
  })
}
