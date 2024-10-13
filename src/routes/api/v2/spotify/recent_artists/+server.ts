import { mduck } from "$lib/server/database/getMdClient";
import { json } from "@sveltejs/kit";

export async function GET() {
  const query = `
    select
        artists,
        plays::Integer as plays,
        minutes_played
    from spotify.rpt_artist_counts
    order by plays desc
    limit 10;
  `;
  const rows = await mduck.all(query);
  return json(
    rows,
    { headers: { 'cache-control': 'public, max-age=7200' } },
  );
}
