<script>
	import Card from "../components/Card.svelte";

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Hello World</p>

<section>
	<p>Irteza</p>
	<p>Nazmus</p>
	<p>Hassan</p>
</section>

<Card word="Hello" phrase="Hello World" wordSummary="a greeting" phraseSummary="common programming tutorial" />


<style lang="scss">
	section {
		display: flex;
		border: 1px solid #ccc;
		margin: 1rem;
		p {
			padding: 1rem;
			border-right: 1px solid #ccc;
			flex: 1;
			text-align: center;
		}
	}
</style>
