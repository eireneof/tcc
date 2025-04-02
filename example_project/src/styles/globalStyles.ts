import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

      &:focus {
      outline: 3px solid #FFFF00;
      outline-offset: 2px;
    }
    
  body {
    background: ${({ theme }) => theme.colors.secondary_100};
    color: ${({ theme }) => theme.colors.secondary_200};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  body html #root {
    height: 100%;
  }

  h1, h2, h3 {
    margin: 0;
  }
  a {
    all: unset;
    text-decoration: none;
  }
`

export default GlobalStyles
