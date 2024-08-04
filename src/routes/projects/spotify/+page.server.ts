import { db } from "$lib/server/database/getClient";
import { rptTrackCounts } from "$lib/server/database/schema";
import { desc } from "drizzle-orm";

export async function load() {
  const rows = await db
    .select()
    .from(rptTrackCounts)
    .orderBy(desc(rptTrackCounts.plays))
    .all();

  return { rows };
}
