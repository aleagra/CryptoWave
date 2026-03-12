import {
  ArrowRight,
  Layers,
  Shield,
  Zap,
  Globe,
  LineChart,
  Lock,
} from "lucide-react";
import Wrapper from "../wrapper/Wrapper";

const features = [
  {
    icon: Shield,
    title: "Seguridad avanzada",
    description:
      "Protección de nivel empresarial con autenticación de dos factores, almacenamiento en frío y cifrado de extremo a extremo.",
  },
  {
    icon: Zap,
    title: "Transacciones instantáneas",
    description:
      "Procesamiento de órdenes en milisegundos con nuestra infraestructura de baja latencia distribuida globalmente.",
  },
  {
    icon: LineChart,
    title: "Herramientas profesionales",
    description:
      "Gráficos avanzados, indicadores técnicos y APIs para traders profesionales y desarrolladores.",
  },
  {
    icon: Globe,
    title: "Disponible globalmente",
    description:
      "Opera desde cualquier lugar del mundo con soporte en múltiples idiomas y monedas locales.",
  },
  {
    icon: Lock,
    title: "Cumplimiento regulatorio",
    description:
      "Licenciados y regulados en múltiples jurisdicciones, garantizando la máxima transparencia.",
  },
  {
    icon: Layers,
    title: "Múltiples activos",
    description:
      "Accede a criptomonedas, tokens, NFTs y activos tradicionales desde una sola plataforma.",
  },
];
function HomeRegister() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Glow superior */}
        <div
          className="max-w-150 absolute right-0 
        top-1/2 aspect-square 
        w-[50vw] -translate-y-1/2 translate-x-1/2
        rounded-full bg-[#22C55E]/5 blur-3xl"
        />
        {/* Glow inferior (opcional, para simetría) */}
        <div
          className="max-w-125 absolute bottom-0 
        left-1/2 aspect-square 
        w-[40vw] translate-x-1/2 translate-y-1/2
        rounded-full bg-[#22C55E]/5 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#f8f8f8] sm:text-4xl lg:text-5xl">
              Invierte en los activos{" "}
              <span className="bg-linear-to-r from-[#22C55E] to-[#16a34a] bg-clip-text text-transparent">
                más populares
              </span>{" "}
              del mundo
            </h2>

            <p className="text-pretty mt-4 max-w-lg text-base text-[#7d8086] sm:text-lg">
              Desde industrias establecidas hasta los nuevos protagonistas del
              mercado — elige entre docenas de rutas hacia una inversión
              inteligente.
            </p>
          </div>

          <div className="lg:text-right">
            <button className="inline-flex items-center gap-2 rounded-md bg-[#22C55E] px-5 py-3 text-sm font-medium text-[#f8f8f8] transition-colors hover:bg-[#16a34a]">
              Comenzar a invertir
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-xl border border-[#1f2227]/60 bg-[#14161a]/30 p-6 transition-all hover:border-[#22C55E]/40 hover:bg-[#14161a]/50"
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
export default Wrapper(HomeRegister);
