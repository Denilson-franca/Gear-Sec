"use client"

import { motion } from "framer-motion"

export function GearLogo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  }

  const textClasses = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-3xl"
  }

  return (
    <div className="flex items-center gap-2">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,26,92,0.6)]">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1a5c" />
              <stop offset="100%" stopColor="#cc1549" />
            </linearGradient>
          </defs>
          {/* Two interlocking gears */}
          <g>
            {/* Left gear */}
            <circle cx="35" cy="50" r="20" fill="none" stroke="url(#logo-gradient)" strokeWidth="3" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180
              return (
                <rect
                  key={`left-${i}`}
                  x={35 + Math.cos(angle) * 18 - 4}
                  y={50 + Math.sin(angle) * 18 - 4}
                  width="8"
                  height="8"
                  fill="url(#logo-gradient)"
                  transform={`rotate(${i * 45 + 22.5}, ${35 + Math.cos(angle) * 18}, ${50 + Math.sin(angle) * 18})`}
                />
              )
            })}
            <circle cx="35" cy="50" r="8" fill="#0a0a0a" stroke="url(#logo-gradient)" strokeWidth="2" />
            
            {/* Right gear */}
            <circle cx="65" cy="50" r="15" fill="none" stroke="url(#logo-gradient)" strokeWidth="3" />
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180
              return (
                <rect
                  key={`right-${i}`}
                  x={65 + Math.cos(angle) * 13 - 3}
                  y={50 + Math.sin(angle) * 13 - 3}
                  width="6"
                  height="6"
                  fill="url(#logo-gradient)"
                  transform={`rotate(${i * 60 + 30}, ${65 + Math.cos(angle) * 13}, ${50 + Math.sin(angle) * 13})`}
                />
              )
            })}
            <circle cx="65" cy="50" r="5" fill="#0a0a0a" stroke="url(#logo-gradient)" strokeWidth="2" />
          </g>
        </svg>
      </motion.div>
      <div className={`font-[var(--font-orbitron)] ${textClasses[size]} font-bold`}>
        <span className="text-[#ff1a5c] drop-shadow-[0_0_10px_rgba(255,26,92,0.8)]">GEAR</span>
        <br />
        <span className="text-[#ff1a5c] drop-shadow-[0_0_10px_rgba(255,26,92,0.8)]">SEC</span>
      </div>
    </div>
  )
}
