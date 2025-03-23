"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { createResource } from "@/lib/actions/resources";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2),
  text: z.string().min(2),
});

export default function Chat() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    startTransition(async () => {
      await createResource({ name: values.name, content: values.text });
    });
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name der Förderrichtlinie</FormLabel>
                <FormControl>
                  <Input placeholder="Sportförderrichtlinie" {...field} />
                </FormControl>
                <FormDescription>
                  Das ist der Name, der später mit den eingegebenen
                  Informationen assoziiert wird.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inhalt</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Text der Förderrichtlinie"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Text der Förderrichtlinie.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending && <LoaderCircle className="animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
