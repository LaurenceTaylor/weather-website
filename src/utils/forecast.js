const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/39c03e04a336c535f15c16b2b00dee6a/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const currentData = body.currently;
      const dailyData = body.daily;
      const stringData = `${dailyData.data[0].summary} It is currently ${currentData.temperature} degrees out. There is a ${currentData.precipProbability}% chance of rain.`;
      callback(undefined, stringData);
    }
  });
};

module.exports = forecast;
