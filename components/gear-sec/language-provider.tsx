"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Language } from "@/lib/i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "gearsec-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (stored === "pt" || stored === "en" || stored === "es")) {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    const htmlLang = language === "pt" ? "pt-BR" : language === "es" ? "es" : "en"
    document.documentElement.lang = htmlLang
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
