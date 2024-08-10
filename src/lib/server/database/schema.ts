import { sql } from "drizzle-orm";
import { text, int, real, sqliteTable } from "drizzle-orm/sqlite-core";

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
