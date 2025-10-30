import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const categories = [
  {
    id: "collares",
    name: "Collares",
    description: "Piezas elegantes para adornar tu cuello",
    image: "/minimalist-crescent-moon-gold-necklace-on-white-ba.jpg",
  },
  {
    id: "anillos",
    name: "Anillos",
    description: "Símbolos de amor y compromiso",
    image: "/delicate-constellation-ring-with-tiny-diamonds-on-.jpg",
  },
  {
    id: "aretes",
    name: "Aretes",
    description: "Detalles que iluminan tu rostro",
    image: "/elegant-minimalist-gold-drop-earrings-on-white-bac.jpg",
  },
  {
    id: "pulseras",
    name: "Pulseras",
    description: "Elegancia en cada movimiento",
    image: "/sleek-infinity-symbol-bracelet-in-gold-on-white-ba.jpg",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">Colecciones</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora nuestras colecciones cuidadosamente curadas de joyería elegante
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/categorias/${category.id}`}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary/30">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{category.name}</h2>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
