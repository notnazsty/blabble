<script lang="ts">
	export let word;
	export let wordSummary;
	export let phrase;
	export let phraseSummary;
</script>

<div class="container">
	<div class="section">
		<p>{word}</p>
		<p class="summary">{wordSummary}</p>
	</div>
	<div class="section">
		<p>{phrase}</p>
		<p class="summary">{phraseSummary}</p>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		border: 4px solid whitesmoke;
		border-radius: 1rem;
		width: 16rem;
		height: 24rem;
		overflow: hidden;

		.section {
			align-self: center;
			text-align: center;
			padding: 1rem;
			margin: 0;
			height: 12rem;
			width: 14rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.25rem;

			&:first-child {
				background-color: whitesmoke;
			}

			&:last-child {
				background-color: #f2a7a7;
			}

			p {
                font-weight: 700;
                font-size: xx-large;
                margin: 0;

				&.summary {
					font-size: large;
					font-style: italic;
                    font-weight: 400;
                    
				}
			}
		}
	}
</style>
