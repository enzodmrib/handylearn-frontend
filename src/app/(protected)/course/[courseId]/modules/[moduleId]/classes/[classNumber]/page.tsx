'use client'

import { useParams } from "next/navigation"

export default function Class() {
  const routeParams = useParams()

  console.log(routeParams)

  return (
    <div className="text-zinc-200">
      aula numero {routeParams.classNumber}
    </div>
  )
}