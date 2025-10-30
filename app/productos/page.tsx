import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
              Todos los Productos
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Explora nuestra colección completa de joyería elegante
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
