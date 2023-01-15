import { useQuery } from "react-query";
import { RUNS } from "../constants";
import { getRuns } from "../services";

import RunListItem from "./RunListItem";

function RunList() {
  const result = useQuery(RUNS, getRuns);

  if (!result.data) {
    return null;
  }

  return (
    <ul>
      {result.data.map((r) => (
        <RunListItem key={r.id} run={r} />
      ))}
    </ul>
  );
}

export default RunList;
