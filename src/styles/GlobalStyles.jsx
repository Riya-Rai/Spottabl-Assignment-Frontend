import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => `${props.theme.bgColor}`};
}

*,*:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
}

`;

export default GlobalStyles;
