import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes, useEffect } from "react";
import { ClassButton } from "../ClassButton";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useParams, useRouter } from "next/navigation";


interface ClassSelectorProps {
  currentClassNumber: number
  classes: {
    id: number,
    moduleId: number,
    name: string,
    type: string,
    contentLink: string
  }[],
}

export function ClassSelector({ classes, currentClassNumber }: ClassSelectorProps) {
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const router = useRouter()
  const routeParams = useParams()

  useEffect(() => {
    if (currentGesture === 'one_gesture') {
      document.getElementById('class-0')?.click()
    } else if (currentGesture === 'two_gesture') {
      document.getElementById('class-1')?.click()
    } else if (currentGesture === 'three_gesture') {
      document.getElementById('class-2')?.click()
    } else if (currentGesture === 'ok_gesture') {
      document.getElementById('class-3')?.click()
    }
  }, [currentGesture])

  const gestureIcons = ['☝', '✌', threeFingerEmoji, '👌']

  return (
    <div className="w-[45rem] flex justify-between">
      {classes.map((moduleClass, index) => {
        return <ClassButton
          id={`class-${index}`}
          key={moduleClass.name}
          gesture={gestureIcons[index]}
          name={moduleClass.name}
          disabled={currentClassNumber === index + 1}
          onClick={() => {
            router.replace(`course/${routeParams.courseId}/modules/${routeParams.moduleId}/classes/${String(index + 1)}`)
            setCurrentGesture(null)
          }}
          className={`${currentClassNumber >= index + 1 && 'border-emerald-500'} ${currentClassNumber === index + 1 && 'bg-emerald-500'}`}
        />
      })}
    </div>
  )
}