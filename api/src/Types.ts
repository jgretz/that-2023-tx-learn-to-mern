import { ObjectId } from 'mongodb';

export type Run = {
  id: number;
  name: string;
  distance: number;
  time: number;
  heartrate: number;
  pace: number;
};

export type FavoriteRun = {
  id: ObjectId;
  runId: number;
  comment: string;
};

export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  average_heartrate: number;
}
