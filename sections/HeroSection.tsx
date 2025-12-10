'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2 } from 'lucide-react'
import gsap from 'gsap'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const floatRefs = useRef<(HTMLDivElement | null)[]>([])
  const magneticRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Floating Elements (improved)
    floatRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: 'random(-25, 25)',
          x: 'random(-20, 20)',
          rotation: 'random(-8, 8)',
          scale: 'random(0.95, 1.05)',
          duration: 4 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })

    // Text reveal animation
    gsap.fromTo(
      textRef.current?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 1.1,
        ease: 'power3.out',
      }
    )
  }, [])

  // Magnetic Hover Effect for Buttons
  useEffect(() => {
    magneticRefs.current.forEach((button) => {
      if (!button) return

      const strength = 40

      const handleMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x / strength,
          y: y / strength,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      const reset = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        })
      }

      button.addEventListener('mousemove', handleMove)
      button.addEventListener('mouseleave', reset)

      return () => {
        button.removeEventListener('mousemove', handleMove)
        button.removeEventListener('mouseleave', reset)
      }
    })
  }, [])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden pt-24 flex items-center"
    >
      {/* Extra depth radial spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-[0.1]" />
      </div>

      {/* Floating Elements - enhanced visuals */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          ref={(el) => (floatRefs.current[i] = el)}
          className={`
            absolute hidden lg:block rounded-2xl p-4 backdrop-blur-md border border-white/10 shadow-lg shadow-black/5
            ${i === 1 ? 'top-20 left-20' :
              i === 2 ? 'top-40 right-20' :
              i === 3 ? 'bottom-40 left-32' :
              i === 4 ? 'bottom-20 right-32' :
              'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
          `}
          style={{
            background: 'rgba(255,255,255,0.08)',
            boxShadow: '0 0 20px rgba(0,0,0,0.04)',
          }}
        >
          {i === 1 && <Code2 className="w-8 h-8 text-primary drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]" />}
          {i === 2 && <Sparkles className="w-8 h-8 text-secondary drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]" />}
          {i === 3 && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/40" />
          )}
          {i === 4 && (
            <div className="text-xl font-bold gradient-text drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              {"<>"}
            </div>
          )}
          {i === 5 && <div className="w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/40" />}
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 mb-8 px-6 py-2 rounded-full glass-effect backdrop-blur-lg"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold gradient-text">
              Two brains, one keyboard, infinite possibilities
            </span>
          </motion.div>

          {/* Main Heading with 3D Depth Motion */}
          <motion.h1
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.015 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight select-none"
            style={{
              textShadow: '0px 4px 20px rgba(0,0,0,0.06)',
            }}
          >
            <span className="block text-dark tracking-tight">We Build</span>
            <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]">
              Digital Brilliance
            </span>
          </motion.h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Turning your wildest digital dreams into reality.
            We&apos;re The Codency — where code meets creativity and coffee fuels innovation!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">

            {/* Button 1 - Magnetic */}
            <motion.a
              href="#contact"
              ref={(el) => el && magneticRefs.current.push(el)}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg 
                shadow-lg shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-3
                relative overflow-hidden"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your Project</span>
            </motion.a>

            {/* Button 2 - Magnetic */}
            <motion.a
              href="#projects"
              ref={(el) => el && magneticRefs.current.push(el)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-dark border-2 border-primary/20 rounded-2xl font-bold text-lg 
                hover:bg-primary/5 transition-all duration-300 shadow-sm"
            >
              See Our Magic Works
            </motion.a>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '∞', label: 'Bugs Fixed', sub: 'and counting!' },
              { value: '2', label: 'Coffee Addicts', sub: '(that’s us)' },
              { value: '24/7', label: 'Brainstorming', sub: 'even in dreams' },
              { value: '100%', label: 'Client Smiles', sub: 'guaranteed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-2xl glass-effect backdrop-blur-xl border border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text drop-shadow">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-dark mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-label="Scroll to next section"
      >
        <div className="w-10 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </motion.button>
    </section>
  )
}

export default HeroSection
