import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ children }) => {
  return (
    <span role="img" aria-label="Weather">
      {children}
    </span>
  );
};

Emoji.propTypes = {
  children: PropTypes.string.isRequired
};

export default Emoji;
