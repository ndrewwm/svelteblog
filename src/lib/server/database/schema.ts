import { sql } from "drizzle-orm";
import { text, int, real, sqliteTable } from "drizzle-orm/sqlite-core";

export const fooTable = sqliteTable("foo", {
  bar: text("bar").notNull().default("Hey!"),
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
