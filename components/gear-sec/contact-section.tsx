"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, MapPin, Phone, Mail, Linkedin } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Mensagem enviada com sucesso!")
  }

  return (
    <section
      ref={ref}
      id="contato"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
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
            Contato
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos proteger sua empresa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-[var(--font-orbitron)] text-2xl font-semibold text-white mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Nossa equipe está pronta para atender suas necessidades de segurança cibernética. 
                Entre em contato e agende uma avaliação gratuita.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 - São Paulo, SP", href: null },
                { icon: Phone, label: "Telefone", value: "+55 (11) 99999-9999", href: null },
                { icon: Mail, label: "E-mail", value: "contato@gearsec.com.br", href: null },
                { icon: Linkedin, label: "LinkedIn", value: "Denilson França", href: "https://www.linkedin.com/in/denilson-fran%C3%A7a-7a959b191/" },
              ].map((item, index) => {
                const content = (
                  <>
                    <div className="w-10 h-10 rounded-lg bg-[#ff1a5c]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#ff1a5c]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </>
                )
                
                return item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#2a2a2a] hover:border-[#ff1a5c]/30 hover:bg-[#1a1a1a]/80 transition-colors duration-300 cursor-pointer"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#2a2a2a] hover:border-[#ff1a5c]/30 transition-colors duration-300"
                  >
                    {content}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:border-[#ff1a5c] focus:ring-1 focus:ring-[#ff1a5c] focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:border-[#ff1a5c] focus:ring-1 focus:ring-[#ff1a5c] focus:outline-none transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-400 mb-2">Empresa</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:border-[#ff1a5c] focus:ring-1 focus:ring-[#ff1a5c] focus:outline-none transition-colors duration-300"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-gray-500 focus:border-[#ff1a5c] focus:ring-1 focus:ring-[#ff1a5c] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-[#ff1a5c] text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#e01550] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(255,26,92,0.3)] hover:shadow-[0_0_30px_rgba(255,26,92,0.5)]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
