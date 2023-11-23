import { CourseContext } from "@/app/providers/CourseProvider"
import Image, { StaticImageData } from "next/image"
import { ButtonHTMLAttributes, useContext } from "react"
import { HiArrowRight } from "react-icons/hi2"

interface CourseCardDetailedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string | StaticImageData
  course: Course
  gestureBadgeEmoji: string | StaticImageData
}

export function CourseCardDetailed({ img, course, gestureBadgeEmoji, ...props }: CourseCardDetailedProps) {
  const { userProgressInfo } = useContext(CourseContext)
  
  const totalClasses = course.modules.reduce((acc, current) => {
    return acc + current.classes.length
  }, 0)

  const viewedClasses = userProgressInfo?.viewedClasses.filter(viewedClass => viewedClass.courseId === course.id).length

  const totalTests = course.modules.reduce((acc, current) => {
    if(current.test) {
      return acc + 1
    }
    return acc
  },0)

  const finishedTests = userProgressInfo?.finishedTests.filter(finishedTest => finishedTest.courseId === course.id).length ?? 0

  const grade = userProgressInfo?.finishedTests?.reduce((acc, current) => {
    if(course.id === current.courseId) {
      return acc + current.grade
    } 
    return acc
  }, 0) ?? 0

  const avg = grade / (finishedTests > 0 ? finishedTests : 1) * 10

  return (
    <button
      className='max-w-[11rem] relative flex flex-col gap-2 items-center justify-between p-2 bg-zinc-800 rounded-lg border-2 border-zinc-400 text-zinc-200 font-bold text-xl'
      {...props}
    >
      <Image
        src={img}
        alt="imagem do curso"
        width={160}
        height={160}
        className="rounded-lg"
      />
      <h1 className="font-bold text-xl">{course.name}</h1>
      <div className="relative flex flex-col text-zinc-400 text-base w-full">
        <div className="flex justify-between">
          <span>Aulas:</span>
          <span>{viewedClasses}/{totalClasses}</span>
        </div>

        <div className="flex justify-between">
          <span>Testes:</span>
          <span>{finishedTests}/{totalTests}</span>
        </div>

        <div className="flex justify-between">
          <span>Média:</span>
          <span>{avg}</span>
        </div>
        <HiArrowRight size={32} className="self-center text-zinc-200"/>
      </div>
      {gestureBadgeEmoji && <span className="rounded-full absolute right-[-20px] top-[-20px] bg-emerald-500 flex items-center justify-center text-xl h-10 w-10 z-20">
        {typeof gestureBadgeEmoji === 'string'
          ? gestureBadgeEmoji
          :
          <Image
            width={24}
            height={24}
            src={gestureBadgeEmoji}
            alt="gesto"
          />
        }
      </span>}
    </button>
  )
}