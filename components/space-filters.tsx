"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { spaceTypes, features } from "@/lib/space-data"
import type { SpaceType } from "@/lib/space-data"

interface SpaceFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  selectedType: SpaceType | "all"
  onTypeChange: (value: SpaceType | "all") => void
  selectedFeatures: string[]
  onFeaturesChange: (features: string[]) => void
  selectedServices: ("pickup" | "storage" | "returns")[]
  onServicesChange: (services: ("pickup" | "storage" | "returns")[]) => void
  maxPrice: number
  onMaxPriceChange: (value: number) => void
  onClearFilters: () => void
}

export function SpaceFilters({
  search,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedFeatures,
  onFeaturesChange,
  selectedServices,
  onServicesChange,
  maxPrice,
  onMaxPriceChange,
  onClearFilters,
}: SpaceFiltersProps) {
  const hasActiveFilters = 
    selectedType !== "all" || 
    selectedFeatures.length > 0 || 
    selectedServices.length > 0 || 
    maxPrice < 100

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      onFeaturesChange(selectedFeatures.filter(f => f !== feature))
    } else {
      onFeaturesChange([...selectedFeatures, feature])
    }
  }

  const toggleService = (service: "pickup" | "storage" | "returns") => {
    if (selectedServices.includes(service)) {
      onServicesChange(selectedServices.filter(s => s !== service))
    } else {
      onServicesChange([...selectedServices, service])
    }
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium">Space Type</Label>
        <Select value={selectedType} onValueChange={(v) => onTypeChange(v as SpaceType | "all")}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {spaceTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Services Needed</Label>
        <div className="mt-3 space-y-2">
          {[
            { value: "pickup" as const, label: "Customer Pickup" },
            { value: "storage" as const, label: "Product Storage" },
            { value: "returns" as const, label: "Returns Handling" },
          ].map((service) => (
            <div key={service.value} className="flex items-center gap-2">
              <Checkbox
                id={service.value}
                checked={selectedServices.includes(service.value)}
                onCheckedChange={() => toggleService(service.value)}
              />
              <Label htmlFor={service.value} className="text-sm font-normal cursor-pointer">
                {service.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium">Max Price (per day)</Label>
        <div className="mt-2 flex items-center gap-2">
          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-24"
            min={0}
            max={200}
          />
          <span className="text-sm text-muted-foreground">EUR</span>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium">Features</Label>
        <div className="mt-3 space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Checkbox
                id={feature}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => toggleFeature(feature)}
              />
              <Label htmlFor={feature} className="text-sm font-normal cursor-pointer">
                {feature}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" className="w-full bg-transparent" onClick={onClearFilters}>
          <X className="mr-2 h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, neighborhood, or description..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden bg-transparent">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>Filter Spaces</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden rounded-xl border border-border bg-card p-6 lg:block">
        <h3 className="mb-4 font-semibold">Filters</h3>
        <FilterContent />
      </div>
    </div>
  )
}
