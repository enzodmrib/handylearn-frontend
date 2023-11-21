'use client'

import { ReturnButton } from "@/components/ReturnButton"
import { useParams } from "next/navigation"
import Image from "next/image"
import threeFingerEmoji from '@/assets/three-fingers.png'
import { ClassSelector } from "@/components/ClassSelector"
import { ClassContent } from "@/components/ClassContent"
import { courses } from "@/constants/mocks/course-listing-mock"

export default function Class() {
  const routeParams = useParams()

  const currentCourse = courses.find(course => course.id === Number(routeParams.courseId))
  const currentModule = currentCourse?.modules.find(courseModule => String(courseModule.id) === routeParams.moduleId)
  const currentClass = currentModule?.classes.find(moduleClass => String(moduleClass.id) === routeParams.classNumber)

  if (!currentClass) {
    return <p>An error ocurred</p>
  }

  return (
    <div>
      <div className='mt-8 m-auto max-w-[1120px]'>
        <div className="bg-zinc-800 rounded-lg p-4 text-zinc-200 font-bold flex flex-col">
          <ReturnButton className="self-start" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl">{currentClass?.name}</h1>
            <p>{currentModule?.name}: {currentClass?.name}</p>

            <ClassContent
              classType={currentClass.type}
              contentUrl={currentClass?.contentLink}
            />

            {<ClassSelector
              classes={currentModule?.classes ?? [] as Class[]}
              currentClassNumber={Number(routeParams.classNumber)}
            />}
          </div>
        </div>
      </div>
    </div>
  )
}