'use client'

import { Header } from '@/components/Header'
import { WebcamPanel } from '@/components/WebcamPanel'
import { ReactNode, Suspense, useContext, useEffect } from 'react'
import { CustomLoading } from '@/components/Loading'
import { GithubSession } from '../providers/GithubSessionProvider'
import { redirect } from 'next/navigation'

interface ProtectedLayoutProps {
  children: ReactNode
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { user, isLoadingSession } = useContext(GithubSession)

  useEffect(() => {
    if (!user && !isLoadingSession) {
      redirect('/signin')
    }
  }, [user])

  if(isLoadingSession) {
    return <CustomLoading />
  }

  return (
    <main className='h-full bg-zinc-900'>
      <Suspense fallback={<CustomLoading />}>
        <Header />
        {children}
        <WebcamPanel />
      </Suspense>
    </main>
  )
}