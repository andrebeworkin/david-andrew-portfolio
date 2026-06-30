'use client'

import { FadeIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { SectionBackdrop } from '@/components/portfolio/decor'
import { GraduationCap, Award, BookOpen, School, Languages } from 'lucide-react'

const items = [
  {
    index: '01',
    icon: GraduationCap,
    title: 'University of New Brunswick',
    subtitle: 'Bachelor of Kinesiology',
    meta: 'Expected Graduation · 2028',
    body:
      'Pursuing a Bachelor of Kinesiology while independently developing full-stack software skills, actively applying self-taught development knowledge to real-world projects and freelance work.',
  },
  {
    index: '02',
    icon: Award,
    title: 'Java Certification',
    subtitle: 'Codecademy',
    meta: 'Object-Oriented Programming',
    body:
      "Completed Codecademy's Java certification, demonstrating a strong foundational understanding of object-oriented programming, data structures, and software engineering principles.",
  },
  {
    index: '03',
    icon: School,
    title: 'High School Diploma',
    subtitle: 'Harrison Trimble High School',
    meta: 'Honors · GPA 3.6 · 2022',
    body:
      'Graduated with honors in Moncton, New Brunswick, building a strong academic foundation in math and the sciences.',
  },
]

const languages = [
  { name: 'English', level: 'Fluent', strong: true },
  { name: 'Portuguese', level: 'Fluent', strong: true },
  { name: 'Spanish', level: 'Conversational', strong: false },
  { name: 'French', level: 'Conversational', strong: false },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackdrop />
      <Container size="lg" className="relative z-10">
        <SectionHeading
          index="05"
          label="Education"
          title="Academic"
          accent="background."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-border bg-gradient-to-b from-card to-background/30 p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <span className="absolute top-6 right-7 font-mono text-sm text-muted-foreground/40 group-hover:text-primary/50 transition-colors">
                  {item.index}
                </span>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">{item.title}</h3>
                    <p className="text-primary font-medium text-sm">{item.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{item.meta}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}

          {/* Languages card */}
          <FadeIn delay={0.3}>
            <div className="group relative h-full rounded-2xl border border-border bg-gradient-to-b from-card to-background/30 p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <span className="absolute top-6 right-7 font-mono text-sm text-muted-foreground/40 group-hover:text-primary/50 transition-colors">
                04
              </span>
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Languages className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">Languages</h3>
                  <p className="text-primary font-medium text-sm">Multilingual Communicator</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    <span
                      className={
                        lang.strong
                          ? 'font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-200'
                          : 'font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-border bg-secondary/60 text-muted-foreground'
                      }
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
