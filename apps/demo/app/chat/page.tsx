"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useChat } from "@ai-sdk/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 3,
  });
  return (
    <div className="w-full p-4 space-y-3">
      <Alert className="bg-muted/50">
        <AlertTitle>Demo Hinweis</AlertTitle>
        <AlertDescription>
          <p>
            Zu Demonstrationszwecken wurde eine KI mit folgenden Fördermitteln
            trainiert: x, y, z. Sie ist so trainiert, dass nach Hinweisen in den
            genannten Fördermitteln sucht. Sie darf nicht im Internet suchen.
            Sollte sie nichts hilfreiches gefunden hat, antwortet sie mit:{" "}
            <b>Sorry, das weiß ich nicht.</b>
          </p>
        </AlertDescription>
      </Alert>
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl bg-white"
            value={input}
            placeholder="Fragen Sie mich ..."
            onChange={handleInputChange}
          />
        </form>
        <div className="space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className="whitespace-pre-wrap bg-muted/50 px-4 py-3 rounded-2xl"
            >
              <div>
                <div className="font-bold text-sm">{m.role}</div>
                <p>
                  {m.content.length > 0 ? (
                    m.content
                  ) : (
                    <span className="italic font-light">
                      {m.parts[0]?.type}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
