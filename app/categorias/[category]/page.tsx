import { notFound } from "next/navigation"
import { getProductsByCategory } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

const categories = {
  collares: { name: "Collares", description: "Piezas elegantes para adornar tu cuello" },
  anillos: { name: "Anillos", description: "Símbolos de amor y compromiso" },
  aretes: { name: "Aretes", description: "Detalles que iluminan tu rostro" },
  pulseras: { name: "Pulseras", description: "Elegancia en cada movimiento" },
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = categories[params.category as keyof typeof categories]

  if (!categoryInfo) {
    notFound()
  }

  const products = getProductsByCategory(params.category)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">{categoryInfo.name}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{categoryInfo.description}</p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No hay productos disponibles en esta categoría</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
