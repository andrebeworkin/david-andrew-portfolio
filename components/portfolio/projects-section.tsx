'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { SectionBackdrop } from '@/components/portfolio/decor'
import { ExternalLink, Layers, Dumbbell, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const featured = [
  {
    title: 'Scova Adventures & Wellness',
    tag: 'Client · Outdoor Wellness Brand',
    description:
      'A polished marketing site for an outdoor wellness brand offering paddleboard-led experiences. Built while volunteering with Elevate Beyond Barriers to help a new business launch with a clean, modern brand story.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/scova.png',
    domain: 'scova.vercel.app',
    liveUrl: 'https://scova.vercel.app/',
    glow: 'bg-cyan-500/40',
    accent: 'from-blue-400 to-cyan-400',
    tagColor: 'text-cyan-300',
  },
  {
    title: 'Ilusik Labrador Expressions',
    tag: 'Client · Cultural Identity Brand',
    description:
      'A heartfelt site for a Southern Inuit cultural brand focused on reclaiming and celebrating identity — presenting the founder\'s mission, community offerings, and products with warmth and clarity.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/projects/ilusik.png',
    domain: 'ilusik.vercel.app',
    liveUrl: 'https://ilusik.vercel.app/',
    glow: 'bg-violet-500/40',
    accent: 'from-violet-400 to-purple-400',
    tagColor: 'text-violet-300',
  },
]

const builds = [
  {
    index: '03',
    title: 'Fitness Centre Management App',
    description:
      'A comprehensive gym operations platform for trainers and owners — member management, trainer scheduling, workout programming, appointment booking, session logging, progress tracking, and role-based authentication.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'SQL', 'Tailwind CSS', 'shadcn/ui'],
    icon: Dumbbell,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    index: '04',
    title: 'Small-Business Websites',
    description:
      'Responsive websites for local service-based businesses, including an in-progress site for Harris & Son Painters and Snow Removal. Focused on clean design, clear service presentation, and ongoing maintenance.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'SEO'],
    icon: Layers,
    accent: 'from-emerald-500 to-teal-500',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackdrop />
      <Container size="lg" className="relative z-10">
        <SectionHeading
          index="03"
          label="Selected Work"
          title="Live products,"
          accent="shipped & in production."
          description="Not screenshots of tutorials — real brands running on real domains. Click any card to open the deployed product."
        />

        {/* Featured live sites — browser-frame bento */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {featured.map((p, idx) => (
            <SlideIn key={p.title} from={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 0.1}>
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full rounded-2xl border border-border bg-gradient-to-b from-card to-background/40 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* hover glow */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${p.glow}`}
                />

                {/* browser chrome */}
                <div className="relative z-10 flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50 backdrop-blur-sm">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 flex-1 truncate font-mono text-[11.5px] text-muted-foreground bg-background/80 border border-border rounded-full px-3 py-1">
                    {p.domain}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* live screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt={`Screenshot of the ${p.title} website`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* meta */}
                <div className="relative z-10 p-6">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.14em] ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight mt-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11.5px] text-foreground/80 border border-border rounded-md px-2.5 py-1 bg-primary/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Visit live site
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </SlideIn>
          ))}
        </div>

        {/* Other builds */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7 mt-6 lg:mt-7">
          {builds.map((p, idx) => (
            <FadeIn key={p.title} delay={idx * 0.1}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <span className="absolute top-6 right-7 font-mono text-sm text-muted-foreground/40 group-hover:text-primary/50 transition-colors">
                  {p.index}
                </span>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.accent} mb-5`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11.5px] text-foreground/80 border border-border rounded-md px-2.5 py-1 bg-primary/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
