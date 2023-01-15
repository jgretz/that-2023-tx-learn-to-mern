import { Run } from "../Types";
import RunDetail from "./RunDetail";

const runs = [
  {
    id: 1,
    name: "Run 1",
    distance: 1,
    time: 1,
    heartrate: 1,
    speed: 1,
  },
  {
    id: 2,
    name: "Run 2",
    distance: 2,
    time: 2,
    heartrate: 2,
    speed: 2,
  },
  {
    id: 3,
    name: "Run 3",
    distance: 3,
    time: 3,
    heartrate: 3,
    speed: 3,
  },
] as Run[];

function RunList() {
  return (
    <ul>
      {runs.map((r) => (
        <RunDetail run={r} />
      ))}
    </ul>
  );
}

export default RunList;
