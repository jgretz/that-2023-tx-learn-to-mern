import { create } from "zustand";
import { AppState, Run } from "../../Types";

const useAppStore = create<AppState>((set) => ({
  selectRun: (run?: Run) =>
    set((state: AppState) => {
      return { selectedRun: run };
    }),
}));

export default useAppStore;
