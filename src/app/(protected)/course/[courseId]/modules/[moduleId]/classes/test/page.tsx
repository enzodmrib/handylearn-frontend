'use client'

import { Button } from "@/components/Button";
import { ReturnButton } from "@/components/ReturnButton";
import { courses } from "@/constants/mocks/course-listing-mock";
import { useParams } from "next/navigation";

export default function Test() {
  const routeParams = useParams()

  const currentCourse = courses.find(course => course.id === routeParams.courseId)

  const currentModule = currentCourse?.modules.find(module => module.id = routeParams.moduleId)

  const test = currentModule?.test

  const question = test?.questions[0]

  console.log({ routeParams, currentCourse, currentModule })

  return (
    <div className='mt-8 m-auto max-w-[1120px]'>
      <div className="bg-zinc-800 rounded-lg p-4 text-zinc-300 font-bold flex flex-col items-center gap-4">
        <ReturnButton className="self-start" />
        <h1>{currentCourse?.name}</h1>
        <h2>{currentModule?.name}</h2>
        <p>Questão x/x</p>
        <p>Pergunta</p>
        {question?.alternatives.map((alternative, index) => {
          const letters = ['A', 'B', 'C']

          return (
            <Button
              key={alternative.id}
              
              className="bg-zinc-900 border-2 rounded-lg border-zinc-700 p-4 w-full justify-start"
              text={`${letters[index]}) ${alternative.text}`}
            />
          )
        })}
      </div>
    </div>
  )
}