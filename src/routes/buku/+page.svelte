<script>
	import { Heading, A } from "flowbite-svelte";
	import { page } from '$app/stores';
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

	function getBuku() {
		const modules = import.meta.glob("$buku/*/+page.svelte");
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
			body.push({
				title: pathSanitized.replace("/buku/", "").replace(/-/g, " "),
				link: pathSanitized
			});
		}
		return body;
	}

</script>

<Breadcrumbs bcClass="mb-5"></Breadcrumbs>

<Heading>Kumpulan Buku</Heading>

{#each getBuku() as buku}
	<A href={buku.link}>{buku.title}</A>
{/each}