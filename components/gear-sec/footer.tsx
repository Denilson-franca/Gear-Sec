"use client"

import { motion } from "framer-motion"
import { GearLogo } from "./gear-logo"

export function Footer() {
  return (
    <footer id="suporte" className="relative py-12 px-4 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GearLogo size="small" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-sm text-center"
          >
            © 2024 Gear Sec. Todos os direitos reservados.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {["LinkedIn", "Twitter", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-[#ff1a5c] transition-colors duration-300 text-sm"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
