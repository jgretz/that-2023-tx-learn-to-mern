// eslint-disable-next-line @typescript-eslint/no-var-requires
const strava = require('strava-v3');

strava.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN,
  client_id: process.env.STRAVA_CLIENT_ID,
  client_secret: process.env.STRAVA_CLIENT_SECRET,
  redirect_uri: '',
});

export default strava;
