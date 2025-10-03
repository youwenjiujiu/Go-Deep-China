"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, Zap, Rocket } from "lucide-react"
import { MouseTracker } from "@/components/ui/mouse-tracker"

export default function DemoPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleCardMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Mouse Tracker Background */}
      <MouseTracker />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">酷炫效果演示 🚀</h1>
          <p className="text-xl text-gray-300">移动鼠标查看所有交互效果</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* 1. Mouse Tracking Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Sparkles className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">鼠标追踪背景</h3>
              <p className="text-sm text-gray-300">移动鼠标，背景光晕会跟随</p>
              <div className="mt-4 text-xs text-gray-400">
                位置: {mousePos.x.toFixed(0)}%, {mousePos.y.toFixed(0)}%
              </div>
            </div>
          </motion.div>

          {/* 2. 3D Transform Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 cursor-pointer"
              style={{
                rotateX: rotation.x,
                rotateY: rotation.y,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">3D卡片旋转</h3>
              <p className="text-sm">鼠标移到这个卡片上试试</p>
              <div className="mt-4 text-xs opacity-80">
                旋转: X:{rotation.x.toFixed(1)}° Y:{rotation.y.toFixed(1)}°
              </div>
            </motion.div>
          </motion.div>

          {/* 3. Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-2xl"
          >
            <Rocket className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">玻璃态效果</h3>
            <p className="text-sm text-gray-300">半透明+背景模糊</p>
          </motion.div>
        </div>

        {/* Floating Orbs */}
        <div className="relative h-96 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">浮动动画</h2>
          <div className="relative h-full">
            <motion.div
              className="absolute w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ left: '10%', top: '20%' }}
            />
            <motion.div
              className="absolute w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"
              animate={{
                x: [0, -80, 0],
                y: [0, -40, 0],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ right: '15%', top: '30%' }}
            />
            <motion.div
              className="absolute w-36 h-36 bg-pink-500/30 rounded-full blur-2xl"
              animate={{
                x: [0, 60, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ left: '45%', bottom: '20%' }}
            />
          </div>
        </div>

        {/* Stagger Animation */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">错开动画</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="h-32 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl font-bold cursor-pointer"
              >
                {i}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Reveal */}
        <div className="space-y-20">
          <h2 className="text-3xl font-bold text-center">滚动渐现</h2>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4">从左侧滑入</h3>
            <p className="text-gray-300">向下滚动，看到这个区域时才会出现动画</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4">从右侧滑入</h3>
            <p className="text-gray-300">每个元素都可以有不同的动画方向</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">缩放出现</h3>
            <p>从小到大的缩放动画</p>
          </motion.div>
        </div>

        {/* Gradient Text Animation */}
        <div className="text-center py-20">
          <motion.h2
            className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% auto' }}
          >
            渐变文字动画
          </motion.h2>
        </div>
      </div>
    </div>
  )
}
