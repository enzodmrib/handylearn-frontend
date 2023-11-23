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
  submitTest: (testAnswers: { questionId: number, answerId: number | null }[]) => void
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
  const finishedTestIds = userProgressInfo?.finishedTests.map(finishedTest => finishedTest.id)
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

            const newUserProgressData = {
              ...userDocData,
              viewedClasses: [
                ...userDocData.viewedClasses,
                {
                  id: currentClass.id,
                  moduleId: currentModule.id,
                  courseId: currentCourse.id,
                }
              ],
            }

            await setDoc(doc(usersRef, user.uid), newUserProgressData)

            // setUserProgressInfo(newUserProgressData as UserProgressInfo)
            fetchData()
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  async function submitTest(testAnswers: ({ questionId: number, answerId: number | null }[])) {
    if (currentCourse && currentModule && currentTest && user) {
      // substituir o teste que ja tenha sido feito, adicionar caso não tenha sido feito
      try {
        const userDocRef = doc(db, "users", user.uid)
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const usersRef = collection(db, 'users')

          const userDocData = userDocSnap.data()

          let newUserProgressData = userDocData

          const relatedQuestions = currentTest.questions.map(question => {
            const userAnsweredQuestion = testAnswers?.find(testAnswer => testAnswer.questionId === question.id)

            return ({
              ...question,
              selectedAlternativeId: userAnsweredQuestion?.answerId
            })
          })
          const correctQuestions = relatedQuestions.filter(question => question.selectedAlternativeId === question.correctAlternativeId).length
          const totalQuestions = currentTest.questions.length

          if (finishedTestIds?.includes(currentTest.id)) {
            newUserProgressData.finishedTests = newUserProgressData.finishedTests.filter((finishedTest: FinishedTest) => finishedTest.id !== currentTest.id)
          }

          newUserProgressData = {
            ...newUserProgressData,
            finishedTests: [
              ...newUserProgressData.finishedTests,
              {
                id: currentTest.id,
                moduleId: currentModule.id,
                courseId: currentCourse.id,
                questions: testAnswers.map(testAnswer => ({
                  id: testAnswer.questionId,
                  answerId: testAnswer?.answerId ?? null
                })),
                grade: correctQuestions / totalQuestions
              }
            ]
          }

          await setDoc(doc(usersRef, user.uid), newUserProgressData)
          // setUserProgressInfo(newUserProgressData as UserProgressInfo)
          fetchData()
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
      currentTest,
      submitTest
    }}>
      {children}
    </CourseContext.Provider>
  )
}