'use client'

import { Loading } from '@/components/Loading'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { CourseCardSimple } from '@/components/CourseCardSimple'
import { RiUserLine } from 'react-icons/ri'
import threeFingerEmoji from '@/assets/three-fingers.png'
import { courses } from '@/constants/mocks/course-listing-mock'
import { useEffect, useState } from 'react'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { Avatar } from '@/components/Avatar'
import { Redirect } from '@/components/Redirect'

export default function Home() {
  const router = useRouter()
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/home')
    }
  })

  const gestureIcons = ['☝', '✌', threeFingerEmoji]

  useEffect(() => {
    if (currentGesture === 'one_gesture') {
      document.getElementById('course-0')?.click()
    } else if (currentGesture === 'two_gesture') {
      document.getElementById('course-1')?.click()
    } else if (currentGesture === 'three_gesture') {
      document.getElementById('course-2')?.click()
    } else if (currentGesture === 'i_love_you_gesture') {
      document.getElementById('profile-button')?.click()
    }
  }, [currentGesture])

  if (status === "loading") {
    return <Loading />
  }

  return (
    <div>
      <div className='mt-8 m-auto max-w-[1120px] flex gap-8 [@media(max-width:1120px)]:flex-col [@media(max-width:1120px)]:items-center'>

        <aside className='bg-zinc-800 rounded-lg py-8 flex flex-col items-center gap-4 w-64 h-fit'>
          <Avatar />
          <p className='font-bold text-zinc-200'>{session.user?.name}</p>
          <Redirect
            id="profile-button"
            text="Ver Perfil"
            href={'/profile'}
            icon={<RiUserLine size={20} />}
            gestureBadgeEmoji='🤟'
            onClick={() => {
              setCurrentGesture(null)
            }}
            className='px-6 py-4 border-2 border-emerald-500 text-emerald-500 font-bold rounded-lg'
          />
        </aside>

        <section className='grow'>
          <h1 className='font-semibold text-white text-4xl'>Cursos</h1>

          <div className='mt-4 flex flex-col gap-4'>
            {courses.length > 0
              ? courses.map((course, index) => (
                <CourseCardSimple
                  id={`course-${index}`}
                  key={course.name}
                  text={course.name}
                  img={course.img}
                  gestureBadgeEmoji={gestureIcons[index]}
                  href={`/course/${course.id}/modules`}
                  onClick={() => {
                    setCurrentGesture(null)
                  }}
                />
              ))
              :
              <p className='text-xl text-zinc-200'>Nenhum curso encontrado</p>
            }
          </div>
        </section>
      </div>
    </div>
  )
}