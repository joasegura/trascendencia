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
  const innerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const scrollPositionRef = useRef<number>(0)
  const halfWidthRef = useRef<number>(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const innerContainer = innerRef.current
    if (!scrollContainer || !innerContainer || typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    if (prefersReducedMotion.matches) {
      scrollContainer.scrollLeft = 0
      return
    }

    // Calcular el ancho de la mitad (donde están las primeras marcas)
    const calculateHalfWidth = () => {
      if (innerContainer.scrollWidth > 0) {
        halfWidthRef.current = innerContainer.scrollWidth / 2
      }
    }

    // Función de animación
    const animate = () => {
      scrollPositionRef.current += 0.5
      
      // Reset cuando llegamos al punto medio (donde se duplican las marcas)
      if (scrollPositionRef.current >= halfWidthRef.current) {
        scrollPositionRef.current = 0
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Esperar a que las imágenes se carguen para calcular correctamente
    const initAnimation = () => {
      calculateHalfWidth()
      if (halfWidthRef.current === 0) {
        // Si aún no se calculó, intentar de nuevo
        setTimeout(initAnimation, 100)
        return
      }
      
      // Iniciar animación
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Esperar a que el DOM esté listo
    setTimeout(initAnimation, 100)

    // Pausar solo cuando la pestaña no está visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
      } else {
        if (!animationFrameRef.current && halfWidthRef.current > 0) {
          animationFrameRef.current = requestAnimationFrame(animate)
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-background border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm tracking-widest text-muted-foreground uppercase mb-8">
          Trabajamos con las mejores marcas
        </h3>
        <div
          ref={scrollRef}
          className="overflow-hidden focus:outline-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="list"
          aria-label="Marcas asociadas"
        >
          <div ref={innerRef} className="flex gap-12 lg:gap-16" style={{ width: "max-content" }}>
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
                role="listitem"
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
