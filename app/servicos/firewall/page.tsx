"use client"

import { motion } from "framer-motion"
import { Shield, ArrowLeft, CheckCircle, Settings, Lock, Server } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Settings,
    title: "Configuração Personalizada",
    description: "Cada firewall é configurado de acordo com as necessidades específicas do seu negócio, garantindo proteção otimizada."
  },
  {
    icon: Lock,
    title: "Regras Adaptativas",
    description: "Sistema inteligente que adapta suas regras de segurança conforme o perfil de uso e ameaças identificadas."
  },
  {
    icon: Server,
    title: "Proteção Multicamadas",
    description: "Defesa em profundidade com múltiplas camadas de segurança para máxima proteção dos seus dados."
  }
]

const benefits = [
  "Análise detalhada do ambiente de TI",
  "Identificação de vulnerabilidades existentes",
  "Projeto personalizado de arquitetura de segurança",
  "Implementação gradual e não intrusiva",
  "Suporte contínuo e atualizações de segurança",
  "Relatórios periódicos de desempenho"
]

export default function FirewallPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-[#ff1a5c] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </Link>
          <span className="font-[var(--font-orbitron)] text-xl font-bold text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.8)]">
            Gear Sec
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30">
              <Shield className="w-10 h-10 text-[#ff1a5c]" />
            </div>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.6)] mb-6">
              Firewall Avançado
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proteção de rede personalizada e adaptada às necessidades específicas do seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-6">
              Nossa Abordagem
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Na Gear Sec, entendemos que cada empresa possui características únicas que exigem soluções de segurança igualmente exclusivas. Por isso, <strong className="text-[#ff1a5c]">não trabalhamos com soluções genéricas</strong>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Nosso processo começa com uma <strong className="text-[#ff1a5c]">avaliação completa do seu ambiente</strong>, identificando pontos críticos, fluxos de dados sensíveis e potenciais vulnerabilidades. A partir dessa análise, desenvolvemos uma arquitetura de firewall totalmente adaptada aos requisitos específicos do seu negócio.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              O resultado é um sistema de proteção que oferece <strong className="text-[#ff1a5c]">máxima segurança sem comprometer a performance</strong> das suas operações, garantindo que sua empresa esteja sempre protegida contra as ameaças mais recentes.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 hover:border-[#ff1a5c]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30">
                  <feature.icon className="w-6 h-6 text-[#ff1a5c]" />
                </div>
                <h3 className="font-[var(--font-orbitron)] text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-8">
              O Que Oferecemos
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ff1a5c] flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff1a5c] text-white rounded-xl font-semibold text-lg hover:bg-[#cc1549] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,26,92,0.4)]"
            >
              Solicitar Avaliação Gratuita
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Gear Sec. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
