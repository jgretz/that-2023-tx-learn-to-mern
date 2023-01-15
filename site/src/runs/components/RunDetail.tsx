import { AppState } from "../../Types";
import { useAppStore } from "../../shared/services";

function RunDetail() {
  const run = useAppStore((state: AppState) => state.selectedRun);
  if (!run) {
    return null;
  }

  return (
    <div>
      <h1>Name: {run.name}</h1>
      <p>Distance: {run.distance}</p>
      <p>Time: {run.time}</p>
    </div>
  );
}

export default RunDetail;
