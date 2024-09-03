export async function load({ fetch }) {
  const artists = await fetch("/api/spotify/recent_artists");
  const popu = await fetch("/api/spotify/track_plays");

  return {
    artists: await artists.json(),
    popularity: await popu.json(),
  };
}
