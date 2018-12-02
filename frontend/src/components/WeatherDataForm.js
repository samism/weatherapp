import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormStyles = styled.main`
  form {
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
    input {
      width: 20vw;
      min-width: 100px;
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
      font-weight: bold;
      background-color: #f4424e;
      color: #1d1f21;
      font-size: 2rem;
    }
  }
`;

const WeatherDataForm = ({ findWeatherForZip }) => {
  return (
    <FormStyles>
      <form
        method="POST"
        onSubmit={event => {
          findWeatherForZip(event);
        }}
      >
        <input name="zip" placeholder="Zip Code" type="text" required />
        <button type="submit">Look Up</button>
      </form>
    </FormStyles>
  );
};

WeatherDataForm.propTypes = {
  findWeatherForZip: PropTypes.func
};

export default WeatherDataForm;
