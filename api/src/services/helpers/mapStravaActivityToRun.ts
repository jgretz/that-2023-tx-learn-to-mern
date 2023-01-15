import { StravaActivity } from '../../Types';

const MILE_PER_METER = 0.000621371;

function mapStravaActivityToRun(stravaActivity: StravaActivity) {
  const minutes = stravaActivity.moving_time / 60;
  const distance = stravaActivity.distance * MILE_PER_METER; // meters
  const pace = minutes / distance;

  return {
    id: stravaActivity.id,
    name: stravaActivity.name,
    distance,
    time: stravaActivity.moving_time, // seconds
    heartrate: stravaActivity.average_heartrate,
    pace,
  };
}

export default mapStravaActivityToRun;
