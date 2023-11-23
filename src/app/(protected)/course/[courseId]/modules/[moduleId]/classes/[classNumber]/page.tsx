'use client'

import { ReturnButton } from "@/components/ReturnButton"
import { useParams } from "next/navigation"
import { ClassSelector } from "@/components/ClassSelector"
import { ClassContent } from "@/components/ClassContent"
import { useContext } from "react"
import { CourseContext } from "@/app/providers/CourseProvider"

export default function Class() {
  const { currentModule, currentClass } = useContext(CourseContext)

  if (!currentClass) {
    return <p className="text-zinc-300">Não há aulas selecionadas</p >
  }

  return (
    <div>
      <div className='mt-8 m-auto max-w-[1120px]'>
        <div className="bg-zinc-800 rounded-lg p-4 text-zinc-200 font-bold flex flex-col">
          <ReturnButton className="self-start" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl">{currentClass?.name}</h1>
            <p className="font-semibold">{currentModule?.name}: {currentClass?.name}</p>

            <ClassContent
              classType={currentClass.type}
              contentUrl={currentClass.type === 'VIDEO' ? currentClass.videoId : currentClass.contentLink}
            />

            {<ClassSelector
              classes={currentModule?.classes ?? [] as Class[]}
            />}
          </div>
        </div>
      </div>
    </div>
  )
}