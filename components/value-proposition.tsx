import { Store, Building2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const brandBenefits = [
  "Flexible daily, weekly, or monthly rentals",
  "No long-term contracts or warehouse commitments",
  "Local pickup points reduce delivery costs",
  "Real-time inventory and fulfillment tracking",
  "Built-in sustainability metrics for your brand"
]

const spaceBenefits = [
  "Monetize unused space during off-peak hours",
  "Simple onboarding with no operational burden",
  "Flexible availability scheduling",
  "Insurance and liability coverage included",
  "Connect with local e-commerce community"
]

export function ValueProposition() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Two sides. One sustainable solution.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            LocalLoop connects e-commerce brands seeking flexible fulfillment with urban spaces looking to monetize underused capacity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10" />
            
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Store className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold">For E-Commerce Brands</h3>
              <p className="mt-2 text-muted-foreground">
                Affordable, flexible micro-fulfillment without the warehouse commitment.
              </p>
              
              <ul className="mt-6 space-y-3">
                {brandBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="mt-8" asChild>
                <Link href="/spaces">
                  Browse Available Spaces
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10" />
            
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold">For Space Providers</h3>
              <p className="mt-2 text-muted-foreground">
                Turn quiet corners into revenue streams with zero operational hassle.
              </p>
              
              <ul className="mt-6 space-y-3">
                {spaceBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="mt-8 bg-transparent" asChild>
                <Link href="/list-space">
                  List Your Space
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
