'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Smartphone, Cloud, Zap, Shield, Rocket, Users } from 'lucide-react'

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'We build high-performance, scalable web applications tailored to your business goals.',
      features: [
        'Custom Web Apps',
        'E-commerce Systems',
        'API Integrations',
        'Performance Refinement'
      ],
      color: 'from-blue-500 to-purple-600',
      badge: '🔥 Popular • Requirement-Based Pricing',
      joke: 'Our code is so clean, even your future developers will thank us.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description:
        'Cross-platform or native mobile experiences engineered for usability, speed, and resilience.',
      features: [
        'Cross-Platform Development',
        'Native Apps',
        'App Store Deployment',
        'Push Notifications'
      ],
      color: 'from-green-500 to-teal-600',
      badge: '🚀 Recommended • Scope-Driven Costing',
      joke: 'Our apps crash less than your daily motivation levels.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Human-centered design that delivers clarity, elegance, and seamless usability.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'UI Systems',
        'Interaction Patterns'
      ],
      color: 'from-orange-500 to-pink-600',
      badge: '💎 Premium • Tailored Solution',
      joke: 'We align pixels with the precision of a NASA engineer.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Future-proof cloud infrastructure designed for growth, automation, and stability.',
      features: [
        'AWS/Azure/GCP',
        'Serverless Architecture',
        'Database Engineering',
        'CI/CD & DevOps'
      ],
      color: 'from-cyan-500 to-blue-600',
      badge: '✨ Elite • Custom Architecture',
      joke: 'Our cloud uptime makes the sun jealous.'
    }
  ]

  const processSteps = [
    { step: '01', title: 'Discovery Chat', description: 'We listen, strategize, and plan.', icon: Users },
    { step: '02', title: 'Strategy & Roadmap', description: 'We build a clear, actionable plan.', icon: Zap },
    { step: '03', title: 'Design & Develop', description: 'We craft the product with precision.', icon: Code2 },
    { step: '04', title: 'Launch & Support', description: 'We deploy, monitor, and stay with you.', icon: Rocket }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
              Our Services
            </span>
            <Shield className="w-6 h-6 text-secondary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-dark">We Don&apos;t Just </span>
            <span className="gradient-text">Build Stuff</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We create high-impact digital experiences that deliver results.
          </motion.p>
        </div>

        {/* Services List + Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Left Column */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  activeService === index
                    ? 'bg-white shadow-2xl border-2 border-primary/20'
                    : 'bg-white/50 hover:bg-white/80 hover:shadow-lg border border-gray-100'
                }`}
              >
                <div className="flex items-start space-x-4">

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-dark mb-2">
                        {service.title}
                      </h3>

                      {/* UPDATED BADGE */}
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          activeService === index
                            ? 'bg-primary/10 text-primary'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-3">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-light rounded-full text-sm text-dark">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {activeService === index && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-accent/10 rounded-xl">
                        <p className="text-sm font-medium text-dark">🎯 {service.joke}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Process) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
              Our Magical Process
            </h3>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h4 className="text-xl font-bold text-dark">{step.title}</h4>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 text-dark text-center">By The Numbers</h4>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100+', label: 'Projects Delivered' },
                  { value: '∞', label: 'Coffees Consumed' },
                  { value: '99%', label: 'Client Satisfaction' },
                  { value: '0', label: 'Unhappy Clients' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-white rounded-xl">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-dark">Ready to Start Your Project?</h3>

                  <p className="text-gray-600 mb-6">
                    Every project is different — let’s discuss your requirements and craft a perfect plan.
                  </p>

                  <div className="space-y-3">
                    {[
                      '📅 Free Consultation',
                      '📊 Requirements-Driven Pricing',
                      '🤝 Flexible Engagement Models',
                      '🚀 Fast Turnaround'
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-dark font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 mb-4 w-full block text-center"
                  >
                    Request Custom Quote
                  </a>

                  <p className="text-sm text-gray-500">
                    ⚡ Average response time: 1–2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesSection
