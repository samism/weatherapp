import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherDataStyle = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px dashed #c5c8c6;
  width: 100%;
  margin-left: 20px;
  padding: 20px;
  min-height: 100%;

  @media screen and (max-width: 1000px) {
    margin: 20px 0 0 0;
  }
`;

const WeatherData = ({ data, error }) => {
  let content = null;

  if (error || !data) {
    content = <h1>Search your ZIP!</h1>;
  }

  if (data) {
    content = <div>{data.main.temp} kelvin</div>;
  }
  return <WeatherDataStyle>{content}</WeatherDataStyle>;
};

WeatherData.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object
};

export default WeatherData;
