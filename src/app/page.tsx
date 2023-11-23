import Image from 'next/image'
import Link from 'next/link'
import okGestureImg from '@/assets/ok_gesture_img.jpg'
import okGestureBadge from '@/assets/ok_gesture_badge.png'
import { RiArrowRightLine } from 'react-icons/ri'

export default function Home() {
  return (
    <main className="h-screen bg-zinc-800 flex flex-col items-center justify-center gap-2 text-zinc-300">
      <h1 className='font-bold text-2xl text-emerald-500'>Bem vindo ao handylearn!</h1>
      <p>Na plataforma você poderá navegar utilizando gestos!</p>
      <p>Basta realizar o gesto mais similar possível para interagir com o elemento que possuí a legenda de acordo!</p>
      <div className='flex items-center gap-8 my-8'>
        <Image src={okGestureBadge} alt='okGestureBadge' width={200} height={200} className='rounded-lg drop-shadow border-2 border-emerald-500 '/>
        <RiArrowRightLine size={32}/>
        <Image src={okGestureImg} alt='okGestureImg' width={200} height={200} className='rounded-lg drop-shadow border-2 border-emerald-500 '/>
      </div>
      <div className='flex items-center gap-8 my-8'>
        <p>(Ah, e não esqueça de permitir acesso a câmera e pop-ups!)</p>
      </div>
      <Link href={"/signin"} className='text-zinc-300 underline text-2xl'>
        Entrar na plataforma
      </Link>
    </main>
  )
}
