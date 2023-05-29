"use client"

import Image from 'next/image'
import handylearnLogo from '../../../public/logo.svg'
import { Button } from '@/components/Button'
import { FaGithub } from 'react-icons/fa'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Loading } from '@/components/Loading'


export default function SignIn() {
  const { currentGesture } = useHandDetection()
  const { data: session, status } = useSession(); 

  console.log(session)

  useEffect(() => {
    if(session && status === 'authenticated') {
      redirect('/home')
    }
  }, [session, status])

  useEffect(() => {
    if (currentGesture === 'ok_gesture') {
      document.getElementById('sign-in-button')?.click()
    }
  }, [currentGesture])

  if(status === 'loading') {
    return (
      <main className="bg-zinc-800 flex items-center justify-center h-full">
        <Loading />
      </main>
    )
  }

  return (
    <main className="bg-zinc-800 flex items-center justify-center h-full">
      <div className='flex flex-col items-center gap-10'>
        <Image src={handylearnLogo} alt="handylearn logo" />

        <Button
          id="sign-in-button"
          icon={<FaGithub size={24} />}
          text="Entrar com GitHub"
          // onClick={() => console.log('Login')}
          onClick={() => signIn('github', {
            callbackUrl: `${window.location.origin}/home`,
          })}
          gestureBadgeEmoji='👌'
          className='text-xl p-4 rounded-lg border-zinc-200 border bg-zinc-200 text-zinc-900'
        />
      </div>
    </main>
  )
}