"use client"

import { motion } from "framer-motion"

interface GearProps {
  size: number
  x: number
  y: number
  speed?: number
  direction?: 1 | -1
  opacity?: number
  delay?: number
}

export function Gear({ 
  size, 
  x, 
  y, 
  speed = 20, 
  direction = 1,
  opacity = 1,
  delay = 0
}: GearProps) {
  const numTeeth = 12
  const outerRadius = 45
  const innerRadius = 32
  const toothHeight = 10
  const toothWidth = 8
  
  // Generate gear teeth path
  const generateGearPath = () => {
    let path = ""
    for (let i = 0; i < numTeeth; i++) {
      const angle = (i * 360) / numTeeth
      const nextAngle = ((i + 1) * 360) / numTeeth
      const midAngle = angle + (360 / numTeeth) / 2
      
      const toRad = (deg: number) => (deg * Math.PI) / 180
      
      // Tooth outer points
      const x1 = 50 + Math.cos(toRad(angle - toothWidth/2)) * outerRadius
      const y1 = 50 + Math.sin(toRad(angle - toothWidth/2)) * outerRadius
      
      const x2 = 50 + Math.cos(toRad(angle - toothWidth/3)) * (outerRadius + toothHeight)
      const y2 = 50 + Math.sin(toRad(angle - toothWidth/3)) * (outerRadius + toothHeight)
      
      const x3 = 50 + Math.cos(toRad(angle + toothWidth/3)) * (outerRadius + toothHeight)
      const y3 = 50 + Math.sin(toRad(angle + toothWidth/3)) * (outerRadius + toothHeight)
      
      const x4 = 50 + Math.cos(toRad(angle + toothWidth/2)) * outerRadius
      const y4 = 50 + Math.sin(toRad(angle + toothWidth/2)) * outerRadius
      
      // Valley between teeth
      const vx1 = 50 + Math.cos(toRad(midAngle - 3)) * innerRadius
      const vy1 = 50 + Math.sin(toRad(midAngle - 3)) * innerRadius
      
      const vx2 = 50 + Math.cos(toRad(midAngle + 3)) * innerRadius
      const vy2 = 50 + Math.sin(toRad(midAngle + 3)) * innerRadius
      
      if (i === 0) {
        path += `M ${x1} ${y1} `
      }
      
      path += `L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} `
      path += `A ${innerRadius} ${innerRadius} 0 0 1 ${vx1} ${vy1} `
      path += `L ${vx2} ${vy2} `
      
      if (i < numTeeth - 1) {
        const nx1 = 50 + Math.cos(toRad(nextAngle - toothWidth/2)) * outerRadius
        const ny1 = 50 + Math.sin(toRad(nextAngle - toothWidth/2)) * outerRadius
        path += `A ${innerRadius} ${innerRadius} 0 0 1 ${nx1} ${ny1} `
      }
    }
    path += "Z"
    return path
  }
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity,
        scale: 1,
        rotate: direction * 360
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
        style={{
          filter: 'drop-shadow(0 0 15px rgba(200, 30, 60, 0.6))'
        }}
      >
        <defs>
          <linearGradient id={`gear-main-${x}-${y}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d42a4c" />
            <stop offset="30%" stopColor="#a31535" />
            <stop offset="70%" stopColor="#8a1028" />
            <stop offset="100%" stopColor="#5a0a1a" />
          </linearGradient>
          <linearGradient id={`gear-highlight-${x}-${y}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="100%" stopColor="#a31535" />
          </linearGradient>
          <radialGradient id={`gear-center-${x}-${y}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#3a0a15" />
            <stop offset="100%" stopColor="#1a0508" />
          </radialGradient>
        </defs>
        
        {/* Main gear body with teeth */}
        <path
          d={generateGearPath()}
          fill={`url(#gear-main-${x}-${y})`}
          stroke="#ff3355"
          strokeWidth="0.5"
        />
        
        {/* Inner circle - raised ring */}
        <circle
          cx="50"
          cy="50"
          r="22"
          fill={`url(#gear-highlight-${x}-${y})`}
          stroke="#ff3355"
          strokeWidth="0.5"
        />
        
        {/* Center hole */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill={`url(#gear-center-${x}-${y})`}
          stroke="#ff1a3a"
          strokeWidth="1"
        />
        
        {/* Decorative holes around center */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const hx = 50 + Math.cos(rad) * 16
          const hy = 50 + Math.sin(rad) * 16
          return (
            <circle
              key={angle}
              cx={hx}
              cy={hy}
              r="3"
              fill="#1a0508"
              stroke="#ff1a3a"
              strokeWidth="0.5"
            />
          )
        })}
        
        {/* Center highlight */}
        <circle
          cx="47"
          cy="47"
          r="4"
          fill="rgba(255,100,120,0.3)"
        />
      </svg>
    </motion.div>
  )
}
