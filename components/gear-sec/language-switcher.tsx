"use client"

import { motion } from "framer-motion"
import { languages } from "@/lib/i18n"
import { useLanguage } from "./language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-1.5 rounded-full border border-[#2a2a2a] bg-[#0d0d0d]/80 px-2 py-1.5 backdrop-blur-md"
    >
      {languages.map((lang) => {
        const isActive = language === lang.code
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            aria-label={`Mudar idioma para ${lang.name}`}
            aria-pressed={isActive}
            title={lang.label}
            className={`relative flex h-7 w-9 items-center justify-center overflow-hidden rounded-md transition-all duration-300 hover:scale-105 ${
              isActive
                ? "opacity-100 ring-2 ring-[#ff1a5c] ring-offset-1 ring-offset-[#0d0d0d]"
                : "opacity-50 hover:opacity-90"
            }`}
          >
            <img
              src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
              srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
              alt={lang.name}
              width={36}
              height={28}
              className="h-full w-full object-cover"
            />
          </button>
        )
      })}
    </motion.div>
  )
}
