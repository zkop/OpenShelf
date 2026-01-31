export interface DashboardMetrics {
  totalDeliveries: number
  co2Saved: number
  distanceSaved: number
  localPickupRate: number
  activeSpaces: number
  avgUtilization: number
}

export interface MonthlyData {
  month: string
  deliveries: number
  co2Saved: number
  distanceSaved: number
}

export interface SpaceUtilization {
  space: string
  type: string
  utilization: number
  deliveries: number
}

export const dashboardMetrics: DashboardMetrics = {
  totalDeliveries: 1847,
  co2Saved: 3892,
  distanceSaved: 22840,
  localPickupRate: 68,
  activeSpaces: 12,
  avgUtilization: 74,
}

export const monthlyData: MonthlyData[] = [
  { month: "Aug", deliveries: 120, co2Saved: 252, distanceSaved: 1488 },
  { month: "Sep", deliveries: 185, co2Saved: 389, distanceSaved: 2294 },
  { month: "Oct", deliveries: 245, co2Saved: 515, distanceSaved: 3038 },
  { month: "Nov", deliveries: 310, co2Saved: 651, distanceSaved: 3844 },
  { month: "Dec", deliveries: 420, co2Saved: 882, distanceSaved: 5208 },
  { month: "Jan", deliveries: 567, co2Saved: 1191, distanceSaved: 7031 },
]

export const spaceUtilization: SpaceUtilization[] = [
  { space: "Green Bean Café", type: "Café", utilization: 85, deliveries: 342 },
  { space: "TechHub Coworking", type: "Coworking", utilization: 78, deliveries: 456 },
  { space: "Corner Store Pop-up", type: "Retail", utilization: 72, deliveries: 289 },
  { space: "Mitte Gallery", type: "Gallery", utilization: 65, deliveries: 178 },
  { space: "Urban Warehouse", type: "Warehouse", utilization: 91, deliveries: 582 },
]

export interface RecentActivity {
  id: string
  type: "pickup" | "delivery" | "return"
  space: string
  customer: string
  time: string
  status: "completed" | "pending" | "in-transit"
}

export const recentActivity: RecentActivity[] = [
  { id: "1", type: "pickup", space: "Green Bean Café", customer: "Order #4521", time: "10 min ago", status: "completed" },
  { id: "2", type: "delivery", space: "TechHub Coworking", customer: "Order #4520", time: "25 min ago", status: "completed" },
  { id: "3", type: "return", space: "Corner Store Pop-up", customer: "Order #4489", time: "1 hour ago", status: "pending" },
  { id: "4", type: "pickup", space: "Mitte Gallery", customer: "Order #4518", time: "2 hours ago", status: "in-transit" },
  { id: "5", type: "delivery", space: "Urban Warehouse", customer: "Order #4515", time: "3 hours ago", status: "completed" },
]
