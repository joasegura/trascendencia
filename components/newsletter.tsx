"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setTimeout(() => {
      toast({
        title: "Suscripción confirmada",
        description: "Te mantendremos al tanto de nuestras novedades y lanzamientos.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 400)
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">Únete a nuestra comunidad</h2>
          <p className="text-muted-foreground text-lg mb-8 text-pretty">
            Recibe las últimas novedades, ofertas exclusivas y consejos de estilo directamente en tu correo
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background"
            />
            <Button type="submit" size="lg" className="text-sm tracking-wide" disabled={isSubmitting}>
              SUSCRIBIRSE
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
