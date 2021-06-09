import React from 'react'
import Link from 'next/link'
import Button from '~/components/button'
import withLayout from '~/hocs/with-layout'
import { Title, Wrapper, Image } from './styled'

const Homepage = () => {
  return (
    <Wrapper>
      <Title>
        Did you know that despite the complex nature of human behavior, everyone
        can be classified into one of two categories? Find out which one you
        belong to!
      </Title>
      <Link href="/personality-test">
        <Button as="a">Start test</Button>
      </Link>
      <Image src="/banner.jpg" alt="Introvert vs extrovert" />
    </Wrapper>
  )
}

export default withLayout(Homepage)
