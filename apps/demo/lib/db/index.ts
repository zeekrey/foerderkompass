// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
import { env } from "@/lib/env";
import { drizzle } from 'drizzle-orm/neon-http';

// const client = postgres(env.DATABASE_URL);
// export const db = drizzle(client);

export const db = drizzle(env.DATABASE_URL);