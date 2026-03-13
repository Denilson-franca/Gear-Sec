"use client"

import Image from "next/image"

export function GearLogo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeMap = {
    small: { width: 100, height: 80 },
    default: { width: 140, height: 112 },
    large: { width: 180, height: 144 }
  }

  const dimensions = sizeMap[size]

  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/gear-sec-logo.png"
        alt="Gear Sec Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority
      />
    </div>
  )
}
