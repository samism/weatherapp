const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 *  Route of the format /weater/zip/{60076}
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
    weatherData = await axios(url);
  } catch (e) {
    return res
      .status(500)
      .json({ error: 'Request to Open Weather API failed.' });
  }
  return res.status(200).json({ result: weatherData.data });
});

module.exports = router;
