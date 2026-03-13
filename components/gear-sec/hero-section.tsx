"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Gear } from "./gear"
import { Sparks } from "./sparks"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#150a10] to-[#0a0a0a]" />
      
      {/* Animated gears background - Left side */}
      <Gear size={200} x={-5} y={20} speed={30} direction={1} opacity={0.4} delay={0} />
      <Gear size={150} x={5} y={50} speed={25} direction={-1} opacity={0.5} delay={0.5} />
      <Gear size={180} x={-3} y={80} speed={35} direction={1} opacity={0.35} delay={1} />
      <Gear size={100} x={15} y={15} speed={20} direction={-1} opacity={0.3} delay={0.2} />
      <Gear size={120} x={10} y={70} speed={28} direction={1} opacity={0.4} delay={0.8} />
      
      {/* Animated gears background - Right side */}
      <Gear size={180} x={95} y={25} speed={28} direction={-1} opacity={0.4} delay={0.3} />
      <Gear size={140} x={88} y={55} speed={22} direction={1} opacity={0.5} delay={0.7} />
      <Gear size={160} x={100} y={85} speed={32} direction={-1} opacity={0.35} delay={0.1} />
      <Gear size={90} x={80} y={10} speed={18} direction={1} opacity={0.3} delay={0.4} />
      <Gear size={110} x={85} y={75} speed={26} direction={-1} opacity={0.4} delay={0.6} />

      {/* Sparks */}
      <Sparks />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Decorative line */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff1a5c]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff1a5c]" />
          </motion.div>

          {/* Main title */}
          <h1 className="font-[var(--font-orbitron)] text-5xl md:text-7xl lg:text-8xl font-bold mb-2 text-balance">
            <span className="block text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.8)] [text-shadow:0_0_40px_rgba(255,26,92,0.6),0_0_80px_rgba(255,26,92,0.4)]">
              GEAR UP
            </span>
          </h1>
          
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-12 md:w-24 bg-[#ff1a5c]/60" />
            <span className="font-[var(--font-orbitron)] text-2xl md:text-4xl lg:text-5xl text-[#ff1a5c] tracking-wider drop-shadow-[0_0_20px_rgba(255,26,92,0.6)]">
              YOUR
            </span>
            <div className="h-px w-12 md:w-24 bg-[#ff1a5c]/60" />
          </div>
          
          <h1 className="font-[var(--font-orbitron)] text-5xl md:text-7xl lg:text-8xl font-bold text-balance">
            <span className="text-[#ff1a5c] drop-shadow-[0_0_30px_rgba(255,26,92,0.8)] [text-shadow:0_0_40px_rgba(255,26,92,0.6),0_0_80px_rgba(255,26,92,0.4)]">
              DEFENSES
            </span>
          </h1>

          {/* Decorative line bottom */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-4"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff1a5c]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff1a5c]" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-lg md:text-xl text-gray-400"
          >
            Gear Sec – Segurança Cibernética
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Bottom logo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold"
      >
        <span className="text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.8)] [text-shadow:0_0_30px_rgba(255,26,92,0.5)]">
          GEAR
        </span>
        <br />
        <span className="text-[#ff1a5c] drop-shadow-[0_0_20px_rgba(255,26,92,0.8)] [text-shadow:0_0_30px_rgba(255,26,92,0.5)]">
          SEC
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#ff1a5c]/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-[#ff1a5c]"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
