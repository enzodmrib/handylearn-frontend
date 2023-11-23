import './globals.css'
import { Inter } from 'next/font/google'
import { WebcamPanel } from '@/components/WebcamPanel'
import { HandDetectionProvider } from '@/hand-detection/hooks/useHandDetection'
import Loading from './loading'
import { Suspense } from 'react'
import GithubSessionProvider from './providers/GithubSessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Handylearn',
  description: 'Handylearn',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // if user is authenticated, go to the desidered page, else, return to the login screen

  return (
    <html lang="en">
      <body className={`${inter.className} h-screen scroll-smooth antialiased min-w-[600px] overflow-hidden`}>
        <HandDetectionProvider>
          <GithubSessionProvider>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </GithubSessionProvider>
        </HandDetectionProvider>
      </body>
    </html>
  )
}
