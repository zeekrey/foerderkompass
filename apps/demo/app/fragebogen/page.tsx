"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useReducer } from "react";
import { First, Result, Second, Third } from "./steps";
import { StepContext } from "./context";

// Define the base states
export const steps = [
  {
    template: First,
  },
  {
    template: Second,
  },
  {
    template: Third,
  },
  {
    template: Result,
  },
];

// Initial state object with additional properties
const initialState = {
  currentIndex: 0,
  state: {},
};

// Reducer function to handle state transitions with payloads
const reducer = (
  state: typeof initialState,
  action: { type: "next" | "previous" }
) => {
  switch (action.type) {
    case "next": {
      if (state.currentIndex >= steps.length - 1) return state; // No next step
      const nextIndex = state.currentIndex + 1;
      return {
        ...state,
        currentIndex: nextIndex,
      };
    }
    case "previous": {
      if (state.currentIndex <= 0) return state; // No previous step
      const prevIndex = state.currentIndex - 1;
      return {
        ...state,
        currentIndex: prevIndex,
      };
    }
    default:
      return state; // Return unchanged state for unknown actions
  }
};

export default function Chat() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentStep = steps[state.currentIndex];

  return (
    <div className="w-full p-4 space-y-3">
      <Alert className="bg-muted/50">
        <AlertTitle>Demo Hinweis</AlertTitle>
        <AlertDescription>
          <p>
            Zu Demonstrationszwecken wurden die Daten von dem
            <a
              className="mx-1 underline underline-offset-2"
              href="https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/foerdermittelfinder"
            >
              Fördermittelfinder der Stadt Leipzig
            </a>
            hinzugefügt. Der Fragenkatalog basiert auf einer initialen
            Kategorisierung die nachträglich angepasst werden kann.
          </p>
        </AlertDescription>
      </Alert>
      <div>
        {currentStep && (
          <StepContext.Provider value={{ state, dispatch }}>
            {<currentStep.template />}
          </StepContext.Provider>
        )}
      </div>
    </div>
  );
}
