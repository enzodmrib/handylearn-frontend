import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  icon?: ReactNode
  gestureBadgeEmoji?: string
}

export function Button({ icon, text, className, gestureBadgeEmoji, ...props }: ButtonProps) {
  return (
    <button
      className={`relative flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon}
      {text}
      {gestureBadgeEmoji && <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">{gestureBadgeEmoji}</span>}
    </button>
  )
}
