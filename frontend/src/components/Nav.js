import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Auth } from '../firebase';

const sharedNavStyle = css`
  display: block;
  padding: 10px 30px;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  font-weight: bold;
  word-wrap: break-word;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    font-style: italic;
    cursor: pointer;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.8);
    color: #1d1f21;
  }

  @media screen and (max-width: 700px) {
    padding: 10px 5px;
    font-size: 20px;
  }
`;

const NavItem = styled(Link)`
  ${sharedNavStyle}
`;
const SignOutItem = styled.a`
  ${sharedNavStyle}

  @media screen and (max-width: 700px) {
    padding: 10px 5px;
    margin: 0;
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;

const NavStyles = styled.nav`
  ul {
    margin: 0;
    font-size: 1.5vw;
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    li {
      height: 100%;
      line-height: 100px;
      border-left: 1px inset gray;
    }
  }
`;

const Nav = ({ isAuthenticated }) => {
  const signOut = () => {
    return Auth.signOut();
  };

  return (
    <NavStyles>
      <ul>
        <li>
          <NavItem to="/weather">Weather</NavItem>
        </li>
        <li>
          <NavItem to="/historical">Historical</NavItem>
        </li>
        {isAuthenticated && (
          <li>
            <SignOutItem onClick={signOut}>Sign Out</SignOutItem>
          </li>
        )}
      </ul>
    </NavStyles>
  );
};

Nav.propTypes = {};

export default Nav;
