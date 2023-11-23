'use client'

import Image from 'next/image'
import handylearnLogo from '../../../public/logo.svg'
import { Button } from '../Button'
import { HiLogout } from 'react-icons/hi'
import Link from 'next/link'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { useEffect, useContext } from 'react'
import { GithubSession } from '@/app/providers/GithubSessionProvider'
import { redirect } from 'next/navigation'

export function Header() {
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { logOut } = useContext(GithubSession)

  useEffect(() => {
    if (currentGesture === 'goodbye_gesture') {
      document.getElementById("logout_button")?.click()
    }
  }, [currentGesture])

  async function handleLogout() {
    try {
      await logOut()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <header className="w-full py-4 px-40 bg-zinc-800 flex items-center justify-center">
      <div className='flex items-center justify-between max-w-[1440px] grow'>
        <Link href={'/home'}>
          <Image src={handylearnLogo} alt='handylearn logo' />
        </Link>

        <Button
          id="logout_button"
          title='Sair'
          onClick={() => {
            console.log('logging-out')
            handleLogout()
            setCurrentGesture(null)
          }}
          icon={<HiLogout size={32} />}
          gestureBadgeEmoji='🤙'
          className="p-2 text-zinc-300 rounded-lg"
        />
      </div>
    </header>
  )
}