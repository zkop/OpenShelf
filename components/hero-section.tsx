import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Leaf, Package } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/40 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Sustainable Urban Logistics</span>
          </div>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Local spaces for{" "}
            <span className="text-primary">smarter</span> e-commerce fulfillment
          </h1>
          
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Connect your online store with cafés, coworking spaces, and urban locations for pickup points, micro-storage, and sustainable last-mile delivery. Reduce emissions. Support local. Grow smarter.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/spaces">
                Find Spaces Near You
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/list-space">
                List Your Space
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">2,400+</span>
              <span className="text-sm text-muted-foreground">Urban Pickup Points</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">180K</span>
              <span className="text-sm text-muted-foreground">Packages Fulfilled Locally</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">-47%</span>
              <span className="text-sm text-muted-foreground">Average CO₂ Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
