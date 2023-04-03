<script>
	import { page } from '$app/stores';
    import { Button } from 'flowbite-svelte';

	// Dynamic PageNav
    function getAllCourseLink() {
		const modules = import.meta.glob("$materi/**");
        
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
			body.push({
				title: pathSanitized
			});
		}

        let linkArr = body.map(titles => titles.title);
		return linkArr;
	}

    const currentLink = $page.url.pathname
    const indexOfCurrentLink =  getAllCourseLink().indexOf(currentLink);

    function getNextLink() {
        const IndexOfNextLink = indexOfCurrentLink + 1
        return getAllCourseLink()[IndexOfNextLink]
    };

    function getPrevLink() {
        const IndexOfPrevLink = indexOfCurrentLink - 1
        return getAllCourseLink()[IndexOfPrevLink]
    }
</script>

<div class="flex justify-around">
	{#if getPrevLink() !== "/materi"}
	<Button
		href={getPrevLink()}
		class="bg-bsiyellow dark:bg-bsiyellow hover:bg-bsidyellow hover:dark:bg-bsidyellow"
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
		Materi Sebelumnya
	</Button>
	{/if}
	{#if getNextLink() !== undefined}
	<Button
		href={getNextLink()}
		class="bg-bsiyellow dark:bg-bsiyellow hover:bg-bsidyellow hover:dark:bg-bsidyellow"
	>
		Materi Selanjutnya
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
