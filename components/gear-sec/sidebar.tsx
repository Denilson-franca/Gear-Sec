"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, Users, Mail, Headphones, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { GearLogo } from "./gear-logo"

const menuItems = [
  { icon: Home, label: "Início", href: "#inicio" },
  { icon: Briefcase, label: "Serviços", href: "#servicos" },
  { icon: Users, label: "Sobre Nós", href: "#sobre" },
  { icon: Mail, label: "Contato", href: "#contato" },
  { icon: Headphones, label: "Suporte", href: "#suporte" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-[#121212]/80 border border-[#2a2a2a] backdrop-blur-sm"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#ff1a5c]" />
        ) : (
          <Menu className="w-6 h-6 text-[#ff1a5c]" />
        )}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen || isDesktop ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen w-56 bg-[#0d0d0d]/95 backdrop-blur-md border-r border-[#2a2a2a] z-40 flex flex-col py-6 px-4"
      >
        {/* Logo */}
        <div className="mb-8">
          <GearLogo />
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-[#ff1a5c] hover:bg-[#ff1a5c]/10 transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,26,92,0.8)]" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="text-xs text-gray-600 text-center">
          © 2026 Gear Sec
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
