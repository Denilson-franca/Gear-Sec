"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HeartHandshake, Rocket, Network, MailWarning } from "lucide-react"

const specialties = [
  {
    title: "Impacto Social e Mentoria",
    description:
      "Valorizamos profundamente ONGs e empresas que dão importância a inserir crianças e jovens no mundo da tecnologia. Prestamos serviços e conduzimos mentorias para essas causas, e ficamos verdadeiramente felizes em poder ajudar a transformar vidas por meio do conhecimento.",
    icon: HeartHandshake,
  },
  {
    title: "Implantação de Ponta a Ponta",
    description:
      "Arquitetura, design e desenvolvimento do zero de plataformas de alto desempenho, com foco em performance, escalabilidade e segurança.",
    icon: Rocket,
  },
  {
    title: "Infraestrutura e Gestão de DNS",
    description:
      "Gerenciamento de registros de domínio, configuração de nameservers personalizados e tabelas avançadas de zona DNS.",
    icon: Network,
  },
  {
    title: "Segurança de E-mail e Anti-Spoofing",
    description:
      "Resolução de problemas complexos de integração SMTP/API e mitigação de riscos de falsificação de domínio configurando registros SPF, DKIM e DMARC.",
    icon: MailWarning,
  },
]

export function SpecialtiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="especialidades"
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.6)] mb-4">
            Nossa Atuação e Especialidades
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Da mentoria social à infraestrutura crítica, atuamos ponta a ponta na proteção e evolução digital da sua organização
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-[#ff1a5c]/60 hover:shadow-[0_0_30px_rgba(255,26,92,0.2)]">
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30 group-hover:bg-[#ff1a5c]/20 group-hover:border-[#ff1a5c]/50 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#ff1a5c]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white mb-3 group-hover:text-[#ff1a5c] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

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
