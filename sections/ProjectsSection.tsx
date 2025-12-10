'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  Smartphone,
  Monitor,
  Globe
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const projectsRef = useRef<HTMLDivElement>(null)
  const tiltRefs = useRef<HTMLDivElement[]>([])

  const categories = [
    { id: 'all', label: 'All Magic', icon: Filter, count: 8 },
    { id: 'web', label: 'Web Apps', icon: Globe, count: 4 },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, count: 2 },
    { id: 'desktop', label: 'Desktop', icon: Monitor, count: 2 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Nexus Dashboard',
      image: 'nexus.jpg', // sample
      description: 'A smart dashboard that predicts future trends.',
      category: ['web', 'desktop'],
      tech: ['React', 'Node.js', 'AI'],
      featured: true
    },
    {
      id: 2,
      title: 'FlowSync App',
      image: 'flowsync.jpg',
      description: 'Mobile app that syncs your life seamlessly.',
      category: ['mobile'],
      tech: ['React Native', 'Firebase']
    },
    {
      id: 3,
      title: 'Quantum UI Library',
      image: 'quantum.jpg',
      description: 'Adaptive UI components with mood-based styling.',
      category: ['web'],
      tech: ['TypeScript', 'Tailwind', 'Framer']
    },
    {
      id: 4,
      title: 'Nova Analytics',
      image: 'nova.jpg',
      description: 'Cinematic data visualization dashboard.',
      category: ['web', 'desktop'],
      tech: ['Next.js', 'D3.js']
    },
    {
      id: 5,
      title: 'Echo Social',
      image: 'echo.jpg',
      description: 'Social platform built for deeper engagement.',
      category: ['mobile', 'web'],
      tech: ['Flutter', 'AWS']
    },
    {
      id: 6,
      title: 'Pixel Perfect Studio',
      image: 'pixel.jpg',
      description: 'Auto-align design suite with smart snapping.',
      category: ['desktop'],
      tech: ['Electron', 'Rust']
    }
  ]

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  // Scroll reveal animation
  useEffect(() => {
    if (!projectsRef.current) return
    const cards = projectsRef.current.querySelectorAll('.project-card')

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotateX: 12,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          delay: i * 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80'
          }
        }
      )
    })
  }, [filtered])

  // 3D tilt interaction
  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (!card) return

      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)

        gsap.to(card, {
          rotateY: x / 30,
          rotateX: -y / 30,
          transformPerspective: 900,
          duration: 0.4
        })
      }

      const reset = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'elastic.out(1,0.3)'
        })
      }

      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', reset)
    })
  }, [filtered])

  /** MOCKUP SELECTOR
   * category.includes("mobile") → phone mockup
   * category.includes("web" or "desktop") → browser mockup
   * else → cinematic raw 21:9
   */
  const getMockupType = (p: any) => {
    if (p.category.includes('mobile')) return 'mobile'
    if (p.category.includes('web') || p.category.includes('desktop'))
      return 'browser'
    return 'cinematic'
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">

      {/* Fog + glow cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-72 h-72 bg-primary/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.04]"
          style={{ background: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">Our Portfolio</span>
            <div className="w-2 h-2 bg-accent rounded-full" />
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-dark">Cinematic </span>
            <span className="gradient-text">Project Showcase</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A hybrid 3D experience bringing your projects to life with motion, depth, and cinematic lighting.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 scale-[1.05]'
                  : 'bg-white text-dark border border-gray-200 hover:border-primary/50'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((p, i) => {
            const mockup = getMockupType(p)

            return (
              <div
                key={p.id}
                ref={(el) => el && (tiltRefs.current[i] = el)}
                className="project-card rounded-3xl bg-white shadow-xl hover:shadow-2xl border
                border-gray-100 overflow-hidden transform-gpu transition-all duration-500 cursor-pointer relative"
              >

                {/* Cinematic shine sweep */}
                <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-all duration-[1500ms]"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                    mixBlendMode: 'overlay'
                  }}
                />

                {/* Thumbnail */}
                <div className="relative w-full aspect-[21/9] overflow-hidden bg-black">
                  
                  {/* MOCKUP TYPE SWITCH */}
                  {mockup === 'browser' && (
                    <div className="absolute top-0 left-0 w-full h-8 bg-white/90 border-b border-gray-300 flex items-center gap-2 px-4 z-30">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                  )}

                  {mockup === 'mobile' && (
                    <div className="absolute inset-0 w-full h-full z-30 pointer-events-none flex items-center justify-center">
                      <div className="w-[80%] h-[85%] rounded-[2rem] border-[10px] border-black/50 shadow-2xl overflow-hidden"></div>
                    </div>
                  )}

                  {/* IMAGE */}
                  <img
                    src={`/images/projects/${p.image}`}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-center
                    transition-transform duration-700 group-hover:scale-[1.15] brightness-[0.92]"
                  />

                  {/* cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-dark group-hover:gradient-text transition-all">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{p.description}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-light rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-all"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-dark hover:text-primary transition-all"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </div>

                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-all group-hover:translate-x-2" />
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-3xl p-10 max-w-xl mx-auto backdrop-blur-xl border border-white/20">
            <h3 className="text-2xl font-bold gradient-text mb-3">Let’s Build Something Incredible</h3>
            <p className="text-gray-600 mb-6">Your ideas deserve a cinematic digital experience.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
