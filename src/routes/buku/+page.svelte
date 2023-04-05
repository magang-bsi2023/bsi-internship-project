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

<Heading tag="h1" customSize="text-3xl" color="text-bsigreen" class="mb-5 font-bold">Daftar Buku</Heading>
<!-- Small Screen -->
<div class="flex flex-col flex-wrap md:flex-row md:justify-evenly gap-5 md:gap-y-10">
	{#each getBuku() as buku}
		<a href={buku.link} class="flex gap-3 md:inline md:w-fit [&>div]:hover:bg-gray-100 [&>div]:dark:hover:bg-gray-700">
			<div class="relative h-auto w-32 md:h-[30rem] md:w-fit md:mx-auto overflow-hidden rounded-lg shadow-xl">
				<!-- <div class="blur-sm h-full w-full absolute bg-center bg-no-repeat -z-10" style="background-image: url({buku.img});"></div> -->
				<img class="h-full mx-auto" src={buku.img} alt="{buku.title} cover">
			</div>
			<div class="grow flex items-center md:items-start md:mt-3 py-2 px-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
				<div class="md:mx-auto md:[&>*]:text-center">
					<Heading tag="h2" customSize="text-2xl md:text-xl" class="capitalize">{buku.title}</Heading>
					<P color="text-gray-400">This is book description</P>
				</div>
			</div>
		</a>
	{/each}
</div>