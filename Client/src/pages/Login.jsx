import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowIcon, Padlock, UserIcon } from "../utilities/icons";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="d flex min-h-screen items-center justify-center p-4 text-white">
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
            <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
            <p className="mt-2 text-sm text-[#7d8086]">
              Accedé a tu cuenta para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Usuario</label>

              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                <input
                  type="text"
                  value={formData.usuario}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      usuario: e.target.value,
                    })
                  }
                  placeholder="Tu usuario"
                  className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-4 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Contraseña</label>

              <div className="relative">
                <Padlock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d8086]" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.contraseña}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contraseña: e.target.value,
                    })
                  }
                  placeholder="Tu contraseña"
                  className="h-12 w-full rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] pl-11 pr-12 text-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/30"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7d8086] hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="cursor-pointer text-sm text-[#22C55E] hover:text-[#16a34a]">
                ¿Olvidaste tu contraseña?
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#22C55E] font-medium text-black transition hover:bg-[#16a34a] disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>
          <div className="relative my-6">
            <div className="w-full border-t border-[#2a2a2a]" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0d] px-3 text-xs text-[#7d8086]">
              o
            </span>
          </div>
          <button className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-[#2a2a2a] bg-[#0b0b0b] transition hover:bg-[#0f0f0f]">
            Continuar con Google
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-[#7d8086]">
          ¿No tenés una cuenta?{" "}
          <Link
            to="/register"
            className="font-medium text-[#22C55E] hover:text-[#16a34a]"
          >
            Registrate
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
