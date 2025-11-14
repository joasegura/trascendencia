"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product & { isNew?: boolean }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    toast({
      title: "Agregado al carrito",
      description: `${product.name} ha sido agregado a tu carrito`,
    })
  }

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Link href={`/productos/${product.id}`} className="block">
        <div className="relative aspect-[3/4.5] bg-muted mb-2 sm:mb-3 overflow-hidden rounded-2xl">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-medium tracking-widest text-primary-foreground uppercase shadow-lg z-10">
              Nuevo
            </span>
          )}
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 z-10 pointer-events-none">
              <div className="pointer-events-auto">
                <Button 
                  size="sm" 
                  className="text-xs tracking-wide" 
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  AGREGAR AL CARRITO
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-0.5">
          <p className="text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase">
            {typeof product.category === 'string' 
              ? product.category.charAt(0).toUpperCase() + product.category.slice(1)
              : product.category}
          </p>
          <h3 className="font-serif text-sm sm:text-base lg:text-lg leading-tight">{product.name}</h3>
          <p className="text-xs sm:text-sm">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="mt-3 md:hidden">
        <Button 
          size="sm" 
          className="w-full text-xs tracking-wide" 
          onClick={handleAddToCart}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          AGREGAR AL CARRITO
        </Button>
      </div>
    </div>
  )
}
