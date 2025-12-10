'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // -----------------------------
    // 1. Create Floating Particles (same as before enhanced)
    // -----------------------------
    const particles: HTMLDivElement[] = []
    const colors = [
      'rgba(99, 102, 241, 0.1)', // primary
      'rgba(34, 211, 238, 0.1)', // secondary
      'rgba(251, 191, 36, 0.06)', // accent
    ]

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'floating-particle'

      const size = Math.random() * 50 + 25
      const x = Math.random() * 100
      const y = Math.random() * 100
      const color = colors[Math.floor(Math.random() * colors.length)]
      const duration = Math.random() * 25 + 20
      const delay = Math.random() * 5

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${x}%`
      particle.style.top = `${y}%`
      particle.style.background = color
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`

      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Cleanup
    return () => particles.forEach(p => p.remove())
  }, [])

  // -----------------------------
  // 2. Parallax Mouse Movement
  // -----------------------------
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current || !glowRef.current) return

      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20

      gsap.to(gridRef.current, { x, y, duration: 1.2, ease: 'power3.out' })
      gsap.to(glowRef.current, { x: x * 1.4, y: y * 1.4, duration: 1.5 })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Radial Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-60 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 70%)',
        }}
      />

      {/* Futuristic Glowing Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.06] scale-125"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '65px 65px',
        }}
      />

      {/* Soft Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
        }}
      />
    </div>
  )
}

export default AnimatedBackground
