import { createGlobalStyle } from "styled-components";
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";
import "@fontsource/bebas-neue";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5D5FEF;
    --secondary-color: #EF5DA8;
    --second-primary: #42567A;
    --primary-font: 'PT Sans', sans-serif;
    --secondary-font: "Bebas Neue", sans-serif;
  }
  /* Сброс стилей */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: var(--primary-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     line-height: 1.4;
    letter-spacing: 0;
    background-color: #e5e5e5;
    color: var(--secondary-color);
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyle;
