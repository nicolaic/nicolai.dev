<script>
	import {BASE_URL} from "$lib";

	async function fetchHello() {
		import.meta.env.DEV
		const response = await fetch(`${BASE_URL}/hello`)
		const text = await response.text()

		console.log("Response from Worker: " + text)
	}
</script>

<h1>Testing GitHub Actions</h1>
<button onclick={fetchHello}>Click me!!!</button>
