import Link from "next/link"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Anillo Eternidad",
    price: 2850,
    image: "/elegant-gold-ring-minimalist.jpg",
    category: "Anillos",
  },
  {
    id: 2,
    name: "Collar Luna",
    price: 3200,
    image: "/elegant-necklace-pendant-minimalist.jpg",
    category: "Collares",
  },
  {
    id: 3,
    name: "Aretes Celestial",
    price: 2400,
    image: "/elegant-earrings-minimalist.jpg",
    category: "Aretes",
  },
  {
    id: 4,
    name: "Pulsera Infinito",
    price: 1950,
    image: "/elegant-bracelet-minimalist.jpg",
    category: "Pulseras",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-balance">
            Colección Destacada
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto text-pretty">
            Piezas cuidadosamente seleccionadas que reflejan nuestra pasión por la excelencia
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/productos"
            className="inline-block text-xs sm:text-sm tracking-wide border-b-2 border-primary pb-1 hover:border-secondary transition-colors"
          >
            VER TODA LA COLECCIÓN
          </Link>
        </div>
      </div>
    </section>
  )
}
