import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Weather from './pages/weather';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Arial';
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Weather />
      </React.Fragment>
    );
  }
}

export default App;
