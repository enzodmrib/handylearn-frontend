import './globals.css'
import { Inter } from 'next/font/google'
import { WebcamPanel } from '@/components/WebcamPanel'
import { HandDetectionProvider } from '@/hand-detection/hooks/useHandDetection'
import CustomSessionProvider from './providers/CustomSessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // if user is authenticated, go to the desidered page, else, return to the login screen

  return (
    <html lang="en">
      <body className={`${inter.className} h-screen scroll-smooth antialiased`}>
        <HandDetectionProvider>
          <CustomSessionProvider>
            <WebcamPanel />
            {children}
          </CustomSessionProvider>
        </HandDetectionProvider>
      </body>
    </html>
  )
}
