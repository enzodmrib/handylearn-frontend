'use client'

import { Header } from '@/components/Header'
import { WebcamPanel } from '@/components/WebcamPanel'
import { ReactNode, Suspense } from 'react'
import Loading from './loading'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { CustomLoading } from '@/components/Loading'

interface ProtectedLayoutProps {
  children: ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/home')
    }
  })

  if (status === 'loading') {
    return (
      <main className='h-full bg-zinc-900'>
        <CustomLoading />
      </main>
    )
  }

  if (!session && status !== 'loading') {
    return (
      <main className='h-full bg-zinc-900'>
        <p className='text-zinc-500'>Usuário não está autenticado</p>
      </main>
    )
  }

  return (
    <main className='h-full bg-zinc-900'>
      <Header />
      {children}
      <WebcamPanel />
    </main>
  )
}