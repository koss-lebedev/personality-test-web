import React from 'react'
import { useEffect, useState } from 'react'
import { Answers, Question } from '~/common/types'
import api from '~/common/api'
import Questionnaire from '~/components/questionnaire'
import Result from '~/components/result'
import Container from '~/components/container'
import withLayout from '~/hocs/with-layout'

const PersonalityTest = () => {
  const [questions, setQuestions] = useState<readonly Question[] | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (answers: Answers) => {
    const data = await api.submitAnswers(answers)
    setResult(data)
  }

  useEffect(() => {
    api.getQuestions().then(data => {
      setQuestions(data)
    })
  }, [])

  if (result) {
    return <Result result={result} />
  }

  if (!questions) {
    return <Container>Loading...</Container>
  }

  return <Questionnaire questions={questions} onSubmit={handleSubmit} />
}

export default withLayout(PersonalityTest)
