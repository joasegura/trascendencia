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
  const singleSetWidthRef = useRef<number>(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const innerContainer = innerRef.current
    if (!scrollContainer || !innerContainer || typeof window === "undefined") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    if (prefersReducedMotion.matches) {
      scrollContainer.scrollLeft = 0
      return
    }

    // Calcular el ancho de un conjunto de marcas (una sola vez)
    const calculateSingleSetWidth = () => {
      if (innerContainer.scrollWidth > 0) {
        // Dividimos por el número de copias que tenemos (3 copias)
        singleSetWidthRef.current = innerContainer.scrollWidth / 3
      }
    }

    // Función de animación continua e infinita
    const animate = () => {
      const speed = 0.5 // Velocidad del scroll (ajusta para más rápido/más lento)
      scrollPositionRef.current += speed
      
      // Reset invisible cuando llegamos al ancho de un conjunto
      // Esto hace que el scroll vuelva al inicio sin que se note
      // ya que tenemos 3 copias idénticas visibles al mismo tiempo
      if (scrollPositionRef.current >= singleSetWidthRef.current) {
        scrollPositionRef.current = scrollPositionRef.current - singleSetWidthRef.current
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Esperar a que las imágenes se carguen para calcular correctamente
    const initAnimation = () => {
      calculateSingleSetWidth()
      if (singleSetWidthRef.current === 0) {
        // Si aún no se calculó, intentar de nuevo
        setTimeout(initAnimation, 100)
        return
      }
      
      // Iniciar animación continua
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Esperar a que el DOM esté listo
    setTimeout(initAnimation, 100)

    // Pausar solo cuando la pestaña no está visible para optimizar rendimiento
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
      } else {
        if (!animationFrameRef.current && singleSetWidthRef.current > 0) {
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

  // Crear múltiples copias para un loop infinito sin interrupciones
  // Usamos 3 copias para asegurar que siempre haya contenido visible
  const duplicatedBrands = [...brands, ...brands, ...brands]

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
            {/* Múltiples copias para loop infinito sin interrupciones */}
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
                role="listitem"
              >
                <img 
                  src={brand.logo || "/placeholder.svg"} 
                  alt={brand.name} 
                  className="h-12 w-auto object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
