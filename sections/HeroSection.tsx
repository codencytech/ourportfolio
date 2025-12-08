'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2 } from 'lucide-react'
import gsap from 'gsap'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const floatRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Animate floating elements
    floatRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: 'random(-30, 30)',
          x: 'random(-20, 20)',
          rotation: 'random(-15, 15)',
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })

    // Text reveal animation
    gsap.fromTo(
      textRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      }
    )
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
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          ref={(el) => (floatRefs.current[i] = el)}
          className={`absolute hidden lg:block glass-effect rounded-2xl p-4 ${
            i === 1 ? 'top-20 left-20' :
            i === 2 ? 'top-40 right-20' :
            i === 3 ? 'bottom-40 left-32' :
            i === 4 ? 'bottom-20 right-32' :
            'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          }`}
        >
          {i === 1 && <Code2 className="w-8 h-8 text-primary" />}
          {i === 2 && <Sparkles className="w-8 h-8 text-secondary" />}
          {i === 3 && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary" />}
          {i === 4 && <div className="text-xl font-bold gradient-text">{"<>"}</div>}
          {i === 5 && <div className="w-2 h-2 bg-accent rounded-full" />}
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
            className="inline-flex items-center space-x-2 mb-8 px-6 py-2 rounded-full glass-effect"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold gradient-text">
              Two brains, one keyboard, infinite possibilities
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="block text-dark">We Build</span>
            <span className="gradient-text">Digital Brilliance</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Turning your wildest digital dreams into reality. 
            We&apos;re The Codency – where code meets creativity and coffee fuels innovation!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your Project</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-dark border-2 border-primary/20 rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300"
            >
              See Our Magic Works
            </motion.button>
          </div>

          {/* Fun Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '∞', label: 'Bugs Fixed', sub: 'and counting!' },
              { value: '2', label: 'Coffee Addicts', sub: '(that&apos;s us)' },
              { value: '24/7', label: 'Brainstorming', sub: 'even in dreams' },
              { value: '100%', label: 'Client Smiles', sub: 'guaranteed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-4 rounded-2xl glass-effect"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
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