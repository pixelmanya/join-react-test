import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const BaseStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: Inter, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 100%;
    line-height: 24px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`
