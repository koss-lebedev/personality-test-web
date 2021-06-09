import { mockQuestions } from '~/common/data'
import { Answers } from '~/common/types'

const getQuestions = async () => {
  await new Promise(r => setTimeout(r, 1000))
  return mockQuestions
}

const submitAnswers = async (answers: Answers) => {
  // very sophisticated personality analysis
  const x = Object.values(answers).reduce((agg, i) => agg + i, 0) % 2
  return Promise.resolve(x === 0 ? 'introvert' : 'extrovert')
}

export default {
  getQuestions,
  submitAnswers,
}
