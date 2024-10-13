import { mduck } from "$lib/server/database/getMdClient";
import { json } from "@sveltejs/kit";

export async function GET() {
  const query = `
    select
        ftp.track_id,
        ftp.played_at,
        ftp.played_at_mtn,
        ftp.track_popularity::Integer as track_popularity,
        ftp.context,
        dt.track_name,
        dt.artists,
        dt.duration_ms
    from spotify.fct_played_track ftp
    left join spotify.dim_track dt
        on ftp.track_id = dt.track_id
    order by ftp.played_at desc
  `;
  const rows = await mduck.all(query);
  return json(
    rows,
    { headers: { 'cache-control': 'public, max-age=7200' } },
  )
}
