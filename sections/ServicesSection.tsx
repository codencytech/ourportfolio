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
      description: 'We build websites that don\'t just work—they perform like Olympic athletes. Fast, reliable, and ready for anything.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'API Integration', 'Performance Optimization'],
      color: 'from-blue-500 to-purple-600',
      price: 'Starts from $2,500',
      joke: 'Our code is so clean, you could eat off it (but please don\'t).',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'iOS and Android apps that users actually love. No more "there\'s an app for that" disappointment.',
      features: ['Cross-Platform Apps', 'Native iOS/Android', 'App Store Deployment', 'Push Notifications'],
      color: 'from-green-500 to-teal-600',
      price: 'Starts from $4,000',
      joke: 'Our apps crash less than your dating life.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designs that make users go "Ooooh!" instead of "Ugh..." We specialize in pixel-perfect interfaces.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-pink-600',
      price: 'Starts from $1,800',
      joke: 'We align things so perfectly, even your OCD will be impressed.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Move to the cloud without the storm. We handle the tech so you can focus on your business.',
      features: ['AWS/Azure/GCP', 'Serverless Architecture', 'Database Management', 'DevOps'],
      color: 'from-cyan-500 to-blue-600',
      price: 'Starts from $3,000',
      joke: 'Our cloud solutions are so reliable, they make the weather forecast look bad.',
    },
  ]

  const processSteps = [
    { step: '01', title: 'Discovery Chat', description: 'We listen, ask questions, and drink coffee. Lots of coffee.', icon: Users },
    { step: '02', title: 'Strategy & Plan', description: 'We map out the perfect solution. Like Google Maps, but for your project.', icon: Zap },
    { step: '03', title: 'Design & Develop', description: 'We build your vision. This is where the magic happens!', icon: Code2 },
    { step: '04', title: 'Launch & Support', description: 'We launch and stick around. Like a good friend with tech skills.', icon: Rocket },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            We create digital experiences that users love and businesses rave about.
            Here&apos;s how we turn your ideas into reality (with a sprinkle of magic).
          </motion.p>
        </div>

        {/* Services Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Service List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${activeService === index
                    ? 'bg-white shadow-2xl border-2 border-primary/20'
                    : 'bg-white/50 hover:bg-white/80 hover:shadow-lg border border-gray-100'
                  }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-dark mb-2">
                        {service.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${activeService === index
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-100 text-gray-600'
                        }`}>
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-light rounded-full text-sm text-dark"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 p-3 bg-accent/10 rounded-xl"
                      >
                        <p className="text-sm font-medium text-dark">
                          🎯 {service.joke}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
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

            {/* Fun Stats */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 text-dark text-center">
                By The Numbers
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100+', label: 'Projects Delivered' },
                  { value: '∞', label: 'Coffees Consumed' },
                  { value: '99%', label: 'Client Satisfaction' },
                  { value: '0', label: 'Divorces (so far)' },
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

        {/* CTA Card */}
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
                  <h3 className="text-3xl font-bold mb-4 text-dark">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let&apos;s create something amazing together.
                    First consultation is free (and comes with virtual coffee ☕).
                  </p>
                  <div className="space-y-3">
                    {[
                      '📅 No commitment chat',
                      '💬 Transparent pricing',
                      '🚀 Fast turnaround',
                      '🎁 Surprise gifts (maybe)',
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
                    Book Free Consultation
                  </a>
                  <p className="text-sm text-gray-500">
                    ⚡ Average response time: 2 hours (we&apos;re quick like our code!)
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