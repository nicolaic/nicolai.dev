// place files you want to import through the `$lib` alias in this folder.

export const BASE_URL =
	import.meta.env.DEV ? "http://localhost:8787/api" : "/api"
