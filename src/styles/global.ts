import { createGlobalStyle } from 'styled-components'
import mq from '~/styles/mq'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased; /* stylelint-disable-line property-no-unknown */
  }

  body {
    font-size: 1.6rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  ${mq.medium} {
    body {
      background: #f6f9fb;
    }
  }
`

export default GlobalStyle
