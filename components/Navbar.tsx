'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-4' : 'py-6'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        {/* Your real logo */}
                        <div className="relative w-40 h-12">
                            <img
                                src="/logo.png"
                                alt="The Codency Logo"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    // Fallback if logo doesn't load
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
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-dark hover:text-primary transition-colors duration-200 font-medium relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center space-x-2"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Let&apos;s Build</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 glass-effect rounded-2xl p-6 animate-slide-in">
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
                            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold mt-4">
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