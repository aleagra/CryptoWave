import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";
import { features } from "../../utilities/icons/data";

function HomeRegister() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 aspect-square w-[50vw] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#22C55E]/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 aspect-square w-[40vw] translate-x-1/2 translate-y-1/2 rounded-full bg-[#22C55E]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center gap-6 text-center lg:mb-16 lg:grid lg:grid-cols-2 lg:items-end lg:text-left">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#f8f8f8] sm:text-4xl lg:text-5xl">
              Invierte en los activos <br />
              <span className="bg-linear-to-r from-[#22C55E] to-[#16a34a] bg-clip-text text-transparent">
                más populares del mundo
              </span>
            </h2>

            <p className="mt-4 text-sm text-[#7d8086] sm:text-base lg:text-lg">
              Desde industrias establecidas hasta los nuevos protagonistas del
              mercado — elige entre docenas de rutas hacia una inversión
              inteligente.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-md bg-[#22C55E] px-5 py-3 text-sm font-medium text-[#f8f8f8] transition-colors hover:bg-[#16a34a]"
            >
              Comenzar a invertir
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group mx-auto w-full max-w-sm rounded-xl border border-[#1f2227]/60 bg-[#14161a]/30 p-6 text-center transition-all hover:border-[#22C55E]/40 hover:bg-[#14161a]/50 lg:text-left"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#22C55E]/10 p-2.5">
                  <Icon className="h-5 w-5 text-[#22C55E]" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-[#f8f8f8]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#7d8086]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeRegister;

