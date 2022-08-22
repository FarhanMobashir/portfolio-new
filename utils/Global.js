import { createGlobalStyle } from "styled-components";
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
  color: ${(props) => props.theme.textColor};

}

pre {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  overflow: auto;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 1rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.textColor};
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

@media (max-width:800px) {
  body {
    margin: 0 4%;
  }   
}
`;
