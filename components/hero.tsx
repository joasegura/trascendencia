"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const scrollToStory = () => {
    const storySection = document.getElementById("nuestra-historia")
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-muted h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/elegant-jewelry-display-minimalist.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center h-full py-12">
          <div className="max-w-2xl">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance text-white">
                  Elegancia que trasciende el tiempo
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl text-pretty">
                  Descubre piezas únicas diseñadas para acompañarte en cada momento especial de tu vida.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="text-xs sm:text-sm tracking-wide" asChild>
                  <Link href="/productos">EXPLORAR COLECCIÓN</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-xs sm:text-sm tracking-wide bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                  onClick={scrollToStory}
                >
                  CONOCER MÁS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
