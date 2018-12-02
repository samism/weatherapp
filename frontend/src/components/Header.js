import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Emoji from '../components/Emoji';
import Nav from '../components/Nav';

const HeaderStyles = styled.header`
  height: 100%;
  border-top: 5px dashed #c5c8c6;
  background-color: #f4424e;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .headerTextWrapper {
    padding: 10px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    h1 {
      font-size: 3rem;
      text-align: center;
      color: #1d1f21;
      padding: 10px 15px;
      margin: 10px 0 10px 0;
      background-color: rgba(197, 200, 198, 0.8);
      -webkit-transform: skew(-5deg) rotate(-1deg);
      -ms-transform: skew(-5deg) rotate(-1deg);
      transform: skew(-5deg) rotate(-1deg);
      display: inline-block;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

      @media screen and (max-width: 720px) {
        font-size: 3vw;
      }
    }
  }
`;

const Header = ({ isAuthenticated }) => {
  return (
    <HeaderStyles>
      <div className="headerTextWrapper">
        <h1>
          <Emoji>️🌦</Emoji>
          &nbsp;Weather Tracker&nbsp;
          <Emoji>️🌦</Emoji>
        </h1>
      </div>
      <Nav isAuthenticated={isAuthenticated} />
    </HeaderStyles>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default Header;
