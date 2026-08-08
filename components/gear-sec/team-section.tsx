"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, ShieldQuestion } from "lucide-react"

const team = [
  {
    name: "Denilson França",
    role: "Fundador e Analista de Segurança da Informação",
    linkedin: "https://www.linkedin.com/in/denilson-fran%C3%A7a-7a959b191/",
  },
  {
    name: "Ulysses Gonçalez Moniz",
    role: "Especialista em Segurança da Informação e Redes",
    linkedin: "https://www.linkedin.com/in/ulysses-gon%C3%A7alez-moniz-0984141b/",
  },
  {
    name: "Matheus Reis",
    role: "Cientista de Dados",
    linkedin: "https://www.linkedin.com/in/reismatheus9678/",
  },
  {
    name: "João Pedro Guimarães Pin",
    role: "Analista de Dados",
    linkedin: "https://www.linkedin.com/in/joaopedropin/",
  },
  {
    name: "Confidencial",
    role: "Offensive Security Analyst | CRTO | eWPTX | CWHI",
    linkedin: null,
    confidential: true,
  },
]

function getInitials(name: string) {
  const parts = name.trim().split(" ").filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="equipe"
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
            Nossa Equipe de Especialistas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Profissionais experientes e certificados dedicados à proteção da sua empresa
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative"
            >
              <div className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 h-full flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:border-[#ff1a5c]/60 hover:shadow-[0_0_30px_rgba(255,26,92,0.2)]">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30 mb-4 group-hover:bg-[#ff1a5c]/20 group-hover:border-[#ff1a5c]/50 transition-all duration-300">
                  {member.confidential ? (
                    <ShieldQuestion className="w-9 h-9 text-[#ff1a5c]" />
                  ) : (
                    <span className="font-[var(--font-orbitron)] text-xl font-bold text-[#ff1a5c]">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="font-[var(--font-orbitron)] text-lg font-semibold text-white mb-2 group-hover:text-[#ff1a5c] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {member.role}
                </p>

                {/* LinkedIn */}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#ff1a5c]/40 text-[#ff1a5c] text-sm font-medium hover:bg-[#ff1a5c] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,26,92,0.4)]"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2a2a2a] text-gray-600 text-sm font-medium cursor-not-allowed">
                    Perfil Confidencial
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
