import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

interface ClassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  gesture: string | StaticImageData
}

export function ClassButton({ name, gesture, className, ...props }: ClassButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span>
        {name}
      </span>
      <button
        className={`${className} rounded-full w-14 h-14 text-[36px] border-2 flex items-center justify-center`}
        {...props}
      >
        {typeof gesture === 'string'
          ? gesture
          : <Image
            src={gesture}
            width={36}
            height={36}
            alt="gesto de 3 dedos"
          />
        }
      </button>
    </div>
  )
}