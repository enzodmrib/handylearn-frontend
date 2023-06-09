'use client'

import { Loading } from '@/components/Loading'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Button } from '@/components/Button'
import { RiUserLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/Input'
import { CourseCardSimple } from '@/components/CourseCardSimple'
import jsLogo from '@/assets/jsLogo.png'
import reactLogo from '@/assets/reactLogo.png'
import nodeLogo from '@/assets/nodeLogo.png'
import threeFingerEmoji from '@/assets/three-fingers.png'
import { courses } from '@/constants/mocks/courses-mock'
import { useEffect, useState } from 'react'
import { useHandDetection } from '@/hand-detection/hooks/useHandDetection'
import { setConstantValue } from 'typescript'



export default function Home() {
  const router = useRouter()
  const { currentGesture, setCurrentGesture } = useHandDetection()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin?callbackUrl=/home')
    }
  })

  const [search, setSearch] = useState('')

  const resultCourses = courses.filter(course => course.name.includes(search))

  const gestureIcons = ['☝', '✌', threeFingerEmoji]

  console.log(session)

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
      <div className='mt-8 m-auto max-w-[1120px] flex gap-8'>
        <aside className='bg-zinc-800 rounded-lg py-8 flex flex-col items-center gap-4 w-64 h-fit'>
          <span className='w-fit rounded-full border-2 border-zinc-900 ring-2 ring-emerald-500'>
            <Image
              src={session.user?.image ?? ''}
              width={60}
              height={60}
              alt="foto de perfil"
              className='rounded-full'
            />
          </span>
          <p className='font-bold text-zinc-200'>{session.user?.name}</p>
          <Button
            text="Ver Perfil"
            icon={<RiUserLine size={20} />}
            gestureBadgeEmoji='🤟'
            onClick={() => router.push('/profile')}
            className='px-6 py-4 border-2 border-emerald-500 text-emerald-500 font-bold rounded-lg'
          />
        </aside>
        <section className='grow'>
          <div className='bg-zinc-800 rounded-lg p-4'>
            <h1 className='text-2xl font-bold text-zinc-200'>Cursos</h1>
            <Input
              placeholder='Pesquise cursos...'
              className='w-full mt-4'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className='mt-4 flex flex-col gap-4'>
            {resultCourses.length > 0
              ? resultCourses.map((course, index) => (
                <CourseCardSimple
                  id={`course-${index}`}
                  key={course.name}
                  text={course.name}
                  img={course.img}
                  gestureBadgeEmoji={gestureIcons[index]}
                  onClick={() => {
                    router.push(`/course/${course.id}`)
                    setCurrentGesture(null)
                  }}
                />
              ))
              :
              <p className='text-xl text-zinc-200'>Nenhum curso encontrado</p>
            }
            {/* <CardSimple
              gestureBadgeEmoji='☝'
              img={jsLogo}
              text="Curso Fundamentos Javascript"
            />
            <CardSimple
              gestureBadgeEmoji='✌'
              img={reactLogo}
              text="Curso ReactJS"
            />
            <CardSimple
              gestureBadgeEmoji={threeFingerEmoji}
              img={nodeLogo}
              text="Curso NodeJS"
            /> */}
          </div>

        </section>
      </div>
    </div>
  )
}