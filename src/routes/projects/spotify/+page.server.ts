export async function load({ fetch }) {
  const artists = await fetch("/api/spotify/recent_artists");
  const popu = await fetch("/api/spotify/track_plays");
  const discovery = await fetch("/api/spotify/discovery_rate");

  return {
    artists: await artists.json(),
    popularity: await popu.json(),
    discovery: await discovery.json(),
  };
}
