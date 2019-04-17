import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import RootNode from "./containers/RootNode";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    p {
      margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

const theme = {};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <RootNode />
      </>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
