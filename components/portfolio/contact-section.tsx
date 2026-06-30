'use client'

import { useState, useCallback } from 'react'
import { SlideIn } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Mail, Phone, MapPin, Send, Github, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {}
    setForm((prev) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!form?.name || !form?.email || !form?.message) {
      toast.error('Please fill in all required fields.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res?.json().catch(() => ({}))
      if (res?.ok && data?.success) {
        setSent(true)
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        toast.error(data?.message ?? 'Failed to send message. Please try again.')
      }
    } catch (err: any) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }, [form])

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/50">
      <Container size="lg">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's"
          accent="connect."
          description="Open to remote roles, co-ops, and internships — full-time or part-time. Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <SlideIn from="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <a href="mailto:andrebeworkin@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">andrebeworkin@gmail.com</p>
                  </div>
                </a>
                <a href="tel:5066887862" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">(506) 688-7862</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Fredericton, New Brunswick</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">Follow me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/andrebeworkin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:text-primary transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Contact form */}
          <SlideIn from="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form?.name ?? ''}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form?.email ?? ''}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  value={form?.subject ?? ''}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={form?.message ?? ''}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : sent ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}
