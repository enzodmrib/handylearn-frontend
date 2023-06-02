import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen bg-zinc-800 flex flex-col items-center justify-center gap-2">
      <h1 className='font-bold text-2xl text-zinc-200'>Bem vindo ao handylearn!</h1>
      <Link href={"/signin"} className='text-zinc-300 underline text-xl'>
        Entrar na plataforma
      </Link>
    </main>
  )
}
