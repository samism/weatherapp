import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WeatherDataStyle = styled.aside`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 5px dashed #c5c8c6;
  width: 100%;
  margin-left: 20px;
  padding: 20px;
  min-height: 100%;

  h1 {
    font-size: 5rem;
  }

  .heading {
    text-decoration: underline;
  }

  .temp {
    margin: 0;
    text-align: right;
  }

  .cityName {
    color: #f4424e;
  }

  @media screen and (max-width: 1000px) {
    margin: 20px 0 0 0;
  }
`;

const round = num => Math.round(num * 100) / 100;

const WeatherData = ({ data, error }) => {
  const { temp } = (data && data.main) || { temp: 0 };

  let content = null;

  if (error || !data) {
    content = <h1>Search your ZIP!</h1>;
  }

  if (data) {
    content = (
      <div>
        <h1 className="temp">{round(temp)} &#x000B0;Kelvin</h1>
        <h1 className="temp">{round(temp - 273.15)} &#x000B0;Celsius</h1>
        <h1 className="temp">
          {round(temp * 1.8 - 459.67)} &#x000B0;Fahrenheight
        </h1>
      </div>
    );
  }
  return (
    <WeatherDataStyle>
      <h1 className="heading">
        Weather Data
        {data && ': '}
        <span className="cityName">{data && `${data.name}`}</span>
        {data &&
          data.weather.map(icon => (
            <span className="cityName">
              <img
                src={`http://openweathermap.org/img/w/${icon.icon}.png`}
                alt={icon.icon}
              />
            </span>
          ))}
      </h1>
      {content}
    </WeatherDataStyle>
  );
};

WeatherData.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object
};

export default WeatherData;
