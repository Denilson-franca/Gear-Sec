"use client"

import { motion } from "framer-motion"

interface GearProps {
  size: number
  x: number
  y: number
  rotation?: number
  speed?: number
  direction?: 1 | -1
  opacity?: number
  delay?: number
}

export function Gear({ 
  size, 
  x, 
  y, 
  rotation = 0, 
  speed = 20, 
  direction = 1,
  opacity = 0.6,
  delay = 0
}: GearProps) {
  const teeth = Math.max(8, Math.floor(size / 10))
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity,
        scale: 1,
        rotate: direction * 360 + rotation
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        rotate: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay
        }
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="drop-shadow-[0_0_10px_rgba(255,26,92,0.5)]"
      >
        <defs>
          <linearGradient id={`gear-gradient-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b1a3a" />
            <stop offset="50%" stopColor="#c41e4e" />
            <stop offset="100%" stopColor="#5a1225" />
          </linearGradient>
          <filter id={`gear-glow-${x}-${y}`}>
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#gear-glow-${x}-${y})`}>
          {/* Outer teeth */}
          {Array.from({ length: teeth }).map((_, i) => {
            const angle = (i * 360) / teeth
            const radian = (angle * Math.PI) / 180
            const outerRadius = 48
            const toothWidth = (360 / teeth) * 0.4
            
            return (
              <path
                key={i}
                d={`
                  M ${50 + Math.cos(radian) * 35} ${50 + Math.sin(radian) * 35}
                  L ${50 + Math.cos((radian - toothWidth * Math.PI / 180))} ${50 + Math.sin((radian - toothWidth * Math.PI / 180)) * outerRadius}
                  L ${50 + Math.cos(radian) * outerRadius} ${50 + Math.sin(radian) * outerRadius}
                  L ${50 + Math.cos((radian + toothWidth * Math.PI / 180)) * outerRadius} ${50 + Math.sin((radian + toothWidth * Math.PI / 180)) * outerRadius}
                  Z
                `}
                fill={`url(#gear-gradient-${x}-${y})`}
              />
            )
          })}
          {/* Main circle */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill={`url(#gear-gradient-${x}-${y})`}
            stroke="#ff1a5c"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          {/* Inner ring */}
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="#1a0a10"
            stroke="#ff1a5c"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          {/* Center hole */}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="#0a0a0a"
            stroke="#ff1a5c"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const radian = (angle * Math.PI) / 180
            return (
              <line
                key={angle}
                x1={50 + Math.cos(radian) * 12}
                y1={50 + Math.sin(radian) * 12}
                x2={50 + Math.cos(radian) * 25}
                y2={50 + Math.sin(radian) * 25}
                stroke="#ff1a5c"
                strokeWidth="2"
                strokeOpacity="0.3"
              />
            )
          })}
        </g>
      </svg>
    </motion.div>
  )
}
