"use client"

import { useEffect } from "react"
import { translations } from "@/lib/i18n"
import { useLanguage } from "./language-provider"

const textAttributes = ["placeholder", "aria-label", "title", "alt"]
const originalTextNodes = new WeakMap<Text, string>()
const originalAttributes = new WeakMap<HTMLElement, Map<string, string>>()

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
        const currentValue = textNode.nodeValue ?? ""
        if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, currentValue)
        const original = originalTextNodes.get(textNode) ?? currentValue
        const leading = original.match(/^\s*/)?.[0] ?? ""
        const trailing = original.match(/\s*$/)?.[0] ?? ""
        const key = original.trim()
        const translated = map.get(key) ?? key
        const nextValue = `${leading}${translated}${trailing}`
        if (textNode.nodeValue !== nextValue) textNode.nodeValue = nextValue
      })

      root.querySelectorAll<HTMLElement>("*").forEach((element) => {
        let originals = originalAttributes.get(element)
        if (!originals) {
          originals = new Map()
          originalAttributes.set(element, originals)
        }

        textAttributes.forEach((attribute) => {
          const current = element.getAttribute(attribute)
          if (current && !originals?.has(attribute)) originals?.set(attribute, current)
          const original = originals?.get(attribute)
          const translated = original ? map.get(original) : undefined
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
