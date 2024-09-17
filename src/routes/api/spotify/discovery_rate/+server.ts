import { db } from "$lib/server/database/getClient";
import { rptDiscoveryRate } from "$lib/server/database/schema";
import { json } from "@sveltejs/kit";
import { desc } from "drizzle-orm";

export async function GET() {
  const rows = await db
    .select()
    .from(rptDiscoveryRate)
    .orderBy(desc(rptDiscoveryRate.year_played), desc(rptDiscoveryRate.week_played))
    // .limit(10)
    .all();

  return json(
    rows, 
    { headers: { 'cache-control': 'public, max-age=7200' } }
  );
}