export type QuestionOption = {
  id: number
  text: string
}

export type Question = {
  id: number
  text: string
  options: readonly QuestionOption[]
}

export type Answers = { [question: number]: number }
