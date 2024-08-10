import { db } from "$lib/server/database/getClient";
import { rptTrackCounts } from "$lib/server/database/schema";
import { json } from "@sveltejs/kit";
import { desc } from "drizzle-orm";

export async function GET() {
  const rows = await db
    .select()
    .from(rptTrackCounts)
    .orderBy(desc(rptTrackCounts.plays))
    .limit(10)
    .all();

  return json(rows);
}
