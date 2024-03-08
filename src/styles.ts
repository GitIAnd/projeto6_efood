import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  bege: '#FFF8F2',
  rosa: '#FFEBD9',
  branca: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

  }

  body {
    background-color: ${cores.bege};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
