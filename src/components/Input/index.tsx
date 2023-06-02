import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ children, className, ...props }: InputProps) {
  return (
    <input
      className={`${className} placeholder:text-zinc-600 text-zinc-200 bg-zinc-900 border-2 border-zinc-900 focus:border-zinc-400 p-2 rounded-lg outline-none transition`}
      {...props}
    />
  )
}