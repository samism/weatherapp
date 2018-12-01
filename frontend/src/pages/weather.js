import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import WeatherDataForm from '../components/WeatherDataForm';
import WeatherData from '../components/WeatherData';
import GoogleMap from '../components/GoogleMap';

const WeatherPageStyle = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  .visuals {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 0 2rem 0;

    @media screen and (max-width: 1000px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

class Weather extends Component {
  state = {
    data: null,
    center: null,
    error: null
  };

  findWeatherForZip = async event => {
    event.preventDefault();

    const { zip } = event.target;
    const url = `/api/weather/${zip.value}`;

    let weatherData = null;

    try {
      weatherData = await axios(url);
    } catch (e) {
      this.setState({ error: e });
    }
    if (weatherData) {
      const { coord } = weatherData.data.result;
      const coords = { lat: coord.lat, lng: coord.lon };

      this.setState({
        data: weatherData.data.result,
        center: coords
      });
    }
  };

  render() {
    return (
      <WeatherPageStyle>
        <section className="visuals">
          <GoogleMap center={this.state.center} />
          <WeatherData data={this.state.data} error={this.state.error} />
        </section>
        <WeatherDataForm findWeatherForZip={this.findWeatherForZip} />
      </WeatherPageStyle>
    );
  }
}

Weather.propTypes = {};

export default Weather;
