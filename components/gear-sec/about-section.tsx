"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Gear } from "./gear"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#100810] to-[#0a0a0a]"
    >
      {/* Animated gear in background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <Gear size={600} x={50} y={50} speed={60} direction={1} opacity={0.15} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Animated Gear Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="relative">
              <Gear size={250} x={50} y={50} speed={25} direction={1} opacity={0.8} />
              <Gear size={150} x={85} y={30} speed={20} direction={-1} opacity={0.7} delay={0.2} />
              <Gear size={100} x={20} y={75} speed={15} direction={-1} opacity={0.6} delay={0.4} />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.6)] mb-6">
              Sobre Nós
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                A <span className="text-[#ff1a5c] font-semibold">Gear Sec</span> é uma empresa especializada em segurança cibernética, 
                dedicada a proteger organizações contra as crescentes ameaças digitais do mundo moderno.
              </p>
              <p>
                Com uma equipe de especialistas altamente qualificados e tecnologia de ponta, 
                oferecemos soluções personalizadas que se adaptam às necessidades específicas de cada cliente.
              </p>
              <p>
                Nossa missão é garantir que sua empresa opere com tranquilidade, sabendo que seus dados 
                e sistemas estão protegidos pelos melhores profissionais do mercado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "500+", label: "Clientes Protegidos" },
                { value: "99.9%", label: "Uptime Garantido" },
                { value: "24/7", label: "Suporte Dedicado" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-[#ff1a5c] drop-shadow-[0_0_10px_rgba(255,26,92,0.5)]">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
