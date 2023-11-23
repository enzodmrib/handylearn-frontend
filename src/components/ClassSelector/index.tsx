import Image, { StaticImageData } from "next/image";
import { ButtonHTMLAttributes, useEffect, useContext } from "react";
import { ClassButton } from "../ClassButton";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useParams, useRouter } from "next/navigation";
import { CourseContext } from "@/app/providers/CourseProvider";


interface ClassSelectorProps {
  classes: Class[]
}

export function ClassSelector({ classes }: ClassSelectorProps) {
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { currentClass, viewedClassesIds } = useContext(CourseContext)
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

  if(!currentClass) {
    return <p className="text-zinc-300">Não há aulas selecionadas</p>
  }

  return (
    <div className="w-[45rem] flex justify-between">
      {classes.map((moduleClass, index) => {
        return <ClassButton
          id={`class-${index}`}
          key={moduleClass.name}
          gesture={gestureIcons[index]}
          name={moduleClass.name}
          disabled={currentClass.id === index + 1}
          onClick={() => {
            router.replace(`course/${routeParams.courseId}/modules/${routeParams.moduleId}/classes/${String(moduleClass.id)}`)
            setCurrentGesture(null)
          }}
          className={`${viewedClassesIds?.includes(moduleClass.id) && 'border-emerald-500'} ${currentClass.id === moduleClass.id && 'bg-emerald-500'}`}
        />
      })}
    </div>
  )
}