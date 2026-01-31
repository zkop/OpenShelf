"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import {
  Package,
  Leaf,
  Route,
  MapPin,
  TrendingUp,
  Building,
  Clock,
  RotateCcw,
  Truck,
} from "lucide-react"
import {
  dashboardMetrics,
  monthlyData,
  spaceUtilization,
  recentActivity,
} from "@/lib/dashboard-data"

const statusColors = {
  completed: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  "in-transit": "bg-blue-100 text-blue-800",
}

const activityIcons = {
  pickup: Package,
  delivery: Truck,
  return: RotateCcw,
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold">Sustainability Dashboard</h1>
                <p className="mt-1 text-muted-foreground">
                  Track your environmental impact and logistics efficiency
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="h-4 w-4" />
                <span>+23% vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Deliveries</p>
                    <p className="text-2xl font-bold">{dashboardMetrics.totalDeliveries.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CO₂ Saved</p>
                    <p className="text-2xl font-bold">{dashboardMetrics.co2Saved.toLocaleString()} kg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Route className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Distance Saved</p>
                    <p className="text-2xl font-bold">{dashboardMetrics.distanceSaved.toLocaleString()} km</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Local Pickup Rate</p>
                    <p className="text-2xl font-bold">{dashboardMetrics.localPickupRate}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>CO₂ Savings Over Time</CardTitle>
                <CardDescription>Monthly carbon dioxide emissions prevented (kg)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    co2Saved: {
                      label: "CO₂ Saved (kg)",
                      color: "#22c55e",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="co2Saved"
                        stroke="#22c55e"
                        strokeWidth={2}
                        fill="url(#co2Gradient)"
                        name="CO₂ Saved (kg)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Deliveries</CardTitle>
                <CardDescription>Fulfilled through local spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    deliveries: {
                      label: "Deliveries",
                      color: "#3b82f6",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="deliveries" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Deliveries" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Space Utilization</CardTitle>
                <CardDescription>Efficiency of your active fulfillment locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {spaceUtilization.map((space) => (
                    <div key={space.space} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{space.space}</span>
                          <Badge variant="secondary" className="text-xs">{space.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">{space.deliveries} deliveries</span>
                          <span className="font-medium">{space.utilization}%</span>
                        </div>
                      </div>
                      <Progress value={space.utilization} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest fulfillment events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const Icon = activityIcons[activity.type]
                    return (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{activity.customer}</span>
                            <Badge className={statusColors[activity.status]} variant="secondary">
                              {activity.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)} at {activity.space}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Key Success Metrics</CardTitle>
              <CardDescription>Platform-wide sustainability and efficiency indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-border p-4">
                  <div className="text-sm text-muted-foreground">Avg. Distance Saved</div>
                  <div className="mt-1 text-2xl font-bold text-primary">12.4 km</div>
                  <div className="mt-1 text-xs text-muted-foreground">per delivery vs traditional</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="text-sm text-muted-foreground">CO₂ per Package</div>
                  <div className="mt-1 text-2xl font-bold text-primary">2.1 kg</div>
                  <div className="mt-1 text-xs text-muted-foreground">average savings</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="text-sm text-muted-foreground">Space Utilization</div>
                  <div className="mt-1 text-2xl font-bold text-primary">{dashboardMetrics.avgUtilization}%</div>
                  <div className="mt-1 text-xs text-muted-foreground">avg across locations</div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <div className="text-sm text-muted-foreground">Active Spaces</div>
                  <div className="mt-1 text-2xl font-bold text-primary">{dashboardMetrics.activeSpaces}</div>
                  <div className="mt-1 text-xs text-muted-foreground">in your network</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
