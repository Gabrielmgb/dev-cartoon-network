"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navItems } from "@/lib/data"
import CNLogo from "@/components/cn-logo"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <CNLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center space-y-1 group transition-transform duration-200 hover:scale-110"
            >
              <item.icon className="h-8 w-8 text-white group-hover:text-yellow-400 transition-colors" />
              <span className="text-xs font-bold tracking-wider uppercase">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black absolute w-full left-0">
          <div className="flex flex-col items-center space-y-4 px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center w-full justify-center space-x-4 py-2 rounded-md hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-6 w-6 text-yellow-400" />
                <span className="text-sm font-bold tracking-wider uppercase">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
