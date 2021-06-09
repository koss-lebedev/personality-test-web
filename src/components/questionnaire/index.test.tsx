import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { mockQuestions } from '~/common/data'
import Questionnaire from '.'

test('submits the answers at the end', () => {
  const handleSubmit = jest.fn()
  render(<Questionnaire questions={mockQuestions} onSubmit={handleSubmit} />)

  fireEvent.click(screen.getByText(/don’t dare to interrupt them/i))
  fireEvent.click(screen.getByText(/next/i))
  fireEvent.click(screen.getByText(/look at your watch every two minutes/i))
  fireEvent.click(screen.getByText(/next/i))
  fireEvent.click(screen.getByText(/continuously interrupt your colleague/i))
  fireEvent.click(screen.getByText(/submit/i))

  expect(handleSubmit.mock.calls.length).toEqual(1)
})

test('cannot proceed until the question is answered', () => {
  const handleSubmit = jest.fn()
  render(<Questionnaire questions={mockQuestions} onSubmit={handleSubmit} />)

  const nextButton = screen.getByText(/next/i) as HTMLButtonElement

  expect(nextButton.disabled).toEqual(true)
})

test('can return to a previous question', () => {
  const handleSubmit = jest.fn()
  render(<Questionnaire questions={mockQuestions} onSubmit={handleSubmit} />)

  fireEvent.click(screen.getByText(/don’t dare to interrupt them/i))
  fireEvent.click(screen.getByText(/next/i))

  const previousButton = screen.getByText(/previous/i) as HTMLButtonElement

  expect(previousButton.disabled).toEqual(false)
})
