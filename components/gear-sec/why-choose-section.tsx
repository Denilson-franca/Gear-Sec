"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Lock, Clock, Award, Headphones, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Tempo médio de resposta a incidentes inferior a 15 minutos."
  },
  {
    icon: Lock,
    title: "Proteção Total",
    description: "Cobertura completa contra malware, ransomware e ataques DDoS."
  },
  {
    icon: Clock,
    title: "Monitoramento Contínuo",
    description: "Vigilância ininterrupta 24 horas por dia, 7 dias por semana."
  },
  {
    icon: Award,
    title: "Certificações",
    description: "Equipe certificada ISO 27001, CISSP e CEH."
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Atendimento personalizado com especialistas dedicados."
  },
  {
    icon: TrendingUp,
    title: "Relatórios Detalhados",
    description: "Dashboards e relatórios em tempo real sobre sua segurança."
  },
]

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #ff1a5c 50px, #ff1a5c 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, #ff1a5c 50px, #ff1a5c 51px)`
        }} />
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
            Por que escolher a Gear Sec?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diferenciais que fazem da Gear Sec a escolha certa para sua segurança digital
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#2a2a2a] hover:border-[#ff1a5c]/40 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center mb-4 group-hover:bg-[#ff1a5c]/20 group-hover:shadow-[0_0_20px_rgba(255,26,92,0.3)] transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-[#ff1a5c]" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#ff1a5c] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ff1a5c]/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
