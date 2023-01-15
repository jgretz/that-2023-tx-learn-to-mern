import { Run } from "../Types";

interface Props {
  run: Run;
}

function RunDetail({ run }: Props) {
  return (
    <li key={run.id}>
      <h1>Name: {run.name}</h1>
      <p>Distance: {run.distance}</p>
      <p>Time: {run.time}</p>
    </li>
  );
}

export default RunDetail;
