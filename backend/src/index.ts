/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('Hello World!');
// 	},
// } satisfies ExportedHandler<Env>;

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { env } from 'cloudflare:workers';

const app = new Hono();

if (env.ENVIRONMENT === 'dev') {
	app.use(cors({ origin: '*' }));
}

app.get('/api/hello', (ctx) => {
	return ctx.text('Hello Turborepo caching in GitHub Actions!');
});

export default <ExportedHandler>{
	fetch: app.fetch,
};
