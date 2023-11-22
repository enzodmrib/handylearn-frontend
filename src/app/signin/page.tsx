"use client"

import Image from 'next/image'
import handylearnLogo from '../../../public/logo.svg'
import { Button } from '@/components/Button'
import { FaGithub } from 'react-icons/fa'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { useContext, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { CustomLoading } from '@/components/Loading'
import { WebcamPanel } from '@/components/WebcamPanel'
import { GithubSession } from '../providers/GithubSessionProvider'


export default function SignIn() {
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { user, githubSignIn } = useContext(GithubSession)

  useEffect(() => {
    if(user) {
      redirect('/home')
    }
  }, [user])

  useEffect(() => {
    if (currentGesture === 'ok_gesture') {
      document.getElementById('sign-in-button')?.click()
    }
  }, [currentGesture])

  async function handleSignIn() {
    try {
      await githubSignIn()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main className="bg-zinc-800 flex items-center justify-center h-full">
      <div className='flex flex-col items-center gap-10'>
        <Image src={handylearnLogo} alt="handylearn logo" />
        <Button
          id="sign-in-button"
          icon={<FaGithub size={24} />}
          text="Entrar com GitHub"
          onClick={() => {
            handleSignIn()
            setCurrentGesture(null)
          }}
          gestureBadgeEmoji='👌'
          className='text-xl font-bold py-4 px-6 rounded-lg border-zinc-200 border bg-zinc-200 text-zinc-900'
        />
      </div>
      <WebcamPanel />
    </main>
  )
}