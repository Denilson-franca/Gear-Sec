"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Eye, Search, Users } from "lucide-react"
import { Gear } from "./gear"

const services = [
  {
    number: "1",
    title: "Firewall Avançado",
    description: "Proteção de rede de última geração com análise de tráfego em tempo real e bloqueio automático de ameaças.",
    icon: Shield,
  },
  {
    number: "2",
    title: "Monitoramento 24/7",
    description: "Vigilância contínua dos seus sistemas com alertas instantâneos e resposta rápida a incidentes.",
    icon: Eye,
  },
  {
    number: "3",
    title: "Auditoria Inteligente",
    description: "Análise profunda de vulnerabilidades e conformidade com relatórios detalhados e recomendações.",
    icon: Search,
  },
  {
    number: "4",
    title: "Consultoria Especializada",
    description: "Equipe de especialistas dedicados para desenvolver estratégias de segurança personalizadas.",
    icon: Users,
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="servicos"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      {/* Background gears */}
      <div className="absolute inset-0 opacity-20">
        <Gear size={300} x={-10} y={30} speed={40} direction={1} opacity={0.2} />
        <Gear size={250} x={110} y={70} speed={35} direction={-1} opacity={0.15} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.6)] mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas em segurança cibernética para proteger sua empresa contra ameaças digitais
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-[#ff1a5c]/60 hover:shadow-[0_0_30px_rgba(255,26,92,0.2)]">
                {/* Number watermark */}
                <span className="absolute -right-4 -top-4 font-[var(--font-orbitron)] text-[120px] font-bold text-[#ff1a5c]/5 select-none pointer-events-none">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30 group-hover:bg-[#ff1a5c]/20 group-hover:border-[#ff1a5c]/50 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#ff1a5c]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white mb-3 group-hover:text-[#ff1a5c] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-transparent border border-[#ff1a5c] text-[#ff1a5c] rounded-lg font-medium text-sm hover:bg-[#ff1a5c] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,26,92,0.4)]"
                >
                  Saiba Mais
                </motion.button>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute bottom-[-40px] right-[-40px] w-20 h-20 border border-[#ff1a5c]/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
