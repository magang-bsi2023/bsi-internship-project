<script>
	import { Heading, Input, P } from "flowbite-svelte";
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
	import { writable } from 'svelte/store'
	// import { createSearchStore } from '$lib/stores/search'
	import { searchHandler } from '$lib/stores/search.js';
	import { getBuku } from '$lib/utils/getBook.js';
	import { onDestroy } from 'svelte';
	import { page } from "$app/stores";

	let searchQuery = $page.url.searchParams.get("q")

	export const createSearchStore = (data) => {
		const { subscribe, set, update } = writable({
			data: data,
			filtered: data,
			search: searchQuery || "",
		})

		return {
			subscribe,
			set,
			update,
		}
	}

	// Search filter function from this tutorial https://youtu.be/lrzHaTcpRh8
	const searchBuku = getBuku().map((buku) => ({
		...buku,
		searchTerms: `${buku.title}`
	}));
	const searchStore = createSearchStore(searchBuku);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
	onDestroy(() => {
		unsubscribe();
	});
</script>

<Breadcrumbs bcClass="mb-5"></Breadcrumbs>

<div class="flex justify-between mb-5">
	<Heading class="font-bold w-fit whitespace-nowrap mr-5" tag="h1" customSize="text-3xl" color="text-bsigreen">Daftar Buku</Heading>
	<div class="flex w-1/2 flex-row items-center px-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus-within:border-bsiyellow focus-within:dark:border-bsiyellow rounded-full">
		<svg class="w-7 h-7 stroke-bsiyellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
		<input class="-ml-2 w-full border-0 focus:ring-0 bg-transparent dark:text-white" 
		type="search" placeholder="Cari buku..." bind:value={$searchStore.search}>
	</div>
</div>

<div class="flex flex-col flex-wrap md:flex-row md:justify-evenly gap-5 md:gap-y-10">
	{#if $searchStore.filtered.length}
		{#each $searchStore.filtered as buku}
			<a href={buku.link} class="flex gap-3 md:inline md:w-fit [&>div]:hover:bg-gray-100 [&>div]:dark:hover:bg-gray-700">
				<div class="relative h-auto w-32 md:h-[30rem] md:w-fit md:mx-auto overflow-hidden rounded-lg shadow-xl">
					<img class="h-full mx-auto" src={buku.img} alt="{buku.title} cover">
				</div>
				<div class="grow flex items-center md:items-start md:mt-3 py-2 px-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
					<div class="md:mx-auto md:[&>*]:text-center">
						<Heading tag="h2" customSize="text-2xl md:text-xl" class="capitalize">{buku.title}</Heading>
					</div>
				</div>
			</a>
		{/each}
	{:else}
		<P class="mt-5 mx-auto">Tidak ada buku dengan judul "{$searchStore.search}"</P>
	{/if}
</div>