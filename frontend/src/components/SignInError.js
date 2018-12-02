import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Emoji from './Emoji';

const SignInErrorStyle = styled.section`
  margin-top: 50px;
  font-size: 2.5rem;
  color: black;
`;

const SignInError = ({ error }) =>
  error ? (
    <SignInErrorStyle>
      <Emoji>❌</Emoji>&nbsp;&nbsp;
      {error.message} Try again!
    </SignInErrorStyle>
  ) : null;

SignInError.propTypes = {
  error: PropTypes.object
};

export default SignInError;
