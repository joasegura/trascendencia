"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"
import { Check, ShoppingBag, ArrowLeft, Heart } from "lucide-react"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [imageError, setImageError] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Agregado al carrito",
      description: `${product.name} ha sido agregado a tu carrito`,
    })
  }

  const imageSrc = imageError ? "/placeholder.svg" : (product.image || "/placeholder.svg")

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 md:mb-8">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a productos</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] md:aspect-square bg-muted rounded-2xl overflow-hidden group">
              <img
                src={imageSrc}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                loading="eager"
              />
              {product.inStock && (
                <div className="absolute top-4 right-4">
                  <button
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                    aria-label="Agregar a favoritos"
                  >
                    <Heart className="w-5 h-5 text-muted-foreground hover:text-destructive transition-colors" />
                  </button>
                </div>
              )}
            </div>
            {/* Additional images could go here */}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <p className="text-2xl sm:text-3xl font-light">${product.price.toFixed(2)}</p>
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-green-600">
                    <Check className="w-4 h-4" />
                    <span>Disponible</span>
                  </span>
                ) : (
                  <span className="text-xs sm:text-sm text-destructive">Agotado</span>
                )}
              </div>
            </div>

            <div className="border-t border-b border-border py-6 md:py-8">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 md:px-12 text-xs sm:text-sm tracking-wide"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {product.inStock ? "Agregar al Carrito" : "No Disponible"}
              </Button>

              {product.inStock && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>En stock - Envío inmediato</span>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-6 border-t border-border">
              <h3 className="text-xs sm:text-sm tracking-widest uppercase text-foreground mb-4">
                Detalles del Producto
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span className="font-medium">Categoría:</span>
                  <span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Disponibilidad:</span>
                  <span className={product.inStock ? "text-green-600" : "text-destructive"}>
                    {product.inStock ? "En Stock" : "Agotado"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Precio:</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 md:space-y-4 pt-6 border-t border-border">
              <h3 className="text-xs sm:text-sm tracking-widest uppercase text-foreground mb-3">
                Información de Compra
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <p className="leading-relaxed">Envío gratuito en compras superiores a $150</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <p className="leading-relaxed">Devoluciones gratuitas dentro de 30 días</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <p className="leading-relaxed">Garantía de autenticidad y calidad</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <p className="leading-relaxed">Embalaje elegante incluido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
