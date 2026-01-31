"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { spaceTypes, features as allFeatures } from "@/lib/space-data"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Users,
} from "lucide-react"

const steps = [
  { id: 1, name: "Space Details", icon: Building2 },
  { id: 2, name: "Location & Hours", icon: MapPin },
  { id: 3, name: "Services & Pricing", icon: DollarSign },
  { id: 4, name: "Review", icon: Check },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Extra Revenue",
    description: "Monetize unused space during off-peak hours with no upfront costs",
  },
  {
    icon: Shield,
    title: "Full Insurance Coverage",
    description: "All stored items are covered by our comprehensive liability insurance",
  },
  {
    icon: Users,
    title: "Zero Operational Burden",
    description: "We handle customer coordination, tracking, and support",
  },
  {
    icon: Leaf,
    title: "Support Sustainability",
    description: "Help reduce urban logistics emissions and support local businesses",
  },
]

export default function ListSpacePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    spaceName: "",
    spaceType: "",
    description: "",
    address: "",
    neighborhood: "",
    city: "",
    operatingHours: "",
    sqft: "",
    pricePerDay: "",
    pricePerWeek: "",
    pricePerMonth: "",
    pickupEnabled: false,
    storageEnabled: false,
    returnsEnabled: false,
    selectedFeatures: [] as string[],
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  })

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleFeature = (feature: string) => {
    const current = formData.selectedFeatures
    if (current.includes(feature)) {
      updateFormData("selectedFeatures", current.filter((f) => f !== feature))
    } else {
      updateFormData("selectedFeatures", [...current, feature])
    }
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                List Your Space
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Turn your underused urban space into a sustainable fulfillment point. Join hundreds of cafés, coworking spaces, and venues already earning with LocalLoop.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{benefit.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                          currentStep >= step.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <step.icon className="h-5 w-5" />
                        )}
                      </div>
                      <span className={`mt-2 text-xs font-medium ${
                        currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {step.name}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`mx-4 h-0.5 w-12 sm:w-24 ${
                          currentStep > step.id ? "bg-primary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep - 1].name}</CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Tell us about your space"}
                  {currentStep === 2 && "Where is your space located?"}
                  {currentStep === 3 && "What services can you offer?"}
                  {currentStep === 4 && "Review your listing details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="spaceName">Space Name</Label>
                      <Input
                        id="spaceName"
                        placeholder="e.g., Green Bean Café"
                        value={formData.spaceName}
                        onChange={(e) => updateFormData("spaceName", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="spaceType">Space Type</Label>
                      <Select
                        value={formData.spaceType}
                        onValueChange={(v) => updateFormData("spaceType", v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a type" />
                        </SelectTrigger>
                        <SelectContent>
                          {spaceTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sqft">Available Space (sq ft)</Label>
                      <Input
                        id="sqft"
                        type="number"
                        placeholder="e.g., 50"
                        value={formData.sqft}
                        onChange={(e) => updateFormData("sqft", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your space and what makes it great for local fulfillment..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Neighborhood</Label>
                        <Input
                          id="neighborhood"
                          placeholder="e.g., Kreuzberg"
                          value={formData.neighborhood}
                          onChange={(e) => updateFormData("neighborhood", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="e.g., Berlin"
                          value={formData.city}
                          onChange={(e) => updateFormData("city", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="operatingHours">Operating Hours</Label>
                      <Input
                        id="operatingHours"
                        placeholder="e.g., 8:00 - 20:00 Mon-Sat"
                        value={formData.operatingHours}
                        onChange={(e) => updateFormData("operatingHours", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Contact Information</Label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          placeholder="Contact Name"
                          value={formData.contactName}
                          onChange={(e) => updateFormData("contactName", e.target.value)}
                        />
                        <Input
                          placeholder="Email"
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) => updateFormData("contactEmail", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Services You Can Offer</Label>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          { id: "pickup", label: "Customer Pickup", desc: "Customers collect orders" },
                          { id: "storage", label: "Product Storage", desc: "Store inventory" },
                          { id: "returns", label: "Returns Handling", desc: "Accept returns" },
                        ].map((service) => (
                          <div
                            key={service.id}
                            className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                              formData[`${service.id}Enabled` as keyof typeof formData]
                                ? "border-primary bg-primary/5"
                                : "border-border"
                            }`}
                            onClick={() =>
                              updateFormData(
                                `${service.id}Enabled`,
                                !formData[`${service.id}Enabled` as keyof typeof formData]
                              )
                            }
                          >
                            <div className="flex items-center gap-2">
                              <Checkbox
                                checked={formData[`${service.id}Enabled` as keyof typeof formData] as boolean}
                                onCheckedChange={(checked) =>
                                  updateFormData(`${service.id}Enabled`, !!checked)
                                }
                              />
                              <span className="font-medium">{service.label}</span>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">{service.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Pricing</Label>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="pricePerDay" className="text-xs text-muted-foreground">Per Day (EUR)</Label>
                          <Input
                            id="pricePerDay"
                            type="number"
                            placeholder="25"
                            value={formData.pricePerDay}
                            onChange={(e) => updateFormData("pricePerDay", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pricePerWeek" className="text-xs text-muted-foreground">Per Week (EUR)</Label>
                          <Input
                            id="pricePerWeek"
                            type="number"
                            placeholder="150"
                            value={formData.pricePerWeek}
                            onChange={(e) => updateFormData("pricePerWeek", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pricePerMonth" className="text-xs text-muted-foreground">Per Month (EUR)</Label>
                          <Input
                            id="pricePerMonth"
                            type="number"
                            placeholder="500"
                            value={formData.pricePerMonth}
                            onChange={(e) => updateFormData("pricePerMonth", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Available Features</Label>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {allFeatures.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Checkbox
                              id={feature}
                              checked={formData.selectedFeatures.includes(feature)}
                              onCheckedChange={() => toggleFeature(feature)}
                            />
                            <Label htmlFor={feature} className="cursor-pointer text-sm font-normal">
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="rounded-lg bg-muted/50 p-4">
                      <h3 className="font-semibold">{formData.spaceName || "Your Space"}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {spaceTypes.find((t) => t.value === formData.spaceType)?.label || "Space Type"} - {formData.sqft || "0"} sq ft
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                        <p className="mt-1">{formData.address || "Address"}</p>
                        <p className="text-sm text-muted-foreground">
                          {formData.neighborhood}, {formData.city}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Operating Hours</h4>
                        <p className="mt-1">{formData.operatingHours || "Not specified"}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Services</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {formData.pickupEnabled && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Pickup</span>
                        )}
                        {formData.storageEnabled && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Storage</span>
                        )}
                        {formData.returnsEnabled && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Returns</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Pricing</h4>
                      <div className="mt-2 flex gap-4">
                        <span className="text-sm">{formData.pricePerDay || "0"}/day</span>
                        <span className="text-sm">{formData.pricePerWeek || "0"}/week</span>
                        <span className="text-sm">{formData.pricePerMonth || "0"}/month</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                      <div className="flex items-start gap-3">
                        <Leaf className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Estimated Impact</h4>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Based on your location, each delivery through your space could save an estimated 2.1kg of CO₂ and 12km of transport distance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>

                  {currentStep < 4 ? (
                    <Button onClick={nextStep}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button>
                      Submit Listing
                      <Check className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
