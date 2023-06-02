import { Header } from '@/components/Header'
import { WebcamPanel } from '@/components/WebcamPanel'
import { ReactNode } from 'react'

interface ProtectedLayoutProps {
  children: ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <main className='h-full bg-zinc-900'>
      <Header />
      {children}
      <WebcamPanel />
    </main>
  )
}