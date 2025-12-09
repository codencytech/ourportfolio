'use client'

import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-dark to-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-40 h-12 relative">
                <img
                  src="/logo.png"
                  alt="The Codency Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span class="text-white font-bold text-2xl">C</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">CODENCY</h3>
              <p class="text-secondary text-sm">Digital Brilliance</p>
            </div>
          </div>
        `;
                  }}
                />
              </div>
            </div>
            <p className="text-gray-300">
              Turning coffee into exceptional code, one bug at a time. We make digital magic happen!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let&apos;s Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@codency.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>hello@codency.com</span>
              </a>
              <div className="flex space-x-4">
                {[
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} The Codency. All rights reserved. Made with{' '}
            <Heart className="inline-block w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
            and lots of coffee.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            P.S. Our website uses 100% recycled pixels. Eco-friendly coding!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer