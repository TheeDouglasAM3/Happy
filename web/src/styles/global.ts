import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundBehindContent};
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  a { 
    text-decoration: none;
  }

  .switch-theme {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 15;
  }
`