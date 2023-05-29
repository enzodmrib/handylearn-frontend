'use client'

import { Loading } from '@/components/Loading'
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

  console.log(session)

  if (status === "loading") {
    return <Loading />
  }

  return (
    <div>
      <h1 className="text-zinc-200">Bem-vindo {session?.user?.name}</h1>
    </div>
  )
}