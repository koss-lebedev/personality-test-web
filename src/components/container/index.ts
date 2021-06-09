import styled from 'styled-components'
import mq from '~/styles/mq'

const Container = styled.section`
  margin: 0 auto;
  background: #fff;
  padding: 5rem;

  ${mq.medium} {
    margin: 2rem auto;
    border: 0.1rem solid #dde4e9;
    border-radius: 0.5rem;
    box-shadow: 0 0.3rem 0.8rem 0 rgba(0, 0, 0, 0.03);
    max-width: 60rem;
  }
`

export default Container
