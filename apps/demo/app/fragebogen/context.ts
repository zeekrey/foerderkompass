import { createContext } from "react";

type State = {
  currentIndex: number;
  state: {};
};

type Action = { type: "next" } | { type: "previous" };

export const StepContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);
