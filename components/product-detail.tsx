"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"
import { Check, ShoppingBag } from "lucide-react"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Agregado al carrito",
      description: `${product.name} ha sido agregado a tu carrito`,
    })
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-square bg-secondary/30 rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">{product.name}</h1>
              <p className="text-3xl font-light">${product.price.toFixed(2)}</p>
            </div>

            <div className="border-t border-b border-border py-6">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>En stock - Envío inmediato</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-destructive">
                  <span>Agotado</span>
                </div>
              )}

              <Button
                size="lg"
                className="w-full md:w-auto px-12"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Agregar al Carrito
              </Button>
            </div>

            <div className="space-y-4 pt-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2" />
                <p>Envío gratuito en compras superiores a $150</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2" />
                <p>Devoluciones gratuitas dentro de 30 días</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2" />
                <p>Garantía de autenticidad y calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
