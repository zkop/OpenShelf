"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpaceCard } from "@/components/space-card"
import { SpaceFilters } from "@/components/space-filters"
import { mockSpaces, filterSpaces } from "@/lib/space-data"
import type { SpaceType } from "@/lib/space-data"
import { Leaf, MapPin } from "lucide-react"

export default function SpacesPage() {
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState<SpaceType | "all">("all")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<("pickup" | "storage" | "returns")[]>([])
  const [maxPrice, setMaxPrice] = useState(100)

  const filteredSpaces = useMemo(() => {
    return filterSpaces(mockSpaces, {
      type: selectedType,
      maxPrice,
      features: selectedFeatures,
      services: selectedServices,
      search,
    })
  }, [search, selectedType, selectedFeatures, selectedServices, maxPrice])

  const totalCO2Potential = useMemo(() => {
    return filteredSpaces.reduce((acc, space) => acc + space.co2SavedPerDelivery, 0).toFixed(1)
  }, [filteredSpaces])

  const clearFilters = () => {
    setSearch("")
    setSelectedType("all")
    setSelectedFeatures([])
    setSelectedServices([])
    setMaxPrice(100)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <h1 className="text-3xl font-bold">Find Local Spaces</h1>
            <p className="mt-2 text-muted-foreground">
              Discover cafés, coworking spaces, and urban locations for your micro-fulfillment needs
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{filteredSpaces.length}</span>
                <span className="text-muted-foreground">spaces available</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="font-medium">~{totalCO2Potential}kg</span>
                <span className="text-muted-foreground">potential CO₂ saved/delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="w-full shrink-0 lg:w-72">
              <SpaceFilters
                search={search}
                onSearchChange={setSearch}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedFeatures={selectedFeatures}
                onFeaturesChange={setSelectedFeatures}
                selectedServices={selectedServices}
                onServicesChange={setSelectedServices}
                maxPrice={maxPrice}
                onMaxPriceChange={setMaxPrice}
                onClearFilters={clearFilters}
              />
            </aside>

            <div className="flex-1">
              {filteredSpaces.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredSpaces.map((space) => (
                    <SpaceCard key={space.id} space={space} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16 text-center">
                  <MapPin className="mb-4 h-12 w-12 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold">No spaces found</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Try adjusting your filters or search terms to find available spaces.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
