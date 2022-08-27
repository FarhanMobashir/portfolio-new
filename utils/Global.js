import { createGlobalStyle } from "styled-components";
import { neutral } from "./colors";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  overflow: auto;
  width: 100%;
  color: ${(props) => props.theme.codeColor};
  background-color: ${neutral[300]};
  padding: 0.1rem;
  border-radius: 4px;
}

pre {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  overflow: auto;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${neutral[300]};
}

pre code {
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.codeColor};
  background-color: ${neutral[300]};
}

body {
  margin: 0 30%;
  padding: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}

a {
  color: ${(props) => props.theme.textColorLight};
  text-decoration: none;
}

li {
  margin: 1rem 0;
}


@media (max-width:800px) {
  body {
    margin: 0 4%;
  }   
}
`;
