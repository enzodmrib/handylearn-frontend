'use client'

import { Avatar } from "@/components/Avatar";
import { CourseCardDetailed } from "@/components/CourseCardDetailed";
import { ReturnButton } from "@/components/ReturnButton";
import { useRouter } from "next/navigation";
import threeFingerEmoji from '@/assets/three-fingers.png'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection";
import { useEffect, useContext } from "react";
import { GithubSession } from "@/app/providers/GithubSessionProvider";
import { CourseContext } from "@/app/providers/CourseProvider";

export default function Profile() {
  const router = useRouter()
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { user } = useContext(GithubSession)
  const { courses } = useContext(CourseContext)

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

  return (
    <div className='mt-8 m-auto max-w-[1120px]'>
      <section className="flex flex-col gap-2 items-center bg-zinc-800 rounded-lg p-4">
        <ReturnButton className="self-start" />
        <Avatar />
        <p className="text-zinc-200 font-bold">{user?.displayName}</p>
        <p className="text-zinc-200 font-bold">Cursos concluídos: </p>
        <p className="text-2xl text-emerald-500 font-bold">0</p>
      </section>
      <section className="flex justify-center gap-4 mt-8 wrap">
        {courses.map((course, index) => (
          <CourseCardDetailed
            id={`course-${index}`}
            key={course.id}
            course={course}
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
  )
}