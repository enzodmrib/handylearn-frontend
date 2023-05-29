'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface CustomSessionProviderProps {
  children: ReactNode
}

export default function CustomSessionProvider({ children }: CustomSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}