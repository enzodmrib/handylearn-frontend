'use client'

import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi2";

interface ReturnButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function ReturnButton({ className, ...props }: ReturnButtonProps) {
  const router = useRouter()
  const { currentGesture, setCurrentGesture } = useHandDetection()

  useEffect(() => {
    if (currentGesture === 'i_love_you_gesture') {
      document.getElementById('return-button')?.click()
    }
  }, [currentGesture])

  return (
    <button
      type="button"
      id="return-button"
      className={`${className} relative w-10 h-10 text-zinc-200`}
      onClick={() => {
        router.back()
        setCurrentGesture(null)
      }}
      {...props}
    >
      <HiArrowLeft size={24} />
      <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">
        🤟
      </span>
    </button>
  )
}