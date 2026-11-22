import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DB_SPOTIFY_TURSO_AUTH_TOKEN: { static: true },
	DB_SPOTIFY_TURSO_DATABASE_URL: { static: true }
});
