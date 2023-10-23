import { useSession } from "next-auth/react"
import Image from "next/image"

export function Avatar() {
  const { data: session } = useSession()

  return (
    <span className='w-fit rounded-full border-2 border-zinc-900 ring-2 ring-emerald-500'>
      <Image
        src={session?.user?.image ?? ''}
        width={60}
        height={60}
        alt="foto de perfil"
        className='rounded-full'
      />
    </span>
  )
}