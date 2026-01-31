import type { Space, SpaceType } from './space-data'
import type { 
  DashboardMetrics, 
  MonthlyData, 
  SpaceUtilization, 
  RecentActivity 
} from './dashboard-data'

// Spaces API Types
export interface SpacesListResponse {
  spaces: Space[]
  total: number
  filters: SpacesFilters
}

export interface SpacesFilters {
  type: SpaceType | 'all'
  maxPrice?: number
  minPrice?: number
  features?: string[]
  services?: ('pickup' | 'storage' | 'returns')[]
  search?: string
}

export interface SpaceResponse {
  space: Space
}

export interface CreateSpaceRequest {
  spaceName: string
  spaceType: SpaceType
  description: string
  address: string
  neighborhood: string
  city: string
  operatingHours: string
  sqft: string
  pricePerDay: string
  pricePerWeek: string
  pricePerMonth: string
  pickupEnabled: boolean
  storageEnabled: boolean
  returnsEnabled: boolean
  selectedFeatures: string[]
  contactName: string
  contactEmail: string
  contactPhone: string
}

export interface CreateSpaceResponse {
  success: boolean
  space: Space
}

// Dashboard API Types
export interface DashboardResponse {
  metrics: DashboardMetrics
  monthlyData: MonthlyData[]
  spaceUtilization: SpaceUtilization[]
  recentActivity: RecentActivity[]
}

export interface ActivityListResponse {
  activities: RecentActivity[]
  total: number
}

export interface UtilizationResponse {
  utilization: SpaceUtilization[]
  avgUtilization: number
}

export interface CreateActivityRequest {
  type: 'pickup' | 'delivery' | 'return'
  space: string
  customer: string
  status?: 'completed' | 'pending' | 'in-transit'
}

// Generic API Response Types
export interface ApiError {
  error: string
}

export interface ApiSuccess {
  success: boolean
  message?: string
}
