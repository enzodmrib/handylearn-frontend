interface Course {
  id: number
  code: string
  name: string
  modules: Module[]
  img: string | StaticImageData

}

interface Module {
  id: number
  classes: Class[]
  test: Test
  name: string
  description: string
}

interface Class {
  id: number
  name: string
  type: "VIDEO" | "DOCUMENT" | "TEST"
  contentLink: string
  videoId?: string
}

interface Test {
  id: number
  questions: Question[]
}

interface Question {
  id: number
  text: string
  alternatives: Alternative[]
  correctAlternativeId: number
}

interface Alternative {
  id: number
  text: string
}