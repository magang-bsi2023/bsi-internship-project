<script>
	import { page } from '$app/stores';
    import { Button } from 'flowbite-svelte';

	function getCurrentBook() {
		let currentBook = $page.url.pathname.split("/")
		return currentBook[2]
	};
	
	// Dynamic PageNav
    function getAllMateriLink() {
		let modules = import.meta.glob(`$buku/**`);
        
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
			body.push({
				link: pathSanitized
			});
		}
        let linkArr = body.map(links => links.link);
		return linkArr;
	}

	const currentBookMateri = getAllMateriLink().filter(function (str) { return str.includes(getCurrentBook()); })

    const currentLink = $page.url.pathname
    const indexOfCurrentLink =  currentBookMateri.indexOf(currentLink);

    function getNextLink() {
        const IndexOfNextLink = indexOfCurrentLink + 1
        return currentBookMateri[IndexOfNextLink]
    };

    function getPrevLink() {
        const IndexOfPrevLink = indexOfCurrentLink - 1
        return currentBookMateri[IndexOfPrevLink]
    }
</script>

<div class="flex justify-around">
	{#if getPrevLink() !== undefined}
	<Button
		href={getPrevLink()}
		class="bg-bsigreen dark:bg-bsigreen hover:bg-bsidgreen hover:dark:bg-bsidgreen"
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
		Sebelumnya
	</Button>
	{/if}
	{#if getNextLink() !== undefined}
	<Button
		href={getNextLink()}
		class="bg-bsigreen dark:bg-bsigreen hover:bg-bsidgreen hover:dark:bg-bsidgreen"
	>
		Selanjutnya
		<svg
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
	{/if}
</div>
