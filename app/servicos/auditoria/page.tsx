"use client"

import { motion } from "framer-motion"
import { Search, ArrowLeft, CheckCircle, FileText, AlertCircle, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const flowSteps = [
  {
    number: "01",
    title: "Coleta de Informações",
    description: "Mapeamento completo da infraestrutura, sistemas e processos da sua empresa."
  },
  {
    number: "02",
    title: "Análise de Vulnerabilidades",
    description: "Identificação de pontos fracos utilizando ferramentas especializadas e técnicas avançadas."
  },
  {
    number: "03",
    title: "Testes de Segurança",
    description: "Simulação controlada de ataques para verificar a eficácia das defesas existentes."
  },
  {
    number: "04",
    title: "Elaboração de Relatório",
    description: "Documentação detalhada de todas as descobertas com classificação de risco."
  },
  {
    number: "05",
    title: "Recomendações",
    description: "Plano de ação priorizado com soluções práticas para cada vulnerabilidade."
  },
  {
    number: "06",
    title: "Acompanhamento",
    description: "Suporte na implementação das correções e verificação de eficácia."
  }
]

const reportContents = [
  "Sumário executivo para gestores",
  "Detalhamento técnico completo",
  "Classificação de riscos por criticidade",
  "Evidências documentadas",
  "Recomendações priorizadas",
  "Cronograma sugerido de correções"
]

export default function AuditoriaPage() {
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
              <Search className="w-10 h-10 text-[#ff1a5c]" />
            </div>
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.6)] mb-6">
              Auditoria Inteligente
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Análise profunda de vulnerabilidades com relatórios detalhados para prevenção de ataques
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
              Conhecer para Proteger
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma auditoria de segurança é como um <strong className="text-[#ff1a5c]">check-up completo da saúde digital</strong> da sua empresa. Nossos especialistas examinam cada aspecto da sua infraestrutura em busca de vulnerabilidades que poderiam ser exploradas por invasores.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Diferente de soluções automatizadas genéricas, nossa auditoria combina <strong className="text-[#ff1a5c]">ferramentas avançadas com análise humana especializada</strong>, identificando não apenas vulnerabilidades técnicas, mas também falhas em processos e comportamentos que colocam seus dados em risco.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              O resultado é um <strong className="text-[#ff1a5c]">relatório completo e compreensível</strong> que serve como guia para fortalecer suas defesas, prevenir vazamentos de dados e evitar ataques futuros.
            </p>
          </motion.div>

          {/* Flow Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Como Funciona Nossa Auditoria
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flowSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-xl p-6 hover:border-[#ff1a5c]/50 transition-all duration-300"
                >
                  <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#ff1a5c] flex items-center justify-center font-[var(--font-orbitron)] font-bold text-white text-sm">
                    {step.number}
                  </span>
                  <h3 className="font-[var(--font-orbitron)] text-lg font-semibold text-white mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Report Contents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#121212]/80 backdrop-blur-sm border border-[#ff1a5c]/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-[#ff1a5c]/10 flex items-center justify-center border border-[#ff1a5c]/30">
                <FileText className="w-7 h-7 text-[#ff1a5c]" />
              </div>
              <div>
                <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-white mb-4">
                  Relatório Detalhado
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Nosso relatório é elaborado para ser compreendido tanto por equipes técnicas quanto por gestores de negócio, apresentando as informações de forma clara e objetiva.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {reportContents.map((content, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ff1a5c] flex-shrink-0" />
                  <span className="text-gray-300">{content}</span>
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
              Solicitar Auditoria
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
