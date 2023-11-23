interface UserProgressInfo {
  uid: string
  viewedClasses: ViewedClass[],
  finishedTests: FinishedTest[]
}

interface ViewedClass {
  id: number
  moduleId: number
  courseId: number
}

interface FinishedTest {
  id: number
  moduleId: number
  courseId: number
  question: AnsweredQuestion[]
}

interface AnsweredQuestion {
  id: number
  answerId: number
  isCorrect: boolean
}