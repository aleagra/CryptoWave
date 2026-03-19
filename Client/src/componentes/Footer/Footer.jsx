import { Github, Twitter, Linkedin } from "lucide-react";
import { footerLinks } from "../../utilities/icons/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2227]/40 bg-[#040405]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-6">
          <div className="text-center lg:col-span-2 lg:text-left">
            <a
              href="/"
              className="flex items-center justify-center gap-2.5 lg:justify-start"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#22C55E]/50 bg-[#22C55E]/10">
                <span className="text-sm font-bold text-[#22C55E]">$</span>
              </div>
              <span className="text-base font-semibold text-[#f8f8f8] sm:text-lg">
                CryptoWave
              </span>
            </a>

            <p className="mt-3 hidden max-w-xs text-sm text-[#7d8086] lg:block">
              La plataforma de intercambio de criptomonedas más segura y
              confiable.
            </p>

            <div className="mt-4 flex justify-center gap-3 lg:justify-start">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-md p-2 text-[#7d8086] transition hover:bg-[#14161a] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center sm:gap-6 lg:col-span-4 lg:grid-cols-4 lg:text-left">
            {[footerLinks.product, footerLinks.company].map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-[#f8f8f8]">
                  {section.title}
                </h3>

                <ul className="mt-2 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#7d8086] hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold text-[#f8f8f8]">
                {footerLinks.resources.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      className="text-sm text-[#7d8086] hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold text-[#f8f8f8]">
                {footerLinks.legal.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      className="text-sm text-[#7d8086] hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-[#1f2227]/40 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-[#7d8086] sm:text-sm">
            © {new Date().getFullYear()} CryptoWave
          </p>

          <div className="flex gap-3 text-xs sm:gap-4 sm:text-sm">
            <a href="#" className="text-[#7d8086] hover:text-white">
              Privacidad
            </a>
            <a href="#" className="text-[#7d8086] hover:text-white">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

