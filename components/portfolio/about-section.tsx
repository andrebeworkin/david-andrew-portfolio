'use client';

import { SlideIn } from '@/components/ui/animate';
import { Container } from '@/components/layouts/container';
import { SectionHeading } from '@/components/portfolio/section-heading';
import { SectionBackdrop } from '@/components/portfolio/decor';
import { Code2, Dumbbell, GraduationCap, Rocket } from 'lucide-react';

const highlights = [
{ icon: GraduationCap, label: 'Kinesiology Student', desc: 'University of New Brunswick' },
{ icon: Code2, label: 'Self-Taught Dev', desc: 'Modern web technologies' },
{ icon: Dumbbell, label: 'Fitness Trainer', desc: 'Personal training experience' },
{ icon: Rocket, label: 'Problem Solver', desc: 'Passionate about building solutions' }];


export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackdrop />
      <Container size="lg" className="relative z-10">
        <SectionHeading
          index="01"
          label="About Me"
          title="Turning ideas into"
          accent="reality."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn from="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Kinesiology student at the University of New Brunswick and a self-taught developer with a strong drive to build practical, user-friendly software. My journey into development started as a kid with a desire to build PCs and tinker with software to make it work the way I thought best. Today I strive to solve real problems, and that curiosity led me to full-stack web development, where I combine technical skills with an eye for clean design.
              

              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of coding, I bring discipline and dedication from my background as a personal fitness trainer. 
                Whether I&apos;m architecting a database, designing a user interface, or helping clients reach their goals, 
                I approach every challenge with the same commitment to excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m currently seeking opportunities where I can contribute to meaningful projects, grow as a developer, 
                and work alongside talented teams building great software. I&apos;m open to remote roles, co-ops, and 
                internships — full-time or part-time.
              </p>
            </div>
          </SlideIn>

          <SlideIn from="right">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) =>
              <div
                key={item.label}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              )}
            </div>
          </SlideIn>
        </div>
      </Container>
    </section>);

}