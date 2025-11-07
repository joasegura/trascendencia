"use client"

import Link from "next/link"
import { ProductCard } from "./product-card"
import { Button } from "./ui/button"

const newProducts = [
  {
    id: "n-1",
    name: "Collar Luna Creciente",
    price: 189,
    image: "/minimalist-crescent-moon-gold-necklace-on-white-ba.jpg",
    isNew: true,
    category: "Collares",
    description: "Collar bañado en oro con dije lunar diseñado para acompañarte siempre.",
    inStock: true,
  },
  {
    id: "n-2",
    name: "Anillo Constelación",
    price: 245,
    image: "/delicate-constellation-ring-with-tiny-diamonds-on-.jpg",
    isNew: true,
    category: "Anillos",
    description: "Anillo con micropavé que evoca la magia de las estrellas.",
    inStock: true,
  },
  {
    id: "n-3",
    name: "Aretes Esencia",
    price: 165,
    image: "/elegant-minimalist-gold-drop-earrings-on-white-bac.jpg",
    isNew: true,
    category: "Aretes",
    description: "Aretes de caída sutil que aportan brillo a tu día.",
    inStock: true,
  },
  {
    id: "n-4",
    name: "Brazalete Infinito",
    price: 210,
    image: "/sleek-infinity-symbol-bracelet-in-gold-on-white-ba.jpg",
    isNew: true,
    category: "Pulseras",
    description: "Brazalete símbolo de lazos eternos en un diseño minimalista.",
    inStock: true,
  },
]

export function NewArrivals() {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
            Lo Nuevo
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Descubre nuestras últimas creaciones, diseñadas para capturar la esencia de este momento
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent text-xs sm:text-sm"
            asChild
          >
            <Link href="/productos">Ver Toda la Colección</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
