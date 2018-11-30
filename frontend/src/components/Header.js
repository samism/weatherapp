import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Emoji from '../components/Emoji';

const HeaderStyles = styled.header`
  height: 100%;
  border-top: 5px dashed #c5c8c6;
  background-color: #f4424e;
  text-align: center;
  padding: 10px;
  h1 {
    font-size: 3rem;
    text-align: center;
    color: #1d1f21;
    padding: 10px 15px;
    margin: 10px 0 10px 0;
    background-color: rgba(197, 200, 198, 0.8);
    transform: skew(-5deg) rotate(-1deg);
    display: inline-block;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Header = props => {
  return (
    <HeaderStyles>
      <h1>
        <Emoji>️🌦</Emoji>
        &nbsp;Weather Tracker&nbsp;
        <Emoji>️🌦</Emoji>
      </h1>
    </HeaderStyles>
  );
};

Header.propTypes = {};

export default Header;