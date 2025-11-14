"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    let startTime = Date.now()
    const minDisplayTime = 800 // Tiempo mínimo de visualización en ms

    // Función para ocultar el loading
    const hideLoading = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)

      setTimeout(() => {
        setIsLoading(false)
        // Remover del DOM después de la animación de fade out
        setTimeout(() => {
          setIsMounted(false)
        }, 500)
      }, remainingTime)
    }

    // Verificar si la página ya está cargada
    if (document.readyState === "complete") {
      hideLoading()
    } else {
      window.addEventListener("load", hideLoading, { once: true })
    }

    // Fallback: si después de 3 segundos aún no se ha cargado, ocultar igual
    const fallbackTimeout = setTimeout(() => {
      hideLoading()
    }, 3000)

    return () => {
      window.removeEventListener("load", hideLoading)
      clearTimeout(fallbackTimeout)
    }
  }, [])

  // No renderizar nada si no está montado
  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Cargando"
      role="status"
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo con animación suave */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            isLoading
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-2"
          }`}
        >
          <Image
            src="/logoTDCnegro.png"
            alt="Trascendencia"
            width={200}
            height={43}
            priority
            className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28"
          />
        </div>

        {/* Spinner elegante */}
        <div
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <div className="w-10 h-10 border-2 border-muted-foreground/20 border-t-foreground rounded-full animate-spin" />
            <div className="absolute inset-0 w-10 h-10 border-2 border-transparent border-r-foreground/30 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

