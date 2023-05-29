import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ children, className, ...props }: InputProps) {
  return (
    <input
      className={`${className} p-4 text-zinc-200 outline-none w-full h-full placeholder:text-zinc-400 rounded-lg border border-zinc-800 bg-zinc-800 focus-within:border-green-500 transition-colors invalid:border-red-700`}
      {...props}
    />
  )
}