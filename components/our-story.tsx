export function OurStory() {
  return (
    <section id="nosotros" className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">Nuestra Historia</h2>
            <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Trascendencia nace de la pasión por crear piezas que van más allá de lo material. Cada joya cuenta una
                historia, captura un momento, y se convierte en un símbolo de los instantes que verdaderamente importan.
              </p>
              <p>
                Inspirados en la belleza atemporal y el diseño minimalista, trabajamos con materiales nobles y técnicas
                artesanales para crear piezas únicas que acompañan tu viaje personal.
              </p>
              <p>
                Creemos que la verdadera elegancia reside en la simplicidad, y que cada pieza debe ser tan especial como
                la persona que la lleva. Por eso, cada creación es cuidadosamente diseñada para trascender tendencias y
                convertirse en un tesoro para toda la vida.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            <img
              src="/elegant-jewelry-workshop-with-artisan-hands-crafti.jpg"
              alt="Nuestro taller artesanal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
