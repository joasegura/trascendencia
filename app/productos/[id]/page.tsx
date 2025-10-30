import { notFound } from "next/navigation"
import { getProductById, products } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { RelatedProducts } from "@/components/related-products"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </main>
      <Footer />
    </div>
  )
}
