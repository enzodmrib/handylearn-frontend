'use client'

import { Button } from "@/components/Button";
import { ReturnButton } from "@/components/ReturnButton";
import { courses } from "@/constants/mocks/course-listing-mock";
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useParams, useRouter } from "next/navigation";
import { RiArrowGoBackLine, RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { FormEvent, useContext, useEffect, useState } from 'react'
import { CourseContext } from "@/app/providers/CourseProvider";

export default function Test() {
  const params = useParams()
  const router = useRouter()
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { currentTest, currentCourse, currentModule, submitTest } = useContext(CourseContext)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [testAnswerIds, setTestAnswerIds] = useState<Array<number | null>>([null, null, null, null])

  const question = currentTest?.questions[currentQuestionIndex]

  const questionGestureIcons = ['☝', '✌', threeFingerEmoji]
  const alternativeLetters = ['A', 'B', 'C']

  useEffect(() => {
    if (currentGesture === 'one_gesture') {
      document.getElementById('alternative-1')?.click()
    } else if (currentGesture === 'two_gesture') {
      document.getElementById('alternative-2')?.click()
    } else if (currentGesture === 'three_gesture') {
      document.getElementById('alternative-3')?.click()
    } else if (currentGesture === 'next_gesture') {
      document.getElementById('next-button')?.click()
    } else if (currentGesture === 'previous_gesture') {
      document.getElementById('previous-button')?.click()
    } else if (currentGesture === 'thumbs_up') {
      document.getElementById('submit-button')?.click()
    } 
  }, [currentGesture])

  function handleSubmitTestAnswers(event: FormEvent) {
    event.preventDefault()

    const testAnswers = currentTest?.questions.map((question, index) => ({ 
      questionId: question.id, 
      answerId: testAnswerIds[index] 
    }))

    if(testAnswers) {
      submitTest(testAnswers)
      router.replace(`/course/${params.courseId}/modules/${params.moduleId}/classes/results`)
    }
  }

  if (!currentTest) {
    return
  }

  return (
    <form onSubmit={handleSubmitTestAnswers} className='mt-8 m-auto max-w-[1120px]'>
      <div className="bg-zinc-800 rounded-lg p-4 text-zinc-300 font-bold flex flex-col items-center">
        <ReturnButton className="self-start" />
        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="text-2xl">{currentCourse?.name}</h1>
          <h2>{currentModule?.name}</h2>
          <p className="text-xl">{`Questão ${currentQuestionIndex + 1}/${currentTest?.questions.length}`}</p>
        </div>

        <div className="w-full flex flex-col gap-6 max-w-[52rem]">
          <p className="text-xl">Pergunta</p>
          {question?.alternatives.map((alternative, index) => (
            <Button
              id={`alternative-${index + 1}`}
              type="button"
              key={alternative.id}
              className={`
              ${(testAnswerIds[currentQuestionIndex] === alternative.id)
                  ? "border-emerald-500 text-emerald-500"
                  : "border-zinc-700"}
              bg-zinc-900 border-2 rounded-lg p-4 w-full justify-start 
                  `}
              text={`${alternativeLetters[index]}) ${alternative.text}`}
              gestureBadgeEmoji={questionGestureIcons[index]}
              onClick={() => {
                setTestAnswerIds(testAnswerIds.map((answer, answerIndex) => (
                  answerIndex === currentQuestionIndex ? alternative.id : answer)
                ))
                setCurrentGesture(null)
              }}
            />
          ))}
        </div>
        <footer className="flex items-center mt-8 gap-12">
          {currentQuestionIndex >= 1 && <Button
            id="previous-button"
            type="button"
            text="Anterior"
            icon={<RiArrowGoBackLine />}
            onClick={() => {
              setCurrentQuestionIndex((prevState) => prevState - 1)
              setCurrentGesture(null)
            }}
            gestureBadgeEmoji='👈'
            className="p-4 border-2 border-zinc-300 rounded-lg"
          />}

          {(currentQuestionIndex + 1) < currentTest?.questions.length && (
            <Button
              id="next-button"
              type="button"
              text="Próximo"
              icon={<RiArrowRightLine />}
              onClick={() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                setCurrentGesture(null)
              }}
              gestureBadgeEmoji='👉'
              className="p-4 border-2 border-zinc-300 rounded-lg"
            />
          )}

          {(currentQuestionIndex + 1) === currentTest?.questions.length && (
            <Button
              id="submit-button"
              type="submit"
              text="Ok!"
              icon={<RiCheckLine />}
              onClick={() => {
                setCurrentGesture(null)
              }}
              gestureBadgeEmoji='👍'
              className="p-4 border-2 border-emerald-500 text-emerald-500 rounded-lg"
            />
          )}
        </footer>
      </div>
    </form>
  )
}