'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Filter, Smartphone, Monitor, Globe } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const projectsRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', label: 'All Magic', icon: Filter, count: 8 },
    { id: 'web', label: 'Web Apps', icon: Globe, count: 4 },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, count: 2 },
    { id: 'desktop', label: 'Desktop', icon: Monitor, count: 2 },
  ]

  const projects = [
    {
      id: 1,
      title: 'Nexus Dashboard',
      description: 'A smart dashboard that predicts trends before they happen. Because why be surprised?',
      category: ['web', 'desktop'],
      tech: ['React', 'Node.js', 'AI'],
      imageColor: 'from-blue-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'FlowSync App',
      description: 'Mobile app that syncs your life across devices. Lost your phone? Never again!',
      category: ['mobile'],
      tech: ['React Native', 'Firebase', 'Redux'],
      imageColor: 'from-green-500 to-teal-600',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Quantum UI Library',
      description: 'Design components that adapt to users\' moods. Happy users, happy developers!',
      category: ['web'],
      tech: ['TypeScript', 'Tailwind', 'Framer'],
      imageColor: 'from-orange-500 to-pink-600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Nova Analytics',
      description: 'Data visualization that makes numbers look cool. Yes, even spreadsheets!',
      category: ['web', 'desktop'],
      tech: ['Next.js', 'D3.js', 'PostgreSQL'],
      imageColor: 'from-purple-500 to-indigo-600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Echo Social',
      description: 'Social platform where your posts never get lost. Unlike my car keys...',
      category: ['mobile', 'web'],
      tech: ['Flutter', 'GraphQL', 'AWS'],
      imageColor: 'from-red-500 to-yellow-600',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Pixel Perfect Studio',
      description: 'Design tool that automatically fixes alignment issues. OCD-friendly!',
      category: ['desktop'],
      tech: ['Electron', 'Canvas API', 'Rust'],
      imageColor: 'from-cyan-500 to-blue-600',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  useEffect(() => {
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll('.project-card')
      
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            }
          }
        )
      })
    }
  }, [activeFilter])

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent -translate-x-1/2" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
              Our Portfolio
            </span>
            <div className="w-2 h-2 bg-accent rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-dark">Projects That </span>
            <span className="gradient-text">Spark Joy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Each project is a story of challenges, coffee, and eventual triumph. 
            Here&apos;s some of our favorite adventures!
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-white text-dark border border-gray-200 hover:border-primary/50 hover:shadow-md'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`project-card group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`h-48 ${project.imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.category.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {cat}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent rounded-full text-xs font-bold text-white">
                    🔥 Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-dark group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-light rounded-full text-sm font-medium text-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-semibold">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-dark hover:text-primary transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-semibold">Code</span>
                    </a>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Got an Idea? Let&apos;s Build It!
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re always up for a challenge. The weirder, the better! 
              Bonus points if it involves solving problems with code.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection