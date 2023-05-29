'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  // const { data: session, status } = useSession({
  //   required: true
  // })

  // if(status === "loading") {
  //   return (
  //     <h1 className="text-zinc-200">Loading...</h1>
  //   )
  // }

  return (
    <div className="h-full bg-zinc-900">
      <h1 className="text-zinc-200">Course</h1>
    </div>
  )
}