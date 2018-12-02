import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const GoogleMapStyle = styled.section`
  height: 65vh;
  width: 35vw;

  @media screen and (max-width: 1000px) {
    height: 30vh;
    width: 100%;
  }
`;

const GoogleMap = ({ center }) => {
  return (
    <GoogleMapStyle>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyC0zV7R1ulzyKd0-pERkSPZtFBUFP399MQ', //browser key - ok to expose
          language: 'en'
        }}
        defaultCenter={{ lat: 41.89, lng: -87.62 }}
        center={center}
        defaultZoom={15}
      />
    </GoogleMapStyle>
  );
};

GoogleMap.propTypes = {
  center: PropTypes.object
};

export default GoogleMap;
