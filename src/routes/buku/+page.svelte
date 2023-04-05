<script>
	import { Heading, Card, P } from "flowbite-svelte";
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

	function getBuku() {
	const modules = import.meta.glob(["$buku/*/+page.svelte", "$lib/assets/book-cover/*"]);
	const buku = [];

	for (let path in modules) {
		const pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
		const imgPath = pathSanitized.replace("/buku/", "src/lib/assets/book-cover/").concat(".jpg");
		const isSvelteFile = path.endsWith("+page.svelte");

		if (isSvelteFile) {
			buku.push({
				title: pathSanitized.replace("/buku/", "").replace(/-/g, " "),
				link: pathSanitized,
				img: imgPath
			})
		} 
	}

	return buku;
	}
</script>

<Breadcrumbs bcClass="mb-5"></Breadcrumbs>

<Heading tag="h1" class="mb-5">Daftar Buku</Heading>
<div class="grid grid-rows-2 gap-3">
	{#each getBuku() as buku}
		<div>
			<Card horizontal size="full" href={buku.link} img={buku.img}>
				<Heading tag="h2" class="capitalize">{buku.title}</Heading>
			</Card>
		</div>
	{/each}
</div>