'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Coffee, Zap, Target, Globe } from 'lucide-react'

const AboutSection = () => {
  const founders = [
    {
      name: 'Ayush Kumar Singh',
      role: 'Code Wizard & CEO',
      description: 'Turns coffee into clean code. Loves solving problems before they exist.',
      funFact: 'Can debug while sleeping',
      color: 'from-primary to-secondary',
    },
    {
      name: 'Pranjal Gupta',
      role: 'Design Guru & CTO',
      description: 'Makes pixels dance. Believes good design should make you smile.',
      funFact: 'Dreams in CSS gradients',
      color: 'from-secondary to-accent',
    },
  ]

  const values = [
    { icon: Rocket, title: 'Innovate Daily', description: 'We break things to make them better' },
    { icon: Coffee, title: 'Coffee Powered', description: 'Our secret fuel for genius ideas' },
    { icon: Target, title: 'Pixel Perfect', description: 'Obsessed with details that matter' },
    { icon: Globe, title: 'Global Vision', description: 'Building for tomorrow, today' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <Users className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
              Our Story
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-dark">The Dynamic </span>
            <span className="gradient-text">Duo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Once upon a time, two nerds met at a hackathon. We disagreed on everything except pizza toppings. 
            Now we build awesome stuff together and argue about tabs vs spaces daily.
          </motion.p>
        </div>

        {/* Founders Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100">
                {/* Avatar */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${founder.color} mx-auto mb-6 flex items-center justify-center relative`}>
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-center mb-2 text-dark">
                  {founder.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {founder.role}
                  </span>
                </div>
                <p className="text-gray-600 text-center mb-6">
                  {founder.description}
                </p>

                {/* Fun Fact */}
                <div className="bg-light rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-dark">Fun Fact:</span>
                    <span className="text-xs text-secondary">🔥 Hot Gossip</span>
                  </div>
                  <p className="text-gray-600 mt-1">{founder.funFact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-dark">Our </span>
            <span className="gradient-text">Secret Sauce</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-primary/20 to-secondary/20' : 'from-accent/20 to-primary/20'} flex items-center justify-center mb-4`}>
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-dark">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              The Codency Chronicles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { year: '2023', event: 'Two nerds meet. Magic happens. The Codency is born!' },
                { year: '2024', event: 'Built 50+ projects. Drank 1000+ coffees. No regrets!' },
                { year: 'Future', event: 'Building the next big thing. Stay tuned...' },
              ].map((item) => (
                <div key={item.year} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{item.year}</div>
                  <p className="text-gray-600">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection