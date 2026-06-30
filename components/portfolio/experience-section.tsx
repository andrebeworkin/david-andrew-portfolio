'use client'

import { SlideIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Briefcase, Code2, Dumbbell, Heart, ShoppingBag, Building2, Users } from 'lucide-react'

const experiences = [
  {
    title: 'Web Developer',
    company: 'Freelance',
    period: '2021 – Present',
    description: 'Designing and building responsive, professional websites for small businesses and organizations. What started as a self-driven hobby has grown into freelance work delivering custom designs, content systems, branding, and ongoing maintenance.',
    icon: Code2,
    color: 'bg-blue-500',
  },
  {
    title: 'Software Developer',
    company: 'Freelance Project',
    period: '2025 – Present',
    description: 'Built a comprehensive gym operations platform for a private fitness centre client, featuring member management, trainer scheduling, workout programming, appointment booking, session logging, and progress tracking with role-based authentication.',
    icon: Briefcase,
    color: 'bg-violet-500',
  },
  {
    title: 'Personal Fitness Trainer',
    company: 'Formula 4 Fitness',
    period: 'March 2026 – May 2026',
    description: 'Designed and led individualized exercise sessions focused on strength, mobility, and functional fitness. Adapted programs to each client\'s goals and abilities while motivating clients, monitoring progress, and communicating clearly.',
    icon: Dumbbell,
    color: 'bg-emerald-500',
  },
  {
    title: 'Restorative Care Team Member',
    company: 'Windsor Court Retirement Residence',
    period: 'January 2026 – March 2026',
    description: 'Supported elderly residents with daily restorative care activities, demonstrating patience, empathy, and reliability. Developed strong interpersonal skills and a deep appreciation for service-oriented work.',
    icon: Heart,
    color: 'bg-rose-500',
  },
  {
    title: 'Sales & Client Advisor',
    company: 'Best Buy Canada',
    period: 'August 2024 – December 2025',
    description: 'Provided individualized needs assessments for customers seeking technology solutions and delivered education on product functionality. Built strong communication, troubleshooting, and problem-solving skills while consistently fostering trust.',
    icon: ShoppingBag,
    color: 'bg-amber-500',
  },
  {
    title: 'Assistant Manager',
    company: 'VAS LDA',
    period: 'June 2020 – November 2021',
    description: 'Managed daily operations including client relationship management, inventory control, and team supervision. Strengthened organizational and leadership skills by overseeing resource allocation and resolving customer concerns with solution-oriented strategies.',
    icon: Building2,
    color: 'bg-cyan-500',
  },
  {
    title: 'Student Council President',
    company: 'Christian Academy in Mozambique',
    period: '2021 – 2022',
    description: 'Led initiatives promoting student wellness, engagement, and event organization. Built leadership experience in teamwork, communication, and collaboration across diverse groups.',
    icon: Users,
    color: 'bg-indigo-500',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-card/50">
      <Container size="lg" className="relative z-10">
        <SectionHeading
          index="04"
          label="Experience"
          title="Professional"
          accent="journey."
          align="center"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <SlideIn key={exp.title + exp.company} from={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
                <div className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${exp.color} ring-4 ring-background`} />
                  </div>

                  {/* Content card */}
                  <div className={`sm:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} w-full pl-0 sm:pl-20 md:pl-0`}>
                    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <div className={`p-2 rounded-lg ${exp.color}/10`}>
                          <exp.icon className={`w-5 h-5 text-foreground`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                      <p className={`text-sm text-muted-foreground mt-3 leading-relaxed ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
