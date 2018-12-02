const express = require('express');
const axios = require('axios');

const WeatherData = require('../models/weatherdata');
const Email = require('../models/email');

const router = express.Router();

const round = num => Math.round(num * 100) / 100;

/**
 *  Route of the format /weather/history
 *
 *  Returns all of the Open Weather Map API data for the last 6 lookups.
 *
 */
router.get('/weather/history', async (req, res, next) => {
  try {
    const weatherData = await WeatherData.find({})
      .sort('-updatedAt')
      .limit(6);
    if (weatherData) {
      //format nicely to immediately work & feed into the chart component
      const nicelyFormattedData = weatherData.map(entry => {
        const { temp } = entry.data.main;
        return {
          city: entry.data.name,
          kelvin: temp,
          celcius: round(temp - 273.15),
          fahrenheight: round(temp * 1.8 - 459.67)
        };
      });
      return res.status(200).json({ nicelyFormattedData });
    }
  } catch (e) {
    console.log('Could not retrieve saved weather data from Mongo: ', e);
    return res
      .status(500)
      .json({ error: 'Failed to retrieve last 6 historical entries.' });
  }
});

/**
 *  Route of the format /weather/zip/{60076}
 *
 *  Takes a valid zip code and returns all of the Open Weather Map API data for the last 10 minutes.
 *
 */
router.get('/weather/:zip', async (req, res, next) => {
  const { zip } = req.params;

  //only accepts numeric 5 digit string
  if (!zip || zip.length !== 5 || !/^\d+$/.test(zip)) {
    return res.status(400).json({ error: 'Invalid ZIP' });
  }

  const url = `http://api.openweathermap.org/data/2.5/weather?appid=${
    process.env.OPEN_WEATHER_KEY
  }&zip=${zip}`;

  let weatherData = null;

  try {
    weatherData = (await axios(url)).data;
  } catch (e) {
    console.log('Call to Open Weather API failed: ', e); //log stack trace internally only
    return res
      .status(500)
      .json({ error: 'Request to Open Weather API failed.' }); //generic error to public
  }

  const newData = new WeatherData({ data: weatherData });
  newData.save(err => {
    if (err) {
      console.log('Problem saving weather data: ', err);
      res
        .status(500)
        .json({ error: 'Failed to save weather data to database.' });
    }

    return res.status(200).json({ result: weatherData });
  });
});

/**
 *  Route of the format /weather/mailinglist
 *
 *  Takes a valid email and saves it to the emails collection.
 *
 */
router.post('/weather/mailinglist', async (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //only accepts valid email
  if (!emailRegex.test(String(email).toLowerCase())) {
    return res.status(400).json({ error: 'Invalid Email' });
  }

  const newData = new Email({ email: email });
  newData.save(err => {
    if (err) {
      console.log('Problem saving email: ', err);
      res.status(500).json({ error: 'Failed to save email to database.' });
    }

    return res.status(200).json({ result: 'Successfully saved email' });
  });
});

module.exports = router;
