interface AnsweredTest {
  userId: number,
  id: number,
  questions: AnsweredTestQuestion[]
}

interface AnsweredTestQuestion {
  id: number
  text: string
  alternatives: Alternative[]
  correctAlternativeId: number
  selectedAlternativeId: number
}