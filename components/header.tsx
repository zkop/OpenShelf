"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">LocalLoop</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/spaces" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Find Spaces
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#sustainability" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Sustainability
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">List Your Space</Button>
        </div>

        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/spaces" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Find Spaces
            </Link>
            <Link href="/dashboard" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="#sustainability" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Sustainability
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">List Your Space</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
