import { DB_MOTHERDUCK_TOKEN } from "$env/static/private";
import { Database } from "duckdb-async";

export const mduck = await Database.create(`md:my_db?motherduck_token=${DB_MOTHERDUCK_TOKEN}`);
