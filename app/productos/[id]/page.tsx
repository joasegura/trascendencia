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

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ id: string }> | { id: string } 
}) {
  // En Next.js 16, params puede ser una Promise, así que lo resolvemos
  const resolvedParams = await Promise.resolve(params)
  const product = getProductById(resolvedParams.id)

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
