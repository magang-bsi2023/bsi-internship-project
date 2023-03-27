<script>
    export let back
    export let next
    import { Button } from 'flowbite-svelte'
</script>

<div class="flex justify-around">
	<Button
		href={back}
		class="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 mr-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
			/>
		</svg>
		Kembali
	</Button>
	<Button
		href={next}
		class="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
	>
		Selanjutnya <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 ml-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
			/>
		</svg>
	</Button>
</div>
