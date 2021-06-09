import React from 'react'
import { Question } from '~/common/types'
import { Wrapper, Text, Option } from './styled'

type Props = {
  question: Question
  onOptionChange: (optionId: number) => void
  selectedOptionId?: number
}

const QuestionView = ({
  question,
  onOptionChange,
  selectedOptionId,
}: Props) => {
  return (
    <Wrapper>
      <Text>{question.text}</Text>
      {question.options.map(option => (
        <Option key={option.id}>
          <input
            type="radio"
            value={option.id}
            onChange={() => onOptionChange(option.id)}
            checked={selectedOptionId === option.id}
            id={`${option.id}`}
          />{' '}
          <label htmlFor={`${option.id}`}>{option.text}</label>
        </Option>
      ))}
    </Wrapper>
  )
}

export default QuestionView
