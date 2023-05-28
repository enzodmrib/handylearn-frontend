"use client"

import Image from 'next/image'
import handylearnLogo from '../../../public/logo.svg'
import { Button } from '@/components/Button/Button'
import { FaGithub } from 'react-icons/fa'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { useEffect } from 'react'

export default function Login() {
  const { currentGesture } = useHandDetection()

  console.log("currentGesture: ", currentGesture)
  useEffect(() => {
    if (currentGesture === 'ok_gesture') {
      document.getElementById('sign-in-button')?.click()
    }
  }, [currentGesture])

  return (
    <main className="bg-zinc-800 flex items-center justify-center h-screen">
      <div className='flex flex-col items-center gap-10'>
        <Image src={handylearnLogo} alt="handylearn logo" />

        <Button
          id="sign-in-button"
          icon={<FaGithub size={24} />}
          text="Login com GitHub"
          onClick={() => console.log('Login')}
          gestureBadgeEmoji='👌'
          className='text-xl p-4 border-zinc-200 border bg-zinc-200 text-zinc-900'
        />
      </div>
    </main>
  )
}