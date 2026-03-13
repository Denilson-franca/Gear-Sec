"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Spark {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function Sparks() {
  const [sparks, setSparks] = useState<Spark[]>([])

  useEffect(() => {
    const newSparks: Spark[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }))
    setSparks(newSparks)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: spark.size,
            height: spark.size,
            background: `radial-gradient(circle, #ff1a5c 0%, #ff6b8a 50%, transparent 100%)`,
            boxShadow: `0 0 ${spark.size * 2}px #ff1a5c`
          }}
          animate={{
            y: [0, -30, -60],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3]
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}
