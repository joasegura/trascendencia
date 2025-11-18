"use client"

import { useFavorites } from "@/contexts/favorites-context"
import { ProductCard } from "@/components/product-card"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FavoritesContent() {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16 md:py-24">
        <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
        <h2 className="font-serif text-2xl md:text-3xl mb-4">No tienes favoritos aún</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Explora nuestra colección y agrega tus piezas favoritas haciendo clic en el corazón
        </p>
        <Button asChild size="lg">
          <Link href="/productos">Explorar Productos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

