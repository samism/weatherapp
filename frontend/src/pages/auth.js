import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import { Auth } from '../firebase';
import SignInForm from '../components/SignInForm';
import SignInError from '../components/SignInError';

const AuthStyles = styled.div`
  text-align: center;
`;

class SignIn extends Component {
  state = {
    error: null,
    redirectToReferrer: false
  };

  signIn = event => {
    event.preventDefault();

    const { email, password } = event.target;

    return Auth.signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    return this.state.redirectToReferrer || this.props.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <AuthStyles>
        <h2>Please sign in to view this page.</h2>
        <SignInForm signIn={this.signIn} />
        <SignInError error={this.state.error} />
      </AuthStyles>
    );
  }
}

export default SignIn;
