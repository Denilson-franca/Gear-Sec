"use client"

export function GearLogo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-3xl"
  }

  return (
    <div className="flex items-center justify-center">
      <span 
        className={`font-[var(--font-orbitron)] ${sizeClasses[size]} font-bold text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.8)] [text-shadow:0_0_30px_rgba(255,26,92,0.5)]`}
      >
        Gear Sec
      </span>
    </div>
  )
}
