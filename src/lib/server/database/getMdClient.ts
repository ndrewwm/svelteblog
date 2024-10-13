import { DB_MOTHERDUCK_TOKEN } from "$env/static/private";
import { Database } from "duckdb-async";

const mduck = await Database.create(`md:my_db?motherduck_token=${DB_MOTHERDUCK_TOKEN}`);
await mduck.exec(`
  set home_directory='/tmp';
`);

export { mduck };