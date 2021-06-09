import React from 'react'
import { SyntheticEvent, useState } from 'react'
import { Answers, Question } from '~/common/types'
import QuestionView from '~/components/question'
import Button from '~/components/button'
import Container from '~/components/container'
import { ButtonWrapper } from './styled'

type Props = {
  questions: readonly Question[]
  onSubmit: (answers: Answers) => void
}

const Personality = ({ questions, onSubmit }: Props) => {
  const [answers, setAnswers] = useState<Answers>({})
  const [index, setIndex] = useState(0)

  const handleOptionChange = (answerId: number) => {
    setAnswers({
      ...answers,
      [questions[index].id]: answerId,
    })
  }

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault()

    if (index === questions.length - 1) {
      onSubmit(answers)
    } else {
      setIndex(index + 1)
    }
  }

  const handlePrevious = () => {
    setIndex(index - 1)
  }

  return (
    <Container>
      <form onSubmit={handleNext}>
        <QuestionView
          question={questions[index]}
          onOptionChange={handleOptionChange}
          selectedOptionId={answers[questions[index].id]}
        />
        <ButtonWrapper>
          <Button type="button" onClick={handlePrevious} disabled={index === 0}>
            Previous
          </Button>
          <Button
            type="submit"
            onClick={handleNext}
            disabled={!answers[questions[index].id]}
          >
            {index === questions.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </ButtonWrapper>
      </form>
    </Container>
  )
}

export default Personality
