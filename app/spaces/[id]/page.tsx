"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Space } from "@/lib/space-data"
import {
  MapPin,
  Star,
  Leaf,
  Package,
  RotateCcw,
  Clock,
  ArrowLeft,
  Calendar,
  Ruler,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  TrendingDown,
} from "lucide-react"

const typeLabels: Record<string, string> = {
  cafe: "Café",
  coworking: "Coworking",
  gallery: "Gallery",
  retail: "Retail",
  warehouse: "Warehouse",
}

const typeColors: Record<string, string> = {
  cafe: "bg-amber-100 text-amber-800",
  coworking: "bg-blue-100 text-blue-800",
  gallery: "bg-pink-100 text-pink-800",
  retail: "bg-emerald-100 text-emerald-800",
  warehouse: "bg-slate-100 text-slate-800",
}

export default function SpaceDetailsPage() {
  const params = useParams()
  const [space, setSpace] = useState<Space | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSpace() {
      try {
        const response = await fetch(`/api/spaces/${params.id}`)
        if (!response.ok) {
          throw new Error("Space not found")
        }
        const data = await response.json()
        setSpace(data.space)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load space")
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchSpace()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading space details...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !space) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Space Not Found</h2>
            <p className="mt-2 text-muted-foreground">{error || "The space you're looking for doesn't exist."}</p>
            <Button asChild className="mt-4">
              <Link href="/spaces">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Spaces
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/30">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/spaces">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Spaces
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-accent/50 text-muted-foreground">
                  <Building2 className="h-16 w-16 opacity-50" />
                </div>
                <div className="absolute left-4 top-4">
                  <Badge className={typeColors[space.type]} variant="secondary">
                    {typeLabels[space.type]}
                  </Badge>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-sm font-medium backdrop-blur">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span>Score: {space.sustainabilityScore}</span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{space.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({space.reviewCount} reviews)</span>
                </div>

                <h1 className="mt-2 text-3xl font-bold">{space.name}</h1>

                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{space.address}, {space.neighborhood}, {space.city}</span>
                </div>

                <p className="mt-4 text-muted-foreground">{space.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {space.pickupEnabled && (
                    <Badge variant="outline" className="gap-1.5 py-1.5">
                      <Package className="h-4 w-4" />
                      Customer Pickup
                    </Badge>
                  )}
                  {space.storageEnabled && (
                    <Badge variant="outline" className="gap-1.5 py-1.5">
                      <Clock className="h-4 w-4" />
                      Storage Available
                    </Badge>
                  )}
                  {space.returnsEnabled && (
                    <Badge variant="outline" className="gap-1.5 py-1.5">
                      <RotateCcw className="h-4 w-4" />
                      Returns Handling
                    </Badge>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="flex flex-wrap items-end gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Rate</p>
                    <p className="text-3xl font-bold">€{space.pricePerDay}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weekly</p>
                    <p className="text-xl font-semibold">€{space.pricePerWeek}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly</p>
                    <p className="text-xl font-semibold">€{space.pricePerMonth}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button size="lg" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book This Space
                  </Button>
                  <Button size="lg" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Space Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Space Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-medium">{space.sqft} sq ft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Operating Hours</span>
                  <span className="font-medium">{space.operatingHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Available From</span>
                  <span className="font-medium">{new Date(space.availableFrom).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Space Type</span>
                  <Badge className={typeColors[space.type]}>{typeLabels[space.type]}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sustainability Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Sustainability Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <div className="text-3xl font-bold text-primary">{space.sustainabilityScore}</div>
                  <div className="text-sm text-muted-foreground">Sustainability Score</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CO₂ Saved/Delivery</span>
                  <span className="font-medium text-primary">{space.co2SavedPerDelivery} kg</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg Distance Saved</span>
                  <span className="font-medium text-primary">{space.avgDistanceSaved} km</span>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                {space.features.length > 0 ? (
                  <ul className="space-y-3">
                    {space.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No additional features listed.</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Environmental Savings Banner */}
          <Card className="mt-6 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Estimated Environmental Impact</h3>
                  <p className="mt-1 text-muted-foreground">
                    By using this space for local fulfillment, each delivery could save approximately{" "}
                    <span className="font-semibold text-primary">{space.co2SavedPerDelivery} kg of CO₂</span> and{" "}
                    <span className="font-semibold text-primary">{space.avgDistanceSaved} km</span> of transport distance
                    compared to traditional delivery methods.
                  </p>
                </div>
                <Button variant="outline" className="shrink-0">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
