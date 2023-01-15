import strava from './strava';

async function getActivities() {
  const payload = await strava.athlete.listActivities({});
  return payload;
}

export default getActivities;
