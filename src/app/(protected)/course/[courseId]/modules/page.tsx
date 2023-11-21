'use client'

import { ReturnButton } from "@/components/ReturnButton";
import { useParams } from "next/navigation";
import { courses } from "@/constants/mocks/course-listing-mock";
import Image from "next/image";
import { ModuleCard } from "@/components/ModuleCard";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect } from "react";

export default function Course() {
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const routeParams = useParams()

  useEffect(() => {
    if (currentGesture === 'one_gesture') {
      document.getElementById('module-0')?.click()
    } else if (currentGesture === 'two_gesture') {
      document.getElementById('module-1')?.click()
    } else if (currentGesture === 'three_gesture') {
      document.getElementById('module-2')?.click()
    }
  }, [currentGesture])

  const currentCourse = courses.find(course => course.id === Number(routeParams.courseId))
  const modules = currentCourse?.modules

  const gestureIcons = ['☝', '✌', threeFingerEmoji]

  return (
    <div>
      <div className='mt-8 m-auto max-w-[1120px] relative flex flex-col items-center'>
        <ReturnButton className="self-start" />
        <div className="flex flex-col items-center">
          <div className="rounded-full border-2 border-transparent ring-2 ring-zinc-200 w-fit">
            <Image
              src={currentCourse?.img ?? ""}
              alt="imagem do curso"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        </div>

        <p className="text-zinc-200 font-bold w-fit my-4">Curso - {currentCourse?.name}</p>

        <div className="max-w-[52rem] flex flex-col gap-4">
          {modules && modules.map((module, index) => (
            <ModuleCard
              id={`module-${index}`}
              key={module.id}
              title={module.name}
              description={module.description}
              href={`/course/${routeParams.courseId}/modules/${module.id}/classes/1`}
              gestureBadgeEmoji={gestureIcons[index]}
              onClick={() => setCurrentGesture(null)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}