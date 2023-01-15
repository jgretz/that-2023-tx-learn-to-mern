import strava from './strava';
import { StravaActivity } from '../../Types';

async function getActivities() {
  const payload = await strava.athlete.listActivities({});
  return payload as StravaActivity[];
}

export default getActivities;
