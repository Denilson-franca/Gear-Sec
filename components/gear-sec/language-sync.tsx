"use client"

import { useEffect } from "react"
import { translations } from "@/lib/i18n"
import { useLanguage } from "./language-provider"

const textAttributes = ["placeholder", "aria-label", "title", "alt"]

function buildTranslationMap(language: "pt" | "en" | "es") {
  const map = new Map<string, string>()

  const visit = (source: unknown, target: unknown) => {
    if (typeof source === "string" && typeof target === "string") {
      if (source !== target) map.set(source, target)
      return
    }

    if (Array.isArray(source) && Array.isArray(target)) {
      source.forEach((item, index) => visit(item, target[index]))
      return
    }

    if (source && target && typeof source === "object" && typeof target === "object") {
      Object.keys(source).forEach((key) => {
        visit((source as Record<string, unknown>)[key], (target as Record<string, unknown>)[key])
      })
    }
  }

  visit(translations.pt, translations[language])
  return map
}

export function LanguageSync() {
  const { language } = useLanguage()

  useEffect(() => {
    const map = buildTranslationMap(language)
    const root = document.body

    const translate = () => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      const textNodes: Text[] = []
      let node: Node | null

      while ((node = walker.nextNode())) {
        if (node.parentElement?.closest("script, style, noscript")) continue
        textNodes.push(node as Text)
      }

      textNodes.forEach((textNode) => {
        const current = textNode.nodeValue?.trim() ?? ""
        const translated = map.get(current)
        if (translated && textNode.nodeValue) {
          textNode.nodeValue = textNode.nodeValue.replace(current, translated)
        }
      })

      root.querySelectorAll<HTMLElement>("*").forEach((element) => {
        textAttributes.forEach((attribute) => {
          const current = element.getAttribute(attribute)
          const translated = current ? map.get(current) : undefined
          if (translated) element.setAttribute(attribute, translated)
        })
      })
    }

    translate()
    const observer = new MutationObserver(() => translate())
    observer.observe(root, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [language])

  return null
}
