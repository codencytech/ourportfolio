'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Coffee, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '', projectType: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@codency.com',
      subtitle: 'We reply faster than you can say "bug fix"',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) COD-ENCY',
      subtitle: 'Available 9AM-6PM EST (coffee breaks included)',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Find Us',
      info: 'Digital Space, Internet',
      subtitle: 'We work remotely (pants optional)',
      color: 'from-orange-500 to-pink-600',
    },
  ]

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'UI/UX Design',
    'Consultation',
    'Something Crazy',
    'Just Saying Hi 👋',
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
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
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
              Get In Touch
            </span>
            <Coffee className="w-6 h-6 text-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-dark">Let&apos;s Build </span>
            <span className="gradient-text">Something Awesome</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have an idea? Need a quote? Just want to chat about tech? 
            We&apos;re all ears (and keyboards)! No idea is too big, small, or weird.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-lg font-semibold gradient-text mb-1">{item.info}</p>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Fun FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">Quick FAQ</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How fast do you reply?',
                      a: 'Faster than you can refresh your inbox! Usually within 2 hours.',
                    },
                    {
                      q: 'Do you work with startups?',
                      a: 'We LOVE startups! Bring us your crazy ideas and limited budgets.',
                    },
                    {
                      q: 'What if my idea is ridiculous?',
                      a: 'Perfect! The more ridiculous, the better. Challenge accepted!',
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="pb-3 border-b border-gray-200 last:border-0">
                      <p className="font-semibold text-dark mb-1">❓ {faq.q}</p>
                      <p className="text-gray-600 text-sm">✨ {faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-dark">Send Us a Message</h3>
              <p className="text-gray-600">
                Fill this form and we&apos;ll get back to you faster than you can say &quot;JavaScript framework&quot;.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-3 gradient-text">Message Sent! 🎉</h4>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out! We&apos;re already brewing coffee and preparing our keyboards. 
                  You&apos;ll hear from us soon!
                </p>
                <div className="animate-pulse text-sm text-gray-500">
                  Redirecting back to form in 3... 2... 1...
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-dark mb-2">
                    What&apos;s this about? *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your project, idea, or just say hi! The more details, the better."
                  />
                </div>

                <div className="flex items-center space-x-3 p-4 bg-light rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Pro tip: Include your budget and timeline for a faster, more accurate quote!
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/40'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-sm">
                  ✨ We don&apos;t spam. We&apos;re too busy building awesome things!
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Fun Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Still Thinking About It?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t worry, we&apos;re patient! But remember: every minute you wait is a minute 
              your competitors could be building something awesome. Just saying... 😉
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                '🚀 Free 30-min consultation',
                '💡 No obligation quote',
                '🔐 100% confidential',
                '🎁 Bonus: Free dad joke with every inquiry',
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-dark border border-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection