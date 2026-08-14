export default function ContactoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/contacto/contacto.png')" }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="w-full max-w-xl">
          <h1 className="font-heading text-5xl leading-[1.00] text-foreground md:text-6xl">
            CONTACTO
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text/80">
            Contacto para colaboraciones, entrevistas y proyectos
          </p>

          <div className="mt-10">
            <div className="py-5">
              <span className="text-sm uppercase tracking-wider text-accent">
                EMAIL
              </span>

              <a
                href="mailto:correo@ejemplo.com"
                className="mt-2 block text-base text-foreground transition-opacity hover:opacity-70"
              >
                correo@ejemplo.com
              </a>
            </div>

            <div className="border-t border-white/30 py-5">
              <span className="text-sm uppercase tracking-wider text-accent">
                LINKEDIN
              </span>

              <a
                href="#"
                className="mt-2 block text-base text-foreground transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
            </div>

            <div className="border-t border-white/30 py-5">
              <span className="text-sm uppercase tracking-wider text-accent">
                INSTAGRAM
              </span>

              <a
                href="#"
                className="mt-2 block text-base text-foreground transition-opacity hover:opacity-70"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}