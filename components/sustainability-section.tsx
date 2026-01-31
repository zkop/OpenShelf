import { Leaf, Route, Clock, Building, TrendingDown, MapPin } from "lucide-react"

const metrics = [
  {
    icon: Route,
    value: "12.4 km",
    label: "Avg. Distance Saved per Delivery",
    description: "Compared to traditional warehouse-to-door logistics"
  },
  {
    icon: TrendingDown,
    value: "2.1 kg",
    label: "CO₂ Saved per Package",
    description: "Through localized fulfillment and consolidated pickups"
  },
  {
    icon: Building,
    value: "78%",
    label: "Space Utilization Increase",
    description: "For participating urban locations"
  },
  {
    icon: Clock,
    value: "4.2 hrs",
    label: "Faster Local Delivery",
    description: "Same-day fulfillment within neighborhoods"
  }
]

const principles = [
  {
    icon: MapPin,
    title: "Proximity by Design",
    description: "Our algorithm prioritizes spaces closest to customer density zones, minimizing transport distance by default."
  },
  {
    icon: Building,
    title: "Adaptive Reuse",
    description: "We activate underused urban spaces during off-peak hours, improving city-wide space efficiency without new construction."
  },
  {
    icon: Leaf,
    title: "Carbon Transparency",
    description: "Every booking shows estimated CO₂ savings compared to traditional fulfillment, helping brands make informed choices."
  }
]

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />
            Sustainability Built In
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Reduced logistics distance, by design
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every feature is built to minimize transport, maximize local fulfillment, and reduce the environmental footprint of e-commerce.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">{metric.value}</div>
              <div className="mt-1 font-medium">{metric.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold">How sustainability is embedded</h3>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <principle.icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">{principle.title}</h4>
                <p className="mt-2 text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
