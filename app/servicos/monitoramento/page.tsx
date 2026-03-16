"use client"

import { motion } from "framer-motion"
import { Eye, ArrowLeft, CheckCircle, Network, Scan, AlertTriangle, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Network,
    title: "Varredura de Rede",
    description: "A varredura de rede é um processo de análise contínua que examina todos os dispositivos e conexões da sua infraestrutura. Isso nos permite identificar dispositivos não autorizados, portas abertas e possíveis pontos de entrada que poderiam ser explorados por invasores. Pense nisso como uma ronda de segurança digital que acontece 24 horas por dia."
  },
  {
    icon: Scan,
    title: "Scans Automatizados",
    description: "Nossos sistemas realizam verificações automáticas e programadas em busca de vulnerabilidades conhecidas. Utilizamos bases de dados atualizadas constantemente com as últimas ameaças descobertas mundialmente. Assim que uma nova vulnerabilidade é identificada, nosso sistema verifica se sua empresa está exposta e alerta imediatamente nossa equipe."
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Threat Intelligence, ou Inteligência de Ameaças, é nossa capacidade de antecipar perigos antes que eles atinjam sua empresa. Monitoramos fontes globais de informação sobre novos ataques, técnicas de invasão e grupos criminosos. Com isso, preparamos suas defesas contra ameaças que ainda nem chegaram ao Brasil, mantendo você sempre um passo à frente dos atacantes."
  }
]

const benefits = [
  "Detecção de ameaças em tempo real",
  "Alertas instantâneos via múltiplos canais",
  "Equipe de resposta disponível 24/7",
  "Relatórios semanais de segurança",
  "Dashboard de monitoramento em tempo real",
  "Integração com sistemas existentes"
]

export default function MonitoramentoPage() {
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
              <Eye className="w-10 h-10 text-[#ff1a5c]" />
            </div>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.6)] mb-6">
              Monitoramento 24/7
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Vigilância contínua e inteligente para proteger sua empresa a qualquer momento
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
              Proteção que Nunca Dorme
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ameaças cibernéticas não respeitam horário comercial. Por isso, nossa equipe e sistemas trabalham <strong className="text-[#ff1a5c]">ininterruptamente</strong> para garantir que sua empresa esteja sempre protegida.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Combinamos <strong className="text-[#ff1a5c]">tecnologia de ponta com expertise humana</strong> para identificar, analisar e neutralizar ameaças antes que causem danos ao seu negócio.
            </p>
          </motion.div>

          {/* Services Detail */}
          <div className="space-y-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 hover:border-[#ff1a5c]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30">
                    <service.icon className="w-7 h-7 text-[#ff1a5c]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-orbitron)] text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-8">
              Benefícios do Monitoramento
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
              Contratar Monitoramento
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
