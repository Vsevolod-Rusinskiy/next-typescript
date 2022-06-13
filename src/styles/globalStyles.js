import styled, {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    /* background-color: #1A202C; */
    font-family: 'Roboto', sans-serif;
    letter-spacing: .6px;
  }
`