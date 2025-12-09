'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating particles
    const particles: HTMLDivElement[] = []
    const colors = [
      'rgba(99, 102, 241, 0.1)', // primary
      'rgba(34, 211, 238, 0.1)', // secondary
      'rgba(251, 191, 36, 0.05)', // accent
    ]

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div')
      particle.className = 'floating-particle'
      
      // Random properties
      const size = Math.random() * 60 + 20
      const x = Math.random() * 100
      const y = Math.random() * 100
      const color = colors[Math.floor(Math.random() * colors.length)]
      const duration = Math.random() * 20 + 15
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

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

export default AnimatedBackground