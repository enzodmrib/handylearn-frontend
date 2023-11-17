import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { NextLinkProps } from "../CourseCardSimple";

interface AnchorProps extends NextLinkProps {
  text?: string
  icon?: ReactNode
  gestureBadgeEmoji?: string | StaticImageData
}

export function Redirect({ icon, text, className, gestureBadgeEmoji, ...props }: AnchorProps) {
  return (
    <Link
      className={`relative flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon}
      {text}
      {gestureBadgeEmoji && <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">
        {typeof gestureBadgeEmoji === 'string'
          ? gestureBadgeEmoji
          :
          <Image
            src={gestureBadgeEmoji}
            alt="gesto"
          />
        }
      </span>}
    </Link>
  )
}
