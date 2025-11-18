import Link from "next/link"

export function CategoryGrid() {
  const categories = [
    {
      id: "anillos",
      name: "Anillos",
      image: "/delicate-constellation-ring-with-tiny-diamonds-on-.jpg",
      description: "Símbolos de compromiso y elegancia",
    },
    {
      id: "collares",
      name: "Collares",
      image: "/minimalist-crescent-moon-gold-necklace-on-white-ba.jpg",
      description: "Piezas que realzan tu belleza natural",
    },
    {
      id: "aretes",
      name: "Aretes",
      image: "/elegant-minimalist-gold-drop-earrings-on-white-bac.jpg",
      description: "Detalles que marcan la diferencia",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">Explora por Categoría</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Encuentra la pieza perfecta para cada ocasión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-card"
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl lg:text-3xl mb-2">{category.name}</h3>
                <p className="text-sm text-white/90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
