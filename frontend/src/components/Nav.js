import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled(Link)`
  display: block;
  padding: 10px 30px;
  transition: all 0.5s ease-in;
  font-weight: bold;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    font-style: italic;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.8);
    color: #1d1f21;
  }
`;

const NavStyles = styled.nav`
  ul {
    margin: 0;
    font-size: 2.5rem;
    list-style-type: none;
    display: flex;
    li {
      height: 100%;
      line-height: 100px;
      border-left: 1px inset gray;
    }
  }
`;

const Nav = props => {
  return (
    <NavStyles>
      <ul>
        <li>
          <NavItem to="/weather">Weather</NavItem>
        </li>
        <li>
          <NavItem to="/historical">Historical</NavItem>
        </li>
      </ul>
    </NavStyles>
  );
};

Nav.propTypes = {};

export default Nav;
