import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
  layout: "primary" | "secondary"
}

export function Button({ layout, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`${className} ${layout === "primary" ? "bg-green-600 text-zinc-100 border-green-600" : "bg-transparent text-green-500 border-green-500"} border rounded-lg font-bold flex items-center justify-center gap-2 px-6 py-4 transition-colors hover:bg-green-500 hover:border-green-500 disabled:bg-zinc-400 disabled:text-zinc-100 disabled:border-zinc-400 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  )
}