"use client";

import { Button } from "@/components/ui/button";
import { StepContext } from "./context";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useContext } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

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

export function useStepContext() {
  const ctx = useContext(StepContext);

  if (ctx === undefined) {
    throw new Error("Step context is undefined.");
  }

  return ctx;
}

export function First() {
  const { state, dispatch } = useStepContext();

  const isFirstState = state.currentIndex === 0;
  const isLastState = state.currentIndex === steps.length - 1;

  return (
    <Card className="min-h-[300px] flex flex-col">
      <CardHeader>
        <CardTitle>1. Wann soll die Förderung beginnen?</CardTitle>
        <CardDescription>
          Es ist zunächst zu klären, wann die Förderung beginnen soll. Dies ist
          wichtig, um die Fristen und Bedingungen für die Beantragung der
          Fördermittel zu verstehen.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <RadioGroup defaultValue="now">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="now" id="now" />
            <Label htmlFor="now">Sofort</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="later" id="later" />
            <Label htmlFor="later">Später</Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => dispatch({ type: "previous" })}
          disabled={isFirstState}
        >
          Zurück
        </Button>
        <Button
          onClick={() => dispatch({ type: "next" })}
          disabled={isLastState}
        >
          Weiter
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Second() {
  const { state, dispatch } = useStepContext();

  const isFirstState = state.currentIndex === 0;
  const isLastState = state.currentIndex === steps.length - 1;

  return (
    <Card className="min-h-[300px] flex flex-col">
      <CardHeader>
        <CardTitle>2. Wo ist das Unternehmen/ der Verein ansässig?</CardTitle>
        <CardDescription>
          Geben Sie den Standort des Unternehmens oder Vereins an. Dies kann
          wichtig sein, da einige Förderprogramme regional begrenzt sind.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Select disabled={true} defaultValue="leipzig">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Stadt" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="leipzig">Leipzig</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => dispatch({ type: "previous" })}
          disabled={isFirstState}
        >
          Zurück
        </Button>
        <Button
          onClick={() => dispatch({ type: "next" })}
          disabled={isLastState}
        >
          Weiter
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Third() {
  const { state, dispatch } = useStepContext();

  const isFirstState = state.currentIndex === 0;
  const isLastState = state.currentIndex === steps.length - 1;

  return (
    <Card className="min-h-[300px] flex flex-col">
      <CardHeader>
        <CardTitle>
          3. Welchem Bereich ist das Unternehmen/ der Verein zuzuordnen?
        </CardTitle>
        <CardDescription>
          Geben Sie den Bereich an, dem das Unternehmen oder der Verein
          zuzuordnen ist. Dies kann wichtig sein, da einige Förderprogramme auf
          bestimmte Branchen oder Sektoren abzielen.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="flex items-center space-x-2">
          <Checkbox id="greentech" />
          <label
            htmlFor="greentech"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            GreenTech
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="logistik" />
          <label
            htmlFor="logistik"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Logistk
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="automotive" />
          <label
            htmlFor="automotive"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Automotive
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => dispatch({ type: "previous" })}
          disabled={isFirstState}
        >
          Zurück
        </Button>
        <Button
          onClick={() => dispatch({ type: "next" })}
          disabled={isLastState}
        >
          Weiter
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Result() {
  const { state, dispatch } = useStepContext();

  const isFirstState = state.currentIndex === 0;
  const isLastState = state.currentIndex === steps.length - 1;

  return (
    <Card className="min-h-[300px] flex flex-col">
      <CardHeader>
        <CardTitle>Ergebnis</CardTitle>
        <CardDescription>
          Auf Grundlage Ihrer Eingaben haben wir folgende Fördermöglichkeiten
          für Sie gefunden.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex gap-4">
        <div className="rounded-md border border-muted flex-1">
          <div className="p-4 bg-muted/50">
            <h2 className="text-lg font-bold">
              Fachförderrichtlinie Wirtschaftsförderung
            </h2>
            <p className="text-sm text-muted-foreground">
              Förderung klein und mittelständischer Unternehmen (KMU).
            </p>
          </div>
          <div className="flex border-t border-muted divide-x divide-muted">
            <div className="flex-1 flex justify-center items-center py-3">
              <Button variant="link">
                <a href="https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/foerdermittelfinder/detailansicht-foerdermittelfinder/projekt/fachfoerderrichtlinie-wirtschaftsfoerderung">
                  leipzig.de
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="rounded-md border border-muted flex-1">
          <div className="p-4 bg-muted/50">
            <h2 className="text-lg font-bold">
              Fachförderrichtlinie Beschäftigungsförderung
            </h2>
            <p className="text-sm text-muted-foreground">
              Förderfähig nach dieser Richtlinie sind Projekte, die für die...
            </p>
          </div>
          <div className="flex border-t border-muted divide-x divide-muted">
            <div className="flex-1 flex justify-center items-center py-3">
              <Button variant="link">
                <a href="https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/foerdermittelfinder/detailansicht-foerdermittelfinder/projekt/fachfoerderrichtlinie-beschaeftigungsfoerderung">
                  leipzig.de
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => dispatch({ type: "previous" })}
          disabled={isFirstState}
        >
          Zurück
        </Button>
        <Button
          onClick={() => dispatch({ type: "next" })}
          disabled={isLastState}
        >
          Weiter
        </Button>
      </CardFooter>
    </Card>
  );
}
