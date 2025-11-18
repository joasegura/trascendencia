import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Bodoni_Moda } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { FavoritesProvider } from "@/contexts/favorites-context"
import { Toaster } from "@/components/ui/toaster"
import { LoadingScreen } from "@/components/loading-screen"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Trascendencia - Joyería Elegante",
  description: "Descubre piezas únicas que trascienden el tiempo",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${bodoni.variable}`}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        <CartProvider>
          <FavoritesProvider>
            {children}
            <Toaster />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  )
}
