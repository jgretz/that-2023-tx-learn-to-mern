export type Run = {
  id: number;
  name: string;
  distance: number;
  time: number;
  heartrate: number;
  pace: number;
};

export type FavoriteRun = {
  id: string;
  runId: number;
  comment: string;
};

export type AppState = {
  selectedRun?: Run;
  selectRun: (run?: Run) => void;
};
