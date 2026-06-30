'use client'

import { Container } from '@/components/layouts/container'
import { Github, Mail, ArrowUp } from 'lucide-react'

export default function FooterSection() {
  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-card/30">
      <Container size="lg">
        <div className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="font-display text-xl font-bold tracking-tight">
                <span className="text-primary">D</span>avid Andrew<span className="text-primary">.</span>
              </span>
              <p className="text-sm text-muted-foreground mt-1">
Kinesiology Student & Self-Taught Developer
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/andrebeworkin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:andrebeworkin@gmail.com"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 ml-2"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 David Andrew. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
