import { sql } from "drizzle-orm";
import { text, int, real, sqliteTable } from "drizzle-orm/sqlite-core";

export const dimTrack = sqliteTable("dim_track", {
  track_id: text("track_id"),
  album_id: text("album_id"),
  track_name: text("track_name"),
  artists: text("artists"),
  duration_ms: int("duration_ms"),
});

export const fctTrackPlays = sqliteTable("fct_track_play", {
  play_id: text("play_id"),
  track_id: text("track_id"),
  album_id: text("album_id"),
  played_at: text("played_at"),
  played_at_mtn: text("played_at_mtn"),
  track_popularity: int("track_popularity"),
  context: text("context"),
});

export const rptTrackCounts = sqliteTable("rpt_track_counts", {
  track_name: text("track_name"),
  artists: text("artists"),
  album: text("album"),
  plays: int("plays"),
  minutes_played:  real("minutes_played"),
});

export const rptArtistCounts = sqliteTable("rpt_artist_counts", {
  artists: text("artists"),
  plays: int("plays"),
  minutes_played:  real("minutes_played"),
});

export const rptDiscoveryRate = sqliteTable("rpt_discovery_rate", {
  year_played: int("year_played"),
  week_played: int("week_played"),
  week_dt: text("week_dt"),
  plays: int("plays"),
  uniq_artists: int("uniq_artists"),
  uniq_tracks: int("uniq_tracks"),
  new_artists: int("new_artists"),
  new_tracks: int("new_tracks"),
  track_discovery_rate: real("track_discovery_rate"),
  artist_discovery_rate: real("artist_discovery_rate"),
});
