import { Header } from '@/components/Header'
import { ReactNode } from 'react'

interface ProtectedLayoutProps {
  children: ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <main className='h-full bg-zinc-900'>
      <Header />
      {children}
    </main>
  )
}