interface Course {
  id: string
  name: string
  modules: Module[]
  img: string | StaticImageData
}

interface Module {
  id: string
  classes: Class[]
  test: Test
  name: string
  description: string
}

interface Class {
  id: string
  name: string
  type: "VIDEO" | "DOCUMENT"
  contentLink: string
}

interface Test {
  id: string
  questions: Question[]
}

interface Question {
  id: string
  text: string
  alternatives: Alternative[]
}

interface Alternative {
  id: string
  text: string
  isCorrect: boolean
}