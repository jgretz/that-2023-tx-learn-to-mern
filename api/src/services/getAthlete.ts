import strava from './strava';

async function getAthlete() {
  const payload = await strava.athlete.get({});
  return payload;
}

export default getAthlete;
