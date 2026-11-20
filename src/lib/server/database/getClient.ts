import { DB_SPOTIFY_TURSO_AUTH_TOKEN, DB_SPOTIFY_TURSO_DATABASE_URL } from "$app/env/private";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const turso = createClient({
  url: DB_SPOTIFY_TURSO_DATABASE_URL,
  authToken: DB_SPOTIFY_TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
