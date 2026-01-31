import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Leaf, Package, RotateCcw, Clock } from "lucide-react"
import type { Space } from "@/lib/space-data"
import Link from "next/link"

const typeLabels: Record<string, string> = {
  cafe: "Café",
  coworking: "Coworking",
  gallery: "Gallery",
  retail: "Retail",
  warehouse: "Warehouse"
}

const typeColors: Record<string, string> = {
  cafe: "bg-amber-100 text-amber-800",
  coworking: "bg-blue-100 text-blue-800",
  gallery: "bg-pink-100 text-pink-800",
  retail: "bg-emerald-100 text-emerald-800",
  warehouse: "bg-slate-100 text-slate-800"
}

export function SpaceCard({ space }: { space: Space }) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-accent/50 text-muted-foreground">
          <span className="text-sm">Space Image</span>
        </div>
        <div className="absolute left-3 top-3">
          <Badge className={typeColors[space.type]}>{typeLabels[space.type]}</Badge>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-sm font-medium backdrop-blur">
          <Leaf className="h-3.5 w-3.5 text-primary" />
          <span>{space.sustainabilityScore}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
              {space.name}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{space.neighborhood}, {space.city}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium">{space.rating}</span>
            <span className="text-muted-foreground">({space.reviewCount})</span>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {space.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {space.pickupEnabled && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Package className="h-3.5 w-3.5" />
              <span>Pickup</span>
            </div>
          )}
          {space.storageEnabled && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Storage</span>
            </div>
          )}
          {space.returnsEnabled && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Returns</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground">From</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold">{space.pricePerDay}</span>
              <span className="text-sm text-muted-foreground">/day</span>
            </div>
          </div>
          <Button size="sm" asChild>
            <Link href={`/spaces/${space.id}`}>View Details</Link>
          </Button>
        </div>

        <div className="mt-3 flex items-center gap-4 rounded-lg bg-accent/50 p-2 text-xs">
          <div className="flex items-center gap-1">
            <Leaf className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">Saves ~{space.co2SavedPerDelivery}kg CO₂/delivery</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
