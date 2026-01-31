import { NextResponse } from 'next/server'
import {
  dashboardMetrics,
  monthlyData,
  spaceUtilization,
  recentActivity,
} from '@/lib/dashboard-data'

export async function GET() {
  return NextResponse.json({
    metrics: dashboardMetrics,
    monthlyData: monthlyData,
    spaceUtilization: spaceUtilization,
    recentActivity: recentActivity,
  })
}
