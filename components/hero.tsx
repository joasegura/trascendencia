"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const marqueeItems = [
  "Trascendencia",
  "Diseño Contemporáneo",
  "Joyas Artesanales",
  "Elegancia Atemporal",
  "Piezas que Cuentan Historias",
]

export function Hero() {
  const scrollToStory = () => {
    const storySection = document.getElementById("nosotros")
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative bg-muted min-h-[70vh] md:min-h-[80vh] lg:min-h-screen">
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
            <div className="max-w-4xl">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal tracking-wide text-white">
                    Elegancia que Trasciende el tiempo
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl text-pretty">
                    Descubre piezas únicas diseñadas para acompañarte en cada momento especial de tu vida.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

      {/* Text Ticker */}
      <div className="bg-black text-white overflow-hidden border-t border-white/10">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="marquee-group"
              aria-hidden={group === 1}
            >
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item}-${group}-${index}`}
                  className="flex items-center gap-1.5 text-[8px] sm:text-[9px] md:text-[10px] font-light tracking-[0.5em] uppercase whitespace-nowrap text-white/80"
                >
                  <span>{item}</span>
                  <span className="text-white/30 text-[6px]">✧</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
