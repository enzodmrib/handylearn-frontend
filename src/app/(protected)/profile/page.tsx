'use client'

import { Avatar } from "@/components/Avatar";
import { CourseCardDetailed } from "@/components/CourseCardDetailed";
import { Loading } from "@/components/Loading";
import { ReturnButton } from "@/components/ReturnButton";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { courses } from "@/constants/mocks/courses-mock";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect } from "react";


export default function Profile() {
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/home')
    }
  })
  const { currentGesture, setCurrentGesture } = useHandDetection()

  const gestureIcons = ['☝', '✌', threeFingerEmoji]

  useEffect(() => {
    if (currentGesture === 'one_gesture') {
      document.getElementById('course-0')?.click()
    } else if (currentGesture === 'two_gesture') {
      document.getElementById('course-1')?.click()
    } else if (currentGesture === 'three_gesture') {
      document.getElementById('course-2')?.click()
    }
  }, [currentGesture])


  if (status === "loading") {
    return <Loading />
  }

  return (
    <div>
      <div className='mt-8 m-auto max-w-[1120px]'>
        <section className="flex flex-col gap-2 items-center bg-zinc-800 rounded-lg p-4">
          <ReturnButton className="self-start" />
          <Avatar />
          <p className="text-zinc-200 font-bold">{session.user?.name}</p>
          <p className="text-zinc-200 font-bold">Cursos concluídos: </p>
          <p className="text-2xl text-emerald-500 font-bold">0</p>
        </section>
        <section className="flex gap-4 mt-8">
          {courses.map((course, index) => (
            <CourseCardDetailed
              id={`course-${index}`}
              key={course.name}
              courseName={course.name}
              img={course.img}
              gestureBadgeEmoji={gestureIcons[index]}
              onClick={() => {
                router.push(`/course/${course.id}/modules`)
                setCurrentGesture(null)
              }}
            />
          ))}
        </section>

      </div>
    </div>
  )
}