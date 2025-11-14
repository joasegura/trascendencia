"use client"

import Link from "next/link"
import { ProductCard } from "./product-card"
import { Button } from "./ui/button"
import { products } from "@/lib/products"

// Seleccionar productos nuevos de los productos reales
const newProducts = products.slice(0, 4).map((product) => ({
  ...product,
  isNew: true,
}))

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
