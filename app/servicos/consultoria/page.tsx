"use client"

import { motion } from "framer-motion"
import { Users, ArrowLeft, CheckCircle, Target, Lightbulb, Handshake, TrendingUp } from "lucide-react"
import Link from "next/link"

const approach = [
  {
    icon: Target,
    title: "Análise Individual",
    description: "Cada empresa é única. Por isso, começamos entendendo profundamente seu negócio, objetivos, desafios e contexto específico antes de propor qualquer solução."
  },
  {
    icon: Lightbulb,
    title: "Soluções Sob Medida",
    description: "Desenvolvemos estratégias e soluções personalizadas que se encaixam perfeitamente na realidade da sua empresa, respeitando seu orçamento e prioridades."
  },
  {
    icon: Handshake,
    title: "Parceria Contínua",
    description: "Não somos apenas prestadores de serviço, somos parceiros na proteção do seu negócio. Acompanhamos sua evolução e adaptamos as soluções conforme necessário."
  },
  {
    icon: TrendingUp,
    title: "Resultados Mensuráveis",
    description: "Estabelecemos métricas claras e acompanhamos os resultados, garantindo que cada investimento em segurança traga retorno real para sua empresa."
  }
]

const services = [
  "Diagnóstico completo de segurança",
  "Planejamento estratégico de cibersegurança",
  "Adequação a normas e regulamentações",
  "Treinamento de equipes",
  "Gestão de riscos digitais",
  "Resposta a incidentes",
  "Implementação de políticas de segurança",
  "Avaliação de fornecedores e parceiros"
]

export default function ConsultoriaPage() {
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
              <Users className="w-10 h-10 text-[#ff1a5c]" />
            </div>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.6)] mb-6">
              Consultoria Especializada
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluções personalizadas desenvolvidas por especialistas para as necessidades específicas do seu negócio
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
              Seu Negócio, Nossa Prioridade
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Na Gear Sec, acreditamos que <strong className="text-[#ff1a5c]">soluções padronizadas não atendem negócios únicos</strong>. Cada empresa possui sua própria cultura, processos, desafios e objetivos. Por isso, nossa consultoria começa com uma escuta atenta das suas necessidades.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Nosso time de especialistas <strong className="text-[#ff1a5c]">analisa cada caso de maneira individual</strong>, considerando não apenas aspectos técnicos, mas também o contexto do seu negócio, setor de atuação, regulamentações aplicáveis e metas de crescimento.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              O resultado é um <strong className="text-[#ff1a5c]">trabalho verdadeiramente personalizado</strong>, com recomendações práticas e aplicáveis que fazem sentido para a sua realidade e entregam valor real para sua empresa.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 hover:border-[#ff1a5c]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30">
                    <item.icon className="w-6 h-6 text-[#ff1a5c]" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-orbitron)] text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-8">
              Áreas de Atuação
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ff1a5c] flex-shrink-0" />
                  <span className="text-gray-300">{service}</span>
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
              Agendar Consultoria
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
