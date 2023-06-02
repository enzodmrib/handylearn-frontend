'use client'

import Image, { StaticImageData } from "next/image"
import Link, { LinkProps } from "next/link"
import { HiArrowRight } from "react-icons/hi2"

interface ModuleCardProps extends LinkProps {
  id: string
  title: string
  description: string
  gestureBadgeEmoji: string | StaticImageData
}

export function ModuleCard({ title, description, gestureBadgeEmoji, ...props }: ModuleCardProps) {
  return (
    <Link
      {...props}
      className="relative bg-zinc-800 text-zinc-200 border-2 border-zinc-400 p-4 font-bold w-full rounded-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">{title}</h1>
        <HiArrowRight size={24} />
      </div>

      <p>{description}</p>

      {gestureBadgeEmoji && <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">
        {typeof gestureBadgeEmoji === 'string'
          ? gestureBadgeEmoji
          :
          <Image
            src={gestureBadgeEmoji}
            alt="gesto"
            width={24}
            height={24}
          />
        }
      </span>}
    </Link>
  )
}