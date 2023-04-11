<script>
    export let title;
    export let src;
</script>

<div
	class="video-container p-4 md:p-3 lg:p-4 my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700"
>
	<div class="iframe-container">
		<iframe
			title={title}
			class="responsive-iframe"
			src={src}
			allowfullscreen="allowfullscreen" 
			allow="fullscreen"
		/>
	</div>
</div>

<style lang="postcss">
	.video-container {
		max-width: 1250px;
		margin-inline: auto;
	}
	.iframe-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	}

	/* Then style the iframe to fit in the container div with full height and width */
	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
