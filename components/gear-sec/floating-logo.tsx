"use client"

import Image from "next/image"
import Link from "next/link"

export function FloatingLogo() {
  return (
    <Link
      href="/"
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 hover:scale-105"
      aria-label="Ir para a página inicial"
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg shadow-black/50 border border-[#ff1a5c]/20">
        <Image
          src="/images/gearsec-logo.png"
          alt="Gear Sec Logo"
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  )
}
