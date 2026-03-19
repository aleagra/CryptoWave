import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="bg-linear-to-br relative overflow-hidden rounded-2xl border
          border-[#1f2227]/60 from-[#050508] 
          px-6 py-16 sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#22C55E]/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#16a34a]/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#f8f8f8] sm:text-4xl">
              Comienza tu viaje en cripto hoy
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-[#7d8086] sm:text-lg">
              Únete a millones de usuarios que confían en CryptoWave para
              gestionar sus inversiones en criptomonedas de forma segura.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/register"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#22C55E] px-6 py-3 text-sm font-medium text-[#f8f8f8] transition hover:opacity-90 sm:w-auto"
              >
                Crear cuenta gratis
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/market"
                className="w-full rounded-md border border-[#22C55E] px-6 py-3 text-sm font-medium text-[#22C55E] transition hover:bg-[#22C55E]/10 sm:w-auto"
              >
                Ver mercado
              </Link>
            </div>

            <p className="mt-6 text-xs text-[#7d8086]">
              Sin tarjeta de crédito requerida • Configuración en 2 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

