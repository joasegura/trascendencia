"use client"

import { useEffect, useRef } from "react"

const brands = [
  { name: "Cartier", logo: "/cartier-logo.jpg" },
  { name: "Tiffany & Co", logo: "/tiffany-co-logo.jpg" },
  { name: "Bulgari", logo: "/bulgari-logo.jpg" },
  { name: "Van Cleef", logo: "/van-cleef-logo.jpg" },
  { name: "Chopard", logo: "/chopard-logo.jpg" },
  { name: "Graff", logo: "/graff-logo.jpg" },
]

export function BrandCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 20)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-background border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm tracking-widest text-muted-foreground uppercase mb-8">
          Trabajamos con las mejores marcas
        </h3>
        <div ref={scrollRef} className="overflow-hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex gap-12 lg:gap-16" style={{ width: "max-content" }}>
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
