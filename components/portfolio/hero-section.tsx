'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FileText, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Magnetic } from '@/components/portfolio/magnetic'

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Abstract dark technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(217 91% 60% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{ left: `${15 + i * 18}%`, top: `${20 + i * 12}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-medium text-primary tracking-wide">Available for opportunities</span>
          </motion.div>

          <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.34em] text-cyan-400/90 mb-5">
            Kinesiology Student / Self-Taught Developer
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              David Andrew
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building modern web applications with a passion for clean code
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-muted-foreground mb-10"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Fredericton, New Brunswick</span>
            <span className="text-border">/</span>
            <span>Open to remote &amp; co-op</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnetic>
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              >
                Get in Touch
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={scrollToAbout}
                className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-border hover:bg-muted transition-all duration-200"
              >
                Learn More
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download="David-Andrew-Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-foreground font-semibold rounded-lg border border-border hover:bg-muted transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
