import Image, { StaticImageData } from "next/image"
import { ButtonHTMLAttributes } from "react"
import { HiArrowRight } from "react-icons/hi2"

interface CourseCardSimpleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string | StaticImageData
  text: string
  gestureBadgeEmoji: string | StaticImageData
}

export function CourseCardSimple({ img, text, gestureBadgeEmoji, ...props }: CourseCardSimpleProps) {
  return (
    <button
      className='relative w-full bg-zinc-800 rounded-lg border-2 border-zinc-400 text-zinc-200 text-xl flex h-[8.75rem]'
      {...props}
    >
      <Image
        src={img}
        alt="imagem do curso"
        width={136}
        height={136}
      />
      <div className="relative p-4 flex items-end grow h-full">
        <span className="font-bold ">{text}</span>
        <HiArrowRight size={32} className="absolute top-4 right-4" />
      </div>
      {gestureBadgeEmoji && <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">
        {typeof gestureBadgeEmoji === 'string'
          ? gestureBadgeEmoji
          :
          <Image
            width={24}
            height={24}
            src={gestureBadgeEmoji}
            alt="gesto"
          />
        }
      </span>}
    </button>
  )
}