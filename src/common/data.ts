import { Question } from '~/common/types'

export const mockQuestions = [
  {
    id: 1,
    text: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    options: [
      {
        id: 1,
        text: 'Don’t dare to interrupt them',
      },
      {
        id: 2,
        text: 'Think it’s more important to give them some of your time; work can wait',
      },
      {
        id: 3,
        text: 'Listen, but with only with half an ear',
      },
      {
        id: 4,
        text: 'Interrupt and explain that you are really busy at the moment',
      },
    ],
  },
  {
    id: 2,
    text: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        id: 5,
        text: 'Look at your watch every two minutes',
      },
      {
        id: 6,
        text: 'Bubble with inner anger, but keep quiet',
      },
      {
        id: 7,
        text: 'Explain to other equally impatient people in the room that the doctor is always running late',
      },
      {
        id: 8,
        text: 'Complain in a loud voice, while tapping your foot impatiently',
      },
    ],
  },
  {
    id: 3,
    text: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    options: [
      {
        id: 9,
        text: 'Don’t dare contradict them',
      },
      {
        id: 10,
        text: 'Think that they are obviously right',
      },
      {
        id: 11,
        text: 'Defend your own point of view, tooth and nail',
      },
      {
        id: 12,
        text: 'Continuously interrupt your colleague',
      },
    ],
  },
] as readonly Question[]
