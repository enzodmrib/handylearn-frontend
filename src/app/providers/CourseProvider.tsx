import { CustomLoading } from '@/components/Loading'
import { db } from '@/libs/firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { useParams } from 'next/navigation'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { GithubSession } from './GithubSessionProvider'

interface CourseContextData {
  courses: Course[],
  currentCourse: Course | undefined,
  modules: Module[] | undefined,
  currentModule: Module | undefined
  currentClass: Class | undefined
  userProgressInfo: UserProgressInfo | null
  viewedClassesIds: number[] | undefined
  currentTest: Test | undefined
}

interface CourseContextProps {
  children: ReactNode
}

export const CourseContext = createContext({} as CourseContextData)

export function CourseContextProvider({ children }: CourseContextProps) {
  const routeParams = useParams()
  const { user } = useContext(GithubSession)

  const [userProgressInfo, setUserProgressInfo] = useState<UserProgressInfo | null>(null)

  const [courses, setCourses] = useState<Course[]>([])

  const [isLoading, setIsLoading] = useState(false)

  const currentCourse = courses.find(course => course.id === Number(routeParams.courseId))
  const modules = currentCourse?.modules
  const currentModule = modules?.find(module => module.id === Number(routeParams.moduleId))
  const currentClass = currentModule?.classes.find(moduleClass => moduleClass.id === Number(routeParams.classNumber))
  const viewedClassesIds = userProgressInfo?.viewedClasses.map((viewedClass) => viewedClass.id)
  const currentTest = currentModule?.test

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    markClassAsViewed()
  }, [currentClass])

  async function fetchData() {
    setIsLoading(true)

    await Promise.all([getUserInfo(), getAllCourses()])

    setIsLoading(false)
  }

  async function getUserInfo() {
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid)
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserProgressInfo(userDocSnap.data() as UserProgressInfo)
        } else {
          const usersRef = collection(db, 'users')

          await setDoc(doc(usersRef, user.uid), {
            uid: user.uid,
            viewedClasses: [],
            finishedTests: []
          })
        }
      } catch (e) {
        console.log(e)
      }
    }

  }

  async function getAllCourses() {
    try {
      const courseCollection = await getDocs(collection(db, 'courses'))
      const courses = courseCollection.docs.map((doc) => doc.data())

      setCourses(courses as Course[])
    } catch (e) {
      console.log(e)
    }
  }

  if (isLoading) {
    return <CustomLoading />
  }

  async function markClassAsViewed() {
    if (currentCourse && currentModule && currentClass && user) {

      try {
        if (!viewedClassesIds?.includes(currentClass.id)) {
          const userDocRef = doc(db, "users", user.uid)
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const usersRef = collection(db, 'users')

            const userDocData = userDocSnap.data()

            await setDoc(doc(usersRef, user.uid), {
              ...userDocData,
              viewedClasses: [
                ...userDocData.viewedClasses,
                {
                  id: currentClass.id,
                  moduleId: currentModule.id,
                  courseId: currentCourse.id,
                }
              ],
            })

            setUserProgressInfo({
              ...userDocData,
              viewedClasses: [
                ...userDocData.viewedClasses,
                {
                  id: currentClass.id,
                  moduleId: currentModule.id,
                  courseId: currentCourse.id,
                }
              ],
            } as UserProgressInfo)
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <CourseContext.Provider value={{
      courses,
      currentCourse,
      modules,
      currentModule,
      currentClass,
      userProgressInfo,
      viewedClassesIds,
      currentTest
    }}>
      {children}
    </CourseContext.Provider>
  )
}