import { Run } from "../../Types";
import { useAppStore } from "../../shared/services";
import { useCallback } from "react";

interface Props {
  run: Run;
}

function RunListItem({ run }: Props) {
  const selectRun = useAppStore((state) => state.selectRun);
  const onClick = useCallback(() => {
    selectRun(run);
  }, [run, selectRun]);

  return (
    <li onClick={onClick} className="clickable">
      <h3>{run.name}</h3>
    </li>
  );
}

export default RunListItem;
