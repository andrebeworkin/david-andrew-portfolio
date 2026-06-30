'use client'

import { cn } from '@/lib/utils'

/**
 * Decorative blueprint-grid + film-grain backdrop for a section.
 * Render as the first child inside a `relative` section wrapper.
 */
export function SectionBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 z-0 bp-grid grain-overlay',
        className
      )}
    />
  )
}
