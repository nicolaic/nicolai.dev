<script>
    import { PUBLIC_WORKER_URL } from '$env/static/public';

    async function fetchHello() {
        const response = await fetch(`${PUBLIC_WORKER_URL}/hello`)
        const text = await response.text()

        console.log("Response from Worker: " + text)
    }
</script>

<h1>Welcome to {PUBLIC_WORKER_URL}</h1>
<button onclick={fetchHello}>Click me!!!</button>
