import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: #00a0fe;
  color: white;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  display: inline-block;

  &:disabled {
    opacity: 0.5;
  }
`

export default Button
