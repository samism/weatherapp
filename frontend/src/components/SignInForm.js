import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormStyles = styled.main`
  form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    input {
      font-size: 2rem;
      margin-bottom: 1rem;
      padding: 1rem;
      border: 2px solid #f4424e;
    }
    button {
      width: 150px;
      height: 35px;
      border-radius: 5px;
      border: 0;
      background: #f4f4f4;
      margin: 0 auto;
      font-weight: bold;
      background-color: #f4424e;
      color: #1d1f21;
      font-size: 2rem;
    }
  }
`;

const SignInForm = ({ signIn }) => {
  return (
    <FormStyles>
      <form
        method="POST"
        onSubmit={event => {
          signIn(event);
        }}
      >
        <input name="email" placeholder="Email" type="text" required />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </FormStyles>
  );
};

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default SignInForm;
