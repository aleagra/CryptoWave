import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: {
    title: "Producto",
    links: [
      { label: "Exchange", href: "#" },
      { label: "Mercados", href: "#" },
      { label: "Comisiones", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Prensa", href: "#" },
    ],
  },
  resources: {
    title: "Recursos",
    links: [
      { label: "Documentación", href: "#" },
      { label: "Centro de ayuda", href: "#" },
      { label: "Comunidad", href: "#" },
      { label: "Estado del servicio", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licencias", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2227]/40 bg-[#040405]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22C55E]/50 bg-[#22C55E]/10">
                <span className="text-sm font-bold text-[#22C55E]">$</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#f8f8f8]">
                CryptoWave
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7d8086]">
              La plataforma de intercambio de criptomonedas más segura y
              confiable para traders de todos los niveles.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="rounded-md p-2 text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-md p-2 text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-md p-2 text-[#7d8086] transition-colors hover:bg-[#14161a] hover:text-[#f8f8f8]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-[#f8f8f8]">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#7d8086] transition-colors hover:text-[#f8f8f8]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1f2227]/40 pt-8 sm:flex-row">
          <p className="text-sm text-[#7d8086]">
            © {new Date().getFullYear()} CryptoWave. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-[#7d8086] transition-colors hover:text-[#f8f8f8]"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-sm text-[#7d8086] transition-colors hover:text-[#f8f8f8]"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
