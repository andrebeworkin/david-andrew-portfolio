'use client'

import { FadeIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { SectionHeading } from '@/components/portfolio/section-heading'

const skillGroups = [
  {
    title: 'Frontend',
    n: '/01',
    tags: [
      { name: 'React', hot: true },
      { name: 'Next.js', hot: true },
      { name: 'TypeScript', hot: true },
      { name: 'JavaScript', hot: false },
      { name: 'Tailwind CSS', hot: true },
      { name: 'HTML5', hot: false },
      { name: 'CSS3', hot: false },
    ],
  },
  {
    title: 'Backend & Data',
    n: '/02',
    tags: [
      { name: 'Supabase', hot: true },
      { name: 'PostgreSQL', hot: false },
      { name: 'SQL', hot: false },
      { name: 'REST APIs', hot: true },
      { name: 'Authentication', hot: false },
    ],
  },
  {
    title: 'Tools & Practice',
    n: '/03',
    tags: [
      { name: 'Git & GitHub', hot: true },
      { name: 'Vercel', hot: false },
      { name: 'AI-Assisted Dev', hot: true },
      { name: 'Java', hot: false },
    ],
  },
]

const marqueeItems = [
  { text: 'REACT', fill: false },
  { text: 'NEXT.JS', fill: true },
  { text: 'TYPESCRIPT', fill: false },
  { text: 'TAILWIND', fill: true },
  { text: 'SUPABASE', fill: false },
  { text: 'POSTGRESQL', fill: true },
  { text: 'GIT', fill: false },
  { text: 'JAVA', fill: true },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-card/30">
      <Container size="lg" className="relative z-10">
        <SectionHeading
          index="02"
          label="Toolkit"
          title="The stack I"
          accent="build with."
          description="Grouped by how I actually use them — the tools I reach for daily are highlighted."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.title} delay={gi * 0.12}>
              <div className="h-full rounded-2xl border border-border bg-gradient-to-b from-card to-background/30 p-6">
                <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground mb-5">
                  <span>{group.title}</span>
                  <span className="text-cyan-400">{group.n}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={
                        tag.hot
                          ? 'text-sm font-medium px-3.5 py-2 rounded-lg border border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-200 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.5)]'
                          : 'text-sm font-medium px-3.5 py-2 rounded-lg border border-border bg-secondary/60 text-foreground/85'
                      }
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech marquee */}
        <FadeIn delay={0.2}>
          <div className="relative mt-10 border-y border-border py-6 overflow-hidden marquee-mask">
            <div className="flex w-max animate-marquee">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                  {marqueeItems.map((item) => (
                    <span
                      key={`${dup}-${item.text}`}
                      className={`font-display font-bold text-3xl sm:text-4xl mx-6 sm:mx-8 tracking-tight ${
                        item.fill ? 'text-outline-primary' : 'text-outline'
                      }`}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
