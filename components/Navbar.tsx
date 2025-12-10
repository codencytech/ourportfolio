'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const magneticRefs = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Magnetic hover effect for desktop menu items
  useEffect(() => {
    magneticRefs.current.forEach((item) => {
      if (!item) return

      const strength = 25

      const move = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)

        gsap.to(item, {
          x: x / strength,
          y: y / strength,
          duration: 0.4,
          ease: 'power2.out',
        })
      }

      const reset = () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
        })
      }

      item.addEventListener('mousemove', move)
      item.addEventListener('mouseleave', reset)

      return () => {
        item.removeEventListener('mousemove', move)
        item.removeEventListener('mouseleave', reset)
      }
    })
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${scrolled
          ? 'glass-effect py-4 backdrop-blur-xl border-b border-white/20 shadow-lg'
          : 'py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-40 h-12 transition-transform duration-300 group-hover:scale-[1.03]">
              <img
                src="/logo.png"
                alt="The Codency Logo"
                className="w-full h-full object-contain brightness-110 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex items-center space-x-2">
                      <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <span class="text-white font-bold text-xl">C</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-dark font-bold text-xl tracking-tight">CODENCY</span>
                        <span class="text-xs text-secondary font-medium">Digital Brilliance</span>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                ref={(el) => {
                  if (el && !magneticRefs.current.includes(el)) {
                    magneticRefs.current.push(el)
                  }
                }}

                className="text-dark hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                {/* Glow underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary/80 rounded-full group-hover:w-full transition-all duration-300" />
                <span className="absolute -bottom-1 left-0 w-full h-[8px] bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
              </Link>
            ))}

            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold 
                hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Build</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-effect rounded-2xl p-6 animate-slide-in shadow-lg border border-white/10 backdrop-blur-2xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-dark hover:text-primary py-2 px-4 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold mt-4 shadow-[0_0_15px_rgba(99,102,241,0.35)]">
                Let&apos;s Build Together!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
