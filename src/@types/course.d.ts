interface Course {
  id: string
  name: string
  modules: Module[]
  img: string | StaticImageData
  isFinished: boolean
}

interface Module {
  classes: Class[]
  test: Test
  name: string
  description: string
}

interface Class {
  name: string
  type: "VIDEO" | "DOCUMENT"
  contentLink: string
}

interface Test {
  questions: Question[]
  grade: number | null
}

interface Question {
  text: string
  alternatives: Alternative[]
}

interface Alternative {
  text: string
  isCorrect: boolean
}