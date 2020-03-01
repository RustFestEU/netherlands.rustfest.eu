import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
  }
  
  *, *:before, *:after {
      box-sizing: inherit;
  }
  
  body {
      font-family: "Proxima Nova","Helvetica Neue","Helvetica","Arial",sans-serif;
      /*background-color: rgba(200, 216, 217, 0.3);*/
      color: rgb(10, 20, 30);
      margin: 0;
  }
`;

export default GlobalStyle;
