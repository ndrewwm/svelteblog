import { db } from "$lib/server/database/getClient";
import { rptTrackCounts, fctTrackPlays } from "$lib/server/database/schema";
import { desc } from "drizzle-orm";

export async function load({ fetch }) {
  const artists = await fetch("/api/spotify/recent_artists");

  const popu = await db
    .select()
    .from(fctTrackPlays)
    .orderBy(desc(fctTrackPlays.played_at))
    .all();

  return {
    artists: await artists.json(),
    popularity: popu,
  };
}
