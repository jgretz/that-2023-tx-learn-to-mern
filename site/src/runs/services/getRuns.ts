import { http } from "../../shared/services";
import { Run } from "../../Types";

async function getRuns() {
  const response = await http.get<Run[]>("/strava/activities");
  return response.data;
}

export default getRuns;
