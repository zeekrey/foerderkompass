"use server";

import {
  NewResourceParams,
  insertResourceSchema,
  resources,
} from "@/lib/db/schema/resources";
import { db } from "../db";
import { generateEmbeddings } from "../ai/embedding";
import { embeddings as embeddingsTable } from "../db/schema/embeddings";

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content, name } = insertResourceSchema.parse(input);

    const [resource] = await db
      .insert(resources)
      .values({ content, name })
      .returning();

    if (typeof resource === "undefined") throw Error();

    const embeddings = await generateEmbeddings(content);

    const startTimestamp = Date.now();
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      }))
    );
    console.log(
      `## Successfully stored embeddings (${Date.now() - startTimestamp}ms).`
    );

    return "Resource successfully created and embedded.";
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return e.message.length > 0 ? e.message : "Error, please try again.";
    }
  }
};
