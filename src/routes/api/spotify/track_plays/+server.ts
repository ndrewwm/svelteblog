import { db } from "$lib/server/database/getClient";
import { fctTrackPlays, dimTrack } from "$lib/server/database/schema";
import { json } from "@sveltejs/kit";
import { desc, eq } from "drizzle-orm";

export async function GET() {
  const rows = await db
    .select({
      track_id: fctTrackPlays.track_id,
      played_at: fctTrackPlays.played_at,
      played_at_mtn: fctTrackPlays.played_at_mtn,
      track_popularity: fctTrackPlays.track_popularity,
      context: fctTrackPlays.context,
      track_name: dimTrack.track_name,
      artists: dimTrack.artists,
      duration_ms: dimTrack.duration_ms,
    })
    .from(fctTrackPlays)
    .leftJoin(dimTrack, eq(fctTrackPlays.track_id, dimTrack.track_id))
    .orderBy(desc(fctTrackPlays.played_at))
    .all();

  return json(
    rows,
    { headers: { 'cache-control': 'public, max-age=7200' } }
  );
}
