'use client'

import { FadeIn } from '@/components/ui/animate'
import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  label,
  title,
  accent,
  description,
  align = 'left',
  className,
}: {
  index: string
  label: string
  title: React.ReactNode
  accent?: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  const center = align === 'center'
  return (
    <FadeIn>
      <div className={cn('mb-14', center && 'text-center', className)}>
        <div className={cn('flex items-center gap-3.5 mb-5', center && 'justify-center')}>
          <span className="font-mono text-[13px] font-medium text-cyan-400 tracking-widest">{index}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">{label}</span>
          <span className="h-px w-14 sm:w-24 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <h2 className="font-display text-[2rem] sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight leading-[1.05]">
          {title}
          {accent && (
            <>
              {' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {accent}
              </span>
            </>
          )}
        </h2>
        {description && (
          <p
            className={cn(
              'text-muted-foreground mt-5 text-base sm:text-[17px] leading-relaxed max-w-xl',
              center && 'mx-auto'
            )}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  )
}
