import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route, Redirect } from 'react-router';

import { Auth } from './firebase';

import Weather from './pages/weather';
import Graph from './pages/historical';
import SignIn from './pages/auth';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
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

const PageStyle = styled.section`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }

  state = {
    user: undefined,
    redirectToReferrer: false
  };

  render() {
    // if (this.state.user === undefined) return <h2>Loading...</h2>;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header isAuthenticated={!!this.state.user} />
        <PageStyle>
          <Switch>
            <PrivateRoute
              exact
              path="/weather"
              component={Weather}
              isAuthenticated={!!this.state.user}
            />
            <PrivateRoute
              exact
              path="/historical"
              component={Graph}
              isAuthenticated={!!this.state.user}
            />
            <PrivateRoute
              exact
              path="/"
              component={Weather}
              isAuthenticated={!!this.state.user}
            />
            <Route
              exact
              path="/signin"
              render={props => (
                <SignIn {...props} isAuthenticated={!!this.state.user} />
              )}
            />
          </Switch>
        </PageStyle>
      </React.Fragment>
    );
  }
}

export default App;
