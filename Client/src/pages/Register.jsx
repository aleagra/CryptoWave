import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowIcon, MailIcon, Padlock, UserIcon } from "../utilities/icons";

function Register() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#040405] p-4 text-white">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 cursor-pointer rounded-lg p-2 text-[#7d8086] transition hover:bg-[#161616] hover:text-white"
      >
        <ArrowIcon className="h-5 w-5" />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-[#2a2a2a] bg-[#060606] p-8 shadow-xl shadow-black/40">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold">Crear cuenta</h1>
            <p className="mt-2 text-sm text-[#7d8086]">
              Registrate para empezar a usar la plataforma
            </p>
          </div>
          <form className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Usuario</label>

              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                <input
                  type="text"
                  placeholder="Tu usuario"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <label className="text-sm font-medium">Nombre</label>

                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                  <input
                    type="text"
                    placeholder="Nombre"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className="text-sm font-medium">Apellido</label>

                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                  <input
                    type="text"
                    placeholder="Apellido"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>

              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                <input
                  type="text"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Contraseña</label>

              <div className="relative">
                <Padlock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                <input
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                />
              </div>
            </div>
            <Link
              to="/login"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-[#22C55E] font-medium text-black transition hover:bg-[#16a34a] active:scale-[0.98]"
            >
              Crear cuenta
            </Link>
            <p className="text-center text-xs text-[#7d8086]">
              Al continuar, aceptás los{" "}
              <span className="cursor-pointer underline underline-offset-2 hover:text-[#22C55E]">
                Términos de Servicio
              </span>{" "}
              y la{" "}
              <span className="cursor-pointer underline underline-offset-2 hover:text-[#22C55E]">
                Política de Privacidad
              </span>
            </p>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-[#7d8086]">
          ¿Ya tenés una cuenta?{" "}
          <Link
            to="/login"
            className="font-medium text-[#22C55E] hover:text-[#16a34a]"
          >
            Iniciar sesión
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
