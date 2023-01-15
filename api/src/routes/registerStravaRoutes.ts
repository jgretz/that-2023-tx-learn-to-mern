import { Express, Request, Response } from 'express';
import { getActivities } from '../services/strava';
import { mapStravaActivityToRun } from '../services/helpers';

async function Get(req: Request, res: Response) {
  const stravaActivities = await getActivities();
  const activities = stravaActivities.map(mapStravaActivityToRun);

  res.send(activities).status(200);
}

function registerStravaRoutes(app: Express) {
  app.get('/strava/activities', Get);
}

export default registerStravaRoutes;
