"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedCultureCardProps {
  children: ReactNode
  index: number
}

export function AnimatedCultureCard({ children, index }: AnimatedCultureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
