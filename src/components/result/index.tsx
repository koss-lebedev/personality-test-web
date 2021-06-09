import React from 'react'
import Link from 'next/link'
import Container from '~/components/container'
import Button from '~/components/button'
import { Content, Label } from './styled'

type Props = {
  result: string
}

const Result = ({ result }: Props) => (
  <Container>
    <Content>
      The results are in! Verdict:
      <Label>You are an {result}</Label>
      <Link href="/">
        <Button as="a">Back to homepage</Button>
      </Link>
    </Content>
  </Container>
)

export default Result
