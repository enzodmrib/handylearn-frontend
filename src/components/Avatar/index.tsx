import { GithubSession } from "@/app/providers/GithubSessionProvider"
import Image from "next/image"
import { useContext } from 'react'
import placeholderImg from '@/assets/placeholder.png'

export function Avatar() {
  const { user } = useContext(GithubSession)

  return (
    <span className='w-fit rounded-full border-2 border-zinc-900 ring-2 ring-emerald-500'>
      <Image
        src={user?.photoURL ?? placeholderImg}
        width={60}
        height={60}
        alt="foto de perfil"
        className='rounded-full'
      />
    </span>
  )
}