'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'


export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/home')
    }
  })

  if (status === "loading") {
    return (
      <div className='flex items-center justify-center h-full'>
        <span className='text-zinc-300'>
          <AiOutlineLoading3Quarters size={32} className='animate-spin'/>
        </span>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-zinc-200">Bem-vindo {session?.user?.name}</h1>
    </div>
  )
}