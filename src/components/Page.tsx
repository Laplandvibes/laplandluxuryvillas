import type { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
  /** When true, no top padding — page provides its own full-bleed hero. */
  fullBleed?: boolean
}

/**
 * Page wrapper. Adds the `pt-16 md:pt-20` offset for the fixed Nav when
 * `fullBleed` is false; otherwise the child is responsible (typically a Hero
 * with `min-h-[…svh]` that paints under the transparent Nav).
 */
export default function Page({ children, fullBleed = false }: PageProps) {
  return (
    <main className={fullBleed ? '' : 'pt-16 md:pt-20'}>
      {children}
    </main>
  )
}
