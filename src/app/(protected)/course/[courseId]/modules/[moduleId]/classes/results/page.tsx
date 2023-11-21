'use client'

import { ReturnButton } from "@/components/ReturnButton";
import { useParams } from "next/navigation";
import { answeredTest } from "@/constants/mocks/answered-test-mock";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

export default function Results() {
  const routeParams = useParams()

  const questions = answeredTest.questions

  const totalQuestions = questions.length
  const correctQuestions = questions.filter(question => question.selectedAlternativeId === question.correctAlternativeId).length

  return (
    <div className='mt-8 m-auto max-w-[1120px]'>
      <div className="bg-zinc-800 rounded-lg p-4 text-zinc-300 font-bold flex flex-col items-center">
        <ReturnButton className="self-start" />
        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="text-2xl">Resultados do teste do módulo x - Curso x</h1>
        </div>
        <div className="w-full flex flex-col gap-6 max-w-[52rem]">
          {questions?.map((question, index) => {
            const correctAlternative = question.alternatives.find(alternative => alternative.id === question.correctAlternativeId)
            const selectedAlternative = question.alternatives.find(alternative => alternative.id === question.selectedAlternativeId)

            if ((selectedAlternative && correctAlternative) && selectedAlternative.id === correctAlternative.id) {
              return (
                <div key={question.id}>
                  <p className="font-medium">Questão {index + 1}: {question.text}</p>
                  <div className="px-4 py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg bg-zinc-900 flex items-center gap-2 justify-between my-2">
                    <p className="break-all">{correctAlternative.text}</p>
                    <RiCheckLine size={24} className="shrink-0"/>
                  </div>
                </div>
              )
            } else if ((selectedAlternative && correctAlternative) && selectedAlternative.id !== correctAlternative.id) {
              return (
                <div key={question.id}>
                  <p className="font-medium">Questão {index + 1}: {question.text}</p>
                  <div className="px-4 py-2 border-2 border-rose-900 text-rose-900 rounded-lg bg-zinc-900 my-2 flex items-center justify-between gap-2">
                    <p className="break-all">{selectedAlternative.text}</p>
                    <RiCloseLine size={24} className="shrink-0" />
                  </div>
                  <div className="text-sm text-emerald-500 flex items-center gap-2">
                    <span className="break-all">Resposta correta: {correctAlternative.text}</span>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className="mt-8 text-xl">
          <p>Pontuação final: {correctQuestions}/{totalQuestions}</p>
        </div>
      </div>
    </div>
  )
}