import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.secundary};
    -webkit-font-smoothing: antialiased;
  }

  a, h1 {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    list-style: none;
  }

  input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
