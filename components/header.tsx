"use client"

import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Trascendencia">
            <Image
              src="/logoTDCnegro.png"
              alt="Trascendencia tienda de diseño"
              width={168}
              height={36}
              priority
              className="h-12 w-auto object-contain lg:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/productos" className="text-sm tracking-wide hover:text-secondary transition-colors">
              TIENDA
            </Link>
            <Link href="/categorias" className="text-sm tracking-wide hover:text-secondary transition-colors">
              COLECCIONES
            </Link>
            <a href="#nosotros" className="text-sm tracking-wide hover:text-secondary transition-colors">
              NOSOTROS
            </a>
            <a href="#contacto" className="text-sm tracking-wide hover:text-secondary transition-colors">
              CONTACTO
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
                <span className="sr-only">Carrito</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menú</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/productos" className="text-sm tracking-wide hover:text-secondary transition-colors">
                TIENDA
              </Link>
              <Link href="/categorias" className="text-sm tracking-wide hover:text-secondary transition-colors">
                COLECCIONES
              </Link>
              <a href="#nosotros" className="text-sm tracking-wide hover:text-secondary transition-colors">
                NOSOTROS
              </a>
              <a href="#contacto" className="text-sm tracking-wide hover:text-secondary transition-colors">
                CONTACTO
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
