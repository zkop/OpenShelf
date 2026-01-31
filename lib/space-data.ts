export type SpaceType = "cafe" | "coworking" | "gallery" | "retail" | "warehouse"

export interface Space {
  id: string
  name: string
  type: SpaceType
  address: string
  neighborhood: string
  city: string
  imageUrl: string
  pricePerDay: number
  pricePerWeek: number
  pricePerMonth: number
  sqft: number
  availableFrom: string
  features: string[]
  sustainabilityScore: number
  co2SavedPerDelivery: number
  avgDistanceSaved: number
  rating: number
  reviewCount: number
  pickupEnabled: boolean
  storageEnabled: boolean
  returnsEnabled: boolean
  operatingHours: string
  description: string
}

export const spaceTypes: { value: SpaceType; label: string }[] = [
  { value: "cafe", label: "Café" },
  { value: "coworking", label: "Coworking Space" },
  { value: "gallery", label: "Gallery" },
  { value: "retail", label: "Retail Unit" },
  { value: "warehouse", label: "Micro-Warehouse" }
]

export const features = [
  "Climate Controlled",
  "24/7 Access",
  "Staff Assistance",
  "Packaging Station",
  "Bike Courier Ready",
  "EV Charging",
  "Returns Processing",
  "Customer Waiting Area"
]

export const mockSpaces: Space[] = [
  {
    id: "1",
    name: "Green Bean Café",
    type: "cafe",
    address: "123 Oak Street",
    neighborhood: "Downtown",
    city: "Berlin",
    imageUrl: "/spaces/cafe-1.jpg",
    pricePerDay: 25,
    pricePerWeek: 150,
    pricePerMonth: 500,
    sqft: 45,
    availableFrom: "2026-02-01",
    features: ["Staff Assistance", "Customer Waiting Area", "Bike Courier Ready"],
    sustainabilityScore: 92,
    co2SavedPerDelivery: 2.4,
    avgDistanceSaved: 14.2,
    rating: 4.8,
    reviewCount: 34,
    pickupEnabled: true,
    storageEnabled: false,
    returnsEnabled: true,
    operatingHours: "7:00 - 19:00",
    description: "Friendly neighborhood café with dedicated pickup corner. Perfect for local brand pickup points with high foot traffic."
  },
  {
    id: "2",
    name: "TechHub Coworking",
    type: "coworking",
    address: "456 Innovation Way",
    neighborhood: "Kreuzberg",
    city: "Berlin",
    imageUrl: "/spaces/coworking-1.jpg",
    pricePerDay: 40,
    pricePerWeek: 220,
    pricePerMonth: 750,
    sqft: 120,
    availableFrom: "2026-01-15",
    features: ["24/7 Access", "Climate Controlled", "Packaging Station", "EV Charging"],
    sustainabilityScore: 88,
    co2SavedPerDelivery: 1.9,
    avgDistanceSaved: 11.8,
    rating: 4.6,
    reviewCount: 52,
    pickupEnabled: true,
    storageEnabled: true,
    returnsEnabled: true,
    operatingHours: "24/7",
    description: "Modern coworking space with secure storage room and packaging area. Ideal for growing brands needing flexible fulfillment."
  },
  {
    id: "3",
    name: "Mitte Gallery Space",
    type: "gallery",
    address: "78 Art District Lane",
    neighborhood: "Mitte",
    city: "Berlin",
    imageUrl: "/spaces/gallery-1.jpg",
    pricePerDay: 55,
    pricePerWeek: 320,
    pricePerMonth: 1100,
    sqft: 200,
    availableFrom: "2026-02-15",
    features: ["Climate Controlled", "Customer Waiting Area", "Staff Assistance"],
    sustainabilityScore: 95,
    co2SavedPerDelivery: 2.8,
    avgDistanceSaved: 16.5,
    rating: 4.9,
    reviewCount: 18,
    pickupEnabled: true,
    storageEnabled: true,
    returnsEnabled: false,
    operatingHours: "10:00 - 20:00",
    description: "Elegant gallery space available during off-exhibition periods. Perfect for premium brands seeking a curated pickup experience."
  },
  {
    id: "4",
    name: "Corner Store Pop-up",
    type: "retail",
    address: "234 Main Street",
    neighborhood: "Prenzlauer Berg",
    city: "Berlin",
    imageUrl: "/spaces/retail-1.jpg",
    pricePerDay: 35,
    pricePerWeek: 200,
    pricePerMonth: 680,
    sqft: 80,
    availableFrom: "2026-01-20",
    features: ["Staff Assistance", "Returns Processing", "Customer Waiting Area"],
    sustainabilityScore: 90,
    co2SavedPerDelivery: 2.2,
    avgDistanceSaved: 13.1,
    rating: 4.7,
    reviewCount: 41,
    pickupEnabled: true,
    storageEnabled: true,
    returnsEnabled: true,
    operatingHours: "9:00 - 21:00",
    description: "Vacant retail unit in bustling shopping area. Full storefront visibility with back storage room."
  },
  {
    id: "5",
    name: "Urban Micro-Warehouse",
    type: "warehouse",
    address: "567 Industrial Park",
    neighborhood: "Neukölln",
    city: "Berlin",
    imageUrl: "/spaces/warehouse-1.jpg",
    pricePerDay: 80,
    pricePerWeek: 450,
    pricePerMonth: 1500,
    sqft: 500,
    availableFrom: "2026-01-01",
    features: ["24/7 Access", "Climate Controlled", "Packaging Station", "Bike Courier Ready", "EV Charging"],
    sustainabilityScore: 85,
    co2SavedPerDelivery: 1.5,
    avgDistanceSaved: 9.2,
    rating: 4.5,
    reviewCount: 28,
    pickupEnabled: false,
    storageEnabled: true,
    returnsEnabled: true,
    operatingHours: "24/7",
    description: "Dedicated micro-warehouse for serious fulfillment needs. Loading dock access and professional packaging facilities."
  },
  {
    id: "6",
    name: "Bookworm Café",
    type: "cafe",
    address: "89 Library Square",
    neighborhood: "Charlottenburg",
    city: "Berlin",
    imageUrl: "/spaces/cafe-2.jpg",
    pricePerDay: 22,
    pricePerWeek: 130,
    pricePerMonth: 450,
    sqft: 35,
    availableFrom: "2026-02-01",
    features: ["Staff Assistance", "Customer Waiting Area"],
    sustainabilityScore: 94,
    co2SavedPerDelivery: 2.6,
    avgDistanceSaved: 15.3,
    rating: 4.9,
    reviewCount: 67,
    pickupEnabled: true,
    storageEnabled: false,
    returnsEnabled: true,
    operatingHours: "8:00 - 22:00",
    description: "Cozy café with book-loving community. Excellent for lifestyle and literary brands."
  }
]

export function filterSpaces(
  spaces: Space[],
  filters: {
    type?: SpaceType | "all"
    minPrice?: number
    maxPrice?: number
    features?: string[]
    services?: ("pickup" | "storage" | "returns")[]
    search?: string
  }
): Space[] {
  return spaces.filter(space => {
    if (filters.type && filters.type !== "all" && space.type !== filters.type) {
      return false
    }

    if (filters.minPrice && space.pricePerDay < filters.minPrice) {
      return false
    }

    if (filters.maxPrice && space.pricePerDay > filters.maxPrice) {
      return false
    }

    if (filters.features && filters.features.length > 0) {
      const hasAllFeatures = filters.features.every(f => space.features.includes(f))
      if (!hasAllFeatures) return false
    }

    if (filters.services && filters.services.length > 0) {
      const hasServices = filters.services.every(s => {
        if (s === "pickup") return space.pickupEnabled
        if (s === "storage") return space.storageEnabled
        if (s === "returns") return space.returnsEnabled
        return true
      })
      if (!hasServices) return false
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const matchesSearch = 
        space.name.toLowerCase().includes(searchLower) ||
        space.neighborhood.toLowerCase().includes(searchLower) ||
        space.address.toLowerCase().includes(searchLower) ||
        space.description.toLowerCase().includes(searchLower)
      if (!matchesSearch) return false
    }

    return true
  })
}
